
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { Message } from '../types';

const InnovationAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hallo! Unser Ziel ist es, die Herausforderungen der Pflege wirklich zu verstehen. Ob Großprojekt oder konkrete Lösung vor Ort – wie kann ich Sie heute dabei unterstützen, Ihre Teams zu stärken?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse(input);
    const modelMessage: Message = { role: 'model', text: response || 'Entschuldigung, ein Fehler ist aufgetreten.' };
    
    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[650px]">
      <div className="bg-gradient-to-r from-[#2589D8] to-[#38B481] p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
            <svg viewBox="0 0 100 120" className="h-8 w-auto fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 60C50 60 38 52 38 42C38 36 43 32 50 38C57 32 62 36 62 42C62 52 50 60 50 60Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-black text-lg tracking-tight">Pflege-Innovator KI</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
              <p className="text-blue-50 text-xs font-bold uppercase tracking-wider">Expertise Modus</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-3xl ${
              m.role === 'user' 
              ? 'bg-[#2589D8] text-white rounded-tr-none shadow-lg shadow-blue-100' 
              : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none leading-relaxed'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex gap-2">
              <div className="w-2.5 h-2.5 bg-[#38B481] rounded-full animate-bounce"></div>
              <div className="w-2.5 h-2.5 bg-[#38B481] rounded-full animate-bounce delay-150"></div>
              <div className="w-2.5 h-2.5 bg-[#38B481] rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Schreiben Sie Ihre Nachricht..."
            className="flex-1 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2589D8] transition-all bg-slate-50 font-medium"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-gradient-to-r from-[#2589D8] to-[#38B481] text-white p-4 rounded-2xl hover:scale-105 disabled:opacity-50 transition-all shadow-xl shadow-blue-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-slate-400 mt-4 text-center font-bold uppercase tracking-[0.2em]">innovation-pflegen.de • Zukunft gestalten</p>
      </div>
    </div>
  );
};

export default InnovationAssistant;
