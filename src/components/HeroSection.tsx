import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Terminal, ShieldCheck, Cpu } from 'lucide-react';
import { StarburstDoodle, TapeStrip, HandArrow, CurlySquiggle } from './Doodles';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden dark-canvas-grid text-stone-100 select-none border-b-4 border-stone-800"
    >
      {/* Organic Natural Tones Blobs with Mix Blend */}
      {/* Top Left Warm Mustard Ochre Blob */}
      <div
        className="absolute -top-12 -left-12 w-60 h-60 sm:w-96 sm:h-96 bg-[#d4a017] rounded-full mix-blend-screen opacity-60 pointer-events-none transform-gpu animate-pulse duration-1000"
        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:12px_12px]" />
      </div>

      {/* Top Right Olive Moss Blob */}
      <div
        className="absolute top-12 right-12 sm:right-32 w-52 h-52 sm:w-80 sm:h-80 bg-[#556b2f] rounded-full mix-blend-screen opacity-50 pointer-events-none transform-gpu"
        style={{ borderRadius: '60% 40% 30% 70% / 50% 30% 70% 50%' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:14px_14px]" />
      </div>

      {/* Bottom Right Terracotta Brick Red Blob */}
      <div
        className="absolute -bottom-16 -right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#b22222] rounded-full mix-blend-screen opacity-45 pointer-events-none transform-gpu"
        style={{ borderRadius: '30% 70% 50% 50% / 50% 60% 40% 40%' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:12px_12px]" />
      </div>

      {/* Subtle Background Watermark from Design */}
      <div className="absolute right-8 bottom-12 text-white/10 text-[40px] sm:text-[70px] font-black rotate-12 opacity-10 select-none pointer-events-none font-tech hidden lg:block">
        BUILD → LEARN → IMPROVE
      </div>

      {/* Floating Scrapbook Doodle Elements Around Hero */}
      <div className="absolute top-24 left-8 sm:left-24 hidden sm:block rotate-[-6deg]">
        <div className="relative bg-[#faf8f2] text-[#1c1917] px-3.5 py-1.5 rounded-sm shadow-md font-handwriting text-lg font-bold border border-stone-300">
          <TapeStrip className="absolute -top-2 left-3 w-12" variant="teal" rotation={-5} />
          <span>C++</span>
        </div>
      </div>

      <div className="absolute top-28 right-8 sm:right-28 hidden sm:block rotate-[8deg]">
        <div className="relative bg-[#faf8f2] text-[#1c1917] px-3.5 py-1.5 rounded-sm shadow-md font-handwriting text-lg font-bold border border-stone-300">
          <TapeStrip className="absolute -top-2 right-2 w-12" variant="coral" rotation={4} />
          <span>Python</span>
        </div>
      </div>

      <div className="absolute bottom-28 left-6 sm:left-20 hidden md:block rotate-[5deg]">
        <div className="relative bg-[#faf8f2] text-[#1c1917] px-4 py-2 rounded-sm shadow-md font-handwriting text-base font-bold border border-stone-300 flex items-center gap-1.5">
          <TapeStrip className="absolute -top-2 left-6 w-14" variant="yellow" rotation={-2} />
          <ShieldCheck className="w-4 h-4 text-[#556b2f]" />
          <span>Problem Solving</span>
        </div>
      </div>

      <div className="absolute bottom-32 right-6 sm:right-24 hidden md:block rotate-[-4deg]">
        <div className="relative bg-[#f5f2eb] text-[#b22222] px-4 py-2 rounded-sm shadow-md font-tech text-xs tracking-wider font-bold border border-[#b22222]/40 flex items-center gap-2">
          <TapeStrip className="absolute -top-2.5 right-4 w-14" variant="olive" rotation={6} />
          <Cpu className="w-3.5 h-3.5 text-[#b22222]" />
          <span>BUILD → LEARN → IMPROVE</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Prominent Scrapbook Tag from Natural Tones Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#d4a017] text-stone-950 shadow-md border-2 border-stone-900 transform -rotate-2"
        >
          <Sparkles className="w-4 h-4 text-stone-950" />
          <span className="font-tech text-xs sm:text-sm font-black uppercase tracking-widest">
            Computer Science Undergrad
          </span>
          <StarburstDoodle color="#1a1a1a" size={18} className="ml-0.5" />
        </motion.div>

        {/* Main Headline styled with Natural Tones serif and Georgia/Fraunces */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-3xl uppercase italic"
        >
          HEY, I'M ASHISH — I{' '}
          <span className="relative inline-block text-[#d4a017] underline decoration-wavy decoration-[#d4a017]/60 underline-offset-8">
            BUILD
          </span>
          ,<br className="hidden sm:inline" /> DEBUG &amp; KEEP{' '}
          <span className="relative inline-block text-[#b22222]">
            LEARNING.
            <CurlySquiggle className="absolute -bottom-3.5 left-0 w-full text-[#b22222]" color="#b22222" />
          </span>
        </motion.h1>

        {/* Supporting Line in Monospace Tech Style */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-tech text-stone-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 tracking-wider uppercase"
        >
          TURNING CODE, LOGIC AND IDEAS INTO PROJECTS THAT ACTUALLY WORK.
        </motion.p>

        {/* Mobile quick-tag doodles for small screens */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:hidden mb-8">
          <span className="px-2.5 py-1 bg-white/10 rounded-md font-handwriting text-sm text-[#d4a017] border border-white/10">
            ★ C++ &amp; Python
          </span>
          <span className="px-2.5 py-1 bg-white/10 rounded-md font-handwriting text-sm text-[#84cc16] border border-white/10">
            ★ Problem Solving
          </span>
          <span className="px-2.5 py-1 bg-white/10 rounded-md font-tech text-[10px] text-[#fca5a5] border border-white/10">
            BUILD → LEARN → IMPROVE
          </span>
        </div>

        {/* Action Buttons in Natural Tones */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold"
        >
          <a
            href="#projects"
            className="group relative px-6 py-3.5 rounded-xl bg-[#d4a017] text-stone-950 font-black tracking-wide shadow-lg hover:bg-[#e5b32e] active:scale-95 transition-all flex items-center gap-2 border-2 border-stone-950 uppercase text-xs"
          >
            <span>Explore Projects</span>
            <span className="font-handwriting text-xl group-hover:translate-x-1 transition-transform">★</span>
          </a>

          <a
            href="#about"
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 font-bold backdrop-blur-sm border border-stone-700 active:scale-95 transition-all flex items-center gap-2 uppercase tracking-wider text-xs"
          >
            <Terminal className="w-4 h-4 text-[#d4a017]" />
            <span>Read Notebook</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 sm:mt-16 flex flex-col items-center gap-1 text-stone-400"
        >
          <span className="font-handwriting text-base text-[#d4a017]">Flip the notebook page</span>
          <HandArrow direction="down" color="#d4a017" className="w-6 h-8 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
