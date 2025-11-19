import React from 'react';
import { Search, FileText, Bot, BarChart3, Users, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'internal-assistants',
    title: 'Internal AI Assistants',
    description: 'Secure, private AI assistants that understand your company’s documents. Your own ChatGPT trained on your data.',
    icon: <ShieldCheck className="h-8 w-8 text-brand-500" />,
    details: ['Chroma vector database', 'Custom RAG pipeline', 'Automatic document updates', 'Web or desktop interface'],
    idealFor: ['Law firms', 'Medical offices', 'Engineering', 'Finance'],
  },
  {
    id: 'reporting',
    title: 'Automated Reporting Pipelines',
    description: 'Hands-free automated reporting that runs hourly, daily, or weekly. Custom-built automations scheduled to fit your needs.',
    icon: <BarChart3 className="h-8 w-8 text-emerald-500" />,
    details: ['Document → PDF → Summary', 'OCR → Structured output', 'Inventory & Sales reports', 'Cron job scheduling'],
  },
  {
    id: 'doc-search',
    title: 'AI Document Search Engines',
    description: 'Turn any folder of documents (PDFs, Emails, Contracts) into a searchable AI engine.',
    icon: <Search className="h-8 w-8 text-indigo-500" />,
    details: ['Index PDFs, Word, Logs', 'Advanced chunking strategies', 'Instant retrieval of key details', 'Retrieval-augmented generation'],
  },
  {
    id: 'chatbots',
    title: 'Custom Business Chatbots',
    description: 'AI agents that can answer customer questions, sort emails, analyze uploads, and escalate when needed.',
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    details: ['FastAPI backend', 'Local or cloud LLMs', 'Vector search integration', 'Secure deployments'],
  },
  {
    id: 'consulting',
    title: 'AI Automation Consulting',
    description: 'Identify what can be automated. I help map data flows, build workflows, and select the right tools.',
    icon: <Users className="h-8 w-8 text-orange-500" />,
    details: ['Map data flows', 'Streamline processes', 'Reduce manual work', 'Select right models'],
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-2">What I Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Custom AI Solutions</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            From intelligent search to automated pipelines, I build the systems that let you do more with your data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-brand-500/50 transition-all hover:-translate-y-1 hover:shadow-xl group">
              <div className="bg-slate-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed min-h-[80px]">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.details.slice(0, 3).map((detail, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
