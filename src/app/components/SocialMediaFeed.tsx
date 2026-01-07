import React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const socialPosts = [
  { icon: Facebook, platform: "Facebook", content: "Introducing our new eco-friendly line! #Sustainable #Paperware", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=500&q=80", time: "2h ago", link: "https://facebook.com" },
  { icon: Instagram, platform: "Instagram", content: "Behind the scenes at our factory. Precision in every cut. 🏭✨", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80", time: "5h ago", link: "https://instagram.com" },
  { icon: Linkedin, platform: "LinkedIn", content: "We are proud to announce our partnership with Global Retail Co. Expanding our logistics network.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80", time: "1d ago", link: "https://linkedin.com" },
  { icon: Facebook, platform: "Facebook", content: "Customer spotlight: See how Cafe Z uses our double-wall cups. ☕", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80", time: "2d ago", link: "https://facebook.com" },
  { icon: Instagram, platform: "Instagram", content: "Fresh off the press! New marketing materials for the upcoming season.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80", time: "3d ago", link: "https://instagram.com" },
];

export function SocialMediaFeed() {
  return (
    <div className="mb-32 container mx-auto px-4">
       <div className="flex items-center gap-3 mb-12 justify-center">
         <div className="h-[2px] w-12 bg-[#fabf37]" />
         <span className="text-black text-xs font-black uppercase tracking-[0.3em]">Live Social Feed</span>
         <div className="h-[2px] w-12 bg-[#fabf37]" />
       </div>
       <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fdfaf3] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fdfaf3] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
             {[...socialPosts, ...socialPosts, ...socialPosts].map((post, idx) => (
               <div 
                 onClick={() => window.open(post.link, '_blank')}
                 key={idx} 
                 className="w-[300px] shrink-0 bg-white border border-zinc-100 p-6 rounded-[32px] shadow-sm flex flex-col gap-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group block cursor-pointer"
               >
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="size-8 rounded-full bg-zinc-100 border border-zinc-200 p-1">
                           <div className="w-full h-full bg-black rounded-full" />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black uppercase">Paperware</span>
                           <span className="text-[8px] text-zinc-400 font-bold">{post.time}</span>
                        </div>
                     </div>
                     <post.icon className={`size-5 ${post.platform === 'Facebook' ? 'text-blue-600' : post.platform === 'Instagram' ? 'text-pink-600' : 'text-blue-700'}`} />
                  </div>
                  <p className="text-[10px] font-medium text-zinc-500 leading-relaxed line-clamp-2">
                     {post.content}
                  </p>
                  {post.image && (
                    <div className="h-40 rounded-2xl bg-zinc-100 overflow-hidden relative group/img">
                       <ImageWithFallback src={post.image} alt="Social Post" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                    </div>
                  )}
                  <div className="flex items-center gap-4 text-[9px] font-bold text-zinc-300 pt-2 border-t border-zinc-50">
                     <div className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"><ThumbsUp className="size-3" /> Like</div>
                     <div className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors"><MessageCircle className="size-3" /> Comment</div>
                     <div className="flex items-center gap-1 ml-auto hover:text-black cursor-pointer transition-colors"><Share2 className="size-3" /> Share</div>
                  </div>
               </div>
             ))}
          </motion.div>
       </div>
    </div>
  );
}