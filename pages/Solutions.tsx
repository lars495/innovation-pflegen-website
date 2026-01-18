
import React from 'react';
import { Link } from 'react-router-dom';

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#38B481] rounded-full blur-[100px] opacity-20 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-[#38B481] font-bold mb-6 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Zurück zur Übersicht
          </Link>
          <h1 className="text-5xl font-black mb-6">Lösungen <span className="text-[#38B481]">vor Ort</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Nicht immer braucht es das große Change-Management. Oft sind es die kleinen, pragmatischen Anpassungen im Alltag, die die größte Wirkung entfalten.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#38B481]/5 rounded-full blur-3xl"></div>
             <div className="relative z-10 space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-3xl shrink-0">📋</div>
                 <div>
                   <h3 className="font-bold text-slate-900 text-lg">Prozess-Analyse</h3>
                   <p className="text-slate-500">Wir begleiten eine Schicht, beobachten Laufwege und Übergaben, um Zeitfresser zu identifizieren.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-3xl shrink-0">💊</div>
                 <div>
                   <h3 className="font-bold text-slate-900 text-lg">Sicherheit erhöhen</h3>
                   <p className="text-slate-500">Implementierung einfacher Checklisten und Standards zur Medikamentensicherheit.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-3xl shrink-0">🤝</div>
                 <div>
                   <h3 className="font-bold text-slate-900 text-lg">Team-Entlastung</h3>
                   <p className="text-slate-500">Neuverteilung von Aufgaben basierend auf Kompetenzen statt reiner Hierarchie.</p>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pragmatisch & Direkt.</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Der Pflegealltag ist dicht getaktet. Wenn externe Berater mit abstrakten Modellen kommen, rollen erfahrene Pflegekräfte oft zu Recht mit den Augen. Wir machen es anders.
              </p>
              <p>
                Wir kommen direkt auf die Station, in den Wohnbereich oder zum ambulanten Dienst. Wir hören zu, schauen hin und entwickeln Lösungen, die <strong>morgen</strong> schon umgesetzt werden können.
              </p>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mt-6">
                <p className="text-[#38B481] font-medium italic">
                  "Unser Ziel ist nicht das perfekte Papierkonzept, sondern der ruhigere Dienst am nächsten Wochenende."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
