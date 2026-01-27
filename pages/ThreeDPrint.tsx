import React from 'react';
import { Link } from 'react-router-dom';

const ThreeDPrint: React.FC = () => {
    const steps = [
        {
            num: 1,
            title: "Problem im Alltag gemeinsam erkennen",
            description: "Der erste Schritt ist die Identifikation von Herausforderungen im Pflegetag direkt vor Ort.",
            icon: "🏥"
        },
        {
            num: 2,
            title: "Idee für ein Hilfsmittel oder Ersatzteil entwickeln",
            description: "Wir entwickeln kreative Lösungen, die genau da ansetzen, wo Hilfe benötigt wird.",
            icon: "💡"
        },
        {
            num: 3,
            title: "Vorlage für 3D Modell finden oder selbst entwerfen",
            description: "Ob Open Source oder Individualanfertigung – wir bringen die Idee in den Computer.",
            icon: "💻"
        },
        {
            num: 4,
            title: "Prototyp drucken",
            description: "Innerhalb weniger Stunden wird aus der digitalen Vorlage ein greifbares Hilfsmittel.",
            icon: "🖨️"
        },
        {
            num: 5,
            title: "Gemeinsam testen",
            description: "Die Lösung wird direkt in der Praxis auf Herz und Nieren geprüft und bei Bedarf angepasst.",
            icon: "🧪"
        },
        {
            num: 6,
            title: "Über Lösung freuen",
            description: "Mehr Selbstbestimmung und weniger Belastung durch maßgeschneiderte Unterstützung.",
            icon: "🎉"
        }
    ];

    const benefits = [
        "Hohe Passgenauigkeit bei niedrigen Kosten",
        "Partizipation durch Pflegende, Angehörige & Pflegebedürftige",
        "Empowerment, aktive Gestaltung & Kreativität",
        "Individuelle, praxistaugliche & angepasste Lösungen"
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 text-white py-24 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#2589D8]/20 rounded-full blur-3xl -z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        3D Druck in der <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2589D8] to-[#38B481]">Pflege-Revolution</span>
                    </h1>
                    <p className="text-2xl font-medium text-slate-300 mb-8">
                        Individuelle Lösungen für mehr Lebensqualität und Entlastung im Pflegealltag
                    </p>
                    <div className="text-slate-400 font-medium">
                        Christopher Beetz, Lars Arendt & Matthias Windeisen
                    </div>
                </div>
            </div>


            {/* Ablauf Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h2 className="text-4xl font-black text-slate-900 mb-16 text-center tracking-tight">Der Ablauf</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.num} className="bg-white p-8 rounded-[2.5rem] shadow-xl hover:scale-105 transition-transform border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[2.5rem] -z-0 group-hover:bg-indigo-50 transition-colors"></div>
                            <div className="relative z-10">
                                <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold mb-6 text-sm">
                                    Schritt {step.num}
                                </span>
                                <div className="text-4xl mb-6">{step.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vorteile & Action Section */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Deine Vorteile</h2>
                            <div className="space-y-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-center">
                                        <div className="w-8 h-8 rounded-full bg-[#38B481] flex items-center justify-center text-white font-bold">
                                            ✓
                                        </div>
                                        <p className="text-lg font-bold text-slate-800">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-tr from-[#2589D8] to-[#38B481] rounded-[3rem] p-1 absolute inset-0 transform -rotate-2"></div>
                            <div className="bg-slate-900 rounded-[3rem] p-12 relative z-10 shadow-2xl text-white">
                                <h3 className="text-3xl font-black mb-6">Deine Ideen für <br /> 3D-Druck in der Pflege?</h3>
                                <p className="text-slate-300 text-lg mb-8">
                                    Hast du eine Idee oder möchtest du 3D-Druck in deiner Einrichtung ausprobieren? Wir unterstützen dich dabei!
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 text-sm text-slate-400">
                                        <div className="text-2xl">🏫</div>
                                        <p>Kooperationen mit Schulen, Makerspaces & Hochschulen aufbauen</p>
                                    </div>
                                    <div className="flex items-start gap-4 text-sm text-slate-400">
                                        <div className="text-2xl">🛒</div>
                                        <p>Eigenen 3D-Drucker kaufen (ab 200€) und Vorlagen nutzen</p>
                                    </div>
                                </div>
                                <div className="mt-12 text-center">
                                    <a href="mailto:lars@innovation-pflegen.de" className="inline-block bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform text-lg shadow-xl">
                                        Kontakt aufnehmen
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Quote */}
            <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                <div className="bg-yellow-50 p-12 rounded-[3.5rem] border-2 border-yellow-100 relative">
                    <div className="text-6xl absolute -top-10 left-1/2 -translate-x-1/2">📢</div>
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                        "Pflege verändert sich, wenn wir mitgestalten."
                    </h4>
                    <p className="text-xl text-slate-600 font-medium">
                        Mehr Selbstbestimmung, weniger Belastung.
                    </p>
                </div>
            </div>

            <div className="text-center pb-12">
                <Link to="/" className="text-slate-400 font-bold hover:text-slate-600 transition-colors">
                    ← Zurück zur Übersicht
                </Link>
            </div>
        </div>
    );
};

export default ThreeDPrint;
