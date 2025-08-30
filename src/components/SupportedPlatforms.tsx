'use client'

import { Zap, Settings, Layers, Workflow, Bot, Network } from 'lucide-react'

export default function SupportedPlatforms() {
  const platforms = [
    {
      name: 'Make.com',
      description: 'Powerful visual automation platform with extensive integrations and enterprise-grade reliability',
      icon: Workflow,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: ['Intuitive visual interface', '1000+ native integrations', 'Advanced error handling']
    },
    {
      name: 'n8n',
      description: 'Open-source flexible platform with complete control over your automation infrastructure',
      icon: Network,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      features: ['Open source & self-hosted', 'Complex conditional logic', 'Unlimited customization']
    },
    {
      name: 'Zapier',
      description: 'Market-leading solution for easily connecting your favorite applications and services',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: ['5000+ applications', 'Simple configuration', 'Proven reliability']
    },
    {
      name: 'Microsoft Power Automate',
      description: 'Perfect integration with Microsoft ecosystem and enterprise-grade business solutions',
      icon: Settings,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: ['Office 365 integration', 'Enterprise security', 'Advanced governance']
    },
    {
      name: 'Custom Solutions',
      description: 'Tailored APIs, webhooks, and specialized development according to your unique requirements',
      icon: Bot,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: ['Bespoke development', 'Custom APIs', 'Unique integrations']
    },
    {
      name: 'Hybrid Solutions',
      description: 'Combination of multiple platforms for complex workflows and optimized performance',
      icon: Layers,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      features: ['Multi-platform approach', 'Complex workflows', 'Performance optimization']
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-6">
            <Network className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Supported Platforms</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            We Master Every{' '}
            <span className="gradient-text">Automation Platform</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            No limitations to a single platform. We select and use the best tools 
            according to your specific needs to create the most effective automation.
          </p>
        </div>

        {/* Platforms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <div 
                key={platform.name}
                className={`${platform.bgColor} ${platform.borderColor} border rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group relative overflow-hidden`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl mb-4 relative z-10`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                {/* Platform name */}
                <h3 className="text-xl font-bold mb-3 relative z-10 text-gray-900">{platform.name}</h3>
                
                {/* Description */}
                <p className="text-gray-700 mb-4 relative z-10 leading-relaxed">{platform.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-800">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${platform.color} rounded-full`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Which Platform Should You Choose?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Each platform has its strengths. We analyze your needs, existing systems, 
              and budget to recommend the optimal solution. Often, the best approach 
              combines multiple platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Free needs analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style={{animationDelay: '500ms'}}></div>
                <span className="font-medium">Personalized recommendation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1000ms'}}></div>
                <span className="font-medium">Multi-platform expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}