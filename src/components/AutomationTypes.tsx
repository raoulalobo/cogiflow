'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  ShoppingCart, 
  Workflow, 
  Share2, 
  DollarSign,
  Settings,
  Target,
  Mail,
  Database,
  FileText,
  BarChart3,
  Shield,
  Code,
  CheckCircle,
  ArrowRight,
  Heart,
  Calendar,
  MessageSquare,
  Package
} from 'lucide-react'

export default function AutomationTypes() {
  const automationTypes = [
    {
      category: 'Marketing & Sales',
      icon: Target,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      description: 'Streamline your sales funnel and marketing operations with intelligent automation workflows.',
      automations: [
        {
          name: 'Automated Lead Nurturing',
          description: 'Multi-touch email sequences that adapt based on prospect behavior and engagement',
          icon: Mail
        },
        {
          name: 'CRM Synchronization',
          description: 'Seamless data sync between HubSpot, Salesforce, and your marketing tools',
          icon: Database
        },
        {
          name: 'Sequential Email Campaigns',
          description: 'Behavior-triggered email series with dynamic content personalization',
          icon: TrendingUp
        },
        {
          name: 'Automatic Lead Scoring',
          description: 'AI-powered prospect qualification based on engagement and company data',
          icon: BarChart3
        }
      ]
    },
    {
      category: 'E-commerce',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Optimize your online store operations from order processing to inventory management.',
      automations: [
        {
          name: 'Order Processing',
          description: 'End-to-end order fulfillment automation from payment to shipping notifications',
          icon: ShoppingCart
        },
        {
          name: 'Automated Inventory Management',
          description: 'Real-time stock tracking with automatic reorder alerts and supplier notifications',
          icon: Settings
        },
        {
          name: 'Transactional Emails',
          description: 'Order confirmations, shipping updates, and delivery notifications with tracking',
          icon: Mail
        },
        {
          name: 'Abandoned Cart Recovery',
          description: 'Multi-step recovery sequences with personalized offers and reminders',
          icon: Target
        }
      ]
    },
    {
      category: 'Productivity',
      icon: Workflow,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Eliminate repetitive tasks and connect your business tools for seamless operations.',
      automations: [
        {
          name: 'Data Synchronization',
          description: 'Real-time data sync between CRM, project management, and communication tools',
          icon: Database
        },
        {
          name: 'Automated Reports',
          description: 'Scheduled reports delivered to Google Sheets, Slack, or email with custom formatting',
          icon: FileText
        },
        {
          name: 'Support Ticket Management',
          description: 'Intelligent ticket routing, status updates, and escalation workflows',
          icon: Settings
        },
        {
          name: 'Backup & Archiving',
          description: 'Automated data backup, file organization, and cloud storage management',
          icon: Shield
        }
      ]
    },
    {
      category: 'Social Media',
      icon: Share2,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      description: 'Manage your social media presence with smart automation across all platforms.',
      automations: [
        {
          name: 'Multi-platform Publishing',
          description: 'Schedule and publish content across Facebook, Twitter, LinkedIn, Instagram',
          icon: Share2
        },
        {
          name: 'Mention & Hashtag Monitoring',
          description: 'Real-time brand monitoring with sentiment analysis and response alerts',
          icon: Target
        },
        {
          name: 'Automated Content Curation',
          description: 'AI-powered content discovery and sharing based on your industry and audience',
          icon: TrendingUp
        },
        {
          name: 'Consolidated Analytics',
          description: 'Unified social media reporting with cross-platform performance metrics',
          icon: BarChart3
        }
      ]
    },
    {
      category: 'Finance',
      icon: DollarSign,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      description: 'Automate your financial processes for better accuracy and compliance.',
      automations: [
        {
          name: 'Bank Reconciliation',
          description: 'Automatic transaction matching and discrepancy identification across accounts',
          icon: DollarSign
        },
        {
          name: 'Automated Invoicing',
          description: 'Generate, send, and track invoices with payment reminders and follow-ups',
          icon: FileText
        },
        {
          name: 'Financial Reporting',
          description: 'Automated P&L, cash flow, and budget reports with real-time data updates',
          icon: BarChart3
        },
        {
          name: 'Treasury Alerts',
          description: 'Cash flow monitoring with automatic alerts for low balances and payments',
          icon: TrendingUp
        }
      ]
    },
    {
      category: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: 'Streamline medical processes for better efficiency and optimal patient care management.',
      automations: [
        {
          name: 'Patient Appointment Reminders',
          description: 'Automated reminders via Calendly with personalized SMS and email notifications',
          icon: Calendar
        },
        {
          name: 'Automated Post-Consultation Follow-up',
          description: 'Automatic follow-up questionnaire delivery and patient feedback collection',
          icon: MessageSquare
        },
        {
          name: 'Pharmacy & Clinic Inventory Management',
          description: 'Automated stock tracking with reorder alerts and supplier order management',
          icon: Package
        },
        {
          name: 'Secure Patient Record Synchronization',
          description: 'GDPR-compliant secure integration between medical software systems',
          icon: Shield
        }
      ]
    }
  ]

  const technicalFeatures = [
    {
      title: 'Complete Workflow Creation',
      description: 'We design end-to-end workflows with detailed JSON structure ready for immediate import',
      icon: Code,
      color: 'text-blue-600'
    },
    {
      title: 'Logic Documentation',
      description: 'Every workflow comes with comprehensive documentation explaining the business logic',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      title: 'Configuration Guidance',
      description: 'Step-by-step guidance for configuring each node and connection in your automation',
      icon: Settings,
      color: 'text-purple-600'
    },
    {
      title: 'Error Handling',
      description: 'Built-in error management with fallback procedures and notification systems',
      icon: Shield,
      color: 'text-red-600'
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
            <Workflow className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Automation Specializations</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-gray-900">Complete Workflows for Every{' '}</span>
            <span className="gradient-text">Business Function</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We design comprehensive automation workflows with JSON structure, detailed logic explanation, 
            and complete configuration guidance. Ready-to-implement solutions for your specific business needs.
          </p>
        </div>

        {/* Automation Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {automationTypes.map((type, index) => {
            const CategoryIcon = type.icon
            return (
              <Card 
                key={type.category}
                className={`${type.borderColor} border-2 hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${type.color}`}>
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {type.category}
                      </CardTitle>
                      <CardDescription className="text-gray-700 text-base mt-1">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {type.automations.map((automation, autoIndex) => {
                      const AutoIcon = automation.icon
                      return (
                        <div 
                          key={automation.name}
                          className={`p-4 rounded-lg ${type.bgColor} border ${type.borderColor} group/item hover:shadow-md transition-all duration-200`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${type.color}`}>
                              <AutoIcon className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{automation.name}</h4>
                              <p className="text-sm text-gray-700 leading-relaxed">{automation.description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Technical Approach Section */}
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
              Our Technical Approach
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We deliver complete workflow solutions with everything you need for immediate implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <div 
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gray-50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <FeatureIcon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 border border-primary-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                Complete Workflow Package
              </h3>
              <div className="space-y-4">
                {[
                  'Ready-to-import JSON structure',
                  'Detailed node configuration guide',
                  'Business logic documentation',
                  'Error handling procedures',
                  'Testing protocols',
                  'Maintenance instructions'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="inline-flex p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Production-Ready Workflows
                </h4>
                <p className="text-gray-700 mb-6">
                  Every automation we deliver is tested, documented, and ready for immediate deployment in your business environment.
                </p>
                <Button size="lg" className="w-full">
                  Get Your Custom Workflow
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}