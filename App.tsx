import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Testimonials from './components/Testimonials';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import CustomOffer from './components/CustomOffer';

// Page Imports
import LearningAI from './pages/LearningAI';
import SoftwareAI from './pages/SoftwareAI';
import Participation from './pages/Participation';
import Community from './pages/Community';
import AboutUs from './pages/AboutUs';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Career from './pages/Career';
import References from './pages/References';
import BlogPage from './pages/Blog';

const Home: React.FC = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="services" className="py-20 bg-white">
        <Services />
      </section>

      <section id="custom-offer">
        <CustomOffer />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="about" className="py-20 bg-white">
        <About />
      </section>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-ai" element={<LearningAI />} />
            <Route path="/software-ai" element={<SoftwareAI />} />
            <Route path="/participation" element={<Participation />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/karriere" element={<Career />} />
            <Route path="/referenzen" element={<References />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
