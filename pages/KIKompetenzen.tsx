
import React from 'react';
import { Link } from 'react-router-dom';

const KIKompetenzen: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-orange-600 to-pink-600 text-white py-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/learning-ai" className="inline-flex items-center text-orange-200 font-bold mb-8 hover:text-white transition-colors">
                        ← Zurück zu Lernen & KI
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            KI-Kompetenzen <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">in der Pflege</span>
                        </h1>
                        <p className="text-xl text-orange-100 leading-relaxed">
                            Damit Pflegekräfte nicht nur Ausgelieferte der Technik sind, müssen sie KI jetzt kennenlernen, Scheu ablegen und selbst sinnvolle Anwendungen für den Alltag erdenken.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Die technische Revolution aktiv mitgestalten</h2>
                        <div className="space-y-6 text-lg text-slate-600">
                            <p>
                                Künstliche Intelligenz verändert die Pflege fundamental. Doch zu oft werden Pflegekräfte zu passiven Empfängern von Technologie gemacht, die andere für sie entwickelt haben.
                            </p>
                            <p>
                                Wir drehen das um: Pflegende sollen KI verstehen, nutzen und mitgestalten können. Nur so entsteht Technologie, die wirklich hilft statt zu behindern.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-[3rem] border border-orange-100 shadow-xl">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Warum KI-Kompetenzen?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">Selbstbestimmung statt Technik-Abhängigkeit</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">Praxisnahe Anwendungen entwickeln</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-700">Zukunftssicherheit für den Beruf</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Use Cases */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Praktische KI-Anwendungen im Pflegealltag</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl mb-4">💊</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Medikamenten-Check</h3>
                            <p className="text-slate-600">
                                "Erkläre mir die Nebenwirkungen von Medikament X in einfacher Sprache für meinen Patienten."
                            </p>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl mb-4">🗣️</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Kommunikation üben</h3>
                            <p className="text-slate-600">
                                Simuliere schwierige Angehörigengespräche und erhalte direktes Feedback zur Verbesserung.
                            </p>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl mb-4">📝</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Dokumentation</h3>
                            <p className="text-slate-600">
                                "Formuliere diesen Pflegebericht professioneller und strukturierter."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Approach */}
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white">
                    <h2 className="text-3xl font-bold mb-8 text-center">Unser Ansatz</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Hands-on Workshops</h3>
                            <p className="text-slate-300">
                                Keine theoretischen Vorträge, sondern praktisches Ausprobieren. Wir arbeiten mit echten KI-Tools an echten Pflegeszenarien.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Peer Learning</h3>
                            <p className="text-slate-300">
                                Pflegende lernen von Pflegenden. Wir schaffen Räume zum Austausch und zur gemeinsamen Entwicklung von Lösungen.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Ethik & Datenschutz</h3>
                            <p className="text-slate-300">
                                KI in der Pflege braucht klare ethische Leitplanken. Wir vermitteln nicht nur Technik, sondern auch kritisches Denken.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-pink-400 mb-4">Kontinuierliche Begleitung</h3>
                            <p className="text-slate-300">
                                Nach dem Workshop geht es weiter: Wir begleiten Teams bei der Implementierung und Weiterentwicklung ihrer KI-Anwendungen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black text-slate-900 mb-6">
                        Bereit, KI-Kompetenzen aufzubauen?
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Kontaktiere uns für ein unverbindliches Gespräch über KI-Workshops und Schulungen für dein Team.
                    </p>
                    <a
                        href="mailto:lars@innovation-pflegen.de"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                        <span>Jetzt Kontakt aufnehmen</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default KIKompetenzen;
