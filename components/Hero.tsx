import React from 'react';
import { ArrowRight, Zap, Target, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-purple-950"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-900/20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-900/20 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700 text-brand-400 text-sm font-mono font-medium mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            AI AUTOMATION ENGINEER
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            I Build Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-purple-500">
              That Work
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            Building Production-Ready Systems Since 2004
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
            I turn manual work into automated systems - web scraping, AI integration, data pipelines, and custom tools that actually work in production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] group"
            >
              View Recent Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-slate-800/50 border border-slate-700 hover:border-brand-500 hover:bg-slate-800 text-slate-200 font-semibold rounded-lg transition-all backdrop-blur-sm"
            >
              Book a Call
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20">
                <Zap className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Experience</div>
                <div className="text-lg font-bold text-white">20+ Years</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Target className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Focus</div>
                <div className="text-lg font-bold text-white">Python, AI/ML</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Rocket className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Quality</div>
                <div className="text-lg font-bold text-white">Production-Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
