import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Radio, ArrowRight, Activity, Globe as Globe2, ShieldCheck, Zap, Volume2, VolumeX, Loader2, Leaf, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface ImmersiveHeroProps {
  videoUrl: string;
  brochureUrl?: string;
  onExplore: (page: string) => void;
  onDownload?: () => void;
  posterImage?: string;
}

export const ImmersiveHero = ({ videoUrl, brochureUrl, onExplore, onDownload, posterImage }: ImmersiveHeroProps) => {
  const { t } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const videoRef1 = React.useRef<HTMLVideoElement>(null);
  const videoRef2 = React.useRef<HTMLVideoElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const { scrollY } = useScroll();
  
  const [isMuted, setIsMuted] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const videoOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  React.useEffect(() => {
    setIsLoading(true);
    if (!videoId) {
        if (videoRef1.current) {
        videoRef1.current.load();
        }
        if (videoRef2.current) {
        videoRef2.current.load();
        }
    } else {
        // For YouTube, we can consider it "loaded" once the component mounts
        // or wait for an onLoad event from the iframe, but simpler is to just timeout briefly
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }
  }, [videoUrl, videoId]);

  // Handle Mute Toggle for YouTube
  React.useEffect(() => {
    if (videoId && iframeRef.current) {
      const command = isMuted ? 'mute' : 'unMute';
      iframeRef.current.contentWindow?.postMessage(JSON.stringify({
        event: 'command',
        func: command,
        args: []
      }), '*');
    }
  }, [isMuted, videoId]);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden bg-[#000000] font-['Poppins',sans-serif]">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-[5] bg-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="size-8 text-[#fabf37] animate-spin" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Initializing Stream...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video with Immersive Scale */}
      <motion.div 
        style={{ opacity: videoOpacity }}
        className="absolute inset-0 z-0"
      >
        {videoId ? (
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                 <iframe
                     ref={iframeRef}
                     key={videoId}
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-100"
                     src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1`}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     style={{ 
                        border: 0,
                        width: '100%',
                        height: '100%'
                     }}
                     onLoad={() => setIsLoading(false)}
                 />
              </div>
            </div>
        ) : (
            <video 
            ref={videoRef1}
            key={videoUrl}
            src={videoUrl}
            poster={posterImage}
            autoPlay 
            muted={isMuted}
            loop 
            playsInline
            onCanPlay={() => setIsLoading(false)}
            onWaiting={() => setIsLoading(true)}
            className="w-full h-full object-contain transition-opacity duration-1000"
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d6c8a9]/10 pointer-events-none" />
      </motion.div>


      {/* Beige Gradient Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d6c8a9]/10 to-transparent pointer-events-none" />

      {/* Futuristic HUD Scanning Effect */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fabf37]/30 to-transparent z-10 pointer-events-none"
      />
      
      {/* Main Content Overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Inner Background Video Layer - Always Muted */}
        <div className="absolute inset-0 -z-10">
          {videoId ? null : (
              <video 
                ref={videoRef2}
                key={videoUrl}
                src={videoUrl}
                poster={posterImage}
                autoPlay 
                muted
                loop 
                playsInline
                onLoadedData={(e) => e.currentTarget.play()}
                className="w-full h-full object-contain opacity-100 pointer-events-none"
              />
          )}
        </div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 pt-72 md:pt-[75vh]">
            <button 
              onClick={() => {
                if (brochureUrl) {
                  if (onDownload) onDownload();
                  window.open(brochureUrl, '_blank');
                } else {
                  onExplore("products");
                }
              }}
              className="group relative overflow-hidden bg-[#fabf37] text-black w-64 md:w-auto px-8 md:px-10 py-5 md:py-4 rounded-full text-[13px] md:text-[12px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(250,191,55,0.2)]"
            >
              <span className="relative z-10">E-Catalog</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            <button 
              onClick={() => onExplore("contact")}
              className="group bg-[#d6c8a9]/10 backdrop-blur-xl text-white border border-[#d6c8a9]/30 w-64 md:w-auto px-8 md:px-10 py-5 md:py-4 rounded-full text-[13px] md:text-[12px] font-black uppercase tracking-[0.25em] transition-all hover:bg-[#d6c8a9] hover:text-black relative"
            >
              Contact Sales

            </button>
          </div>
        </motion.div>

        {/* Floating HUD Telemetry */}
        <div className="hidden lg:block absolute bottom-12 left-12 space-y-4 text-left">
          {[
            { icon: <Leaf className="size-3" />, label: "SUSTAINABILITY", value: "100% ECO-FRIENDLY" },
            { icon: <Globe2 className="size-3" />, label: "EXPORT", value: "READY WORLDWIDE" },
            { icon: <MapPin className="size-3" />, label: "ORIGIN", value: "MADE IN BANGLADESH 🇧🇩" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + (i * 0.2) }}
              className="flex items-center gap-3"
            >
              <div className="text-[#fabf37]/50">{item.icon}</div>
              <div className="flex flex-col">
                <span className="text-[7px] font-black text-white/30 tracking-widest">{item.label}</span>
                <span className="text-[10px] font-black text-white tracking-widest">{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 mr-10"
        >
          <div className="w-[2px] h-10 bg-[#fabf37] shadow-[0_0_10px_#fabf37]" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#fabf37] text-center">Explore More</span>
        </motion.div>
      </div>
      
      {/* HUD Corner Accents */}
      <div className="absolute top-12 left-12 size-12 border-t-2 border-l-2 border-white/10 rounded-tl-2xl" />
      <div className="absolute top-12 right-12 size-12 border-t-2 border-r-2 border-white/10 rounded-tr-2xl" />

      {/* Sound Toggle */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-12 right-24 z-30 hidden lg:flex items-center gap-3 group"
      >
        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
          {isMuted ? "Audio Muted" : "Audio Active"}
        </span>
        <div className="size-10 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#fabf37] group-hover:text-black group-hover:border-[#fabf37] transition-all">
          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </div>
      </button>
    </section>
  );
};