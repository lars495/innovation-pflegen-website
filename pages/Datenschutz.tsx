
import React from 'react';
import { Link } from 'react-router-dom';

const Datenschutz: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/" className="inline-flex items-center text-slate-300 font-bold mb-8 hover:text-white transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">Datenschutz</h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-600 leading-relaxed space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Datenerfassung auf dieser Website</h2>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                    <p>
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Wie erfassen wir Ihre Daten?</h3>
                    <p>
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Hosting</h2>
                    <p>
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter: [Hosting-Anbieter - Platzhalter, z.B. Vercel / Netlify / AWS]. Details entnehmen Sie der Datenschutzerklärung des Anbieters.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <p className="mt-4">
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Ihre Rechte</h2>
                    <p>
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Datenschutz;
