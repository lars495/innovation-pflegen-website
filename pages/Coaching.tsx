
import React from 'react';
import { Link } from 'react-router-dom';

const Coaching: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-indigo-200 font-bold mb-8 hover:text-white transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Pflegende <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">coachen Pflegende</span>
                        </h1>
                        <p className="text-xl text-indigo-100 leading-relaxed font-bold mb-4">
                            Erfahrungswissen sichern – Neue Kollegen stärken – Pflege nachhaltig entlasten
                        </p>
                        <p className="text-lg text-indigo-100/80 leading-relaxed max-w-2xl">
                            Ein Drittel aller Pflegekräfte geht bald in den Ruhestand. Wir sichern ihr wertvolles Erfahrungswissen und qualifizieren sie zu Coaches für die nächste Generation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* The Challenge */}
                <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl mb-20">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Hintergrund: Die drohende Wissenslücke</h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                In den kommenden Jahren wird etwa ein Drittel aller Pflegekräfte in den Ruhestand gehen. Mit ihnen droht nicht nur fachliche Expertise zu verschwinden, sondern auch unersetzliches <strong>Erfahrungswissen</strong>: praktische Routinen, Teamkompetenz und das „institutionelle Gedächtnis“.
                            </p>
                            <div className="flex gap-4 items-start p-4 bg-red-50 rounded-xl border border-red-100">
                                <span className="text-2xl">⚠️</span>
                                <p className="text-sm md:text-base">
                                    Diese Lücke kann durch junge Mitarbeitende und internationale Fachkräfte allein nicht aufgefangen werden. Ohne planvollen Umgang drohen erhöhter Arbeitsdruck, Fluktuation und Qualitätsverlust in der Versorgung.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Solution */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-4xl font-black text-slate-900 mb-8">Die Idee: <br /><span className="text-[#2589D8]">Eine neue Rolle in der Pflege</span></h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Viele erfahrene Pflegende suchen nach Möglichkeiten, ihr Wissen auch über den Renteneintritt hinaus sinnvoll einzubringen. Mit „Pflegende coachen Pflegende“ nutzen wir dieses Potenzial.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 text-xl font-bold">1</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Qualifizierung zu Pflegecoaches</h3>
                                    <p className="text-slate-600">Erfahrene Pflegekräfte – insbesondere über 50 – werden speziell qualifiziert, um ihr Wissen weiterzugeben.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 text-xl font-bold">2</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Praxisnahe Begleitung</h3>
                                    <p className="text-slate-600">Sie begleiten neue Kollegen, Rückkehrer und internationale Fachkräfte direkt im Berufsalltag – kollegial und wertschätzend.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 text-xl font-bold">3</div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Intergenerationale Stärke</h3>
                                    <p className="text-slate-600">Das stärkt die Zusammenarbeit der Generationen und fördert die Wertschätzung älterer Mitarbeitender.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h3 className="text-2xl font-bold mb-8 relative z-10">Ziele des Projekts</h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Erprobung einer neuen Rolle:</strong> Wissenschaftliche Begleitung des "Pflegecoach"-Profils.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Qualifizierung:</strong> Weiterbildung erfahrener Pflegender zu kompetenten Coaches.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Bessere Einarbeitungskultur:</strong> Reduktion von Fluktuation und Leiharbeit durch gute Integration.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Empowerment:</strong> Unterstützung internationaler Fachkräfte bei Rechten, Pflichten und Mitwirkung.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Interesse am Projekt?</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Sie sind eine Einrichtung, die ihre Einarbeitungskultur verbessern möchte? Oder eine erfahrene Pflegekraft mit Lust auf Weiterentwicklung?
                        </p>
                        <a
                            href="mailto:lars@innovation-pflegen.de"
                            className="inline-flex items-center gap-2 bg-[#2589D8] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1e70b3] transition hover:scale-105 shadow-xl shadow-blue-900/20"
                        >
                            <span>Kontakt aufnehmen</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Coaching;
