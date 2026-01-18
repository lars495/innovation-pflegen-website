
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        title: "KI in der Pflege: Chance oder Risiko?",
        excerpt: "Wie künstliche Intelligenz den Pflegealltag entlasten kann und welche ethischen Fragen wir uns stellen müssen.",
        date: "15. Januar 2024",
        author: "Matthias Windeisen",
        category: "Technologie",
        image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Agile Methoden auf der Station",
        excerpt: "Scrum und Kanban sind nicht nur was für Softwareentwickler. Ein Erfahrungsbericht aus einem Seniorenstift.",
        date: "08. Januar 2024",
        author: "Lars Arendt",
        category: "Projektmanagement",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Partizipation von Anfang an",
        excerpt: "Warum Innovationen scheitern, wenn die Basis nicht mitredet – und wie man es besser macht.",
        date: "02. Januar 2024",
        author: "Matthias Windeisen",
        category: "Kultur",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    }
];

const Blog: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center text-slate-500 font-bold mb-8 hover:text-slate-900 transition-colors">
                        ← Zurück zur Startseite
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
                        Unser <span className="text-[#2589D8]">Blog</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl">
                        Neuigkeiten, Impulse und Best-Practices für die Pflege von morgen. Direkt von der Basis und aus der Praxis.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.map((post, i) => (
                        <article key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2589D8] transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <button className="text-[#2589D8] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                                    Weiterlesen
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-32 bg-gradient-to-br from-[#2589D8] to-[#38B481] rounded-[3rem] p-12 lg:p-20 text-white text-center shadow-2xl shadow-blue-500/20">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">Nichts mehr verpassen</h2>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
                        Abonniere unseren Newsletter und erhalte die neuesten Blog-Beiträge und Impulse direkt in dein Postfach.
                    </p>
                    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Deine E-Mail-Adresse"
                            className="px-6 py-4 rounded-2xl bg-white text-slate-900 flex-1 focus:outline-none focus:ring-4 ring-white/20"
                        />
                        <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-xl">
                            Abonnieren
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
