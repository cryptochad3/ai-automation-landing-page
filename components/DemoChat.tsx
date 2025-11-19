import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const DemoChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi! I'm the ECT Demo Agent. Ask me about our automation services, pricing, or how we build RAG systems.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for Gemini
    // We only send the last few messages to keep context but save tokens
    const history = messages.slice(-6).map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(history, userMsg.text);

    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-400 text-xs font-mono font-medium mb-4">
                    <Sparkles className="w-3 h-3 mr-2" />
                    INTERACTIVE DEMO
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">Try a Custom Business Agent</h2>
                <p className="text-slate-400">
                    This chat is powered by Gemini 2.5 Flash. I can build similar agents trained specifically on your business data.
                </p>
            </div>

            <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[500px]">
                {/* Header */}
                <div className="bg-slate-900 p-4 border-b border-slate-800 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                    <span className="text-slate-400 text-sm font-mono flex items-center">
                        <Bot className="w-4 h-4 mr-2" />
                        ect-assistant-v1
                    </span>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                                msg.role === 'user' 
                                ? 'bg-brand-600 text-white rounded-br-none' 
                                : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-3">
                                <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />
                             </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="p-4 bg-slate-900 border-t border-slate-800">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about automation..."
                            className="flex-1 bg-slate-950 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                        />
                        <button 
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="bg-brand-600 hover:bg-brand-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-lg px-4 transition-colors"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">
                        Note: Responses are generated by AI and may vary.
                    </p>
                </form>
            </div>
        </div>
    </section>
  );
};
