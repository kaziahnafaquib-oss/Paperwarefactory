import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

interface TrackingWidgetProps {
    onOpenTracking: () => void;
}

export const TrackingWidget = React.memo(function TrackingWidget({ onOpenTracking }: TrackingWidgetProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white p-10 rounded-[60px] border-2 border-[#fabf37]/20 shadow-2xl relative overflow-hidden group"
        >
            <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-150 transition-transform duration-700">
            <MapPin className="size-48" />
            </div>
            <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fabf37]">Track Shipment</h3>
                <Activity className="size-4 text-zinc-700 animate-pulse" />
            </div>
            <motion.div 
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                {[
                { loc: "Port of Singapore", status: "Departed", time: "14:20 GMT" },
                { loc: "Colombo Hub", status: "Est. Arrival", time: "Oct 28" }
                ].map((track, i) => (
                <motion.div 
                    key={i} 
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="flex gap-4"
                >
                    <div className="flex flex-col items-center">
                    <div className={`size-3 rounded-full ${i === 0 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'border-2 border-zinc-700'}`} />
                    {i === 0 && <div className="w-0.5 h-10 bg-zinc-800 my-1" />}
                    </div>
                    <div className="space-y-1">
                    <p className="text-[11px] font-black uppercase">{track.loc}</p>
                    <p className="text-[9px] font-bold text-zinc-500">{track.status} • {track.time}</p>
                    </div>
                </motion.div>
                ))}
            </motion.div>
            <div className="relative h-12">
                <input placeholder="Enter Tracking ID..." className="w-full h-full bg-zinc-900 rounded-2xl px-6 text-[10px] font-bold text-white outline-none border border-white/5 focus:border-[#fabf37] transition-colors placeholder:text-zinc-700" />
                <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { onOpenTracking(); toast.success("Tracking shipment #PW-8821"); }} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-[#fabf37] rounded-xl flex items-center justify-center text-black hover:bg-white transition-colors"
                >
                <ChevronRight className="size-4" />
                </motion.button>
            </div>
            </div>
        </motion.div>
    );
});