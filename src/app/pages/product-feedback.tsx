import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, Star, Send, ChartBar, 
  Smile, Meh, Frown, CircleCheck, 
  Sparkles, Lightbulb, TrendingUp, AlertCircle,
  ScanQrCode, X, ChevronRight, Layers2, Ruler, Award
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import QrScanner from "react-qr-scanner";

interface ProductFeedbackPageProps {
  onScanSuccess?: () => void;
}

export function ProductFeedbackPage({ onScanSuccess }: ProductFeedbackPageProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanError, setScanError] = React.useState<string | null>(null);
  const [manualId, setManualId] = React.useState("");
  const [isSimulating, setIsSimulating] = React.useState(false);
  const [hasCheckedCamera, setHasCheckedCamera] = React.useState(false);

  React.useEffect(() => {
    // Check if camera is even available to prevent unnecessary errors
    if (isScanning && !hasCheckedCamera) {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setScanError("NO_CAMERA");
        setHasCheckedCamera(true);
      }
    }
  }, [isScanning, hasCheckedCamera]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const sentiment = comment.length > 20 ? (comment.toLowerCase().includes("good") || comment.toLowerCase().includes("great") ? "positive" : "neutral") : "awaiting";

  const handleScan = (data: any) => {
    if (data) {
      console.log("QR Data:", data);
      setIsScanning(false);
      setScanError(null);
      onScanSuccess?.();
    }
  };

  const handleSimulateScan = () => {
    setIsSimulating(true);
    setScanError(null);
    setTimeout(() => {
      setIsSimulating(false);
      setIsScanning(false);
      onScanSuccess?.();
    }, 2500);
  };

  const handleError = (err: any) => {
    // Categorize errors for better user guidance
    const errorType = err?.name || "UnknownError";
    const errorMessage = typeof err === 'string' ? err : (err?.message || "");

    // Silence the error in console if it's a known permission issue to avoid alarming the user
    if (errorType === "NotAllowedError" || errorMessage.includes("Permission denied") || errorMessage.includes("denied")) {
      setScanError("CAMERA_BLOCKED");
    } else {
      console.error("Traceability Scanner Log:", err);
      setScanError("HARDWARE_ERROR");
    }
  };

  const renderScannerContent = () => {
    if (isSimulating) {
      return (
        <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-[40px] bg-zinc-900 border-2 border-[#fabf37]/30 flex flex-col items-center justify-center space-y-6">
           <div className="relative">
              <div className="size-32 border-4 border-[#fabf37]/20 border-t-[#fabf37] rounded-full animate-spin" />
              <ScanQrCode className="size-12 text-[#fabf37] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
           </div>
           <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#fabf37]">AI Pattern Recognition</p>
              <p className="text-white font-bold text-sm">Analyzing Batch Cryptography...</p>
           </div>
           <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-[#fabf37] shadow-[0_0_40px_#fabf37] z-10 opacity-60"
          />
        </div>
      );
    }

    if (scanError === "CAMERA_BLOCKED" || scanError === "NO_CAMERA") {
      return (
        <div className="bg-zinc-900 border-2 border-[#fabf37]/50 rounded-[60px] p-12 space-y-8 shadow-[0_0_100px_rgba(250,191,55,0.2)]">
          <div className="size-24 bg-[#fabf37] rounded-full flex items-center justify-center mx-auto ring-8 ring-[#fabf37]/10 animate-pulse">
            <AlertCircle className="size-12 text-black" />
          </div>
          <div className="space-y-4">
            <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Access Restricted</h4>
            <p className="text-zinc-400 font-bold text-sm leading-relaxed max-w-xs mx-auto">
              {scanError === "CAMERA_BLOCKED" 
                ? "Camera permission was denied. Use manual entry or bypass to continue the traceability audit."
                : "No camera detected on this device. Manual verification required."}
            </p>
          </div>
          
          <div className="pt-4 flex flex-col gap-4">
             <div className="relative group">
                <input 
                  type="text" 
                  value={manualId}
                  onChange={(e) => setManualId(e.target.value)}
                  placeholder="BATCH ID: #PW-88291-EXP"
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl py-6 px-8 text-white font-black uppercase tracking-widest text-[11px] focus:border-[#fabf37] outline-none transition-all placeholder:text-zinc-700"
                />
                <button 
                  onClick={() => onScanSuccess?.()}
                  disabled={!manualId}
                  className="absolute right-2 top-2 bottom-2 bg-[#fabf37] text-black px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all disabled:opacity-20 disabled:grayscale"
                >
                  Verify
                </button>
             </div>

             <div className="flex items-center gap-4 py-4">
                <div className="h-px bg-white/5 flex-1" />
                <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">or use</span>
                <div className="h-px bg-white/5 flex-1" />
             </div>

             <button 
                onClick={handleSimulateScan}
                className="w-full bg-zinc-800 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-700 transition-all flex items-center justify-center gap-3 border border-white/5 group"
              >
                <Sparkles className="size-4 text-[#fabf37] group-hover:rotate-12 transition-transform" /> 
                Simulate AI Scan (Demo Mode)
              </button>
              
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">Traceability Protocol v4.0.1</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative aspect-square w-full max-w-sm mx-auto">
        <div className="absolute -inset-4 border-2 border-white/10 rounded-[60px] pointer-events-none" />
        <div className="absolute top-0 left-0 size-12 border-t-4 border-l-4 border-[#fabf37] rounded-tl-[40px]" />
        <div className="absolute top-0 right-0 size-12 border-t-4 border-r-4 border-[#fabf37] rounded-tr-[40px]" />
        <div className="absolute bottom-0 left-0 size-12 border-b-4 border-l-4 border-[#fabf37] rounded-bl-[40px]" />
        <div className="absolute bottom-0 right-0 size-12 border-b-4 border-r-4 border-[#fabf37] rounded-br-[40px]" />

        <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-zinc-900 shadow-[0_0_80px_rgba(250,191,55,0.15)] flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            {!scanError && (
              <QrScanner
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
          
          {/* Fallback UI that appears if the scanner is struggling or blocked */}
          <div className="relative z-10 p-8 text-center space-y-6">
             <div className="size-20 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto border border-white/10">
                <ScanQrCode className="size-8 text-[#fabf37] animate-pulse" />
             </div>
             <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#fabf37]">System Initializing</p>
                <button 
                  onClick={handleSimulateScan}
                  className="bg-[#fabf37] text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 shadow-2xl"
                >
                  Bypass & Simulate Scan
                </button>
             </div>
          </div>

          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-[#fabf37] shadow-[0_0_30px_#fabf37] z-20 opacity-50"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#fdfaf3] min-h-screen pt-32 pb-20 font-['Poppins',sans-serif]">
      {/* QR Scanner Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 md:p-12"
          >
            <button 
              onClick={() => { setIsScanning(false); setScanError(null); }}
              className="absolute top-8 right-8 text-white/40 hover:text-white hover:rotate-90 transition-all z-50"
            >
              <X className="size-10" />
            </button>
            
            <div className="max-w-xl w-full space-y-12 text-center">
              {!scanError && (
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fabf37]/10 rounded-full border border-[#fabf37]/20">
                    <Sparkles className="size-4 text-[#fabf37]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#fabf37]">AI Vision System</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Point & Scan</h3>
                </div>
              )}

              {renderScannerContent()}

              {!scanError && (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-4 text-[#fabf37]">
                    <div className="size-2 rounded-full bg-[#fabf37] animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Ready for Batch Input</span>
                  </div>
                  <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">Supports all Paperware Batch QR Codes</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="container mx-auto px-4 pb-24 md:pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Feedback Form - Now Full Width on Mobile, Expanded on Desktop */}
          <div className="lg:col-span-7 flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-16 rounded-[40px] md:rounded-[60px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5 relative overflow-hidden"
            >
              {/* Decorative Background Mesh */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#fabf37]/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 relative z-10">
                <div className="space-y-6">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-50 rounded-full border border-zinc-100 shadow-sm"
                  >
                    <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Live Feedback Engine</span>
                  </motion.div>
                  <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-zinc-900">
                    Tell us your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fabf37] to-amber-600">Experience</span>
                  </h1>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsScanning(true)}
                  className="w-full md:w-auto bg-black text-[#fabf37] px-8 py-5 rounded-[24px] font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-4 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all group border border-white/10"
                >
                  <ScanQrCode className="size-5 group-hover:rotate-90 transition-transform duration-500" />
                  Scan Product QR
                </motion.button>
              </div>

              <p className="text-zinc-600 font-bold text-base md:text-lg max-w-xl mb-12 leading-relaxed">
                Your direct feedback powers our continuous improvement protocols. Each submission is analyzed by our quality assurance team to optimize production standards.
              </p>

              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2 flex items-center gap-2">
                      <Layers2 className="size-3" /> Product Category
                    </label>
                    <div className="relative">
                      <select className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-[24px] py-5 px-8 font-bold text-sm md:text-base text-zinc-900 focus:border-[#fabf37] focus:bg-white focus:shadow-xl focus:shadow-[#fabf37]/10 outline-none transition-all appearance-none cursor-pointer">
                        <option>Office Stationery</option>
                        <option>Paper Cups & Beverages</option>
                        <option>Restaurant Supplies</option>
                        <option>Marketing Materials</option>
                        <option>Industrial Packaging</option>
                        <option>Pharmaceutical Boxes</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-black transition-colors">
                        <ChevronRight className="size-5 rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-2 flex items-center gap-2">
                      <Ruler className="size-3" /> Spec / Size / Batch ID
                    </label>
                    <input 
                      className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-[24px] py-5 px-8 font-bold text-sm md:text-base text-zinc-900 focus:border-[#fabf37] focus:bg-white focus:shadow-xl focus:shadow-[#fabf37]/10 outline-none transition-all placeholder:text-zinc-400" 
                      placeholder="e.g. 14in X 22in (Optional)" 
                    />
                  </div>
                </div>

                <div className="space-y-6 bg-zinc-50/50 p-8 rounded-[40px] border border-zinc-100/50">
                  <div className="flex items-center justify-between">
                     <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                       <Award className="size-3" /> Quality Rating
                     </p>
                     <span className="text-xs font-bold text-[#fabf37]">{rating > 0 ? `${rating}/5 Stars` : 'Select Rating'}</span>
                  </div>
                  <div className="flex justify-between gap-2 md:gap-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <motion.button 
                        key={s} 
                        type="button"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(s)}
                        className={`flex-1 h-16 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center transition-all duration-300 border-2 ${
                          rating >= s 
                            ? 'bg-[#fabf37] text-black border-[#fabf37] shadow-lg shadow-[#fabf37]/30' 
                            : 'bg-white text-zinc-300 border-zinc-200 hover:border-zinc-400 hover:text-zinc-400'
                        }`}
                      >
                        <Star className={`size-6 md:size-8 ${rating >= s ? 'fill-current' : ''}`} />
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 relative">
                  <div className="flex justify-between items-end px-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                       <MessageSquare className="size-3" /> Detailed Feedback
                     </label>
                     <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${
                        sentiment === 'positive' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                        sentiment === 'neutral' ? 'bg-zinc-50 text-zinc-500 border-zinc-300' :
                        'bg-zinc-50 text-zinc-400 border-zinc-200'
                      }`}>
                        {sentiment === 'positive' ? <Smile className="size-3" /> : sentiment === 'neutral' ? <Meh className="size-3" /> : <Sparkles className="size-3" />}
                        {sentiment} Sentiment
                      </div>
                  </div>
                  <textarea 
                    rows={6} 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-[32px] py-6 px-8 font-bold text-sm md:text-base text-zinc-900 focus:border-[#fabf37] focus:bg-white focus:shadow-xl focus:shadow-[#fabf37]/10 outline-none transition-all resize-none placeholder:text-zinc-400" 
                    placeholder="Tell us about the durability, print quality, and overall experience..." 
                  />
                </div>

                <motion.button 
                  disabled={submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-6 md:py-8 rounded-[32px] font-black uppercase tracking-[0.3em] text-xs md:text-sm flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl ${
                    submitted 
                      ? 'bg-emerald-500 text-white shadow-emerald-500/30' 
                      : 'bg-black text-[#fabf37] hover:bg-[#fabf37] hover:text-black shadow-black/20'
                  }`}
                >
                  {submitted ? <><CircleCheck className="size-6" /> Feedback Submitted</> : <><Send className="size-5 md:size-6" /> Submit Feedback</>}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Analytics Sidebar - Sticky Desktop */}
          <div className="lg:w-[400px] space-y-6 md:space-y-8 lg:sticky lg:top-32 lg:h-fit">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[40px] md:rounded-[50px] border border-black/5 shadow-xl space-y-8"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Live Analytics</h4>
                <div className="size-8 rounded-full bg-zinc-50 flex items-center justify-center">
                   <ChartBar className="size-4 text-[#fabf37]" />
                </div>
              </div>
              
              <div className="space-y-8">
                {[
                  { icon: <Smile className="text-emerald-500 size-5" />, label: "Positive", value: 84, color: "bg-emerald-500" },
                  { icon: <Meh className="text-zinc-400 size-5" />, label: "Neutral", value: 12, color: "bg-zinc-400" },
                  { icon: <Frown className="text-rose-500 size-5" />, label: "Negative", value: 4, color: "bg-rose-500" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-600">
                      <div className="flex items-center gap-3">
                        {stat.icon}
                        <span>{stat.label}</span>
                      </div>
                      <span>{stat.value}%</span>
                    </div>
                    <div className="h-2 bg-zinc-100 rounded-full overflow-hidden p-[2px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={`h-full ${stat.color} rounded-full`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#fabf37] p-8 md:p-10 rounded-[40px] md:rounded-[50px] flex flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group cursor-pointer"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10">
                  <p className="text-black font-black text-2xl uppercase leading-[0.9] mb-2">Impact <br />Driven</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-black/60 italic">Your voice builds our factory.</p>
               </div>
               <div className="size-16 bg-black rounded-full flex items-center justify-center text-[#fabf37] shadow-lg group-hover:rotate-12 transition-transform duration-500 relative z-10">
                  <AlertCircle className="size-8" />
               </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}