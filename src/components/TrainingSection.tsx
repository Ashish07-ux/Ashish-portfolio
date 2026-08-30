import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Code, Calendar, Globe, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { TapeStrip, PaperClip, StarburstDoodle, HandArrow, CurlySquiggle } from './Doodles';

export const TrainingSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('Pointers');

  const topicDescriptions: Record<string, string> = {
    Arrays: 'Sequential data structuring, memory layouts, multi-dimensional buffers, and traversal techniques.',
    Functions: 'Modular code decomposition, parameter passing, return structures, and stack execution.',
    Pointers: 'Direct memory addressing, dynamic allocation, pointer arithmetic, and reference safety.',
    Structures: 'Custom compound types, struct encapsulation, memory alignment, and linked data abstractions.',
  };

  return (
    <section id="training" className="relative py-20 px-4 sm:px-6 lg:px-8 notebook-ruled-bg text-[#292524] border-t-2 border-stone-300 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#556b2f]/20 border border-[#556b2f] text-[#3f4f2c] font-tech text-xs tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
          <span>SECTION 05 • PRACTICUM &amp; TRAINING</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 flex items-center justify-center gap-3">
          <span>Hands-On Training</span>
          <span className="font-handwriting text-2xl sm:text-3xl text-[#556b2f] font-normal">
            ★ notebook card
          </span>
        </h2>
        <div className="flex justify-center mt-1">
          <CurlySquiggle color="#556b2f" className="w-36" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-sm scrapbook-shadow border border-stone-300"
        >
          {/* Top Washi Tape */}
          <TapeStrip className="absolute -top-3.5 left-12 w-28 z-20" variant="olive" rotation={-2} />
          <PaperClip className="absolute -top-4 right-10 z-20 w-7 h-14" color="#78716c" />

          <div className="space-y-6">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b-2 border-dashed border-stone-200">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-[#556b2f]/15 border border-[#556b2f]/40 text-[#43532f] font-tech text-xs font-bold uppercase">
                  TRAINING RECORD
                </span>
                <span className="font-tech text-xs text-stone-500 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-stone-400" />
                  <span>Online Platform</span>
                </span>
              </div>

              <div className="font-tech text-xs font-bold text-stone-700 flex items-center gap-1.5 bg-[#f9f7f2] px-3 py-1 rounded border border-stone-300">
                <Calendar className="w-3.5 h-3.5 text-[#b22222]" />
                <span>Jan 2026 – Mar 2026</span>
              </div>
            </div>

            {/* Course Title */}
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                C Programming &amp; Problem Solving
              </h3>
              <p className="font-handwriting text-xl text-[#b22222] mt-1">
                Core Low-Level Programming &amp; Memory Foundations
              </p>
            </div>

            {/* Bullet Details */}
            <div className="space-y-3 bg-[#f9f7f2] p-4 sm:p-5 rounded-md border border-stone-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#556b2f] flex-shrink-0 mt-0.5" />
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                  <strong className="text-stone-900 font-semibold">Fundamentals &amp; Logic:</strong> Practiced C programming fundamentals and problem-solving.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4a017] flex-shrink-0 mt-0.5" />
                <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                  <strong className="text-stone-900 font-semibold">Memory &amp; Data Structures:</strong> Worked with arrays, functions, pointers, and structures.
                </p>
              </div>
            </div>

            {/* Visual Handwritten Arrow Pipeline: Arrays -> Functions -> Pointers -> Structures */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-tech text-xs uppercase tracking-wider text-stone-500 font-bold">
                  CURRICULUM FLOW (TAP A MODULE TO INSPECT)
                </span>
                <span className="font-handwriting text-base text-[#b22222]">
                  handwritten flow →
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: 'Arrays', color: '#b22222', bg: 'bg-[#FFF1F0]', border: 'border-[#FB7185]' },
                  { name: 'Functions', color: '#556b2f', bg: 'bg-[#F0FDFA]', border: 'border-[#5EEAD4]' },
                  { name: 'Pointers', color: '#d4a017', bg: 'bg-[#FFFBEB]', border: 'border-[#FCD34D]' },
                  { name: 'Structures', color: '#556b2f', bg: 'bg-[#F7FEE7]', border: 'border-[#BEF264]' },
                ].map((item, index) => {
                  const isSelected = selectedTopic === item.name;

                  return (
                    <div key={item.name} className="relative flex flex-col items-center">
                      <button
                        onClick={() => setSelectedTopic(item.name)}
                        className={`w-full p-3.5 rounded-lg border-2 shadow-sm font-tech text-xs sm:text-sm font-bold text-center transition-all cursor-pointer ${
                          item.bg
                        } ${item.border} ${
                          isSelected
                            ? 'ring-2 ring-stone-900 scale-105 shadow-md z-10'
                            : 'hover:scale-102 opacity-90'
                        }`}
                      >
                        <span className="font-tech text-[10px] text-stone-400 block mb-0.5">
                          0{index + 1}
                        </span>
                        <span className="text-stone-900">{item.name}</span>
                      </button>

                      {index < 3 && (
                        <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                          <HandArrow direction="right" color="#78716c" className="w-5 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic detail explanation for selected module */}
              <div className="mt-4 p-3.5 rounded bg-[#1a1a1a] text-stone-100 font-tech text-xs border border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#d4a017]" />
                  <span className="text-[#d4a017] font-bold">MODULE [{selectedTopic}]:</span>
                  <span className="text-stone-300">{topicDescriptions[selectedTopic]}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
