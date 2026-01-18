
import React from 'react';
import { Link } from 'react-router-dom';

const CompetencePage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-gradient-to-t from-[#2589D8]/20 to-transparent blur-3xl -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center text-slate-400 font-bold mb-6 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Zurück zur Übersicht
          </Link>
          <h1 className="text-5xl font-black mb-6">Kompetenzen <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2589D8] to-[#38B481]">stärken</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Personalentwicklung ist mehr als das jährliche Pflichtseminar. Wir befähigen Menschen, in komplexen Situationen sicher zu handeln.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-slate mx-auto">
          <p className="lead text-2xl font-medium text-slate-900 mb-12">
            Technologie und Prozesse ändern sich rasant. Doch Schritt halten kann eine Organisation nur, wenn ihre Menschen mitwachsen. Wir setzen auf Empowerment statt Belehrung.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Handlungskompetenz</h3>
              <p className="text-slate-600 text-base">Wissen ist gut, Können ist besser. Unsere Schulungen simulieren reale Situationen, um Sicherheit im Handeln zu geben.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Psychologische Sicherheit</h3>
              <p className="text-slate-600 text-base">Lernen funktioniert nur ohne Angst. Wir schaffen Räume, in denen Fehler besprochen werden dürfen, um daraus zu lernen.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Unser didaktischer Ansatz</h3>
          <p>
            Als Pflegewissenschaftler wissen wir: Erwachsene lernen anders. Sie brauchen Anknüpfungspunkte an ihre Erfahrung. Deshalb arbeiten wir:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li><strong>Fallbasiert:</strong> Wir arbeiten mit echten anonymisierten Fällen aus Ihrem Alltag.</li>
            <li><strong>Partizipativ:</strong> Die Lernenden bringen ihre Expertise ein und entwickeln Lösungen mit.</li>
            <li><strong>Nachhaltig:</strong> Wir bieten Follow-ups und Transfer-Coachings an, damit das Neue nicht im Alltag untergeht.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetencePage;
