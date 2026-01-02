import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Upload, Link as LinkIcon, Settings } from "lucide-react";

interface VideoData {
  url: string;
  title: string;
  highlight: string;
  subtitle: string;
}

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  videoData: VideoData[];
  onUpdateVideos: (data: VideoData[]) => void;
  heroVideoUrl?: string;
  onUpdateHeroVideo?: (url: string) => void;
}

export function AdminPanel({ isOpen, onClose, videoData, onUpdateVideos, heroVideoUrl, onUpdateHeroVideo }: AdminPanelProps) {
  const [data, setData] = React.useState<VideoData[]>(videoData);
  const [currentHeroVideo, setCurrentHeroVideo] = React.useState(heroVideoUrl || "");
  const [newUrl, setNewUrl] = React.useState("");
  const [newTitle, setNewTitle] = React.useState("PAPERWARE FACTORY KEEPS");
  const [newHighlight, setNewHighlight] = React.useState("ECO-FRIENDLINESS");
  const [newSubtitle, setNewSubtitle] = React.useState("AT THE TIP OF YOUR FINGERS!");

  const handleAdd = () => {
    if (newUrl.trim()) {
      setData([...data, { 
        url: newUrl.trim(), 
        title: newTitle.trim(), 
        highlight: newHighlight.trim(), 
        subtitle: newSubtitle.trim() 
      }]);
      setNewUrl("");
    }
  };

  const handleRemove = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onUpdateVideos(data);
    if (onUpdateHeroVideo) {
      onUpdateHeroVideo(currentHeroVideo);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl overflow-hidden rounded-[40px] bg-zinc-900 p-8 shadow-2xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-2xl bg-[#fabf37] flex items-center justify-center text-black">
                  <Settings className="size-5" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Studio Content Manager</h3>
              </div>
              <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                <X className="size-6" />
              </button>
            </div>

            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar relative">
              {/* Hero Video Section */}
              <div className="space-y-4 p-6 bg-black/50 rounded-3xl border border-white/5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#fabf37]">Hero Section Video</label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-zinc-800 border border-white/5 rounded-xl px-4 py-3">
                    <Upload className="size-4 text-zinc-500" />
                    <input
                      type="text"
                      value={currentHeroVideo}
                      onChange={(e) => setCurrentHeroVideo(e.target.value)}
                      placeholder="Hero Video URL (MP4)..."
                      className="w-full bg-transparent text-white text-sm outline-none"
                    />
                  </div>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                    This video appears as the background of the main landing page.
                  </p>
                </div>
              </div>

              <div className="space-y-4 p-6 bg-black/50 rounded-3xl border border-white/5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#fabf37]">Add New Studio Slide</label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="Video MP4 URL..."
                    className="w-full bg-zinc-800 border border-white/5 rounded-xl py-3 px-4 text-white text-sm outline-none"
                  />
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Title (e.g. PAPERWARE FACTORY)"
                    className="w-full bg-zinc-800 border border-white/5 rounded-xl py-3 px-4 text-white text-sm outline-none"
                  />
                  <input
                    type="text"
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    placeholder="Highlight (Yellow Text)"
                    className="w-full bg-zinc-800 border border-white/5 rounded-xl py-3 px-4 text-white text-sm outline-none"
                  />
                  <input
                    type="text"
                    value={newSubtitle}
                    onChange={(e) => setNewSubtitle(e.target.value)}
                    placeholder="Subtitle (Bottom part)"
                    className="w-full bg-zinc-800 border border-white/5 rounded-xl py-3 px-4 text-white text-sm outline-none"
                  />
                  <button 
                    onClick={handleAdd}
                    className="w-full bg-white/10 hover:bg-[#fabf37] hover:text-black text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all"
                  >
                    Add to Timeline
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Active Timeline</label>
                <div className="space-y-2">
                  {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-black/30 rounded-2xl border border-white/5 group">
                      <div className="flex flex-col gap-1 overflow-hidden">
                        <span className="text-[10px] font-black text-[#fabf37] uppercase tracking-tighter">{item.title}</span>
                        <span className="text-xs text-zinc-400 truncate max-w-[200px]">{item.url}</span>
                      </div>
                      <button 
                        onClick={() => handleRemove(index)}
                        className="text-zinc-600 hover:text-red-500 transition-colors p-2"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSave}
                className="w-full bg-[#fabf37] text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(250,191,55,0.2)]"
              >
                Sync with Factory
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}