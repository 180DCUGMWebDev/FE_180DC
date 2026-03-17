"use client";

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function EightyChatbot() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // OMIT on certain routes
    const excludedRoutes = ['/login', '/form', '/oprec'];
    if (excludedRoutes.some(route => pathname?.startsWith(route))) {
        return null;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            // Add a temporary empty assistant message
            setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

            const response = await fetch('/api/eighty', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) throw new Error('API Error');

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) throw new Error('No reader available');

            let done = false;
            while (!done) {
                const { value, done: readerDone } = await reader.read();
                done = readerDone;

                if (value) {
                    const chunkText = decoder.decode(value, { stream: true });

                    setMessages(prev => {
                        const newMessages = [...prev];
                        const lastIndex = newMessages.length - 1;
                        newMessages[lastIndex] = {
                            ...newMessages[lastIndex],
                            content: newMessages[lastIndex].content + chunkText
                        };
                        return newMessages;
                    });
                }
            }
        } catch (error) {
            console.error('Error in chat:', error);
            setMessages(prev => {
                const newMessages = [...prev];
                const lastIndex = newMessages.length - 1;
                newMessages[lastIndex] = {
                    ...newMessages[lastIndex],
                    content: "Maaf, terjadi kesalahan saat menghubungi server. Silakan coba lagi."
                };
                return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 p-4 bg-black text-gray-100 rounded-full shadow-lg hover:bg-black-300 transition-colors focus:outline-none flex items-center justify-center group"
                    >
                        <MessageCircle className="w-6 h-6 mr-0 group-hover:mr-2 text-green-300 transition-all duration-300" />
                        <span className="font-lato-bold max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 whitespace-nowrap text-sm text-green-300">
                            Tanya Eighty
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Sidebar Chat */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop for mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-black text-gray-100 z-[70] shadow-2xl flex flex-col overflow-hidden border-l border-white/20"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/20 bg-black">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h3 className="font-avenir-black text-green-300 text-[22px] leading-tight">Eighty</h3>
                                        <p className="font-lato-regular text-sm text-gray-400">Asisten 180DC UGM</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:bg-white/10 hover:text-white rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black">
                                {messages.length === 0 && (
                                    <div className="text-center text-gray-400 mt-12 space-y-5">
                                        <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                            <MessageCircle className="w-10 h-10 text-green-300 opacity-80" />
                                        </div>
                                        <p className="font-lato-light text-[16px] px-6 text-gray-300">
                                            Halo! Saya <span className="font-lato-bold text-white">Eighty</span>, model AI asisten virtual 180DC UGM.<br /><br />Ada yang bisa saya bantu terkait organisasi kami?
                                        </p>
                                    </div>
                                )}

                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-[20px] px-5 py-3.5 shadow-md ${msg.role === 'user'
                                                ? 'bg-green-300 text-black rounded-br-sm font-lato-regular'
                                                : 'bg-black-300 border border-white/10 text-gray-100 rounded-bl-sm prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-p:font-lato-regular prose-strong:font-lato-bold prose-em:font-lato-light-italic prose-a:text-green-300'
                                                }`}
                                        >
                                            {msg.role === 'user' ? (
                                                <p className="whitespace-pre-wrap text-[15px] m-0 leading-relaxed font-lato-semibold">{msg.content}</p>
                                            ) : (
                                                msg.content ? (
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm]}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                ) : (
                                                    <Loader2 className="w-5 h-5 animate-spin text-green-300 mt-1" />
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-5 bg-black border-t border-white/20 z-10">
                                <form onSubmit={handleSubmit} className="relative flex items-center">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Tanyakan sesuatu tentang 180DC UGM..."
                                        disabled={isLoading}
                                        className="w-full font-lato-regular bg-black-300 border border-white/20 text-white rounded-full pl-6 pr-14 py-3.5 focus:outline-none focus:ring-2 focus:ring-green-300/50 focus:border-green-300 transition-shadow disabled:opacity-50 text-[15px] placeholder:text-gray-500"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isLoading}
                                        className="absolute right-1.5 w-10 h-10 flex items-center justify-center p-0 bg-green-300 text-black rounded-full hover:bg-green-400 disabled:opacity-30 disabled:hover:bg-green-300 transition-colors"
                                    >
                                        <Send className="w-5 h-5 mt-0.5" />
                                    </button>
                                </form>
                                <p className="font-lato-light text-center text-[11px] text-gray-500 mt-3 flex items-center justify-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block drop-shadow-[0_0_3px_rgba(119,186,71,0.8)]"></span> Eighty AI Chatbot is online
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
