import React from 'react';
import { Bot, Globe, Cog, Eye, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'ai-integration',
    title: 'AI Integration',
    icon: <Bot className="h-8 w-8" />,
    iconColor: 'text-brand-500',
    bgColor: 'bg-brand-500/10',
    borderColor: 'border-brand-500/20',
    hoverBorder: 'hover:border-brand-500',
    details: [
      'Chatbots that know your business',
      'Document Q&A systems',
      'AI-powered automation',
      'RAG systems, LLM APIs'
    ],
    price: 'Starting at $400',
    link: '#projects'
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping & Data',
    icon: <Globe className="h-8 w-8" />,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500',
    details: [
      'Complex site scrapers',
      'Real-time monitoring',
      'Data pipelines',
      'API integrations'
    ],
    price: 'Starting at $300',
    link: '#projects'
  },
  {
    id: 'python-automation',
    title: 'Python Automation',
    icon: <Cog className="h-8 w-8" />,
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500',
    details: [
      'Workflow automation',
      'File/data processing',
      'Custom tools & scripts',
      'System integrations'
    ],
    price: 'Starting at $200',
    link: '#projects'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    icon: <Eye className="h-8 w-8" />,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    hoverBorder: 'hover:border-orange-500',
    details: [
      'Object detection',
      'Video analysis',
      'Real-time processing',
      'Custom model training'
    ],
    price: 'Starting at $500',
    link: '#projects'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Build
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Production-ready systems built with Python, AI, and 20+ years of experience
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-slate-950/50 backdrop-blur-sm border ${service.borderColor} ${service.hoverBorder} rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl group`}
            >
              {/* Icon */}
              <div className={`${service.bgColor} ${service.iconColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Details */}
              <ul className="space-y-2 mb-6">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-400">
                    <span className="text-slate-600 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="text-brand-400 font-bold text-lg mb-4">
                {service.price}
              </div>

              {/* CTA */}
              <a
                href={service.link}
                className="inline-flex items-center text-sm text-slate-300 hover:text-brand-400 transition-colors group/link"
              >
                See Examples
                <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
