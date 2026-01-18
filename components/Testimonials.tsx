
import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        quote: "Die Zusammenarbeit mit innovation-pflegen.de hat unseren Blick auf die Digitalisierung komplett verändert. Endlich Lösungen, die wirklich helfen.",
        author: "Karin Müller",
        role: "Pflegedienstleitung, Seniorenstift am Park",
        color: "#2589D8"
    },
    {
        quote: "Agiles Projektmanagement in der Pflege? Ich war skeptisch. Jetzt sind wir effizienter denn je und das Team ist motivierter.",
        author: "Stefan Weber",
        role: "Geschäftsführer, CareConnect GmbH",
        color: "#38B481"
    },
    {
        quote: "Die KI-Schulungen waren ein Augenöffner. Unsere Mitarbeiter haben keine Angst mehr vor der Technik, sondern nutzen sie aktiv.",
        author: "Dr. Elena Schmidt",
        role: "Vorständin, Regionaler Pflegeverbund",
        color: "#6366f1"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#2589D8] rounded-full blur-[100px]"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#38B481] rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Was unsere Partner sagen</h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Wir messen unseren Erfolg am echten Impact in den Einrichtungen.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-slate-700 hover:border-slate-600 transition-all group">
                            <div className="text-4xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: t.color }}>"</div>
                            <p className="text-lg text-slate-300 mb-8 italic leading-relaxed">
                                {t.quote}
                            </p>
                            <div>
                                <p className="font-bold text-white text-lg">{t.author}</p>
                                <p className="text-slate-500 text-sm">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/referenzen" className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-white/10">
                        Alle Referenzen ansehen
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
