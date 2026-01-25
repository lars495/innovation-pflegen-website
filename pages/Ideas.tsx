
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hackathons */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="h-16 w-16 bg-indigo-100 rounded-2xl mb-6 flex items-center justify-center text-3xl">🚀</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Hackathons</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Hackathons bieten den Einstieg in das selbstbestimmte Arbeiten und Lernen. An einem Tag lösen motivierte Pflegende Probleme, an denen Stabsstellen Monate und Jahre sitzen.
            </p>
          </div>

          {/* Coaching */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="h-16 w-16 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center text-3xl">🤝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Coaching in der Pflege</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Ein Drittel der Pflegende geht bald in Rente. Wir qualifizieren erfahrene Fachkräfte zu Coaches, die junge Pflegende beim Start unterstützen und sich selbst Perspektiven über die Rente hinaus erschließen.
            </p>
          </div>

          {/* E-Learning */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="h-16 w-16 bg-emerald-100 rounded-2xl mb-6 flex items-center justify-center text-3xl">📱</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Selbstbestimmtes E-Learning</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Wieso lassen wir nicht die Pflegenden vor Ort ihr eigenes E-Learning kreieren? In Zeiten von KI und Smartphones ist das viel einfacher als es sich anhört und viel praxisnäher.
            </p>
          </div>

          {/* Praxisanleiter */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="h-16 w-16 bg-teal-100 rounded-2xl mb-6 flex items-center justify-center text-3xl">🎓</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Praxisanleiter*innen</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Praxisanleiter*innen sind die tatsächlichen Personalentwickler*innen. Mit gezielter Unterstützung können sie entscheidende Veränderungen anstoßen und begleiten.
            </p>
          </div>

          {/* KI in der Pflege */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="h-16 w-16 bg-orange-100 rounded-2xl mb-6 flex items-center justify-center text-3xl">🤖</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">KI in der Pflege</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Damit uns bei der KI nicht dasselbe passiert wie beim Internet, müssen Pflegende jetzt mit KI in Kontakt kommen, Scheu ablegen und selbst sinnvolle Anwendungen erdenken.
            </p>
          </div>

          {/* Akademisierte Pflegende */}
          <div className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="h-16 w-16 bg-purple-100 rounded-2xl mb-6 flex items-center justify-center text-3xl">🏛️</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Akademisierte Pflegende</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Gerade in der Langzeitpflege ist das Potenzial enorm. Ich möchte Arbeitgebern und Pflegenden helfen, zueinander zu finden und gemeinsam Potenziale vor Ort zu erkunden.
            </p>
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
