import React from 'react';
import { ExternalLink, Github, Radio, Newspaper, Coins } from 'lucide-react';

const projects = [
  {
    id: 'omam-radio',
    title: 'OMAM Radio Network',
    subtitle: 'Montana Weather Broadcasting',
    icon: <Radio className="h-8 w-8" />,
    iconColor: 'text-brand-500',
    bgGradient: 'from-brand-500/10 to-blue-500/10',
    features: [
      'Real-time NOAA data processing',
      'Automated TTS broadcasting',
      'GIF generation from satellite',
      'Multi-source data aggregation'
    ],
    tech: ['Python', 'Ollama', 'FFmpeg', 'APIs'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'newspaper-ocr',
    title: 'Historical Newspaper Digitization',
    subtitle: '1880s Archive Processing',
    icon: <Newspaper className="h-8 w-8" />,
    iconColor: 'text-purple-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    features: [
      'OCR with AI enhancement',
      '1880s newspaper processing',
      'Automated article extraction',
      'Text-to-radio conversion'
    ],
    tech: ['Python', 'OCR', 'Ollama', 'TTS'],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'chadtoken',
    title: 'ChadToken Gaming Economy',
    subtitle: 'Cryptocurrency Development',
    icon: <Coins className="h-8 w-8" />,
    iconColor: 'text-emerald-500',
    bgGradient: 'from-emerald-500/10 to-green-500/10',
    features: [
      'Cryptocurrency development',
      'Burn mechanics implementation',
      'Developer revenue sharing',
      'Smart contract integration'
    ],
    tech: ['Python', 'Blockchain', 'APIs'],
    githubUrl: '#',
    demoUrl: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real projects solving real problems - not portfolio filler
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Project Header with Icon */}
              <div className={`relative h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center`}>
                <div className={`${project.iconColor} opacity-20 absolute inset-0 flex items-center justify-center`}>
                  <div className="scale-[3]">
                    {project.icon}
                  </div>
                </div>
                <div className={`relative ${project.iconColor} bg-slate-900/80 backdrop-blur-sm w-20 h-20 rounded-xl flex items-center justify-center border border-slate-700`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  {project.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-400">
                      <span className="text-brand-500 mr-2 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-slate-800/50 text-slate-400 rounded-md border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <a
            href="https://github.com/cryptochad3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-700 hover:border-brand-500 text-slate-300 hover:text-brand-400 font-semibold rounded-lg transition-all"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
