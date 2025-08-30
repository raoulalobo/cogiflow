'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Check,
  Star,
  ArrowRight,
  ArrowLeft,
  Zap,
  Users,
  Building,
  Heart,
  Shield,
  DollarSign,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 0,
      description: 'Perfect for getting started with automation',
      popular: false,
      features: [
        'Simple automations (2-3 steps)',
        'Standard email support',
        'Complete documentation',
        '1 free revision',
        'Basic training included',
        '30-day maintenance'
      ],
      cta: 'Start for Free',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: 0,
      description: 'For advanced business needs',
      popular: true,
      features: [
        'Complex automations (5+ steps)',
        'Priority chat support',
        'Multi-platform integrations',
        '3 free revisions',
        'Personalized training',
        '60-day maintenance',
        'Performance optimization'
      ],
      cta: 'Start for Free',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 0,
      description: 'Custom solutions for large organizations',
      popular: false,
      features: [
        'Unlimited automations',
        'Dedicated 24/7 support',
        'Custom architecture',
        'Unlimited revisions',
        'Complete team training',
        '90-day maintenance',
        'Guaranteed SLA',
        'Strategic consulting'
      ],
      cta: 'Start for Free',
      icon: Building,
      gradient: 'from-emerald-500 to-teal-500'
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
              <DollarSign className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Transparent Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Revolutionary{' '}
              <span className="gradient-text">Pricing</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              No subscriptions, no traps. All our plans are <strong>$0</strong> because 
              you only pay after testing and approving your automations.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-primary-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center space-y-4 pb-8">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-5xl font-bold text-gray-900">0€</span>
                    </div>
                    <p className="text-sm text-gray-500">Always free to start</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="lg" 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700' : ''}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test-Before-Pay Explanation */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2">
              <Heart className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Our Difference</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why <span className="gradient-text">$0</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because we believe trust is earned through results, 
              not marketing promises.
            </p>
          </div>

          {/* Explanation Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Pas d'abonnement */}
            <Card className="border-2 border-green-100 bg-green-50/30">
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">No Subscription</h3>
                  <p className="text-gray-600">
                    No monthly commitment, no hidden traps. 
                    You test everything for free before deciding.
                  </p>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">No hidden fees</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">No long-term commitment</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Cancel anytime</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Before Pay */}
            <Card className="border-2 border-primary-100 bg-primary-50/30">
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Test-Before-Pay</h3>
                  <p className="text-gray-600">
                    We build your automation, you test it in real conditions, 
                    then you decide if it deserves your investment.
                  </p>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Test in real conditions</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Complete validation before payment</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">100% satisfaction guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Satisfaction Client */}
            <Card className="border-2 border-yellow-100 bg-yellow-50/30">
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">Customer Success First</h3>
                  <p className="text-gray-600">
                    Your success is our success. We only win when you are 
                    completely satisfied with the results.
                  </p>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Win-win relationship</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Ongoing support included</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Long-term partnership</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <AlertCircle className="h-6 w-6 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Too Good to Be True?
                </h3>
              </div>
              
              <p className="text-lg text-gray-600">
                That's exactly what our clients think at first. Then they discover that an approach 
                based on trust and results creates stronger and more lasting partnerships.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/help-center">
                  <Button size="lg" className="px-8 py-4 h-auto text-lg">
                    Start Your Free Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="text-sm text-gray-500 text-center">
                  No risk • No commitment • Results guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}