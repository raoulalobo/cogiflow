'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight, 
  Zap, 
  Clock, 
  TrendingUp, 
  Users, 
  Mail, 
  Database, 
  Settings, 
  CheckCircle,
  Target,
  BarChart3,
  Workflow,
  Play,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WhatIsAutomationPage() {
  const automationBenefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Eliminate repetitive tasks and focus on high-value activities that drive your business forward.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: TrendingUp,
      title: 'Increase Efficiency',
      description: 'Streamline workflows and processes to achieve more with the same resources.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Target,
      title: 'Reduce Errors',
      description: 'Minimize human errors with consistent, reliable automated processes.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: BarChart3,
      title: 'Scale Operations',
      description: 'Handle increased workload without proportionally increasing costs or staff.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ]

  const automationExamples = [
    {
      title: 'Email Marketing Automation',
      description: 'Automatically send personalized emails based on customer behavior, preferences, and purchase history.',
      icon: Mail,
      workflow: ['Customer signs up', 'Welcome email sent', 'Behavior tracked', 'Targeted emails delivered']
    },
    {
      title: 'Customer Support Automation',
      description: 'Route support tickets to the right team, send auto-responses, and escalate urgent issues.',
      icon: Users,
      workflow: ['Ticket submitted', 'Auto-categorized', 'Assigned to agent', 'Customer updated']
    },
    {
      title: 'Data Synchronization',
      description: 'Keep your CRM, accounting software, and other tools synchronized in real-time.',
      icon: Database,
      workflow: ['Data updated', 'Sync triggered', 'All systems updated', 'Reports generated']
    },
    {
      title: 'Social Media Management',
      description: 'Schedule posts, monitor mentions, and respond to comments across multiple platforms.',
      icon: Settings,
      workflow: ['Content created', 'Posts scheduled', 'Engagement monitored', 'Analytics collected']
    }
  ]

  const platforms = [
    { name: 'Make.com', description: 'Visual automation platform' },
    { name: 'Zapier', description: 'Connect your favorite apps' },
    { name: 'n8n', description: 'Open-source workflow automation' },
    { name: 'Microsoft Power Automate', description: 'Enterprise automation solution' }
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
              <Workflow className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Business Automation Guide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              What is{' '}
              <span className="gradient-text">Business Automation</span>?
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Business automation uses technology to streamline repetitive tasks, reduce human error, 
              and improve efficiency. Learn how automation can transform your business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started with Automation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Automation Simplified
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Business automation is the process of using technology to perform tasks that would 
                otherwise require human intervention. It involves creating workflows that can run 
                automatically, connecting different software applications, and streamlining business processes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From simple email responses to complex data processing, automation helps businesses 
                operate more efficiently while reducing costs and improving accuracy.
              </p>
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-semibold text-primary-900 mb-2">Key Point:</h3>
                <p className="text-primary-800">
                  Automation doesn't replace humans - it frees them up to focus on creative, 
                  strategic, and relationship-building activities that truly matter.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="inline-flex p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  The Power of Automation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-left">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800">24/7 operation without breaks</span>
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800">Consistent results every time</span>
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800">Instant response to triggers</span>
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800">Scalable to any business size</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Why Your Business Needs Automation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the transformative benefits that automation brings to businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationBenefits.map((benefit, index) => {
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

      {/* Examples Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Real-World Automation Examples
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how automation works in practice with these common business scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automationExamples.map((example, index) => {
              const IconComponent = example.icon
              return (
                <Card key={example.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {example.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-1">
                          {example.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Workflow Steps:</h4>
                      {example.workflow.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                          {stepIndex < example.workflow.length - 1 && (
                            <ArrowRight className="h-4 w-4 text-gray-400 ml-auto" />
                          )}
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

      {/* Platforms Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Popular Automation Platforms
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We work with all major automation platforms to build the perfect solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600">
                  {platform.description}
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