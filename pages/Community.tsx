
import React from 'react';
import { Link } from 'react-router-dom';

const Community: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-r from-orange-500 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center text-white/80 font-bold mb-8 hover:text-white transition-colors bg-white/10 px-4 py-1 rounded-full">
            ← Zurück
          </Link>
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter transform -rotate-2">
            MAKE CARE <br /> FUN AGAIN!
          </h1>
          <p className="text-2xl text-white/90 font-medium max-w-2xl mx-auto mt-6">
            Innovation muss nicht nach Desinfektionsmittel riechen. Wir bringen Farbe, Pizza und Energie in die Pflege.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-orange-300 transition-colors shadow-xl">
            <div className="text-6xl mb-6">🍕 + 💻 + 🏥</div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Care-Hackathons</h2>
            <p className="text-slate-600 text-lg mb-6">
              48 Stunden. Ein Haufen motivierter Leute (Pflegende, Coder, Designer). Ein Ziel: Lösungen bauen, die sofort helfen.
            </p>
            <ul className="text-slate-600 space-y-2 mb-8">
              <li>✓ Keine Hierarchien</li>
              <li>✓ Kostenlose Verpflegung</li>
              <li>✓ Echte Ergebnisse</li>
            </ul>
            <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition">
              Nächsten Termin checken
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Warum Community wichtig ist</h2>
            <p className="text-lg text-slate-600 mb-6">
              Pflege kann einsam machen, wenn man immer nur kämpft. In unserer Community triffst du Menschen, die nicht jammern, sondern machen.
            </p>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <p className="font-bold text-orange-800 italic">
                "Ich dachte immer, ich bin alleine mit meinen Ideen. Hier habe ich mein Tribe gefunden."
              </p>
              <p className="text-sm text-orange-600 mt-2">– Eine Teilnehmerin aus Berlin</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-slate-50 rounded-[3rem] p-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Mach mit!</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Egal ob du eine Idee hast, programmieren kannst oder einfach nur wissen willst, wie die Pflege von morgen aussieht.
          </p>
          <div className="text-4xl">🍌</div>
        </div>
      </div>
    </div>
  );
};

export default Community;
