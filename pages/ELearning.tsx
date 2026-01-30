
import React from 'react';
import { Link } from 'react-router-dom';

const ELearningPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-slate-400 font-bold mb-8 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Zurück zur Übersicht
          </Link>
          <div className="lg:flex gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-[#2589D8] rounded-full text-xs font-bold uppercase tracking-widest mb-4">Open Education</div>
              <h1 className="text-5xl font-black mb-6 leading-tight">Partizipatives E-Learning & <br /><span className="text-[#38B481]">Hackathons</span></h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Wir demokratisieren Wissen in der Pflege. Weg von teuren, veralteten Lehrbüchern – hin zu lebendigem, geteiltem Wissen.
              </p>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Das Problem:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-red-400 text-xl font-bold">×</span>
                    <span className="text-slate-300">Nur zwei große Verlage dominieren den Markt für Pflege-Wissen.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 text-xl font-bold">×</span>
                    <span className="text-slate-300">Inhalte sind oft generisch und fernab der Praxisrealität.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 text-xl font-bold">×</span>
                    <span className="text-slate-300">Niedriger Akademisierungsgrad bremst Innovation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Unsere Antwort: OER & OEP</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#2589D8] mb-4">Open Educational Resources (OER)</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Wir fördern freie Bildungsmaterialien. Wissen darf keine Paywall haben, besonders nicht im Gesundheitswesen. Wir erstellen und kuratieren Inhalte, die von allen genutzt, verändert und verbessert werden dürfen.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <p className="font-bold text-slate-800">Der Vorteil:</p>
                <p className="text-slate-600">Materialien sind immer aktuell und genau auf die Bedürfnisse angepasst, statt auf den Druckzyklus eines Buches zu warten.</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#38B481] mb-4">Open Educational Practices (OEP)</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Lernen ist ein sozialer Prozess. Wir nutzen Hackathons und Workshops, um Pflegende, Experten und Entwickler zusammenzubringen.
              </p>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <p className="font-bold text-slate-800">Der Vorteil:</p>
                <p className="text-slate-600">Pflegende werden von Konsumenten zu Produzenten von Wissen. Das stärkt das professionelle Selbstverständnis massiv.</p>
              </div>
            </div>
          </div>
        </div>

        {/* eDoer Partnership Section */}
        <div className="mb-24 bg-gradient-to-r from-slate-50 to-blue-50 rounded-[2.5rem] p-12 border border-blue-100 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Technologie, die begeistert.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Für moderne Lernformate braucht es mehr als nur PDFs. Wir setzen auf <span className="font-bold text-[#2589D8]">eDoer</span> – den Experten für künstliche Intelligenz und adaptives Lernen.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mit der eDoer-Plattform erstellen wir gemeinsam mit Pflegenden interaktive Kurse, die sich automatisch an das Vorwissen anpassen.
            </p>
            <a
              href="https://www.edoer.org/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2589D8] font-bold text-lg hover:underline underline-offset-4 group"
            >
              eDoer entdecken
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-64 bg-white rounded-3xl shadow-lg flex items-center justify-center p-8">
              {/* Fallback Icon / Logo Placeholder if no image available */}
              <div className="text-center">
                <div className="text-5xl font-black text-slate-200 mb-2">eDoer</div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">AI Learning Platform</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Lust auf einen Pflege-Hackathon?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Bringen Sie Ihr Team zusammen, um in 48 Stunden Lösungen für echte Probleme Ihrer Einrichtung zu entwickeln – begleitet von uns.
            </p>
            <button className="bg-[#38B481] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2da070] transition hover:scale-105 shadow-xl shadow-green-900/20">
              Hackathon anfragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELearningPage;
