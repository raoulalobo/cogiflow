'use client'

import { Button } from '@/components/ui/button'
import { Play, ArrowRight, Sparkles } from 'lucide-react'
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
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">FlowTech Dashboard</div>
                </div>

                {/* Mock workflow cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="p-2 sm:p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-primary-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-lg mb-2 sm:mb-3"></div>
                    <div className="h-3 sm:h-4 bg-primary-300 rounded w-3/4 mb-1 sm:mb-2"></div>
                    <div className="h-2 sm:h-3 bg-primary-200 rounded w-1/2"></div>
                  </div>
                  <div className="p-2 sm:p-4 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg border border-secondary-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-500 rounded-lg mb-2 sm:mb-3"></div>
                    <div className="h-3 sm:h-4 bg-secondary-300 rounded w-3/4 mb-1 sm:mb-2"></div>
                    <div className="h-2 sm:h-3 bg-secondary-200 rounded w-1/2"></div>
                  </div>
                  <div className="p-2 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-lg mb-2 sm:mb-3"></div>
                    <div className="h-3 sm:h-4 bg-purple-300 rounded w-3/4 mb-1 sm:mb-2"></div>
                    <div className="h-2 sm:h-3 bg-purple-200 rounded w-1/2"></div>
                  </div>
                  <div className="p-2 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-lg mb-2 sm:mb-3"></div>
                    <div className="h-3 sm:h-4 bg-green-300 rounded w-3/4 mb-1 sm:mb-2"></div>
                    <div className="h-2 sm:h-3 bg-green-200 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Mock chart */}
                <div className="h-24 sm:h-32 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg p-3 sm:p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-400 to-secondary-400 opacity-20"></div>
                  <div className="relative z-10">
                    <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Performance Analytics</div>
                    <div className="flex items-end space-x-1 sm:space-x-2 h-12 sm:h-16">
                      {[40, 60, 30, 80, 50, 90, 70].map((height, index) => (
                        <div 
                          key={index} 
                          className="bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t flex-1 opacity-80 transform hover:opacity-100 transition-opacity duration-200"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${index * 100}ms`
                          }}
                        ></div>
                      ))}
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