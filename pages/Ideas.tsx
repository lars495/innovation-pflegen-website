
import React from 'react';
import { Link } from 'react-router-dom';

const IdeasPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center text-slate-400 font-bold mb-8 hover:text-[#2589D8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Startseite
          </Link>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Visionen & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2589D8] to-[#38B481]">Ideen</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hier sammeln wir Gedankenanstöße für die Pflege der Zukunft. Ein Labor für Innovation, New Work und digitale Ethik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Idee 1 */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-6xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">KI als Assistent, nicht Ersatz</h3>
            <p className="text-slate-600 mb-4">
              Wie können Large Language Models (LLMs) die Dokumentation so vereinfachen, dass wieder mehr Zeit für das Gespräch am Bett bleibt? Unsere Vision ist die "Zero-Click-Dokumentation".
            </p>
            <span className="text-[#2589D8] font-bold text-sm uppercase tracking-wider">Technologie</span>
          </div>

          {/* Idee 2 */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group">
            <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-6xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">New Work in der Pflege</h3>
            <p className="text-slate-600 mb-4">
              Selbstorganisierte Teams (Buurtzorg-Modell) adaptiert für den deutschen Markt. Weg von starren Hierarchien, hin zu Verantwortung und Flexibilität im Dienstplan.
            </p>
            <span className="text-[#38B481] font-bold text-sm uppercase tracking-wider">Organisation</span>
          </div>

          {/* Idee 3 */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group">
            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-6xl">🎓</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Micro-Learning on the Job</h3>
            <p className="text-slate-600 mb-4">
              Lernnuggets, die genau dann verfügbar sind, wenn man sie braucht (Just-in-Time Learning). Integriert in den Arbeitsablauf, statt im Seminarraum.
            </p>
            <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">Bildung</span>
          </div>
        </div>

        <div className="mt-20 bg-[#2589D8] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Haben Sie eine Idee?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Innovation entsteht im Dialog. Wir suchen ständig nach Partnern, die mutig genug sind, die Pflege neu zu denken.
          </p>
          <button className="bg-white text-[#2589D8] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg">
            Idee teilen
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeasPage;
