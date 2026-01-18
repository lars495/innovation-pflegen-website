
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import InnovationAssistant from '../components/InnovationAssistant';
import About from '../components/About';

const Home: React.FC = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <section id="services" className="py-20 bg-white">
        <Services />
      </section>

      <section id="innovation" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Innovation Assistant
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Lassen Sie sich von unserer KI bei der Planung Ihrer Pflegeprojekte unterstützen.
            </p>
          </div>
          <InnovationAssistant />
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <About />
      </section>
    </>
  );
};

export default Home;
