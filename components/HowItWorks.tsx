import React from 'react';
import { Phone, Zap, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Discovery Call',
    subtitle: 'Free, 30 min',
    icon: <Phone className="h-6 w-6" />,
    description: 'You explain the problem',
    details: [
      'I assess if automation makes sense',
      'Get honest timeline & cost estimate',
      'No pressure, just clarity'
    ]
  },
  {
    number: '2',
    title: 'Quick Proof',
    subtitle: '2-5 days',
    icon: <Zap className="h-6 w-6" />,
    description: 'Small test project ($200-500)',
    details: [
      'Prove it works before big commitment',
      'See my code quality & communication',
      'Low-risk way to get started'
    ]
  },
  {
    number: '3',
    title: 'Full Build',
    subtitle: '1-4 weeks',
    icon: <Rocket className="h-6 w-6" />,
    description: 'Production-ready system',
    details: [
      'Complete solution deployment',
      'Documentation & training',
      'You own all the code'
    ]
  },
  {
    number: '4',
    title: 'Support Options',
    subtitle: 'Your choice',
    icon: <HeadphonesIcon className="h-6 w-6" />,
    description: 'One-off or ongoing',
    details: [
      'One-off project = done',
      'Or ongoing: monitoring, updates, expansion',
      'No pressure, you decide'
    ]
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A straightforward process designed to minimize risk and maximize results
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-500/50 to-transparent"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-slate-950/50 backdrop-blur-sm border border-slate-800 hover:border-brand-500/50 rounded-xl p-6 transition-all hover:-translate-y-1">
                {/* Step Number Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-400 font-medium mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 mb-4 font-medium">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-400">
                      <span className="text-brand-500/50 mr-2">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
          >
            <Phone className="h-5 w-5" />
            Schedule Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};
