import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { DemoChat } from './components/DemoChat';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <DemoChat />
        <Pricing />
      </main>
      <Contact />
    </div>
  );
};

export default App;
