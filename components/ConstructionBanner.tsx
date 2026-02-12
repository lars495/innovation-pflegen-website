import React, { useState } from 'react';

const ConstructionBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-amber-100 border-b border-amber-200 text-amber-800 px-4 py-3 relative text-center">
            <span className="block sm:inline font-medium">
                🚧 Unsere Webseite ist gerade im Umbau. In den nächsten Wochen wird sich hier einiges verändern.
            </span>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-0 bottom-0 right-0 px-4 py-3 text-amber-800 hover:text-amber-900"
            >
                <span className="sr-only">Schließen</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default ConstructionBanner;
