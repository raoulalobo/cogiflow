'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft,
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Mail,
  Phone,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  const keyTerms = [
    {
      icon: FileText,
      title: 'Service Agreement',
      description: 'These terms constitute a binding agreement between you and FlowTech for the use of our automation services.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'User Responsibilities',
      description: 'You are responsible for maintaining the security of your account and compliance with applicable laws.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Scale,
      title: 'Fair Use Policy',
      description: 'Our services must be used reasonably and in accordance with our acceptable use guidelines.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      description: 'Our liability is limited as outlined in these terms to protect both parties in our business relationship.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const serviceTerms = [
    {
      category: 'Account Terms',
      items: [
        'You must be 18 years or older to use our services',
        'You are responsible for maintaining the confidentiality of your account',
        'You must provide accurate and complete information',
        'One person or legal entity may maintain only one account'
      ]
    },
    {
      category: 'Service Usage',
      items: [
        'Services are provided on a subscription basis',
        'You may not resell or redistribute our services',
        'Reasonable usage limits apply to prevent system abuse',
        'We reserve the right to modify features with notice'
      ]
    },
    {
      category: 'Payment Terms',
      items: [
        'Subscription fees are billed in advance',
        'All fees are non-refundable except as required by law',
        'Price changes require 30 days advance notice',
        'Failed payments may result in service suspension'
      ]
    }
  ]

  const prohibitedActivities = [
    'Using the service for any unlawful purpose or activity',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with or disrupting the service or servers',
    'Transmitting viruses, malware, or other harmful code',
    'Violating intellectual property rights of others',
    'Harassing, abusing, or harming other users',
    'Creating fake accounts or impersonating others',
    'Scraping or automated data collection without permission'
  ]

  const terminationReasons = [
    {
      reason: 'Violation of Terms',
      description: 'Breach of these terms or our acceptable use policy'
    },
    {
      reason: 'Non-Payment',
      description: 'Failure to pay subscription fees when due'
    },
    {
      reason: 'Inactive Account',
      description: 'No activity for more than 12 consecutive months'
    },
    {
      reason: 'Business Decision',
      description: 'We may discontinue services with 30 days notice'
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
              <FileText className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Legal Terms</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Terms of{' '}
              <span className="gradient-text">Service</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of FlowTech's automation services. Please read them carefully 
              as they contain important information about your rights and obligations.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  <strong>Last updated:</strong> January 15, 2024 | <strong>Effective date:</strong> January 15, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Key Terms Overview
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding the most important aspects of our service agreement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTerms.map((term, index) => {
              const IconComponent = term.icon
              return (
                <Card key={term.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${term.color} mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {term.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {term.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Terms */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Service Terms & Conditions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Detailed terms governing your use of our automation services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTerms.map((termGroup, index) => (
              <Card key={termGroup.category} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {termGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {termGroup.items.map((item, itemIndex) => (
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

      {/* Detailed Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    By accessing and using FlowTech's services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not 
                    use this service.
                  </p>
                  <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether 
                    personally or on behalf of an entity ("you") and FlowTech ("Company", "we", "us", or "our"), 
                    concerning your access to and use of our automation services.
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Service Description</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    FlowTech provides business automation services including but not limited to workflow creation, 
                    data integration, process automation, and AI-powered solutions. Our services are designed to 
                    help businesses streamline their operations and improve efficiency.
                  </p>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                    with reasonable notice. We may also impose limits on certain features or restrict access to 
                    parts of the service without notice or liability.
                  </p>
                </div>
              </div>

              {/* User Accounts */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    When you create an account with us, you must provide information that is accurate, complete, 
                    and current at all times. You are responsible for safeguarding the password and for all 
                    activities under your account.
                  </p>
                  <p>
                    You agree not to disclose your password to any third party. You must notify us immediately 
                    upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Intellectual Property Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The service and its original content, features, and functionality are and will remain the 
                    exclusive property of FlowTech and its licensors. The service is protected by copyright, 
                    trademark, and other laws.
                  </p>
                  <p>
                    Our trademarks may not be used in connection with any product or service without our prior 
                    written consent. You retain ownership of any content you create using our services, while 
                    granting us a license to provide the service to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-700">Important</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Prohibited Activities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The following activities are strictly prohibited when using our services
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
              Account Termination
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding when and how accounts may be terminated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {terminationReasons.map((reason, index) => (
              <Card key={reason.reason} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {reason.reason}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="text-center">
              <Info className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Termination Process
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Upon termination, your right to use the service will cease immediately. We will provide you with 
                reasonable opportunity to export your data before permanent deletion, subject to legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Liability and Disclaimers */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Liability & Disclaimers
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Limitation of Liability</h3>
              <p className="text-gray-300 leading-relaxed">
                In no event shall FlowTech, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Service Availability</h3>
              <p className="text-gray-300 leading-relaxed">
                We strive to maintain high service availability but cannot guarantee uninterrupted service. 
                Scheduled maintenance, emergency repairs, or circumstances beyond our control may result in 
                temporary service interruptions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Governing Law</h3>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which FlowTech 
                is incorporated, without regard to conflict of law provisions. Any disputes shall be resolved 
                through binding arbitration or in the courts of that jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            If you have any questions about these Terms of Service, please don't hesitate to contact us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary-600" />
              <h3 className="font-semibold mb-2 text-gray-900">Email Us</h3>
              <p className="text-gray-600">legal@flowtech.com</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary-600" />
              <h3 className="font-semibold mb-2 text-gray-900">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Globe className="h-8 w-8 mx-auto mb-4 text-primary-600" />
              <h3 className="font-semibold mb-2 text-gray-900">Legal Department</h3>
              <p className="text-gray-600">legal-dept@flowtech.com</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">
              <strong>Changes to Terms:</strong> We reserve the right to modify these terms at any time. 
              We will notify users of any material changes via email or through our service. 
              Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}