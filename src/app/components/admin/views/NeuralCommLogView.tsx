import React from "react";
import { Bot, User, CheckCheck, FileText, ChevronRight, Search, Filter, MessageSquare, Clock, X, ArrowUpRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ViewContainer } from "../ViewContainer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";
import { toast } from "sonner";

const initialCommLogs = [
  { 
      id: 1, 
      user: "Sarah Smith (Green Leaf)", 
      msg: "Do you have 12oz double wall cups in stock?", 
      reply: "Yes, currently 50k units available. Ready for dispatch.", 
      fullThread: [
        { sender: "user", text: "Hi, I'm looking for 12oz cups.", time: "10:30 AM" },
        { sender: "bot", text: "Hello Sarah! We have several options. Are you interested in single or double wall?", time: "10:30 AM" },
        { sender: "user", text: "Do you have 12oz double wall cups in stock?", time: "10:31 AM" },
        { sender: "bot", text: "Yes, currently 50k units available. Ready for dispatch.", time: "10:31 AM" }
      ],
      type: "inquiry", 
      status: "replied", 
      time: "10m ago", 
      hasQuote: false 
  },
  { 
      id: 2, 
      user: "John Doe (TechFlow)", 
      msg: "Need a quote for 50k kraft bags with custom logo.", 
      reply: "Quote #RFQ-10293 generated and sent to email.", 
      fullThread: [
        { sender: "user", text: "Need a quote for 50k kraft bags with custom logo.", time: "09:15 AM" },
        { sender: "bot", text: "Certainly. Please upload your logo file so I can check printability.", time: "09:15 AM" },
        { sender: "user", text: "[File Uploaded: logo.png]", time: "09:16 AM" },
        { sender: "bot", text: "Received. Calculating based on 2-color print...", time: "09:16 AM" },
        { sender: "bot", text: "Quote #RFQ-10293 generated and sent to email.", time: "09:17 AM" }
      ],
      type: "rfq", 
      status: "quoted", 
      time: "1h ago", 
      hasQuote: true 
  },
  { id: 3, user: "Mike Ross (Urban Brew)", msg: "Is shipping to London possible?", reply: "Yes, we ship globally via DHL Express.", type: "inquiry", status: "replied", time: "3h ago", hasQuote: false },
  { id: 4, user: "Emily Chen (EcoPack)", msg: "Can I get a sample of the biodegradable straws?", reply: "Sample request #SMP-442 processed. Dispatching tomorrow.", type: "sample", status: "processed", time: "5h ago", hasQuote: false },
  { id: 5, user: "David Wilson", msg: "What is the lead time for 100k units?", reply: "Standard lead time is 14 days. Express options available.", type: "inquiry", status: "replied", time: "1d ago", hasQuote: false },
];

export function NeuralCommLogView() {
  const [commLogs, setCommLogs] = React.useState(initialCommLogs);
  const [selectedLog, setSelectedLog] = React.useState<any>(null);
  const [filter, setFilter] = React.useState("All");
  const [search, setSearch] = React.useState("");
  
  // New state for manual reply
  const [isReplying, setIsReplying] = React.useState(false);
  const [replyText, setReplyText] = React.useState("");

  // New state for Agent Mode
  const [agentMode, setAgentMode] = React.useState<"Autonomous" | "Supervisor">("Autonomous");

  const filteredLogs = commLogs.filter(log => {
      const matchesFilter = filter === "All" || 
                            (filter === "Quotes" && log.hasQuote) ||
                            (filter === "Inquiries" && log.type === "inquiry");
      const matchesSearch = log.user.toLowerCase().includes(search.toLowerCase()) || 
                            log.msg.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
  });

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    
    // In a real app, this would send to backend
    // For now, we update local state to show the reply
    if (selectedLog) {
        const newMsg = { 
            sender: "bot", 
            text: replyText, 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        };
        
        const updatedLog = {
            ...selectedLog,
            fullThread: selectedLog.fullThread ? [...selectedLog.fullThread, newMsg] : [newMsg],
            reply: replyText // Update the main view reply preview
        };
        
        // Update the main logs list
        setCommLogs(prev => prev.map(log => log.id === selectedLog.id ? updatedLog : log));
        // Update the selected log view
        setSelectedLog(updatedLog);
        
        toast.success("Reply Sent", {
            description: "Message dispatched to user via Neural Gateway."
        });
        
        setReplyText("");
        setIsReplying(false);
    }
  };

  const handleCloseDialog = () => {
      setSelectedLog(null);
      setIsReplying(false);
      setReplyText("");
  };

  const toggleAgentMode = () => {
      const newMode = agentMode === "Autonomous" ? "Supervisor" : "Autonomous";
      setAgentMode(newMode);
      toast.success(`Mode Switched to ${newMode}`, {
          description: `AI Agent will now operate in ${newMode} mode.`
      });
  };

  return (
    <ViewContainer 
      title="Neural Comm Log" 
      subtitle="AI Agent Interactions & Sales Intelligence"
      actions={
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 border ${
                agentMode === "Autonomous" 
                ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                : "bg-purple-500/10 text-purple-500 border-purple-500/20"
            }`}>
                <Bot className="size-3" /> Agent: {agentMode}
            </span>
          </div>
      }
    >
      <div className="space-y-6">
         {/* Toolbar */}
         <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-2xl flex flex-col md:flex-row gap-4 justify-between items-center">
             <div className="relative w-full md:w-auto flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
                <input 
                   type="text" 
                   placeholder="Search conversations..." 
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   className="w-full bg-black border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#fabf37]"
                />
             </div>
             <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
                {["All", "Quotes", "Inquiries"].map((f) => (
                   <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
                         filter === f ? "bg-[#fabf37] text-black" : "bg-black border border-white/10 text-zinc-400 hover:text-white"
                      }`}
                   >
                      {f}
                   </button>
                ))}
             </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Log Stream */}
            <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                    {filteredLogs.map((log) => (
                        <motion.div 
                            key={log.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={() => setSelectedLog(log)}
                            className="bg-zinc-900/30 border border-white/5 rounded-3xl p-6 relative group hover:border-[#fabf37]/50 cursor-pointer transition-all"
                        >
                            <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="flex items-center gap-1 text-[9px] font-black text-[#fabf37] uppercase tracking-widest">
                                    View Thread <ArrowUpRight className="size-3" />
                                </span>
                            </div>

                            <div className="flex items-start gap-4 mb-4">
                                <div className="size-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 border border-white/10">
                                    <User className="size-5" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-sm font-bold text-white uppercase tracking-tight">{log.user}</p>
                                        <div className="flex items-center gap-2 pr-20">
                                            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${log.type === 'rfq' ? 'bg-purple-500/10 text-purple-500' : 'bg-zinc-800 text-zinc-500'}`}>{log.type}</span>
                                            <span className="text-[9px] text-zinc-600 font-bold uppercase">{log.time}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-zinc-300 bg-black/40 p-4 rounded-2xl rounded-tl-none border border-white/5 leading-relaxed">"{log.msg}"</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pl-14">
                                <div className="flex-1 text-right">
                                    <div className="flex justify-end items-center gap-2 mb-1">
                                        <span className="text-[9px] text-[#fabf37] font-bold uppercase tracking-widest">AI Agent Reply</span>
                                        <CheckCheck className="size-3 text-emerald-500" />
                                    </div>
                                    <p className="text-sm text-zinc-200 bg-[#fabf37]/5 p-4 rounded-2xl rounded-tr-none border border-[#fabf37]/10 inline-block text-left leading-relaxed shadow-[0_0_20px_rgba(250,191,55,0.05)]">
                                        {log.reply}
                                    </p>
                                </div>
                                <div className="size-10 rounded-full bg-[#fabf37] flex items-center justify-center text-black shrink-0 shadow-[0_0_15px_rgba(250,191,55,0.3)]">
                                    <Bot className="size-5" />
                                </div>
                            </div>

                            {log.hasQuote && (
                                <div className="mt-4 pl-14 flex justify-end">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500/20 transition-all">
                                        <FileText className="size-3" /> View Generated Quote
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
                <div className="bg-black border border-white/5 rounded-3xl p-6">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Bot className="size-4 text-[#fabf37]" /> Agent Stats (Today)
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                            <span className="text-xs text-zinc-400">Total Interactions</span>
                            <span className="text-sm font-black text-white">142</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                            <span className="text-xs text-zinc-400">Quotes Generated</span>
                            <span className="text-sm font-black text-[#fabf37]">12</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                            <span className="text-xs text-zinc-400">Avg. Response Time</span>
                            <span className="text-sm font-black text-emerald-500">1.2s</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#fabf37]/5 border border-[#fabf37]/10 rounded-3xl p-6">
                     <h3 className="text-sm font-black text-[#fabf37] uppercase tracking-widest mb-4">Training Mode</h3>
                     <p className="text-[10px] text-zinc-400 leading-relaxed mb-4">
                        The AI Agent is currently operating in <strong className="text-white">"{agentMode}"</strong> mode. 
                        {agentMode === "Autonomous" 
                            ? " It will automatically reply to customer inquiries." 
                            : " You must manually approve all replies before they are sent."}
                     </p>
                     <button 
                        onClick={toggleAgentMode}
                        className="w-full py-3 bg-[#fabf37] text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all"
                     >
                        Switch to {agentMode === "Autonomous" ? "Supervisor" : "Autonomous"} Mode
                     </button>
                </div>
            </div>
         </div>
      </div>

      {/* Full Conversation Modal */}
      <Dialog open={!!selectedLog} onOpenChange={handleCloseDialog}>
        <DialogContent className="bg-zinc-900 border border-white/10 text-white max-w-2xl">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                        <User className="size-5 text-zinc-400" />
                    </div>
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-tight">{selectedLog?.user}</h4>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Full Conversation History</p>
                    </div>
                </DialogTitle>
                <DialogDescription className="sr-only">
                    Review the complete conversation thread between {selectedLog?.user} and the AI Agent.
                </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6 space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                {selectedLog?.fullThread ? (
                    selectedLog.fullThread.map((msg: any, idx: number) => (
                        <div key={idx} className={`flex gap-3 ${msg.sender === 'bot' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'user' && (
                                <div className="size-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5 mt-1">
                                    <User className="size-3 text-zinc-400" />
                                </div>
                            )}
                            
                            <div className={`max-w-[80%] space-y-1 ${msg.sender === 'bot' ? 'text-right' : 'text-left'}`}>
                                <div className={`p-3 rounded-2xl text-sm leading-relaxed border ${
                                    msg.sender === 'bot' 
                                    ? 'bg-[#fabf37]/10 border-[#fabf37]/20 text-[#fabf37] rounded-tr-none' 
                                    : 'bg-black border-white/10 text-zinc-300 rounded-tl-none'
                                }`}>
                                    {msg.text}
                                </div>
                                <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-wider block px-1">
                                    {msg.time}
                                </span>
                            </div>

                            {msg.sender === 'bot' && (
                                <div className="size-8 rounded-full bg-[#fabf37] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(250,191,55,0.3)] mt-1">
                                    <Bot className="size-3 text-black" />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    // Fallback if no full thread data exists
                    <div className="text-center py-10 text-zinc-500 text-sm">
                        <p>No additional history available.</p>
                        <div className="mt-8 space-y-4 opacity-50">
                             <div className="flex gap-3 justify-start">
                                <div className="p-3 bg-black border border-white/10 rounded-2xl rounded-tl-none text-zinc-300 text-sm text-left">
                                    {selectedLog?.msg}
                                </div>
                             </div>
                             <div className="flex gap-3 justify-end">
                                <div className="p-3 bg-[#fabf37]/10 border border-[#fabf37]/20 rounded-2xl rounded-tr-none text-[#fabf37] text-sm text-right">
                                    {selectedLog?.reply}
                                </div>
                             </div>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/5">
                {isReplying ? (
                    <div className="space-y-3">
                        <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Type your reply here..."
                            className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#fabf37] min-h-[80px]"
                            autoFocus
                        />
                        <div className="flex justify-end gap-2">
                            <button 
                                onClick={() => setIsReplying(false)}
                                className="px-4 py-2 rounded-lg text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSendReply}
                                className="flex items-center gap-2 px-4 py-2 bg-[#fabf37] text-black rounded-lg text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
                            >
                                <Send className="size-3" /> Send Reply
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-end gap-2">
                        <button 
                            onClick={handleCloseDialog}
                            className="px-4 py-2 rounded-lg text-xs font-bold text-zinc-400 hover:text-white transition-colors"
                        >
                            Close
                        </button>
                        <button 
                            onClick={() => setIsReplying(true)}
                            className="px-4 py-2 bg-[#fabf37] text-black rounded-lg text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                            Reply Manually
                        </button>
                    </div>
                )}
            </div>
        </DialogContent>
      </Dialog>
    </ViewContainer>
  );
}