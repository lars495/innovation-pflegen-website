
import React from 'react';
import { Link } from 'react-router-dom';

interface FlipCardProps {
  title: string;
  frontDescription: string;
  backDescription: string;
  icon: React.ReactNode;
  colorClass: string;
  path: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, frontDescription, backDescription, icon, colorClass, path }) => {
  return (
    <div className="group h-[450px] perspective-[1000px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-[2.5rem]">

        {/* VORDERSEITE */}
        <div className="absolute inset-0 h-full w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
          <div className={`absolute top-0 right-0 w-24 h-24 ${colorClass} opacity-10 rounded-bl-[4rem] -z-0`}></div>

          <div className={`w-20 h-20 ${colorClass} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
            {icon}
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
          <p className="text-slate-500 font-medium leading-relaxed">
            {frontDescription}
          </p>
          <div className="mt-auto pt-6 text-slate-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
            Entdecken
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* RÜCKSEITE */}
        <div className={`absolute inset-0 h-full w-full ${colorClass} rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-2xl`}>
          <h3 className="text-2xl font-black mb-4 border-b-2 border-white/20 pb-2">{title}</h3>
          <p className="text-lg leading-relaxed font-medium text-white/90 overflow-y-auto max-h-[220px] scrollbar-hide mb-6">
            {backDescription}
          </p>

          <Link to={path} className="mt-auto w-full group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg">
            <span>Mehr erfahren</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "KI-Kompetenz & Lernen",
      frontDescription: "Schluss mit langweiligen Fortbildungen. Wir nutzen KI für smartes Lernen direkt im Alltag.",
      backDescription: "Keine Angst vor der Zukunft! Wir zeigen dir, wie du KI-Tools wie ChatGPT als deinen persönlichen Tutor nutzt. Stell Fragen, lass dir Fachbegriffe erklären oder simuliere schwierige Gespräche – alles in deinem Tempo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-indigo-500 to-purple-600",
      path: "/learning-ai"
    },
    {
      title: "Software selbst bauen",
      frontDescription: "Du brauchst kein Informatikstudium. Bau dir deine digitalen Helfer für die Station einfach selbst.",
      backDescription: "Stell dir vor, du könntest das nervige Excel-Sheet einfach in eine App verwandeln. Mit KI-Unterstützung (No-Code) können Pflegekräfte plötzlich Software bauen. Wir befähigen dich, deine eigenen Probleme digital zu lösen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-[#2589D8] to-cyan-500",
      path: "/software-ai"
    },
    {
      title: "Beteiligung & Change",
      frontDescription: "Schluss mit 'Befehl von oben'. Wir gestalten Veränderung von der Basis aus.",
      backDescription: "Du weißt am besten, was am Bett funktioniert. Wir nutzen Methoden, bei denen das Team entscheidet, wie Prozesse laufen sollen. Echte Partizipation bedeutet, dass deine Stimme zählt und Veränderungen Sinn machen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-[#38B481] to-emerald-600",
      path: "/participation"
    },
    {
      title: "Community & Spaß",
      frontDescription: "Gemeinsam tüfteln, Pizza essen und Probleme lösen. Innovation darf Spaß machen!",
      backDescription: "Komm zu unseren Hackathons! Wir bringen Pflegekräfte, Coder und Designer zusammen. In 48 Stunden entwickeln wir Prototypen für echte Probleme. Hier erlebst du Selbstwirksamkeit pur und triffst Leute, die wirklich was bewegen wollen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-orange-400 to-pink-500",
      path: "/community"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 sm:text-5xl mb-6 tracking-tight">
          Empowerment <span className="text-[#38B481]">& Action</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <p className="text-xl text-slate-700 font-medium leading-relaxed">
            Wir glauben nicht an langweilige Konzepte in Schubladen.
            <br className="hidden md:block" />
            <span className="text-[#2589D8] font-bold">Wir glauben an euch.</span> An die Menschen an der Basis.
            Wir geben euch die Tools, die Macht und den Spaß zurück, euren Arbeitsplatz selbst zu gestalten.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <FlipCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
