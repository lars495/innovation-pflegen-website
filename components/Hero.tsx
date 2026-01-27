
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-36 pb-20 lg:pt-52 lg:pb-40 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-[#2589D8]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-sm font-semibold mb-8">
          <span className="text-xl">👋</span>
          Hallo :-) lasst uns gemeinsam was in der Pflege bewegen!
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
          Innovation in der <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-[#2589D8] to-[#38B481]">
            Pflege selbst gestalten
          </span>
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Veränderung und Innovation in der Pflege können nur durch Pflegende selbst erfolgen. Wir unterstützen Sie dabei, mit Mut, Fantasie und Spaß die Zukunft der Pflege anzugehen.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 shadow-2xl shadow-slate-200 transition-all hover:-translate-y-1">
            Loslegen & Mitmachen
          </button>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Link to="/participation" className="flex flex-col items-center p-4 rounded-2xl hover:bg-slate-50 transition cursor-pointer">
            <span className="text-4xl mb-2">🤝</span>
            <span className="text-lg font-bold text-slate-900">Beteiligung</span>
            <span className="text-sm text-slate-500 text-center">Von der Basis aus</span>
          </Link>
          <Link to="/learning-ai" className="flex flex-col items-center p-4 rounded-2xl hover:bg-slate-50 transition cursor-pointer">
            <span className="text-4xl mb-2">🤖</span>
            <span className="text-lg font-bold text-slate-900">KI-Power</span>
            <span className="text-sm text-slate-500 text-center">Lernen & Coden</span>
          </Link>
          <Link to="/contact-8" className="flex flex-col items-center p-4 rounded-2xl hover:bg-slate-50 transition cursor-pointer">
            <span className="text-4xl mb-2">🖨️</span>
            <span className="text-lg font-bold text-slate-900">3D-Druck</span>
            <span className="text-sm text-slate-500 text-center">Eigene Hilfsmittel</span>
          </Link>
          <Link to="/community" className="flex flex-col items-center p-4 rounded-2xl hover:bg-slate-50 transition cursor-pointer">
            <span className="text-4xl mb-2">🎉</span>
            <span className="text-lg font-bold text-slate-900">Spaß</span>
            <span className="text-sm text-slate-500 text-center">Community & Events</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
