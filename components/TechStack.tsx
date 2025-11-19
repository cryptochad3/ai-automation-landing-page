import React from 'react';

const techs = [
  "Python", "ChromaDB", "Nomadic Embeddings", "HuggingFace", 
  "RAG Pipelines", "LangChain", "FastAPI", "Docker", 
  "SQLite", "PostgreSQL", "Local LLMs", "Gemini API"
];

export const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-10 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-4">Built With Modern Tech</h3>
            <p className="text-slate-400">
              I use robust, production-ready tools to ensure your systems are fast, secure, and scalable.
            </p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap gap-3 justify-center md:justify-end">
            {techs.map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-md font-mono text-sm hover:border-brand-500/50 hover:text-brand-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
