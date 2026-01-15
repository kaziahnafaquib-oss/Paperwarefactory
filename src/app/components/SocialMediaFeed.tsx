import React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Youtube, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useSocialMedia } from "../context/SocialMediaContext";

export function SocialMediaFeed() {
  const { posts } = useSocialMedia();

  // Filter visible posts and duplicate for infinite scroll effect
  const visiblePosts = posts.filter(p => !p.isHidden);
  // Ensure we have enough posts for the scroll effect by repeating if necessary
  const displayPosts = visiblePosts.length > 0 ? 
    [...visiblePosts, ...visiblePosts, ...visiblePosts, ...visiblePosts].slice(0, 12) : []; 

  const getIcon = (platform: string) => {
    switch(platform) {
      case 'Instagram': return Instagram;
      case 'Facebook': return Facebook;
      case 'LinkedIn': return Linkedin;
      case 'Youtube': return Youtube;
      default: return Instagram;
    }
  };

  const getColor = (platform: string) => {
    switch(platform) {
      case 'Instagram': return 'text-pink-600';
      case 'Facebook': return 'text-blue-600';
      case 'LinkedIn': return 'text-blue-700';
      case 'Youtube': return 'text-red-600';
      default: return 'text-zinc-600';
    }
  };

  return (
    <div className="mb-32 container mx-auto px-4">
       <div className="flex items-center gap-3 mb-12 justify-center">
         <div className="h-[2px] w-12 bg-[#fabf37]" />
         <span className="text-black text-xs font-black uppercase tracking-[0.3em]">Live Social Feed</span>
         <div className="h-[2px] w-12 bg-[#fabf37]" />
       </div>
       <div className="relative w-full overflow-hidden">
          {/* Gradient Masks - Updated for Dark Cards */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fdfaf3] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fdfaf3] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
             {[...displayPosts, ...displayPosts].map((post, idx) => {
               const Icon = getIcon(post.platform);
               return (
               <div 
                 onClick={() => post.url && window.open(post.url, '_blank')}
                 key={`${post.id}-${idx}`} 
                 className="w-[300px] shrink-0 bg-black border border-white/10 p-4 rounded-[32px] flex flex-col gap-4 hover:border-[#fabf37] hover:-translate-y-2 transition-all duration-300 group block cursor-pointer"
               >
                  <div className="relative h-48 rounded-2xl bg-zinc-900 overflow-hidden group/img">
                     <ImageWithFallback src={post.img} alt="Social Post" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-80 group-hover:opacity-100" />
                     
                     {/* Platform Badge */}
                     <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2">
                        <Icon className={`size-3 ${getColor(post.platform)}`} />
                        <span className="text-[9px] font-black uppercase text-white tracking-widest">{post.platform}</span>
                     </div>
                  </div>

                  <div className="px-2 pb-2">
                    <p className="text-[10px] font-medium text-zinc-400 leading-relaxed line-clamp-2 mb-4 group-hover:text-white transition-colors">
                       {post.caption}
                    </p>
                    
                    <div className="flex items-center gap-4 text-[9px] font-bold text-zinc-500 pt-3 border-t border-white/10">
                       <div className="flex items-center gap-1.5 hover:text-[#fabf37] cursor-pointer transition-colors">
                          <ThumbsUp className="size-3" /> 
                          <span>{Math.floor(Math.random() * 200) + 12}</span>
                       </div>
                       <div className="flex items-center gap-1.5 hover:text-[#fabf37] cursor-pointer transition-colors">
                          <MessageCircle className="size-3" />
                          <span>{Math.floor(Math.random() * 40) + 2}</span>
                       </div>
                       <div className="ml-auto text-[8px] font-black uppercase tracking-widest text-zinc-600">
                          {post.date}
                       </div>
                    </div>
                  </div>
               </div>
             )})}
          </motion.div>
       </div>
    </div>
  );
}