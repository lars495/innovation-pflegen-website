
import React from 'react';
import { Link } from 'react-router-dom';

const OffersPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 transform origin-bottom-left"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:w-2/3">
                        <div className="inline-block px-3 py-1 bg-[#38B481] rounded-full text-xs font-bold uppercase tracking-widest mb-4 text-white">Konkret & Wirksam</div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Fallarbeit statt <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2589D8] to-[#38B481]">Folien.</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                            Wir arbeiten an Ihren echten Fällen – und Sie gehen mit konkreten Ergebnissen zurück in den Alltag (Pläne, Vorlagen, Leitfäden, Prompt-Sets). Danach werden Sie nicht alleingelassen: Follow-ups sichern Umsetzung, lösen Hindernisse und verstetigen, was funktioniert.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block">
                            <p className="font-bold text-white mb-2">In jedem Paket enthalten:</p>
                            <ul className="text-slate-300 text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="text-[#38B481] font-bold">✓</span> Vorab-Fallabfrage</li>
                                <li className="flex items-center gap-2"><span className="text-[#38B481] font-bold">✓</span> Ergebnis-Dokumentation</li>
                                <li className="flex items-center gap-2"><span className="text-[#38B481] font-bold">✓</span> Follow-up 1 (7–14 Tage)</li>
                                <li className="flex items-center gap-2"><span className="text-[#38B481] font-bold">✓</span> Follow-up 2 (4–6 Wochen) (optional: E-Mail-Support)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">

                {/* Category A: Ganztägige Formate */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-[#2589D8] text-white flex items-center justify-center font-bold text-xl">A</div>
                        <h2 className="text-3xl font-black text-slate-900">Ganztägige Formate</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Projekt-Check-up */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">Projekt-Check-up: Aus Chaos wird Plan</h3>
                            <div className="text-sm font-bold text-[#2589D8] mb-4">1 Tag</div>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Wenn Projekte „irgendwie laufen“, aber keiner genau weiß wie: Wir nehmen Ihre Top-Baustellen, schneiden sie sauber zu und machen daraus einen Fahrplan, der funktioniert.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Arbeit an 3–5 echten Projekten/Fällen</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Projektauftrag (1 Seite) + Rollen + Umfang</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Fahrplan 8–12 Wochen + Meilensteine</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Risiko-/Hindernis-Plan + Kommunikationslogik</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage Projekt-Check-up" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-[#2589D8] transition-colors">
                                Schicken Sie mir 3 Projekte
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Ich sage Ihnen, was wir in 1 Tag stabilisiert bekommen.</p>
                        </div>

                        {/* Card 2: PeBeM-Umsetzungstag */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">PeBeM-Umsetzungstag: Von Zahlen zu Handeln</h3>
                            <div className="text-sm font-bold text-[#2589D8] mb-4">1 Tag</div>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                PeBeM ist nicht das Problem – die Übersetzung in Alltag, Rollen und Entscheidungen ist es. Wir bauen Ihren Umsetzungsfahrplan aus Ihren konkreten Fragen, Datenlogiken und Konfliktlinien.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Vorab: Fallabfrage (Daten/Fragen/Spannungen)</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Umsetzungsfahrplan: Reihenfolge, Rollen, Aufgaben</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Kommunikationspaket (Team/Leitung/MAV/BR)</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Optional: Verhandlungs-/Mitbestimmungsagenda</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage PeBeM-Umsetzungstag" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-[#2589D8] transition-colors">
                                Nennen Sie mir Ihre 3 größten Fragen
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Wir machen daraus einen Plan.</p>
                        </div>

                        {/* Card 3: Teamentwicklung */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">Teamentwicklung unter Druck: Arbeitsorganisation, die trägt</h3>
                            <div className="text-sm font-bold text-[#2589D8] mb-4">1 Tag</div>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Wenn Übergaben, Zuständigkeiten und Schnittstellen reiben, frisst das Energie. Wir bauen mit dem Team einfache, belastbare Absprachen, die sofort entlasten.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Arbeit an Ihren realen Reibungspunkten</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Team-Vereinbarung (konkret, kurz)</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> 3 Mikro-Standards, die nächste Woche starten</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Überprüfung: Was bleibt, was fliegt?</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage Teamentwicklung" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-[#2589D8] transition-colors">
                                Beschreiben Sie einen Stressmoment
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Daraus machen wir einen Standard.</p>
                        </div>

                        {/* Card 4: KI-Erprobungstag */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">KI in der Pflege – Erprobungstag</h3>
                            <div className="text-sm font-bold text-[#2589D8] mb-4">1 Tag</div>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Kein KI-Theorie-Seminar. Wir testen KI dort, wo sie in Ihrem Alltag wirklich hilft: Einarbeitung, Praxisanleitung, QM, Kommunikation – an Ihren Beispielen.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Praxis-Testlauf: Wirkung vs. Risiko, Priorisierung</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> getestete Prompts aus Ihren Fällen</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Mini-Leitlinie „Sicher nutzen“</li>
                                    <li className="flex gap-2"><span className="text-[#38B481] font-bold">•</span> Testplan 2–4 Wochen + Erfolgskriterien</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage KI-Erprobungstag" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-[#2589D8] transition-colors">
                                Bringen Sie 5 typische Aufgaben mit
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Wir bauen daraus 5 funktionierende Workflows.</p>
                        </div>
                    </div>
                </section>

                {/* Category B: Online-Serien */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-[#38B481] text-white flex items-center justify-center font-bold text-xl">B</div>
                        <h2 className="text-3xl font-black text-slate-900">Online-Serien</h2>
                        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">kurz, kontinuierlich, transferstark</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: PeBeM-Klartext */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">PeBeM-Klartext: Fallsprechstunde</h3>
                            <div className="text-sm font-bold text-[#38B481] mb-4">4×90 min</div>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Für alle, die PeBeM nicht nur verstehen, sondern umsetzen müssen. Jede Session ist eine Fallbesprechung: Ihre Fälle rein, konkrete nächste Schritte raus.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> kurze Inputs nur als Werkzeug, Fokus auf Ihre Fälle</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> Entscheidungsvorlagen & Aufgaben pro Termin</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> zwischen den Terminen: Mini-Aufgaben</li>
                                    <li className="flex items-center gap-2"><span className="text-[#2589D8] font-bold">•</span> Follow-ups sichern, dass es nicht versandet</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage PeBeM-Klartext" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-[#38B481] transition-colors">
                                PeBeM „auf die Straße bringen“
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Einsteigen, Fälle mitbringen, umsetzen.</p>
                        </div>

                        {/* Card 2: PM ohne Bullshit */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">Projektmanagement ohne Bullshit</h3>
                            <div className="text-sm font-bold text-[#38B481] mb-4">6×90 min</div>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Projektmanagement für Pflege und Klinik – pragmatisch, menschlich, wirksam. Sie bauen während der Reihe Ihr Projekt auf – nicht danach.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> Vorlagen + direkte Anwendung auf Ihr Projekt</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> klare Meilensteine, Rollen, Kommunikation, Risiken</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> sichtbarer Fortschritt von Termin zu Termin</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> Follow-up/Überprüfung: was blockiert, was wirkt?</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage PM ohne Bullshit" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-[#38B481] transition-colors">
                                Schicken Sie mir Ihr Projekt
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Ich sage Ihnen, ob die Reihe passt.</p>
                        </div>

                        {/* Card 3: KI-Kompetenz */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">KI-Kompetenz in 6 Wochen</h3>
                            <div className="text-sm font-bold text-[#38B481] mb-4">6×60 min</div>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Wöchentlich testen, verbessern, standardisieren. Ziel: 2–3 echte KI-Workflows, die Zeit sparen und Qualität sichern – ohne Wildwuchs.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> Prompting & Qualitätscheck an Ihren Aufgaben</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> Aufbau einer Team-Promptbibliothek</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> interne Spielregeln „So nutzen wir KI“</li>
                                    <li className="flex gap-2"><span className="text-[#2589D8] font-bold">•</span> Abschlussreview + Verstetigungsplan</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage KI-Kompetenz" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-[#38B481] transition-colors">
                                KI nutzen, nicht nur besprechen
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Das ist das Format dafür.</p>
                        </div>
                    </div>
                </section>

                {/* Category C: Kontinuierliche Begleitung */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-[#262626] text-white flex items-center justify-center font-bold text-xl">C</div>
                        <h2 className="text-3xl font-black text-slate-900">Wir bleiben an Ihrer Seite</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {/* Card 1: Pflege-Projektsprechstunde */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[5rem]">Pflege-Projektsprechstunde</h3>
                            <div className="text-sm font-bold text-slate-500 mb-4">2×/Monat, 60 min</div>
                            <p className="text-slate-600 mb-6 min-h-[8rem]">
                                Ihr kontinuierliches Steuerungsformat: Fälle rein, Entscheidungen raus. Ideal, wenn Sie viele Baustellen haben und dranbleiben wollen.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> laufende Priorisierung & Umsetzungsboard</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> Hindernisse lösen, Verantwortung klären</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> kurze Vorbereitung, maximale Wirkung</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> planbar, pragmatisch, nah am Alltag</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage Projektsprechstunde" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                                Dranbleiben & Fortschritt
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2 min-h-[3rem]">Perfekt, wenn Sie keine Zeit für große Projekte haben.</p>
                        </div>

                        {/* Card 2: PeBeM-Begleitung */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[5rem]">PeBeM-Begleitung: Umsetzung & Verhandlung</h3>
                            <div className="text-sm font-bold text-slate-500 mb-4">3–6 Monate</div>
                            <p className="text-slate-600 mb-6 min-h-[8rem]">
                                Für Einrichtungen, die PeBeM sauber umsetzen wollen: fachlich, organisatorisch und kommunikativ – mit Stabilität statt Aktionismus.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> Umsetzungsarchitektur + Rollenlogik</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> Kommunikation & Beteiligung (Team/Leitung/MAV/BR)</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> regelmäßige Überprüfung, Nachjustierung, Verstetigung</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> optional: Unterstützung bei Verhandlungen</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage PeBeM-Begleitung" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                                PeBeM als Chance nutzen
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2 min-h-[3rem]">Sie wollen die Situation in ihrem Betrieb stabilisieren statt endgültig zu eskalieren?</p>
                        </div>

                        {/* Card 3: KI-Lab */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[5rem]">KI-Lab: Pilotbetrieb statt PowerPoint</h3>
                            <div className="text-sm font-bold text-slate-500 mb-4">8 Wochen</div>
                            <p className="text-slate-600 mb-6 min-h-[8rem]">
                                Wir wählen 2–3 Anwendungsfälle, pilotieren sie, messen Wirkung und entscheiden: skalieren, anpassen oder stoppen.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> Testplan + Erfolgskriterien (Zeit/Qualität/Akzeptanz)</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> Umsetzung in kleinen Schritten, mit Team-Feedback</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> Leitlinie & Standards gegen Wildwuchs</li>
                                    <li className="flex gap-2"><span className="text-slate-900 font-bold">•</span> Abschlussbericht + Skalierungsempfehlung</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage KI-Lab" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                                Pilot aufsetzen
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2 min-h-[3rem]">Sie wollen Ergebnisse in 8 Wochen?</p>
                        </div>
                    </div>
                </section>

                {/* Category D: Mini-Produkte */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-orange-400 text-white flex items-center justify-center font-bold text-xl">D</div>
                        <h2 className="text-3xl font-black text-slate-900">Mini-Produkte (Einstieg mit echtem Nutzen)</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Card 1: Toolbox */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">Toolbox „Projektauftrag“ + 30-min Kickstart</h3>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Kein Download, der in der Schublade verschwindet: Wir passen die Vorlage in 30 Minuten auf Ihren Fall an.
                            </p>
                            <div className="bg-orange-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Projektauftrag (1 Seite) + erste Meilensteine</li>
                                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Risiko-Quickcheck + Kommunikationsmini-plan</li>
                                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> sofort einsatzfähig</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage Toolbox Projektauftrag" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors">
                                Schnellster Einstieg
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Wenn Sie in 30 Minuten Klarheit wollen.</p>
                        </div>

                        {/* Card 2: Prompt-Pack */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 min-h-[3.5rem]">Prompt-Pack Pflege + Live-Training (60 min)</h3>
                            <p className="text-slate-600 mb-6 min-h-[6rem]">
                                Prompt-Vorlagen für Praxisanleitung/QM/Leitung – plus gemeinsames Anpassen auf Ihre Sprache, Ihre Aufgaben, Ihre Risiken.
                            </p>
                            <div className="bg-orange-50 p-4 rounded-xl mb-6 flex-grow">
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> einsatzfertige Promptbibliothek</li>
                                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Qualitätscheck-Routine (damit’s nicht peinlich wird)</li>
                                    <li className="flex gap-2"><span className="text-orange-500 font-bold">•</span> Regeln für sichere Nutzung im Team</li>
                                </ul>
                            </div>
                            <a href="mailto:lars@innovation-pflegen.de?subject=Anfrage Prompt-Pack" className="mt-auto text-center w-full block bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors">
                                Shortcut ohne Trial-and-Error
                            </a>
                            <p className="text-xs text-center text-slate-400 mt-2">Wenn Sie „anfangen“ wollen.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default OffersPage;
