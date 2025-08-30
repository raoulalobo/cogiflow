'use client'

import { Button } from '@/components/ui/button'
import { Play, ArrowRight, Sparkles, Mail, MessageSquare, Users, Settings, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden pt-16 md:pt-20">
      {/* Background decoration - Responsive */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600" />
              <span className="font-medium text-primary-700">Custom Automation Specialists</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stop Struggling with{' '}
                <span className="gradient-text">Generic Templates</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Get custom automation solutions built with <strong>Make.com</strong>, <strong>n8n</strong>, <strong>Zapier</strong> & more, specifically for YOUR business. 
                Test everything first, pay only when you're completely satisfied.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto transform hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Start Free Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto border-2 border-gray-300 hover:border-primary-300 transform hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Value propositions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-primary-100 transform hover:scale-105 transition-transform duration-200">
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                <span className="font-medium whitespace-nowrap">Built for Your Business</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-secondary-100 transform hover:scale-105 transition-transform duration-200">
                <div className="w-2 h-2 bg-secondary-600 rounded-full animate-pulse" style={{animationDelay: '500ms'}}></div>
                <span className="font-medium whitespace-nowrap">Test Before You Pay</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-purple-100 transform hover:scale-105 transition-transform duration-200">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '1000ms'}}></div>
                <span className="font-medium whitespace-nowrap">Affordable for Everyone</span>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard preview */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 transform rotate-1 hover:rotate-0 transition-all duration-300 hover:shadow-3xl max-w-md mx-auto lg:max-w-none">
              <div className="space-y-3 sm:space-y-4">
                {/* Workflow header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '500ms'}}></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1000ms'}}></div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Automation Workflow</div>
                </div>

                {/* Workflow nodes */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Gmail Node */}
                  <div className="relative">
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200 transform hover:scale-[1.02] transition-all duration-200">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-red-700">Gmail</div>
                        <div className="text-xs text-red-600">New emails: 3</div>
                      </div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    {/* Connection line */}
                    <div className="absolute left-4 top-full w-0.5 h-3 bg-gradient-to-b from-red-300 to-blue-300"></div>
                  </div>

                  {/* Make.com Node */}
                  <div className="relative">
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 transform hover:scale-[1.02] transition-all duration-200">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Settings className="h-4 w-4 text-white animate-spin" style={{animationDuration: '3s'}} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-blue-700">Make.com</div>
                        <div className="text-xs text-blue-600">Processing...</div>
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '500ms'}}></div>
                    </div>
                    {/* Connection line */}
                    <div className="absolute left-4 top-full w-0.5 h-3 bg-gradient-to-b from-blue-300 to-green-300"></div>
                  </div>

                  {/* Slack & CRM Nodes */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 transform hover:scale-[1.02] transition-all duration-200">
                      <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                        <MessageSquare className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-green-700">Slack</div>
                        <div className="text-xs text-green-600">Sent ✓</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 transform hover:scale-[1.02] transition-all duration-200">
                      <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                        <Users className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-purple-700">CRM</div>
                        <div className="text-xs text-purple-600">Updated</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workflow status */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 sm:p-4 border border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs sm:text-sm font-bold text-gray-700">Workflow Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-700 font-medium">TEST PHASE</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Emails processed:</span>
                      <span className="font-bold text-gray-800">47</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Success rate:</span>
                      <span className="font-bold text-green-600">100%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Cost saved:</span>
                      <span className="font-bold text-blue-600">€2,340/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-200 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-green-200 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}