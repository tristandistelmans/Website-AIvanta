import DemoHubNavbar from '../components/demo-hub/DemoHubNavbar'
import DemoHubHero from '../components/demo-hub/DemoHubHero'
import HetProbleem from '../components/demo-hub/HetProbleem'
import HetMechanisme from '../components/demo-hub/HetMechanisme'
import VoorJouwStiel from '../components/demo-hub/VoorJouwStiel'
import SimpeleSetup from '../components/demo-hub/SimpeleSetup'
import ROICalculator from '../components/demo-hub/ROICalculator'
import Testimonials from '../components/demo-hub/Testimonials'
import DemoHubCTA from '../components/demo-hub/DemoHubCTA'

export default function DemoHubPage() {
  return (
    <div className="min-h-screen bg-cream">
      <DemoHubNavbar />
      <DemoHubHero />
      <HetProbleem />
      <HetMechanisme />
      <VoorJouwStiel />
      <SimpeleSetup />
      <ROICalculator />
      <Testimonials />
      <DemoHubCTA />

      {/* Minimale footer */}
      <footer className="bg-charcoal px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="/" className="font-heading font-bold text-cream text-sm">
              <span className="text-clay">Ai</span><span className="text-cream">nova</span>
            </a>
            <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <a href="/" className="font-body text-cream/40 hover:text-cream/80 text-xs transition-colors">
                Terug naar hoofdsite
              </a>
              <a href="mailto:tristan@ainova.be" className="font-body text-cream/40 hover:text-cream/80 text-xs transition-colors">
                tristan@ainova.be
              </a>
              <a href="tel:+32474507478" className="font-body text-cream/40 hover:text-cream/80 text-xs transition-colors">
                0474 50 74 78
              </a>
            </nav>
            <span className="font-body text-cream/20 text-xs">
              © {new Date().getFullYear()} Ainova
            </span>
          </div>
          <p className="border-t border-cream/10 pt-4 font-body text-cream/40 text-xs text-center md:text-left leading-relaxed">
            Ainova — Prinsenstraat 47, 3500 Hasselt
            <span className="mx-2 text-cream/20">·</span>
            Ondernemingsnummer BE 1009.167.610
          </p>
        </div>
      </footer>
    </div>
  )
}
