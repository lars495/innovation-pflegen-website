
import React from 'react';
import { Link } from 'react-router-dom';

const Career: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 text-white py-24 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#2589D8]/20 rounded-full blur-3xl -z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-300 font-bold mb-8 hover:text-white transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Gestalte die <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2589D8] to-[#38B481]">Pflege-Revolution</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Wir suchen keine Angestellten. Wir suchen Mitstreiter, Visionäre und Macher, die das Gesundheitswesen mit uns zusammen auf den Kopf stellen wollen.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                    <div>
                        <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Warum wir?</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Bei innovation-pflegen.de arbeiten wir nicht nach starren Hierarchien oder veralteten Konzepten. Wir sind ein dynamisches Team, das Agilität lebt und technologische Möglichkeiten nutzt, um echten Mehrwert in der Pflege zu schaffen.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                                <div className="text-3xl">🚀</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Impact von Tag 1</h4>
                                    <p className="text-slate-600 text-sm">Deine Ideen landen nicht in der Schublade, sondern direkt in der Praxis.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                                <div className="text-3xl">⚡</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Modernste Tools</h4>
                                    <p className="text-slate-600 text-sm">Wir arbeiten mit KI-Unterstützung und modernsten Cloud-Technologien.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                                <div className="text-3xl">🤝</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Flexibilität & Freiheit</h4>
                                    <p className="text-slate-600 text-sm">Work-Life-Balance ist für uns kein Buzzword, sondern gelebte Realität.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-tr from-[#2589D8] to-[#38B481] rounded-[3rem] p-1 absolute inset-0 transform rotate-2"></div>
                        <div className="bg-white rounded-[3rem] p-12 relative z-10 shadow-2xl">
                            <h3 className="text-3xl font-black text-slate-900 mb-6">Wen wir suchen</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold leading-none">✓</div>
                                    <span className="text-slate-700 font-medium">Pflege-Enthusiasten mit der richtigen Haltung</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold leading-none">✓</div>
                                    <span className="text-slate-700 font-medium">Full-Stack Entwickler mit Herz für Social Tech</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold leading-none">✓</div>
                                    <span className="text-slate-700 font-medium">Kreative Köpfe für Projektkoordination</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold leading-none">✓</div>
                                    <span className="text-slate-700 font-medium">Jeder, der die Pflege positiv beeinflussen und verändern will</span>
                                </li>
                            </ul>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                <p className="text-slate-500 text-sm mb-4">Interessiert? Schreib uns einfach ganz unkompliziert.</p>
                                <a href="mailto:lars@innovation-pflegen.de" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                                    Initialbewerbung senden
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
