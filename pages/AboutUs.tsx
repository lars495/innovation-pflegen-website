
import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero-like Header for About Us */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-300 font-bold mb-8 hover:text-white transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Über <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2589D8] to-[#38B481]">Uns</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Wir sind angetreten, um die Pflege mit Technologie und Menschlichkeit zu revolutionieren. Lernen Sie die Vision und die Köpfe hinter innovation-pflegen.de kennen.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <About />
            </div>

            {/* Vision Section */}
            <div className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Unsere Vision</h2>
                            <div className="space-y-6 text-lg text-slate-600">
                                <p>
                                    Innovation in der Pflege bedeutet für uns mehr als nur neue Geräte. Es bedeutet eine neue Kultur der Zusammenarbeit, des Lernens und der Selbstwirksamkeit.
                                </p>
                                <p>
                                    Wir wollen, dass Pflegekräfte nicht nur Anwender von Technik sind, sondern deren Gestalter. Wir bauen Brücken zwischen akademischem Wissen und dem harten Stationsalltag.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
                            <blockquote className="text-2xl font-medium text-slate-800 italic leading-relaxed">
                                "Der Mensch steht im Mittelpunkt – sowohl der Patient als auch die Pflegekraft. Technologie muss diesen Menschen dienen, nicht umgekehrt."
                            </blockquote>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-1 gap-1 bg-[#38B481]"></div>
                                <p className="font-bold text-slate-900">Unser Leitbild</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
