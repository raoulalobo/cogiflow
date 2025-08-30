'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
  Settings,
  CheckCircle,
  Info
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect, how we use it, and who we share it with.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      title: 'User Control',
      description: 'You have full control over your data with options to access, update, or delete it.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lock,
      title: 'Minimal Collection',
      description: 'We only collect the data necessary to provide and improve our services.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const dataTypes = [
    {
      category: 'Personal Information',
      items: [
        'Name and contact information',
        'Email address and phone number',
        'Company name and role',
        'Billing and payment information'
      ]
    },
    {
      category: 'Usage Data',
      items: [
        'Pages visited and features used',
        'Time spent on our platform',
        'Click patterns and preferences',
        'Device and browser information'
      ]
    },
    {
      category: 'Technical Data',
      items: [
        'IP address and location data',
        'Cookies and similar technologies',
        'Log files and error reports',
        'API usage and performance metrics'
      ]
    }
  ]

  const yourRights = [
    {
      right: 'Access',
      description: 'Request a copy of the personal data we hold about you'
    },
    {
      right: 'Rectification',
      description: 'Ask us to correct or update your personal information'
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data (right to be forgotten)'
    },
    {
      right: 'Portability',
      description: 'Receive your data in a structured, commonly used format'
    },
    {
      right: 'Restriction',
      description: 'Ask us to limit how we process your personal data'
    },
    {
      right: 'Objection',
      description: 'Object to processing of your data for specific purposes'
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
              <Shield className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Privacy & Security</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Privacy{' '}
              <span className="gradient-text">Policy</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect 
              your personal information when you use our automation services.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  <strong>Last updated:</strong> January 15, 2024 | <strong>Effective date:</strong> January 15, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We built our privacy practices on these core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={principle.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${principle.color} mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We collect only the information necessary to provide you with the best automation services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataTypes.map((dataType, index) => (
              <Card key={dataType.category} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {dataType.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dataType.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              How We Use Your Information
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use your information to provide, maintain, and improve our automation services. This includes 
                  creating and managing your workflows, processing payments, and providing customer support.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Communication</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may use your contact information to send you service-related notifications, updates about 
                  new features, and important account information. You can opt out of marketing communications at any time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Improvement</h3>
                <p className="text-gray-700 leading-relaxed">
                  We analyze usage patterns and feedback to improve our services, develop new features, 
                  and enhance user experience. This data is always aggregated and anonymized.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Legal Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may process your data to comply with legal obligations, enforce our terms of service, 
                  and protect the rights and safety of our users and the public.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              You have several rights regarding your personal data. Here's what you can do:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yourRights.map((right, index) => (
              <Card key={right.right} className="bg-white hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Right to {right.right}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {right.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Exercise Your Rights
              </h3>
              <p className="text-gray-700 mb-6">
                To exercise any of these rights, please contact our privacy team. We'll respond within 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Privacy Team
                </Button>
                <Button variant="outline" size="lg">
                  <Settings className="mr-2 h-5 w-5" />
                  Privacy Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Data Security & Retention
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Security Measures</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">End-to-end encryption for data in transit</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AES-256 encryption for data at rest</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regular security audits and penetration testing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">SOC 2 Type II compliance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Multi-factor authentication</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Data Retention</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We retain your personal data only as long as necessary to provide our services and comply with legal obligations.
                </p>
                <p>
                  <strong>Account data:</strong> Retained while your account is active and for 90 days after deletion.
                </p>
                <p>
                  <strong>Usage data:</strong> Anonymized and aggregated after 12 months for analytics purposes.
                </p>
                <p>
                  <strong>Support data:</strong> Retained for 3 years to improve our services and for legal compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About This Policy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about this Privacy Policy or how we handle your data, 
            we're here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary-400" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">privacy@flowtech.com</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Globe className="h-8 w-8 mx-auto mb-4 text-primary-400" />
              <h3 className="font-semibold mb-2">Data Protection Officer</h3>
              <p className="text-gray-400">dpo@flowtech.com</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Shield className="h-8 w-8 mx-auto mb-4 text-primary-400" />
              <h3 className="font-semibold mb-2">Security Team</h3>
              <p className="text-gray-400">security@flowtech.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}