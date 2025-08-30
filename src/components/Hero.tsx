'use client'

import { Button } from '@/components/ui/button'
import { Play, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Custom Automation Specialists</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Stop Struggling with{' '}
                <span className="gradient-text">Generic Templates</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Get custom n8n automations built specifically for YOUR business. 
                Test everything first, pay only when you're completely satisfied.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-2 border-gray-300 hover:border-primary-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Value propositions */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-100">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="font-medium">Built for Your Business</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary-100">
                <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                <span className="font-medium">Test Before You Pay</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-100">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="font-medium">Affordable for Everyone</span>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard preview */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">FlowTech Dashboard</div>
                </div>

                {/* Mock workflow cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-primary-200">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg mb-3"></div>
                    <div className="h-4 bg-primary-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-primary-200 rounded w-1/2"></div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg border border-secondary-200">
                    <div className="w-8 h-8 bg-secondary-500 rounded-lg mb-3"></div>
                    <div className="h-4 bg-secondary-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg mb-3"></div>
                    <div className="h-4 bg-purple-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-purple-200 rounded w-1/2"></div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <div className="w-8 h-8 bg-green-500 rounded-lg mb-3"></div>
                    <div className="h-4 bg-green-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-green-200 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Mock chart */}
                <div className="h-32 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-400 to-secondary-400 opacity-20"></div>
                  <div className="relative z-10">
                    <div className="text-sm font-medium text-gray-700 mb-2">Performance Analytics</div>
                    <div className="flex items-end space-x-2 h-16">
                      {[40, 60, 30, 80, 50, 90, 70].map((height, index) => (
                        <div 
                          key={index} 
                          className="bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t flex-1 opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center animate-pulse">
              <ArrowRight className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}