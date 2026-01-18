
import React from 'react';
import { Link } from 'react-router-dom';

const SoftwareAI: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-br from-cyan-900 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-cyan-300 font-bold mb-8 hover:text-white transition-colors">
            ← Zurück zur Startseite
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Bau dir deine <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Tools selbst.</span>
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Du kennst das Problem. Du kennst die Lösung. Warum warten, bis eine Softwarefirma es (falsch) baut?
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Empowerment durch Code (ohne Coden)</h2>
          <p className="text-lg text-slate-600">
            Dank moderner KI-Assistenten (wie Cursor, Replit oder Claude) kannst du Software in natürlicher Sprache beschreiben und bauen lassen. Das nennt sich "No-Code" oder "Low-Code".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-3xl mb-6">💡</div>
            <h3 className="text-xl font-bold mb-3">1. Die Idee</h3>
            <p className="text-slate-600">"Ich brauche eine einfache Liste für den Wundverbandswechsel, die automatisch das Datum für den nächsten Wechsel berechnet."</p>
          </div>
          
          <div className="bg-slate-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🤖</div>
            <h3 className="text-xl font-bold mb-3">2. Der KI-Partner</h3>
            <p className="text-slate-600">Du beschreibst der KI genau, was du willst. Sie schreibt den Code für dich. Du sagst: "Mach den Button größer" oder "Füge ein Foto-Feld hinzu".</p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🚀</div>
            <h3 className="text-xl font-bold mb-3">3. Die Lösung</h3>
            <p className="text-slate-600">Du hast eine Web-App auf dem Stations-Tablet, die genau das tut, was DU brauchst. Keine unnötigen Klicks, keine teuren Lizenzen.</p>
          </div>
        </div>

        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Wir bringen es dir bei.</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8">
            In unseren Workshops baust du deine erste eigene Mini-App an einem Nachmittag. Erfolgserlebnis garantiert.
          </p>
          <button className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30">
            Workshop anfragen
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareAI;
