import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Globe, Ship, Plane, Box, ArrowRight, ShieldCheck, CircleCheck } from "lucide-react";

interface ExportRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExportRequestForm({ isOpen, onClose }: ExportRequestFormProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-[#fdfaf3] w-full max-w-4xl rounded-[60px] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-50 p-4 bg-black text-white rounded-full hover:rotate-90 transition-transform"
          >
            <X className="size-6" />
          </button>

          {/* Left Side: Info */}
          <div className="md:w-1/3 bg-black p-12 text-white flex flex-col justify-between">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fabf37] rounded-full text-black">
                <Globe className="size-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Export</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
                Initialize <br /> <span className="text-[#fabf37]">Cargo</span> Request
              </h2>
              <p className="text-zinc-400 text-sm font-bold leading-relaxed">
                Connect with our logistics AI to optimize your international shipping route and compliance protocols.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CircleCheck className="text-[#fabf37] size-4" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">24h Quote Response</span>
              </div>
              <div className="flex items-center gap-3">
                <CircleCheck className="text-[#fabf37] size-4" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Direct Port Access</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 p-12 md:p-20 overflow-y-auto max-h-[90vh]">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Global Corp Inc."
                    className="w-full bg-transparent border-b-2 border-zinc-200 py-3 font-black text-lg outline-none focus:border-[#fabf37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Destination Country</label>
                  <select className="w-full bg-transparent border-b-2 border-zinc-200 py-3 font-black text-lg outline-none focus:border-[#fabf37] transition-colors appearance-none">
                    <option>United Kingdom</option>
                    <option>United Arab Emirates</option>
                    <option>Germany</option>
                    <option>United States</option>
                    <option>Australia</option>
                    <option>Saudi Arabia</option>
                    <option>Netherlands</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Destination City / Port</label>
                  <input 
                    type="text" 
                    placeholder="e.g. London Gateway / Jebel Ali"
                    className="w-full bg-transparent border-b-2 border-zinc-200 py-3 font-black text-lg outline-none focus:border-[#fabf37] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Delivery Area / Zip Code</label>
                  <input 
                    type="text" 
                    placeholder="e.g. E1 6AN / Industrial Zone 2"
                    className="w-full bg-transparent border-b-2 border-zinc-200 py-3 font-black text-lg outline-none focus:border-[#fabf37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Product Type</label>
                  <select className="w-full bg-transparent border-b-2 border-zinc-200 py-3 font-black text-lg outline-none focus:border-[#fabf37] transition-colors appearance-none">
                    <option>Paper Cups (Bulk)</option>
                    <option>Kraft Packaging</option>
                    <option>Food Grade Supplies</option>
                    <option>Pharma Packaging</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Est. Quantity (Units)</label>
                  <input 
                    type="number" 
                    placeholder="50,000"
                    className="w-full bg-transparent border-b-2 border-zinc-200 py-3 font-black text-lg outline-none focus:border-[#fabf37] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Required Certifications</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'fsc', label: 'FSC Certified' },
                    { id: 'fda', label: 'FDA Approved' },
                    { id: 'iso', label: 'ISO 9001/14001' },
                    { id: 'brc', label: 'BRCGS Food' },
                  ].map((cert) => (
                    <label key={cert.id} className="flex items-center gap-3 p-4 border border-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-50 transition-colors has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white group">
                      <input type="checkbox" className="sr-only" />
                      <div className="size-4 border-2 border-zinc-300 rounded flex items-center justify-center group-has-[:checked]:bg-[#fabf37] group-has-[:checked]:border-[#fabf37]">
                        <CircleCheck className="size-3 text-black opacity-0 group-has-[:checked]:opacity-100" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-tight">{cert.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Special Requirements / Compliance</label>
                <textarea 
                  placeholder="Mention FDA/ISO specifics or branding needs..."
                  rows={3}
                  className="w-full bg-zinc-100/50 rounded-3xl p-6 font-bold text-sm outline-none focus:ring-2 ring-[#fabf37] transition-all"
                />
              </div>

              <button 
                type="button"
                onClick={onClose}
                className="w-full bg-black text-white py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-xl"
              >
                Send Export Intent <ArrowRight className="size-5 text-[#fabf37]" />
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}