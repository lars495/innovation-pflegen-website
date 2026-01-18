
import React from 'react';
import { Link } from 'react-router-dom';

const LearningAI: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-indigo-300 font-bold mb-8 hover:text-white transition-colors">
            ← Zurück zur Startseite
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Dein Wissen. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dein Tempo.</span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Vergiss trockene Schulungen im Keller. Mit KI wird Lernen persönlich, interaktiv und direkt anwendbar. Hol dir die Kompetenzhoheit zurück.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">KI ist dein persönlicher Tutor.</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                In der Pflege ändert sich Wissen ständig. Wer hat Zeit, dicke Bücher zu wälzen? Wir zeigen dir, wie du Sprachmodelle (wie ChatGPT) nutzt, um:
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3 bg-indigo-50 p-4 rounded-xl">
                  <span className="text-2xl">💊</span>
                  <span><strong>Medikamente checken:</strong> "Erklär mir die Nebenwirkungen von X in einfacher Sprache für meinen Patienten."</span>
                </li>
                <li className="flex items-start gap-3 bg-purple-50 p-4 rounded-xl">
                  <span className="text-2xl">🗣️</span>
                  <span><strong>Kommunikation üben:</strong> Simuliere ein schwieriges Angehörigengespräch und hol dir Feedback.</span>
                </li>
                <li className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl">
                  <span className="text-2xl">📝</span>
                  <span><strong>Berichte formulieren:</strong> "Formuliere diesen Pflegebericht professioneller."</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 shadow-xl">
             <div className="bg-white p-6 rounded-2xl shadow-sm mb-4">
               <p className="text-xs font-bold text-slate-400 uppercase mb-2">Prompt Beispiel</p>
               <p className="font-mono text-sm text-slate-700">"Ich bin Pflegefachkraft. Erkläre mir die Pathophysiologie von Diabetes Typ 2 so, dass ich es einem 10-jährigen Kind erklären kann, das gerade diagnostiziert wurde."</p>
             </div>
             <div className="flex justify-center my-4 text-slate-300">⬇️</div>
             <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg">
               <p className="text-sm italic">"Klar! Stell dir vor, dein Körper ist wie ein Haus, und Zucker ist der Besuch, der rein will..."</p>
               <div className="mt-4 pt-4 border-t border-indigo-500/50 flex items-center justify-between">
                 <span className="text-xs font-bold uppercase tracking-wider">Ergebnis in Sekunden</span>
                 <span className="text-2xl">⚡</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningAI;
