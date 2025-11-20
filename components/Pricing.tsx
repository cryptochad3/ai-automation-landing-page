import React from 'react';
import { ArrowRight, Zap, Rocket, Users, HeadphonesIcon } from 'lucide-react';

const packages = [
  {
    id: 'quick-start',
    title: 'Quick Start Projects',
    icon: <Zap className="h-6 w-6" />,
    iconColor: 'text-brand-500',
    bgColor: 'bg-brand-500/10',
    borderColor: 'border-brand-500/20',
    price: '$200-500',
    duration: '2-5 days',
    description: 'Perfect for: Testing an idea, small automation, proof-of-concept',
    features: [
      'Single automation task',
      'Simple scraper or chatbot',
      'Script to solve specific problem',
      'You get: Working code + docs'
    ],
    cta: 'Start a Project',
    link: '#contact'
  },
  {
    id: 'custom-dev',
    title: 'Custom Development',
    icon: <Rocket className="h-6 w-6" />,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    price: '$1,000-5,000',
    duration: '1-4 weeks',
    description: 'Perfect for: Production systems, complex integrations, custom tools',
    features: [
      'Full system development',
      'Multiple integrations',
      'Production deployment',
      'You get: Complete solution + training'
    ],
    cta: 'Schedule Call',
    link: '#contact',
    popular: true
  },
  {
    id: 'consulting',
    title: 'Technical Consultation',
    icon: <Users className="h-6 w-6" />,
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    price: '$100/hour',
    duration: 'Flexible',
    description: 'Perfect for: Strategy, code review, technical guidance, architecture',
    features: [
      'Automation strategy sessions',
      'Architecture planning',
      'Code review & optimization',
      'Technical mentorship'
    ],
    cta: 'Book Session',
    link: '#contact'
  },
  {
    id: 'ongoing',
    title: 'Ongoing Support',
    icon: <HeadphonesIcon className="h-6 w-6" />,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    price: '$500-2,000/mo',
    duration: 'Monthly',
    description: 'Perfect for: Maintaining systems, continuous improvement, on-call expertise',
    features: [
      'Scraper monitoring & fixes',
      'System maintenance',
      'Feature additions',
      'Priority support'
    ],
    cta: 'Discuss Retainer',
    link: '#contact'
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work With Me
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose what works for your project.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-slate-950/50 backdrop-blur-sm border-2 ${pkg.borderColor} rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl ${
                pkg.popular ? 'ring-2 ring-purple-500/20' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className={`${pkg.bgColor} ${pkg.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                {pkg.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {pkg.title}
              </h3>

              {/* Price */}
              <div className="mb-1">
                <span className="text-3xl font-bold text-white">{pkg.price}</span>
              </div>
              <div className="text-sm text-slate-400 mb-4">
                {pkg.duration}
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800 mb-4"></div>

              {/* Description */}
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                <span className="font-semibold">{pkg.description.split(':')[0]}:</span>
                {pkg.description.split(':')[1]}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-400">
                    <span className="text-brand-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={pkg.link}
                className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-purple-500/50'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                {pkg.cta}
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            All projects include source code ownership and documentation.{' '}
            <a href="#contact" className="text-brand-400 hover:text-brand-300 underline">
              Questions? Let's talk.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
