
import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
    {
        title: "Digitales Skill-Management",
        client: "Universitätsklinikum Beispiel",
        description: "Einführung eines KI-gestützten Systems zur Erfassung und Planung von Pflegekompetenzen für 1.200 Mitarbeiter.",
        impact: "30% weniger Planungsaufwand, höhere Mitarbeiterzufriedenheit durch Transparenz.",
        tags: ["KI", "Personalentwicklung", "Digitalisierung"]
    },
    {
        title: "Agiler Stationsalltag 2.0",
        client: "Haus Waldfrieden (Altenhilfe)",
        description: "Implementierung von agilen Methoden (Scrum/Kanban) in der täglichen Pflegeorganisation zur Entlastung der Fachkräfte.",
        impact: "Reduktion der Überstunden um 15%, verbesserte Kommunikation im Team.",
        tags: ["Agilität", "Change Management"]
    },
    {
        title: "E-Learning Revolution",
        client: "Pflegeakademie Nord",
        description: "Entwicklung einer partizipativen Lernplattform, auf der Pflegekräfte eigene Lerninhalte für Kollegen erstellen können.",
        impact: "Verdopplung der Kurs-Abschlussquoten durch praxisnahe Inhalte.",
        tags: ["Lernen", "Partizipation"]
    }
];

const References: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-300 font-bold mb-8 hover:text-white transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Erfolgsgeschichten <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2589D8] to-[#38B481]">aus der Praxis</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Wir lassen Taten sprechen. Hier sehen Sie Auszüge aus Projekten, in denen wir gemeinsam mit Pflegeeinrichtungen echte Veränderungen bewirkt haben.
                        </p>
                    </div>
                </div>
            </div>

            {/* Case Studies */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="space-y-20">
                    {caseStudies.map((study, i) => (
                        <div key={i} className="group grid lg:grid-cols-2 gap-12 items-center">
                            <div className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="flex gap-2 mb-6">
                                    {study.tags.map((tag, j) => (
                                        <span key={j} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">{study.title}</h2>
                                <h4 className="text-xl font-bold text-[#2589D8] mb-6">{study.client}</h4>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {study.description}
                                </p>
                                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#38B481]">
                                    <p className="font-bold text-slate-900 mb-2">Impact:</p>
                                    <p className="text-slate-600">{study.impact}</p>
                                </div>
                            </div>
                            <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="aspect-video bg-slate-100 rounded-[3rem] overflow-hidden relative group-hover:shadow-2xl transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2589D8]/20 to-[#38B481]/20 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-2xl uppercase tracking-widest">
                                        Projekt-Visualisierung
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 text-center bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2589D8]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-6">Schreiben wir Ihre Geschichte?</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                            Jede Einrichtung ist individuell. Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre Herausforderungen gemeinsam angehen.
                        </p>
                        <button className="bg-gradient-to-r from-[#2589D8] to-[#38B481] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-blue-500/20">
                            Jetzt Potenzial-Gespräch buchen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default References;
