import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      // Dev-only: proxy /api/chat to Anthropic API
      {
        name: 'api-chat-proxy',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type' })
              return res.end()
            }
            if (req.method !== 'POST') {
              res.writeHead(405)
              return res.end('Method not allowed')
            }

            const apiKey = env.ANTHROPIC_API_KEY
            if (!apiKey) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              return res.end(JSON.stringify({ error: 'Set ANTHROPIC_API_KEY in .env to enable the chatbot' }))
            }

            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', async () => {
              try {
                const { messages } = JSON.parse(body)
                const fs = await import('fs')
                const SYSTEM_PROMPT = fs.readFileSync(new URL('./api/prompt.txt', import.meta.url), 'utf-8')
                const response = await fetch('https://api.anthropic.com/v1/messages', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01',
                  },
                  body: JSON.stringify({
                    model: 'claude-haiku-4-5-20251001',
                    max_tokens: 768,
                    system: SYSTEM_PROMPT,
                    messages,
                  }),
                })
                const data = await response.json()
                if (data.content && data.content[0]) {
                  res.writeHead(200, { 'Content-Type': 'application/json' })
                  res.end(JSON.stringify({ reply: data.content[0].text }))
                } else {
                  res.writeHead(500, { 'Content-Type': 'application/json' })
                  res.end(JSON.stringify({ error: JSON.stringify(data) }))
                }
              } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err.message }))
              }
            })
          })
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
