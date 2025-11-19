import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const pricingTiers: PricingTier[] = [
  {
    title: "Small Tools",
    priceRange: "$250 – $1,000",
    description: "Perfect for automating single tasks.",
    features: ["Email organization scripts", "Simple data scrapers", "Daily scheduled reports", "Source code included"]
  },
  {
    title: "Internal AI Assistant",
    priceRange: "$1,000 – $3,500",
    description: "Your own ChatBot trained on your data.",
    features: ["RAG Pipeline setup", "Private Vector DB", "Secure Web Interface", "PDF/Doc ingestion", "1 Month Support"]
  },
  {
    title: "Enterprise System",
    priceRange: "$5k – $20k",
    description: "Full-scale knowledge management.",
    features: ["Multi-department access", "Advanced permissions", "Live API Integrations", "Custom Dashboard", "SLA & Priority Support"]
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Flexible Pricing</h2>
          <p className="text-slate-400">
            Transparent costs based on project scope. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <div key={idx} className={`bg-slate-900 rounded-2xl p-8 border ${idx === 1 ? 'border-brand-500 relative shadow-[0_0_30px_rgba(14,165,233,0.1)]' : 'border-slate-800'}`}>
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
              <div className="text-2xl font-mono text-brand-400 mb-4">{tier.priceRange}</div>
              <p className="text-slate-400 text-sm mb-6">{tier.description}</p>
              <ul className="space-y-4">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <div className="inline-block bg-slate-900 rounded-xl p-6 border border-slate-800">
                <h4 className="text-white font-bold mb-2">Consulting</h4>
                <p className="text-slate-400 text-sm mb-2">Expert guidance at <span className="text-brand-400 font-mono">$75 – $150/hr</span></p>
                <p className="text-slate-500 text-xs">Ongoing support available from $50/mo</p>
            </div>
        </div>
      </div>
    </section>
  );
};
