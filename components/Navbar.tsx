
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LogoIcon = () => (
  <svg viewBox="0 0 100 120" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C30 10 15 26 15 46C15 58 22 68 32 75V85C32 88 34 90 37 90H63C66 90 68 88 68 85V75C78 68 85 58 85 46C85 26 70 10 50 10Z" stroke="#2589D8" strokeWidth="6" strokeLinecap="round" />
    <path d="M38 98H62M42 106H58M46 114H54" stroke="#2589D8" strokeWidth="6" strokeLinecap="round" />
    <path d="M50 62C42 62 34 56 34 46C34 38 42 32 50 32C58 32 66 38 66 46C66 56 58 62 50 62Z" fill="white" />
    <path d="M50 58C55 58 59 54.5 59 50C59 47 57.5 44.5 55.5 43C57.5 41.5 59 39 59 36C59 31.5 55 28 50 28C45 28 41 31.5 41 36C41 39 42.5 41.5 44.5 43C42.5 44.5 41 47 41 50C41 54.5 45 58 50 58Z" fill="#38B481" className="hidden" />
    <path d="M50 60C50 60 38 52 38 42C38 36 43 32 50 38C57 32 62 36 62 42C62 52 50 60 50 60Z" fill="#38B481" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = async (id: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      await navigate('/');
      // Wait for navigation to finish and component to mount
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div onClick={() => handleNavClick('home')} className="flex items-center gap-3 cursor-pointer">
            <LogoIcon />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold text-[#2589D8] tracking-tight">innovation-</span>
              <span className="text-2xl font-bold text-[#38B481] tracking-tight">pflegen.de</span>
            </div>
          </div>

          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/learning-ai" className="text-slate-600 font-medium hover:text-[#2589D8] transition">Lernen & KI</Link>
            <Link to="/software-ai" className="text-slate-600 font-medium hover:text-[#2589D8] transition">Software mit KI</Link>
            <Link to="/participation" className="text-slate-600 font-medium hover:text-[#2589D8] transition">Beteiligung</Link>
            <Link to="/community" className="text-slate-600 font-medium hover:text-[#2589D8] transition">Community</Link>

            <div className="h-6 w-px bg-slate-300 mx-2"></div>

            <Link to="/about-us" className="text-slate-600 font-medium hover:text-[#2589D8] transition">Über uns</Link>
            <Link to="/blog" className="text-slate-600 font-medium hover:text-[#2589D8] transition">Blog</Link>
            <a
              href="mailto:lars@innovation-pflegen.de"
              className="bg-gradient-to-r from-[#2589D8] to-[#38B481] text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all text-sm"
            >
              Projekt anfragen
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4">
          <Link to="/learning-ai" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-lg font-medium text-slate-600">Lernen & KI</Link>
          <Link to="/software-ai" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-lg font-medium text-slate-600">Software mit KI</Link>
          <Link to="/participation" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-lg font-medium text-slate-600">Beteiligung</Link>
          <Link to="/community" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-lg font-medium text-slate-600">Community</Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)} className="block w-full text-left py-2 text-lg font-medium text-slate-600">Über uns</Link>
          <a href="mailto:lars@innovation-pflegen.de" className="block w-full text-center bg-gradient-to-r from-[#2589D8] to-[#38B481] text-white px-5 py-3 rounded-xl font-bold">Projekt anfragen</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
