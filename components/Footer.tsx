import React from 'react';
import { Link } from 'react-router-dom';

const LogoIcon = () => (
  <svg viewBox="0 0 100 120" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C30 10 15 26 15 46C15 58 22 68 32 75V85C32 88 34 90 37 90H63C66 90 68 88 68 85V75C78 68 85 58 85 46C85 26 70 10 50 10Z" stroke="#2589D8" strokeWidth="6" strokeLinecap="round" />
    <path d="M38 98H62M42 106H58M46 114H54" stroke="#2589D8" strokeWidth="6" strokeLinecap="round" />
    <path d="M50 60C50 60 38 52 38 42C38 36 43 32 50 38C57 32 62 36 62 42C62 52 50 60 50 60Z" fill="#38B481" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <LogoIcon />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-[#2589D8] tracking-tight">innovation-</span>
                <span className="text-xl font-bold text-[#38B481] tracking-tight">pflegen.de</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Veränderung und Innovation in der Pflege können nur durch Pflegende selbst erfolgen. Wir unterstützen Sie dabei, mit Mut, Fantasie und Spaß die Zukunft der Pflege anzugehen.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-[#2589D8] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight text-[#38B481]">Service</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="https://ki-und-lernen.innovation-pflegen.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Hackathons</a></li>
              <li><Link to="/career" className="hover:text-white transition">Coaching</Link></li>
              <li><Link to="/e-learning" className="hover:text-white transition">E-Learning</Link></li>
              <li><Link to="/learning-ai" className="hover:text-white transition">KI in der Pflege</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight text-[#2589D8]">Unternehmen</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link to="/about-us" className="hover:text-white transition">Über uns</Link></li>
              <li><Link to="/karriere" className="hover:text-white transition">Karriere</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#2589D8] to-[#38B481]">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6 font-medium">Bleiben Sie up-to-date bei digitalen Pflegetrends.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Deine E-Mail"
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm flex-1 focus:outline-none focus:border-[#2589D8] transition-all"
              />
              <button className="bg-gradient-to-r from-[#2589D8] to-[#38B481] p-3 rounded-xl hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
          <p>© 2025 innovation-pflegen.de</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="mailto:lars@innovation-pflegen.de" className="hover:text-white transition">lars@innovation-pflegen.de</a>
            <a href="tel:+4915733360952" className="hover:text-white transition">+49 157 333 609 52</a>
            <Link to="/impressum" className="hover:text-white transition">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
