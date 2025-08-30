'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Lightbulb, 
  Target, 
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react'

export default function Opportunities() {
  const opportunities = [
    {
      icon: Target,
      title: 'Template Confusion',
      description: 'Thousands of templates exist online, but none fit your exact business processes',
      examples: [
        'Generic workflows that need modification',
        'Missing your specific integrations',
        'Doesn\'t match your data structure',
        'Requires constant tweaking'
      ],
      impact: 'Hours wasted trying to adapt templates that almost work'
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs',
      description: 'Free templates often cost more in customization time than custom solutions',
      examples: [
        'Development time to modify templates',
        'Debugging generic code',
        'Integration compatibility issues',
        'Ongoing maintenance problems'
      ],
      impact: 'What seems free becomes expensive quickly'
    },
    {
      icon: CheckCircle,
      title: 'Our Solution',
      description: 'Skip the template maze. Get automation built specifically for your needs',
      examples: [
        'Designed for your exact processes',
        'Built with your integrations in mind',
        'Matches your data flows perfectly',
        'No generic code to debug'
      ],
      impact: 'Faster implementation, better results, lower total cost'
    }
  ]

  const useCases = [
    {
      category: 'Sales & Marketing',
      automations: [
        'Lead qualification and routing',
        'Follow-up email sequences',
        'CRM data synchronization',
        'Social media posting'
      ]
    },
    {
      category: 'Customer Service',
      automations: [
        'Ticket classification and routing',
        'Response time tracking',
        'Knowledge base updates',
        'Satisfaction surveys'
      ]
    },
    {
      category: 'Finance & Operations',
      automations: [
        'Invoice processing',
        'Expense reporting',
        'Inventory management',
        'Compliance monitoring'
      ]
    },
    {
      category: 'Human Resources',
      automations: [
        'Employee onboarding',
        'Time tracking',
        'Performance reviews',
        'Document management'
      ]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2">
            <Lightbulb className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Your Opportunities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why Templates{' '}
            <span className="gradient-text">Fail You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The internet is flooded with thousands of generic templates. We solve the real problem: 
            getting automation that actually fits your unique business processes.
          </p>
        </div>

        {/* Opportunities grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon
            return (
              <Card key={opportunity.title} className="border-2 border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Common Applications:</div>
                    {opportunity.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
                    <div className="text-sm font-semibold text-primary-700 mb-1">Impact:</div>
                    <div className="text-sm text-gray-700">{opportunity.impact}</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Custom approach section */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stop Wasting Time on Templates That Don't Fit
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every business is unique. Your automation should be too. We build exactly what you need, 
              not what someone else thinks you might want.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <Target className="h-5 w-5 text-red-500" />
                <span>Template Problems</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <span>Generic solutions for everyone</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <span>Missing your specific integrations</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <span>Requires constant modifications</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <span>No support when it breaks</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Our Custom Approach</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span>Built specifically for YOUR business</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span>Works with YOUR existing tools</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span>No modifications needed</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span>Ongoing support included</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="px-8">
              Get Your Custom Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}