import React from 'react';
import { ArrowRight, Database, Bot, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-900/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-500 text-xs font-mono font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Automate Work. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-500">
              Organize Data.
            </span> <br />
            Build Custom AI.
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            I help businesses build powerful AI tools using custom Python pipelines, vector databases, and retrieval-based AI systems. Turn your documents into answers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] group"
            >
              Start Discovery
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="inline-flex justify-center items-center px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium rounded-lg transition-colors"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Abstract Visual */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-1/3">
          <div className="grid grid-cols-2 gap-4 opacity-80">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 transform translate-y-8">
              <Database className="h-10 w-10 text-brand-500 mb-4" />
              <h3 className="text-white font-mono text-sm mb-2">Vector DB</h3>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-brand-500"></div>
              </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <Bot className="h-10 w-10 text-indigo-500 mb-4" />
              <h3 className="text-white font-mono text-sm mb-2">Custom LLMs</h3>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-indigo-500"></div>
              </div>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 col-span-2 transform -translate-y-4">
              <Zap className="h-10 w-10 text-emerald-500 mb-4" />
              <h3 className="text-white font-mono text-sm mb-2">Automated Pipelines</h3>
              <div className="flex gap-2 mt-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
