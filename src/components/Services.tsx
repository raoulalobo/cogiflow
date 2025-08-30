import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Workflow, 
  Video, 
  TrendingUp, 
  MessageCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Cpu,
  Target
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: MessageCircle,
      title: 'Personal Consultation',
      description: 'One-on-one sessions to understand your unique business challenges and automation needs.',
      features: [
        'Free initial assessment',
        'Process deep-dive analysis',
        'Custom solution design',
        'Clear roadmap creation'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      borderColor: 'border-primary-200',
      image: '/images/automation-dashboard.jpg'
    },
    {
      icon: Workflow,
      title: 'Custom Automation Development',
      description: 'Custom workflows created with Make.com, n8n, Zapier or other platforms according to your specific needs.',
      features: [
        'Optimal platform selection',
        'No generic templates',
        'Custom integrations',
        'Scalable architecture'
      ],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100',
      borderColor: 'border-secondary-200',
      image: '/images/video-creation.jpg'
    },
    {
      icon: Target,
      title: 'Platform Selection & Strategy',
      description: 'Expert analysis to choose the best platform: Make.com, n8n, Zapier, or hybrid solution.',
      features: [
        'Existing systems audit',
        'Cost-benefit analysis',
        'Personalized recommendation',
        'Migration roadmap'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-200',
      image: '/images/platform-selection.jpg'
    },
    {
      icon: Cpu,
      title: 'Custom AI Agents',
      description: 'Intelligent assistants designed specifically for your industry and business requirements.',
      features: [
        'Industry-specific training',
        'Your data integration',
        'Custom decision logic',
        'Personalized responses'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      image: '/images/financial-dashboard.jpg'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Support & Guidance',
      description: 'Continuous support to ensure your automations evolve with your growing business needs.',
      features: [
        'Regular check-ins',
        'Performance optimization',
        'Feature enhancements',
        'Priority support access'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      image: '/images/chatbot-interface.jpg'
    }
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2">
            <Zap className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Tired of Templates That{' '}
            <span className="gradient-text">Don't Work</span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Skip the confusion of generic templates. Get custom automations built specifically 
            for your business, your processes, your success.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={service.title}
                className={`group hover:shadow-xl transition-all duration-300 border-2 ${service.borderColor} hover:scale-[1.02]`}
              >
                <CardHeader className="space-y-4">
                  {/* Service icon and mock image */}
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color}`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Mock service preview */}
                    <div className={`w-24 h-16 rounded-lg bg-gradient-to-br ${service.bgColor} border ${service.borderColor} flex items-center justify-center`}>
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-sm bg-gradient-to-br ${service.color} opacity-60`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-sm text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className={`w-full group/btn border-2 ${service.borderColor} hover:bg-gradient-to-r hover:${service.color} hover:text-white hover:border-transparent transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Something Built Just for You?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Stop wasting time with templates that almost fit. Let's create automation 
              that works exactly how YOUR business operates.
            </p>
            <Button size="lg" className="px-8">
              Contact Our Experts
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}