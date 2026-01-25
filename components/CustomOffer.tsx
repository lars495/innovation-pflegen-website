
import React from 'react';

const CustomOffer: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-slate-50 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#2589D8]/10 to-[#38B481]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2589D8] to-[#38B481] opacity-10 rounded-bl-[5rem] transition-transform group-hover:scale-110 duration-500"></div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#2589D8] text-sm font-bold mb-8 uppercase tracking-widest">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2589D8] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2589D8]"></span>
                                </span>
                                Wunschprojekt?
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">
                                Du hast eine Idee, die <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2589D8] to-[#38B481]">über den Tellerrand</span> <br />
                                hinausgeht?
                            </h2>

                            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                                Ob Prozessoptimierung auf deiner Station, eine ganz spezielle App-Idee oder ein völlig neuer Workflow: Wir lieben Herausforderungen. Solange es mit Pflege zu tun hat, sind wir dein Partner.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                {['Individuell', 'Grenzenlos', 'Pflege-zentriert', 'Technologie-getrieben'].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 text-sm font-bold flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#38B481]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center bg-slate-50 rounded-[2.5rem] p-12 border border-slate-100 shadow-inner">
                            <div className="text-6xl mb-6">💡</div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Challenge Us!</h3>
                            <p className="text-slate-500 mb-8 max-w-xs">
                                Wir erstellen dir ein maßgeschneidertes Angebot für dein ganz persönliches Pflege-Projekt.
                            </p>
                            <a
                                href="mailto:lars@innovation-pflegen.de"
                                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 shadow-xl transition-all hover:scale-105"
                            >
                                Projekt anfragen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomOffer;
