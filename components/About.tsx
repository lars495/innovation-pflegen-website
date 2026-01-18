import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:gap-16 mb-24">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/healthcare/800/600"
              alt="Nursing teamwork"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full -z-1 opacity-20 animate-pulse"></div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            Wer wir sind
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
            Herausforderungen verstehen. <br />
            <span className="text-[#38B481]">Lösungen gestalten.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Als Startup liegt unser Fokus primär darauf, die Herausforderungen der Branche gründlich zu durchdringen. Wir entwickeln Lösungen, die in der täglichen Praxis funktionieren – und nicht nur in der Theorie.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Unser Ansatz ist es, die Menschen im Gesundheitswesen zu stärken und Kompetenzen aufzubauen. <span className="font-bold text-slate-900">Bei uns steht der Mensch im Mittelpunkt, nicht der Prozess.</span>
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Großprojekte & Kooperationen</h4>
                <p className="text-sm text-slate-500">Wir bringen unsere Expertise in komplexe Vorhaben ein, um die Branche gemeinsam voranzubringen.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#38B481]/20 flex items-center justify-center text-[#38B481] flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Konkrete Lösungen vor Ort</h4>
                <p className="text-sm text-slate-500">Wir finden pragmatische Antworten auf akute Probleme im Pflegealltag.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Menschen stärken</h4>
                <p className="text-sm text-slate-500">Wir bauen Kompetenzen auf, damit Pflegende gestärkt durch den Alltag gehen.</p>
              </div>
            </div>
          </div>

          <Link to="/about-us" className="text-[#38B481] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all uppercase text-sm tracking-widest">
            Mehr über uns
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Team Section */}
      <div className="border-t border-slate-100 pt-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Das Gründer-Team</h3>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Wissenschaftliche Fundierung trifft auf jahrelange Praxiserfahrung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Matthias Windeisen */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-xl hover:border-[#2589D8]/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2589D8]/5 rounded-bl-[4rem] -z-0"></div>

            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-3xl font-bold text-slate-400">
                MW
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">Matthias Windeisen</h4>
                <p className="text-[#2589D8] font-medium">Pflegeexperte & Pflegewissenschaftler</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm font-bold text-slate-700 mb-1">Qualifikationen</p>
                <p className="text-slate-600 text-sm">B.Sc. & M.Sc. Nursing Science, Gesundheits- und Krankenpfleger (GKP)</p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider text-xs">Schwerpunkte & Erfahrung</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2589D8] shrink-0 mt-2"></div>
                    <span>Pflegeexperte in der psychiatrischen Versorgung</span>
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2589D8] shrink-0 mt-2"></div>
                    <span>Restrukturierung von Abteilungen & Personalentwicklung</span>
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2589D8] shrink-0 mt-2"></div>
                    <span>Evaluation von Weiterbildungen & Medikamentensicherheit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lars Arendt */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-xl hover:border-[#38B481]/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#38B481]/5 rounded-bl-[4rem] -z-0"></div>

            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-3xl font-bold text-slate-400">
                LA
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">Lars Arendt</h4>
                <p className="text-[#38B481] font-medium">Projektkoordinator & Pflegewissenschaftler</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm font-bold text-slate-700 mb-1">Qualifikationen</p>
                <p className="text-slate-600 text-sm">B.Sc. Nursing Science (Soziologie), GKP & Kinderkrankenpfleger</p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider text-xs">Schwerpunkte & Erfahrung</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38B481] shrink-0 mt-2"></div>
                    <span>Leitung & Umsetzung großer Förderprojekte (ESF)</span>
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38B481] shrink-0 mt-2"></div>
                    <span>Agiles Projektmanagement & Koordination</span>
                  </li>
                  <li className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#38B481] shrink-0 mt-2"></div>
                    <span>Partizipatives E-Learning & Weiterentwicklung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
