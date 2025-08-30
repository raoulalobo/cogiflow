'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Users,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc.',
      company: 'TechStartup Inc.',
      image: '/images/avatar-1.jpg',
      content: 'FlowTech transformed our operations completely. We reduced manual work by 80% and our team can now focus on strategic initiatives instead of repetitive tasks.',
      rating: 5,
      stats: '80% time saved'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, Global Corp',
      company: 'Global Corp',
      image: '/images/avatar-2.jpg',
      content: 'The automation templates saved us months of development time. What used to take our team weeks now happens automatically in the background.',
      rating: 5,
      stats: '6 months saved'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Growth Co',
      company: 'Growth Co',
      image: '/images/avatar-3.jpg',
      content: 'Their faceless video solution helped us scale our content creation 10x. The quality is amazing and the process is completely automated.',
      rating: 5,
      stats: '10x content output'
    }
  ]

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Workflows Created',
      description: 'Businesses automated globally'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Time Saved',
      description: 'Average efficiency improvement'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Automation',
      description: 'Round-the-clock operation'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Customer Rating',
      description: 'Based on 500+ reviews'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2">
            <Star className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Customer Success</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Loved by{' '}
            <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses around the world are transforming their operations 
            with FlowTech&apos;s automation solutions.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="font-semibold text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <Card className="border-2 border-gray-100 shadow-xl">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-4xl font-bold text-primary-600">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                      <Quote className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div className="flex justify-center lg:justify-start space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-6 w-6 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-semibold text-lg text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <TrendingUp className="h-4 w-4" />
                      <span>{testimonials[currentTestimonial].stats}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentTestimonial === index 
                          ? 'bg-primary-600' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            {['TechCorp', 'InnovateCo', 'GlobalLLC', 'StartupInc'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 tracking-wider">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}