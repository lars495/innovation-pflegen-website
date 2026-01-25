
import React from 'react';
import { Link } from 'react-router-dom';

const Participation: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-br from-emerald-900 to-green-800 text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-emerald-300 font-bold mb-8 hover:text-white transition-colors">
            ← Zurück zur Startseite
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Echte Beteiligung. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Von unten nach oben.</span>
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Veränderungen scheitern oft, weil sie am Schreibtisch geplant und der Station "übergestülpt" werden. Wir drehen das Prinzip um.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl mb-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-6">PeBeM in der Mitarbeitervertretung</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Die neue Personalbemessung für die Langzeitpflege ist hier und nur wenige Unternehmen haben sich auf den Weg in eine gute Richtung begeben. Mitarbeitervertretungen müssen vielerorts zusehen, wie teure Berater zur Funktionspflege aufrufen und PeBeM zu einem Rechenbeispiel verkommen lassen.
              </p>
              <p>
                Betriebsräte und Mitarbeitervertretungen sind jetzt gefragt, um ihre Kolleg*innen vor gefährlichen strategischen Entscheidungen zu schützen und sich aktiv in die Gestaltung der Zukunft des Betriebs einzumischen. Kluge Geschäftsleitungen werden erkennen, dass sie nur gemeinsam mit einem starken BR/MAV und einer starken Belegschaft den künftigen Herausforderungen gerecht werden können.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Expertise der Basis nutzen.</h2>
            <p className="text-lg text-slate-600 mb-6">
              Niemand kennt die Abläufe besser als die Menschen, die jeden Tag am Patienten arbeiten. Partizipation heißt für uns nicht "ihr dürft mal eure Meinung sagen", sondern "ihr entscheidet mit".
            </p>

            <h3 className="text-xl font-bold text-emerald-700 mt-8 mb-4">Unsere Methoden:</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition">
                <div className="text-2xl">🗳️</div>
                <div>
                  <h4 className="font-bold">Liquid Democracy Ansätze</h4>
                  <p className="text-slate-500 text-sm">Entscheidungen im Team abstimmen, transparent und fair.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition">
                <div className="text-2xl">🎨</div>
                <div>
                  <h4 className="font-bold">Design Thinking</h4>
                  <p className="text-slate-500 text-sm">Probleme kreativ lösen. Wir basteln Prototypen aus Pappe und Lego, bevor wir teure Technik kaufen.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:shadow-md transition">
                <div className="text-2xl">🔄</div>
                <div>
                  <h4 className="font-bold">Feedback-Loops</h4>
                  <p className="text-slate-500 text-sm">Schnell testen, schnell scheitern, schnell verbessern. Keine Angst vor Fehlern.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full blur-3xl -z-0 opacity-50"></div>
            <h3 className="text-2xl font-black text-slate-800 mb-6 relative z-10">"Das haben wir schon immer so gemacht."</h3>
            <div className="bg-white p-6 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm shadow-lg mb-4 relative z-10 transform -rotate-1 border-l-4 border-red-400">
              <p className="text-lg font-medium text-slate-700">Der Satz ist verboten.</p>
            </div>
            <div className="bg-emerald-600 text-white p-6 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm shadow-lg relative z-10 transform rotate-1">
              <p className="text-lg font-medium">"Wie würden wir es machen, wenn wir heute neu anfangen?"</p>
            </div>
            <p className="mt-8 text-slate-500 text-sm text-center relative z-10">
              Wir moderieren diesen Kulturwandel. <br />Wertschätzend, aber radikal ehrlich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participation;
