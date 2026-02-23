import { useState } from 'react'
import { cn } from '@/lib/utils'

export const CategoryList = ({ title, subtitle, categories, headerIcon, className }) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className={cn('w-full bg-cream text-charcoal p-8', className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-clay mb-6 text-cream">
              {headerIcon}
            </div>
          )}
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-2 tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-heading font-bold text-4xl md:text-5xl text-charcoal/40 leading-tight">
              {subtitle}
            </p>
          )}
        </div>

        {/* List */}
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  'relative overflow-hidden border transition-all duration-300 ease-in-out cursor-pointer rounded-xl',
                  hoveredItem === category.id
                    ? 'h-28 border-clay shadow-lg shadow-clay/10 bg-clay/5'
                    : 'h-20 border-moss/15 bg-white hover:border-clay/40'
                )}
              >
                {/* Corner brackets on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-clay" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-clay" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-clay" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-clay" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-full px-6 md:px-8">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        'font-heading font-bold transition-colors duration-300',
                        category.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
                        hoveredItem === category.id ? 'text-clay' : 'text-charcoal'
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          'mt-1 font-body text-sm transition-colors duration-300',
                          hoveredItem === category.id ? 'text-charcoal/80' : 'text-charcoal/50'
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon — rechts bij hover */}
                  {category.icon && (
                    <div
                      className={cn(
                        'text-clay transition-opacity duration-300 flex-shrink-0 ml-4',
                        hoveredItem === category.id ? 'opacity-100' : 'opacity-0'
                      )}
                    >
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
