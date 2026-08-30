import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { StarburstDoodle, TapeStrip, HandArrow } from './Doodles';

export const ContactFooter: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="relative text-stone-100 overflow-hidden">
      {/* Banner Note on Lined Paper before tear */}
      <div className="bg-[#f9f7f2] notebook-ruled-bg py-14 px-4 sm:px-6 text-center border-t-2 border-stone-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block relative bg-white px-6 sm:px-10 py-4 rounded-sm scrapbook-shadow border-2 border-stone-800 rotate-[-1deg]"
        >
          <TapeStrip className="absolute -top-3 left-8 w-20 z-10" variant="yellow" rotation={2} />
          <TapeStrip className="absolute -top-3 right-8 w-20 z-10" variant="coral" rotation={-3} />

          <p className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-[#b22222] font-bold tracking-wide">
            "THIS PORTFOLIO IS SHORT, SIMPLE &amp; BUILT WITH CODE :P"
          </p>
          <p className="font-tech text-xs text-stone-500 uppercase tracking-widest mt-1">
            — Ashish Raj • B.Tech CSE Undergrad
          </p>
        </motion.div>
      </div>

      {/* Realistic Jagged Torn Paper SVG Transition */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 select-none">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 fill-[#1a1a1a] text-[#1a1a1a] drop-shadow-md"
        >
          <path d="M0,0 L35,28 L70,12 L110,36 L155,18 L200,40 L250,15 L295,38 L345,10 L390,32 L440,16 L490,44 L535,12 L580,36 L625,14 L675,40 L720,18 L765,42 L810,15 L855,38 L900,12 L945,35 L990,16 L1035,42 L1080,18 L1125,36 L1165,15 L1200,32 L1200,60 L0,60 Z" />
        </svg>
      </div>

      {/* Dark Canvas Footer Container */}
      <div className="bg-[#1a1a1a] dark-canvas-grid pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact Section Header */}
          <div className="text-center mb-12">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#d4a017] block mb-2">
              Ready to chat, collaborate or discuss projects?
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white">
              Get In Touch
            </h2>
            <p className="font-tech text-xs sm:text-sm text-stone-400 mt-2 uppercase tracking-wider">
              Feel free to reach out via Email, LinkedIn, GitHub or Phone
            </p>
          </div>

          {/* 4 Interactive Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#222222] border border-stone-700 shadow-lg flex items-center justify-between group hover:border-[#b22222] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#b22222]/15 border border-[#b22222]/40 flex items-center justify-center text-[#b22222]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-tech text-[10px] text-stone-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href="mailto:ashishraj0702@gmail.com"
                    className="font-tech text-sm sm:text-base font-bold text-white hover:text-[#b22222] transition-colors"
                  >
                    ashishraj0702@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => copyToClipboard('ashishraj0702@gmail.com', 'email')}
                  title="Copy Email"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 transition-colors cursor-pointer"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Mobile Card */}
            <div className="p-5 rounded-xl bg-[#222222] border border-stone-700 shadow-lg flex items-center justify-between group hover:border-[#556b2f] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#556b2f]/20 border border-[#556b2f]/40 flex items-center justify-center text-[#8cb34e]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-tech text-[10px] text-stone-400 uppercase tracking-wider block">
                    Mobile Phone
                  </span>
                  <a
                    href="tel:+919273456123"
                    className="font-tech text-sm sm:text-base font-bold text-white hover:text-[#8cb34e] transition-colors"
                  >
                    +91 9273456123
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => copyToClipboard('+919273456123', 'phone')}
                  title="Copy Mobile"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 transition-colors cursor-pointer"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://l1nk.dev/v7dk4jm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#222222] border border-stone-700 shadow-lg flex items-center justify-between group hover:border-[#38bdf8] transition-all hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#0077B5]/15 border border-[#0077B5]/40 flex items-center justify-center text-[#38bdf8]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-tech text-[10px] text-stone-400 uppercase tracking-wider block">
                    Professional Profile
                  </span>
                  <span className="font-tech text-sm sm:text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    LinkedIn / Ashish Raj
                  </span>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-white" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Ashish07-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#222222] border border-stone-700 shadow-lg flex items-center justify-between group hover:border-[#d4a017] transition-all hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#d4a017]/15 border border-[#d4a017]/40 flex items-center justify-center text-[#d4a017]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-tech text-[10px] text-stone-400 uppercase tracking-wider block">
                    Source Code &amp; Repos
                  </span>
                  <span className="font-tech text-sm sm:text-base font-bold text-white group-hover:text-[#d4a017] transition-colors">
                    github.com/Ashish07-ux
                  </span>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-white" />
            </a>
          </div>

          {/* Bottom Barcode & Handwritten Footer Label */}
          <div className="pt-8 border-t border-stone-800 flex flex-col items-center justify-center text-center space-y-4">
            {/* Handwritten Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-stone-700">
              <Sparkles className="w-4 h-4 text-[#d4a017]" />
              <span className="font-handwriting text-xl text-[#d4a017] font-bold">
                BUILT BY ASHISH RAJ
              </span>
            </div>

            {/* Stylized Barcode Graphic */}
            <div className="flex flex-col items-center bg-[#f9f7f2] text-stone-900 p-4 rounded-sm shadow-md max-w-xs border border-stone-300">
              {/* Barcode Lines */}
              <div className="flex items-center justify-center gap-[2px] h-12 w-56 select-none overflow-hidden">
                {[
                  3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 4,
                  1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 2, 1, 3,
                ].map((w, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${w * 1.5}px` }}
                    className="h-full bg-black flex-shrink-0"
                  />
                ))}
              </div>

              {/* Barcode Text */}
              <span className="font-tech text-[11px] font-bold tracking-widest uppercase mt-1.5 text-stone-800">
                I'M MIMICKING A NOTEBOOK
              </span>
              <span className="font-tech text-[9px] text-stone-500 tracking-wider">
                LPU • CSE • 2025-PRESENT
              </span>
            </div>

            <p className="text-stone-500 text-xs font-tech pt-2">
              © {new Date().getFullYear()} Ashish Raj. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
