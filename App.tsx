import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { HowItWorks } from './components/HowItWorks';
import { TechStack } from './components/TechStack';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <HowItWorks />
        <TechStack />
        <WhoThisIsFor />
        <Pricing />
        <About />
      </main>
      <Contact />
    </div>
  );
};

export default App;
