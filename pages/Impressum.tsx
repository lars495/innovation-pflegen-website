
import React from 'react';
import { Link } from 'react-router-dom';

const Impressum: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-300 font-bold mb-8 hover:text-white transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">Impressum</h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-600 leading-relaxed">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
                    <p className="mb-2">Matthias Windeisen & Lars Arendt GbR</p>
                    <p className="mb-2">innovation-pflegen.de</p>
                    <p className="mb-2">[Straße Hausnummer - Platzhalter]</p>
                    <p className="">[PLZ Ort - Platzhalter]</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Kontakt</h2>
                    <p className="mb-2">Telefon: [Telefonnummer - Platzhalter]</p>
                    <p className="">E-Mail: info@innovation-pflegen.de</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Vertreten durch</h2>
                    <p className="mb-2">Matthias Windeisen</p>
                    <p className="">Lars Arendt</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p className="mb-2">Matthias Windeisen</p>
                    <p className="">Lars Arendt</p>
                    <p className="mt-4 text-sm italic">[Anschrift wie oben]</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">EU-Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#2589D8] hover:underline ml-1">
                            https://ec.europa.eu/consumers/odr/
                        </a>.
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <section className="">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Impressum;
