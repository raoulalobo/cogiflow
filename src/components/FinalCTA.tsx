'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Mail,
  Users,
  Zap,
  Calendar,
  Star
} from 'lucide-react'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const benefits = [
    'Free initial consultation',
    'Custom automation assessment',
    'No-obligation discovery session',
    'Expert guidance and recommendations'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically handle the form submission
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Ready to Get Started?</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Ready to Try{' '}
            <span className="gradient-text">Risk-Free</span>
            <br />
            Automation?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop wasting time with templates that don't fit. Get custom automation built for YOUR business. 
            Test everything first, pay only when you're completely satisfied.
          </p>
        </div>

        {/* Main CTA Card */}
        <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-white/50 backdrop-blur-sm bg-white/80">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Start Your Risk-Free Project
                  </h3>
                  <p className="text-gray-600">
                    Tell us what you need automated. We'll build it custom for you. 
                    You only pay after testing and approving the final solution.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="px-8 py-4 text-lg h-auto whitespace-nowrap"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Thanks!
                        </>
                      ) : (
                        <>
                          Start Risk-Free Project
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>

                {/* Benefits list */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Value proposition */}
              <div className="space-y-8">
                {/* What you get */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <Sparkles className="h-6 w-6 text-primary-600" />
                    <span className="font-semibold text-gray-900">No Risk Promise</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">We build your custom solution first</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">You test everything thoroughly</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">Pay only after you approve results</span>
                    </div>
                  </div>
                </div>

                {/* Core values */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
                    <div className="text-lg font-bold text-gray-900">No Code</div>
                    <div className="text-sm text-gray-600">Required</div>
                  </div>
                  <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
                    <div className="text-lg font-bold text-gray-900">Full</div>
                    <div className="text-sm text-gray-600">Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternative options */}
        <div className="mt-16 text-center space-y-8">
          <p className="text-gray-500">Not ready to start? No problem!</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button variant="outline" size="lg" className="px-8 py-4 h-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 h-auto">
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>

          {/* Value indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-primary-500" />
              <span>Expert n8n automation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Proven methodologies</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span>Dedicated support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}