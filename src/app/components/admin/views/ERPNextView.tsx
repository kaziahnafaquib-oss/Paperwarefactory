import React from "react";
import { RefreshCw, Link, CircleCheck, Activity, Clock, AlertTriangle, Send, User, Bot, CheckCheck, FileText, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { ViewContainer } from "../ViewContainer";

export default function ERPNextView() {
  const [isSyncing, setIsSyncing] = React.useState(false);
  const [logs, setLogs] = React.useState([
    { type: "Inventory Update", msg: "Synced 42 SKUs from ERPNext", time: "12m ago", status: "success" },
    { type: "Customer Data", msg: "Imported 12 new B2B profiles", time: "1h ago", status: "success" },
    { type: "Order Export", msg: "Pushed RFQ-10294 to ERPNext", time: "3h ago", status: "success" },
    { type: "Price Matrix", msg: "Global price list updated", time: "5h ago", status: "error" },
  ]);

  const [mappings, setMappings] = React.useState([
    { name: "Sales & Distribution", mapped: true },
    { name: "Inventory Management", mapped: true },
    { name: "Customer CRM", mapped: true },
    { name: "Financial Accounting", mapped: false },
    { name: "Manufacturing Execution", mapped: false },
  ]);

  const handleSync = () => {
    setIsSyncing(true);
    toast.loading("Initiating ERPNext Sync...");
    
    setTimeout(() => {
      setIsSyncing(false);
      const newLog = {
        type: "Manual Sync",
        msg: "Full system sync completed successfully",
        time: "Just now",
        status: "success" as any
      };
      setLogs(prev => [newLog, ...prev.slice(0, 3)]);
      toast.dismiss();
      toast.success("ERPNext Sync Complete");
    }, 2000);
  };

  const copyEndpoint = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = "api.paperware.com/v1/erp";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      toast.success("Endpoint copied to clipboard");
    } catch (err) {
      toast.error("Manual copy: api.paperware.com/v1/erp");
    }
  };

  const toggleMapping = (index: number) => {
    const updated = [...mappings];
    updated[index].mapped = !updated[index].mapped;
    setMappings(updated);
    toast.success(`${updated[index].name} mapping updated`);
  };

  return (
    <ViewContainer 
      title="ERPNext Integration" 
      subtitle="Business Logic & Data Synchronization"
      actions={
        <div className="flex gap-4">
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className="bg-white/5 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all disabled:opacity-50"
          >
            <RefreshCw className={`size-4 ${isSyncing ? 'animate-spin' : ''}`} /> {isSyncing ? "Syncing..." : "Sync Now"}
          </button>
          <button 
            onClick={() => toast.info("API Configuration is locked. Contact Lead Engineer.")}
            className="bg-[#fabf37] text-black px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all"
          >
            <Link className="size-4" /> API Config
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Status & Logs */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-zinc-900/50 border border-white/5 rounded-[40px] p-10">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-8">Integration Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="p-6 bg-black rounded-3xl border border-white/5 cursor-pointer group hover:border-[#fabf37]/30 transition-all"
                onClick={copyEndpoint}
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">REST API Endpoint</p>
                  <span className="text-[8px] font-black text-[#fabf37] opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-[10px] text-[#fabf37]">api.paperware.com/v1/erp</code>
                  <CircleCheck className="size-4 text-emerald-500" />
                </div>
              </div>
              <div className="p-6 bg-black rounded-3xl border border-white/5">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-4">Webhook Health</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black text-white uppercase">Active & Listening</p>
                  <Activity className="size-4 text-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Logs & Config */}
        <div className="space-y-8">
          <div className="bg-black border border-white/5 rounded-[40px] p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Recent Sync Logs</h3>
              <button 
                onClick={() => setLogs([])}
                className="text-[9px] font-black text-zinc-600 uppercase tracking-widest hover:text-white transition-colors"
              >
                Clear All
              </button>
            </div>
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {logs.map((log, i) => (
                  <motion.div 
                    key={`${log.type}-${log.time}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 bg-zinc-900/30 rounded-2xl flex items-center justify-between border border-white/[0.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`size-2 rounded-full ${log.status === 'success' ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`} />
                      <div>
                        <p className="text-[11px] font-black text-white uppercase">{log.type}</p>
                        <p className="text-[10px] font-bold text-zinc-500 mt-1 uppercase tracking-widest">{log.msg}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{log.time}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="bg-black border border-white/5 rounded-[40px] p-8">
            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6">ERP Module Mapping</h4>
            <div className="space-y-4">
              {mappings.map((m, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 cursor-pointer group"
                  onClick={() => toggleMapping(i)}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${m.mapped ? 'text-zinc-400' : 'text-zinc-600 group-hover:text-zinc-400'}`}>{m.name}</span>
                  {m.mapped ? <CircleCheck className="size-3 text-emerald-500" /> : <Clock className="size-3 text-zinc-600 group-hover:text-[#fabf37]" />}
                </div>
              ))}
            </div>
            <button 
              onClick={() => toast.success("Mappings updated successfully")}
              className="w-full py-4 mt-8 bg-[#fabf37] text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all"
            >
              Update Mappings
            </button>
          </div>

          <div className="bg-zinc-900/50 rounded-[40px] p-8 border border-white/5 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[#fabf37]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="size-6 text-[#fabf37]" />
                <h4 className="text-xs font-black text-white uppercase">Integration Alert</h4>
             </div>
             <p className="text-[10px] font-bold text-zinc-500 leading-relaxed uppercase tracking-widest">
               Your ERPNext API secret is scheduled for rotation in 3 days. Please update credentials.
             </p>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
}
