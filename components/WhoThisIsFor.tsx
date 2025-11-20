import React from 'react';
import { Check, X } from 'lucide-react';

export const WhoThisIsFor: React.FC = () => {
  return (
    <section id="who-this-is-for" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who I Work With
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Let's make sure we're a good fit before we waste each other's time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Great Fit */}
          <div className="bg-emerald-500/5 border-2 border-emerald-500/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Check className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Great Fit</h3>
            </div>

            <ul className="space-y-4">
              {[
                'E-commerce needing product data',
                'SaaS adding AI features',
                'Real estate with lead automation',
                'Fintech building data pipelines',
                'Anyone drowning in manual work'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-emerald-500/10">
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-emerald-400 font-semibold">I work best with:</span>
                <br />
                Technical clients who value quality code over quick hacks.
                Small teams who need senior-level expertise without full-time hire.
              </p>
            </div>
          </div>

          {/* Not a Good Fit */}
          <div className="bg-red-500/5 border-2 border-red-500/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20">
                <X className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Not a Good Fit</h3>
            </div>

            <ul className="space-y-4">
              {[
                'Need a website built (I build systems, not marketing sites)',
                'Want ongoing marketing services',
                'Need a full-time employee',
                'Tight budget under $200'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-red-500/10">
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-red-400 font-semibold">Be honest:</span>
                <br />
                If you're looking for cheap labor or someone to build your MVP for equity,
                we're probably not a match. I focus on quality over volume.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">
            Still not sure? Let's talk it through on a free discovery call.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};
