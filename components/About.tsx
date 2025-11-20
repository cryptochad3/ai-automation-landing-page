import React from 'react';
import { MapPin, Linkedin, Github, Mail } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 md:p-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed mb-6">
              I've been building software systems for <span className="text-white font-semibold">20+ years</span>,
              specializing in automation, AI integration, and data pipelines that run in production.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I'm not an agency. I'm not a team of juniors. <span className="text-brand-400 font-semibold">You work directly with me</span> -
              someone who's debugged enough systems to know what actually breaks in the real world.
            </p>

            {/* Current Focus */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Current Focus:</h3>
              <ul className="space-y-2">
                {[
                  'AI/LLM integration for businesses',
                  'Complex web scraping & monitoring',
                  'Real-time data processing systems',
                  'Computer vision applications'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <span className="text-brand-500 mr-3 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-400 mb-8">
              <MapPin className="h-5 w-5 text-brand-500" />
              <span>Great Falls, Montana (Remote work)</span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/cryptochad3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-brand-500 text-slate-200 rounded-lg transition-all"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/cryptochad3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-brand-500 text-slate-200 rounded-lg transition-all"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
