import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, Sparkles, ShieldCheck, ChevronDown } from "lucide-react";
import { useChat } from "../context/ChatContext";

export function ChatWidget() {
  const { isChatOpen, closeChat, toggleChat } = useChat();
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', text: 'Hello! I am Paperware AI. How can I assist you with your sustainable packaging needs today?' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages, isChatOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput("");
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
         "I've analyzed your request. Based on our current production capacity, we can definitely accommodate this.",
         "Connecting you to our admin portal... A human agent has been notified of your priority status.",
         "That's a great question about our sustainable materials. Let me flag this for our technical director.",
         "I've logged your interest in our bulk manufacturing. Preparing a preliminary quote..."
      ];
      setChatMessages(prev => [...prev, { 
        role: 'ai', 
        text: responses[Math.floor(Math.random() * responses.length)]
      }]);
    }, 2000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className={`fixed bottom-20 md:bottom-6 right-4 z-[1000000] size-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isChatOpen ? 'bg-black text-white rotate-90' : 'bg-[#fabf37] text-black'
        }`}
      >
        {isChatOpen ? <X className="size-6" /> : <MessageSquare className="size-6" />}
        
        {/* Status Dot */}
        {!isChatOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        )}
      </motion.button>

      {/* AI Live Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[380px] h-[550px] max-h-[70vh] bg-white rounded-[30px] shadow-2xl border border-black/5 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-black p-5 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-[#fabf37] flex items-center justify-center border-2 border-white/10 relative">
                     <Bot className="size-5 text-black" />
                     <div className="absolute -bottom-1 -right-1 size-3 rounded-full bg-emerald-500 border-2 border-black" />
                  </div>
                  <div>
                     <h3 className="text-white font-black uppercase text-sm tracking-wide">Paperware AI</h3>
                     <div className="flex items-center gap-2">
                        <span className="text-[#fabf37] text-[9px] font-bold uppercase tracking-widest">Connected to Admin</span>
                        <div className="size-1.5 rounded-full bg-[#fabf37] animate-pulse" />
                     </div>
                  </div>
               </div>
               <button 
                 onClick={closeChat}
                 className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
               >
                 <ChevronDown className="size-4" />
               </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-zinc-50" ref={scrollRef}>
               {chatMessages.map((msg, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                 >
                    <div className={`size-8 rounded-full shrink-0 flex items-center justify-center ${msg.role === 'ai' ? 'bg-[#fabf37] text-black' : 'bg-black text-white'}`}>
                       {msg.role === 'ai' ? <Sparkles className="size-3.5" /> : <span className="text-[9px] font-black">YOU</span>}
                    </div>
                    <div className={`max-w-[80%] p-3.5 rounded-[20px] text-[12px] font-medium leading-relaxed ${
                       msg.role === 'ai' 
                         ? 'bg-white border border-zinc-100 rounded-tl-none shadow-sm text-zinc-600' 
                         : 'bg-black text-white rounded-tr-none shadow-md'
                    }`}>
                       {msg.text}
                    </div>
                 </motion.div>
               ))}
               
               {isTyping && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="flex gap-3"
                 >
                    <div className="size-8 rounded-full bg-[#fabf37] shrink-0 flex items-center justify-center text-black">
                       <Sparkles className="size-3.5" />
                    </div>
                    <div className="bg-white border border-zinc-100 rounded-[20px] rounded-tl-none p-4 shadow-sm flex items-center gap-1">
                       <div className="size-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                       <div className="size-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                       <div className="size-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                 </motion.div>
               )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-zinc-100">
               <form onSubmit={handleSendMessage} className="relative">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-full py-3.5 pl-5 pr-12 text-sm font-bold focus:outline-none focus:border-[#fabf37] focus:bg-white transition-all placeholder:text-zinc-300"
                  />
                  <button 
                    type="submit"
                    disabled={!chatInput.trim() || isTyping}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black text-[#fabf37] flex items-center justify-center hover:bg-[#fabf37] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="size-3.5" />
                  </button>
               </form>
               <div className="mt-2.5 flex justify-center items-center gap-2">
                  <ShieldCheck className="size-3 text-zinc-300" />
                  <p className="text-[8px] font-bold text-zinc-300 uppercase tracking-widest">End-to-End Encrypted</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}