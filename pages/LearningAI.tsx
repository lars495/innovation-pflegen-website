
import React from 'react';
import { Link } from 'react-router-dom';

const LearningAI: React.FC = () => {
  const offerings = [
    {
      title: "Hackathons in der Pflege",
      description: "An einem Tag lösen motivierte Pflegende Probleme, an denen Stabsstellen Monate und Jahre sitzen. Hackathons bieten den perfekten Rahmen für kreative Lösungen und selbstbestimmtes Arbeiten.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      colorClass: "from-indigo-500 to-purple-600",
      features: [
        "Kreative Problemlösung im Team",
        "Praxisnahe Lösungen für echte Herausforderungen",
        "Empowerment durch selbstbestimmtes Arbeiten"
      ],
      cta: "Mehr über Hackathons",
      ctaLink: "https://hackathons.innovation-pflegen.de"
    },
    {
      title: "Partizipatives E-Learning mit eDoer",
      description: "Pflegende kreieren ihr eigenes E-Learning. Mit KI und Smartphones ist das einfacher als man denkt – praxisnah und direkt auf den Wohnbereich zugeschnitten.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      colorClass: "from-[#38B481] to-emerald-600",
      features: [
        "Lerninhalte dort erstellen, wo sie gebraucht werden",
        "KI-gestützte Content-Erstellung",
        "Wissenstransfer direkt vor Ort"
      ],
      cta: "E-Learning entdecken",
      ctaLink: "https://edoer.innovation-pflegen.de"
    },
    {
      title: "KI-Kompetenzen in der Pflege",
      description: "Damit Pflegekräfte nicht nur Ausgelieferte der Technik sind, müssen sie KI jetzt kennenlernen, Scheu ablegen und selbst sinnvolle Anwendungen für den Alltag erdenken.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      colorClass: "from-orange-400 to-pink-500",
      features: [
        "Die technische Revolution aktiv mitgestalten",
        "Praktische KI-Anwendungen für den Pflegealltag",
        "Kompetenzaufbau statt Technik-Angst"
      ],
      cta: "KI-Kompetenzen aufbauen",
      ctaLink: "https://ki-kompetenzen.innovation-pflegen.de"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-indigo-300 font-bold mb-8 hover:text-white transition-colors">
            ← Zurück zur Startseite
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Dein Wissen. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dein Tempo.</span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Vergiss trockene Schulungen im Keller. Mit KI wird Lernen persönlich, interaktiv und direkt anwendbar. Hol dir die Kompetenzhoheit zurück.
            </p>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${offering.colorClass} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                {offering.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-slate-900 mb-4">{offering.title}</h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {offering.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {offering.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={offering.ctaLink}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${offering.colorClass} text-white rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg`}
              >
                <span>{offering.cta}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Lass uns gemeinsam die Zukunft der Pflege gestalten. Kontaktiere uns für ein unverbindliches Gespräch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <span>Jetzt Kontakt aufnehmen</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearningAI;
