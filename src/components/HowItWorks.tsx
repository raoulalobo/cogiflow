import { Card, CardContent } from '@/components/ui/card'
import { 
  Plug, 
  Play, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Settings,
  BarChart3,
  MessageCircle
} from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'We listen to your challenges and understand exactly what you need automated.',
      details: [
        'No-pressure discussion',
        'Process discovery session',
        'Custom solution design',
        'Clear pricing proposal'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      borderColor: 'border-primary-200'
    },
    {
      number: '02',
      icon: Settings,
      title: 'Build & Develop',
      description: 'We create your custom automation while you pay nothing upfront.',
      details: [
        'Bespoke n8n workflow creation',
        'Custom AI agent development',
        'Integration with your tools',
        'Thorough testing process'
      ],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100',
      borderColor: 'border-secondary-200'
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Test & Approve',
      description: 'You test everything thoroughly. Pay only when you\'re completely satisfied.',
      details: [
        'Full testing access',
        'Real environment testing',
        'Unlimited revisions',
        'Pay only after approval'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
            <Play className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our{' '}
            <span className="gradient-text">Test-Before-Pay</span>{' '}
            Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in earning your trust. That's why you only pay after testing 
            and approving your custom automation solution.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-purple-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.number} className="relative">
                  <Card className={`border-2 ${step.borderColor} hover:shadow-xl transition-all duration-300 group hover:scale-105`}>
                    <CardContent className="p-8 text-center space-y-6">
                      {/* Step number and icon */}
                      <div className="flex flex-col items-center space-y-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-bold`}>
                          {step.number}
                        </div>
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.bgColor} border ${step.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-gray-700" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>

                      {/* Feature list */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-3 text-sm">
                            <CheckCircle className={`h-4 w-4 text-green-500 flex-shrink-0`} />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  )}

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-sm">
                        <ArrowRight className="h-4 w-4 text-gray-400 transform rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits showcase */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Our Test-Before-Pay Model Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-lg font-semibold text-gray-900">Zero Risk</div>
              <div className="text-gray-600">No upfront payment means no financial risk for you</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg font-semibold text-gray-900">Perfect Fit</div>
              <div className="text-gray-600">Test everything to ensure it works exactly as needed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg font-semibold text-gray-900">Fair Pricing</div>
              <div className="text-gray-600">Affordable rates because we want long-term relationships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}