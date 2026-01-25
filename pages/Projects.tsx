
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2589D8] rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-[#2589D8] font-bold mb-6 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Zurück zur Übersicht
          </Link>
          <h1 className="text-5xl font-black mb-6">Großprojekte & <span className="text-[#2589D8]">Strukturen</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Komplexe Vorhaben benötigen nicht nur Planung, sondern auch Verständnis für die Menschen, die sie umsetzen müssen. Wir verbinden Projektmanagement mit pflegerischer Expertise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Wir übernehmen Verantwortung.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Großprojekte in der Pflege – sei es die Einführung neuer Pflegemodelle, umfassende Digitalisierungsvorhaben oder die Umstrukturierung ganzer Abteilungen – binden enorme interne Ressourcen. Oft werden Stationsleitungen oder PDLs "nebenbei" mit Projektleitungen betraut, was schnell zur Überlastung führt.
              </p>
              <p>
                Unser Ansatz: <strong>Wir entlasten Ihre Führungskräfte.</strong> Lars Arendt und Matthias Windeisen bringen jahrelange Erfahrung in der Steuerung komplexer Förderprojekte (z.B. ESF) und interdisziplinärer Teams mit.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2589D8]/20 flex items-center justify-center text-[#2589D8] mt-1 shrink-0">✓</div>
                  <span>Professionelles Projektmanagement nach agilen Methoden</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2589D8]/20 flex items-center justify-center text-[#2589D8] mt-1 shrink-0">✓</div>
                  <span>Klare Kommunikation und Stakeholder-Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2589D8]/20 flex items-center justify-center text-[#2589D8] mt-1 shrink-0">✓</div>
                  <span>Sicherung der Nachhaltigkeit über das Projektende hinaus</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <h3 className="font-bold text-slate-900 mb-2">Pflegetag 2025: Posterwettbewerb</h3>
              <p className="text-slate-500 text-sm mb-3">Wir sind mit zwei innovativen Postern dabei:</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2589D8]"></div>
                  3D-Druck in der Pflege
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2589D8]"></div>
                  APN Psych-Med
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <h3 className="font-bold text-slate-900 mb-2">Pflegetag 2024</h3>
              <p className="text-slate-500 text-sm">Lust auf Hackathon? Unser Poster aus 2024 zum Thema innovative Arbeitsmethoden.</p>
            </div>
            <div className="bg-[#2589D8] rounded-2xl p-8 text-white text-center">
              <h3 className="font-bold text-xl mb-2">Brauchen Sie Unterstützung?</h3>
              <p className="opacity-90 mb-4">Lassen Sie uns über Ihr Vorhaben sprechen.</p>
              <button className="bg-white text-[#2589D8] px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition">Kontakt aufnehmen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
