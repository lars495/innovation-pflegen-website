
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
      title: "Hackathons",
      frontDescription: "Der Einstieg in das selbstbestimmte Arbeiten und Lernen.",
      backDescription: "An einem Tag lösen motivierte Pflegende Probleme, an denen Stabsstellen Monate und Jahre sitzen. Hackathons bieten den perfekten Rahmen für kreative Lösungen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-indigo-500 to-purple-600",
      path: "/participation"
    },
    {
      title: "Coaching in der Pflege",
      frontDescription: "Erfahrung sichern und junge Pflegende beim Start unterstützen.",
      backDescription: "Wir qualifizieren erfahrene Fachkräfte zu Coaches, die junge Pflegende begleiten. So bleibt wertvolles Wissen erhalten und es entstehen neue berufliche Perspektiven.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-[#2589D8] to-cyan-500",
      path: "/career"
    },
    {
      title: "Selbstbestimmtes E-Learning",
      frontDescription: "Lerninhalte dort erstellen, wo sie gebraucht werden: vor Ort.",
      backDescription: "Pflegende kreieren ihr eigenes E-Learning. Mit KI und Smartphones ist das einfacher als man denkt – praxisnah und direkt auf den Wohnbereich zugeschnitten.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-[#38B481] to-emerald-600",
      path: "/e-learning"
    },
    {
      title: "KI in der Pflege",
      frontDescription: "Die technische Revolution aktiv mitgestalten.",
      backDescription: "Damit Pflegekräfte nicht nur Ausgelieferte der Technik sind, müssen sie KI jetzt kennenlernen, Scheu ablegen und selbst sinnvolle Anwendungen für den Alltag erdenken.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-orange-400 to-pink-500",
      path: "/learning-ai"
    },
    {
      title: "PeBeM",
      frontDescription: "Personalbemessung als Chance für die Zukunft.",
      backDescription: "Wir unterstützen Betriebsräte und MAVen dabei, PeBeM aktiv zu gestalten und Kolleg*innen vor gefährlichen strategischen Fehlentscheidungen zu schützen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-blue-500 to-indigo-600",
      path: "/participation"
    },
    {
      title: "Personalentwicklung im Team",
      frontDescription: "Machtverhältnisse umkehren und echte Bedürfnisse fokussieren.",
      backDescription: "Teams erarbeiten eigene Konzepte zur Fortbildung. Es werden Talente vor Ort genutzt, um sich gegenseitig zu stärken, statt an den Bedürfnissen vorbeizuplanen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      colorClass: "bg-gradient-to-br from-teal-400 to-[#38B481]",
      path: "/competence"
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
