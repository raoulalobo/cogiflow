import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  DollarSign, 
  Heart, 
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'

export default function PricingPhilosophy() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2">
            <Heart className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Our Philosophy</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Why We Do Things{' '}
            <span className="gradient-text">Differently</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe automation should be accessible, trustworthy, and built for YOUR success. 
            That's why we've created a completely different approach.
          </p>
        </div>

        {/* Main philosophy cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Problem with industry */}
          <Card className="border-2 border-red-100 bg-red-50/30">
            <CardContent className="p-8 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">The Industry Problem</h3>
                <p className="text-gray-600">
                  Most automation companies sell expensive templates or charge huge upfront fees. 
                  You're stuck with generic solutions that don't really fit.
                </p>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">High upfront costs with no guarantee</span>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Generic templates that need modification</span>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">No support when things go wrong</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our solution */}
          <Card className="border-2 border-green-100 bg-green-50/30">
            <CardContent className="p-8 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
                <p className="text-gray-600">
                  We flip the script. You get custom automation built specifically for you, 
                  and you only pay after testing and approving everything.
                </p>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Zero upfront cost or risk</span>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">100% custom-built for your processes</span>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Ongoing support and partnership</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why we do it */}
          <Card className="border-2 border-primary-100 bg-primary-50/30">
            <CardContent className="p-8 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">Why We Do This</h3>
                <p className="text-gray-600">
                  We want to build long-term relationships, not quick sales. 
                  When you succeed with automation, we succeed too.
                </p>
              </div>

              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Automation should be accessible to everyone</span>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Trust must be earned through results</span>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Your success is our success</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <DollarSign className="h-6 w-6 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Fair Pricing, Zero Risk
              </h3>
            </div>
            
            <p className="text-lg text-gray-600">
              Stop paying for templates that don't work. Stop risking money on solutions that might fail. 
              Get custom automation built specifically for your business, and pay only when you're happy with the results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-4 h-auto text-lg">
                Start Your Risk-Free Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-sm text-gray-500 text-center">
                No upfront payment • Test everything first • Fair pricing for everyone
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}