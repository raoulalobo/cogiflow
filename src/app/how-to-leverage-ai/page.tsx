'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight, 
  Brain, 
  Clock, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  CheckCircle,
  Target,
  Lightbulb,
  Workflow,
  ArrowLeft,
  Zap,
  Shield,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HowToLeverageAIPage() {
  const aiBenefits = [
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'AI can process information and complete tasks 24/7, dramatically reducing time-to-completion for routine operations.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Provide personalized service at scale with AI chatbots, recommendation engines, and predictive support.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors by leveraging AI for innovation, efficiency, and strategic decision-making.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ]

  const aiUseCases = [
    {
      category: 'Customer Service',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      examples: [
        'Intelligent chatbots for 24/7 support',
        'Automated ticket classification and routing',
        'Sentiment analysis for customer feedback',
        'Predictive support issue identification'
      ]
    },
    {
      category: 'Marketing & Sales',
      icon: Target,
      color: 'from-green-500 to-green-600',
      examples: [
        'Personalized product recommendations',
        'Dynamic pricing optimization',
        'Lead scoring and qualification',
        'Content generation and optimization'
      ]
    },
    {
      category: 'Operations',
      icon: Settings,
      color: 'from-purple-500 to-purple-600',
      examples: [
        'Inventory management and forecasting',
        'Quality control and defect detection',
        'Supply chain optimization',
        'Predictive maintenance scheduling'
      ]
    },
    {
      category: 'Data Analytics',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600',
      examples: [
        'Advanced business intelligence',
        'Market trend prediction',
        'Risk assessment and mitigation',
        'Performance optimization insights'
      ]
    }
  ]

  const implementationSteps = [
    {
      step: 1,
      title: 'Assess Your Needs',
      description: 'Identify processes that can benefit from AI automation and define clear objectives.',
      icon: Target
    },
    {
      step: 2,
      title: 'Choose the Right Tools',
      description: 'Select AI platforms and tools that align with your business requirements and technical capabilities.',
      icon: Settings
    },
    {
      step: 3,
      title: 'Start Small',
      description: 'Begin with pilot projects to test AI solutions before scaling to larger implementations.',
      icon: Lightbulb
    },
    {
      step: 4,
      title: 'Scale and Optimize',
      description: 'Gradually expand AI integration while continuously monitoring and optimizing performance.',
      icon: TrendingUp
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2">
              <Brain className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">AI Integration Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              How to Leverage{' '}
              <span className="gradient-text">AI for Your Business</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover practical strategies to integrate AI into your business operations, 
              boost productivity, and gain a competitive edge in today's digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Start AI Integration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Brain className="mr-2 h-5 w-5" />
                AI Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Why AI is Essential for Modern Business
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              AI isn't just a buzzword - it's a powerful tool that can transform how your business operates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card 
                  key={benefit.title}
                  className={`${benefit.borderColor} border-2 hover:shadow-xl transition-all duration-300 group hover:scale-105`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              AI Applications Across Business Functions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore how different departments can benefit from AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiUseCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <Card key={useCase.category} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${useCase.color}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">
                          {useCase.category}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {useCase.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Your AI Implementation Roadmap
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Follow these steps to successfully integrate AI into your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 mx-auto bg-primary-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Popular AI Tools & Platforms
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We integrate with leading AI platforms to build custom solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'OpenAI GPT', description: 'Natural language processing' },
              { name: 'Google Cloud AI', description: 'Machine learning services' },
              { name: 'Microsoft Azure AI', description: 'Enterprise AI solutions' },
              { name: 'Amazon AWS AI', description: 'Scalable AI infrastructure' },
              { name: 'IBM Watson', description: 'Business AI applications' },
              { name: 'TensorFlow', description: 'Open-source ML platform' },
              { name: 'Hugging Face', description: 'AI model repository' },
              { name: 'Custom AI Solutions', description: 'Tailored to your needs' }
            ].map((tool, index) => (
              <div 
                key={tool.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}