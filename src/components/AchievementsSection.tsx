import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Code, Calendar, Star, Sparkles, CheckCheck } from 'lucide-react';
import { TapeStrip, PushPin, StarburstDoodle, CurlySquiggle } from './Doodles';

interface AchievementCard {
  title: string;
  date: string;
  description: string;
  icon: React.ElementType;
  goldRibbonText: string;
  tapeColor: 'yellow' | 'coral';
  rotation: number;
}

const achievements: AchievementCard[] = [
  {
    title: 'Cybersecurity Certification',
    date: 'March 2026',
    description: 'Completed a Cybersecurity certification with foundational security knowledge.',
    icon: ShieldCheck,
    goldRibbonText: 'FOUNDATIONAL SECURITY',
    tapeColor: 'yellow',
    rotation: -1.2,
  },
  {
    title: 'College Technical & Coding Activities',
    date: 'December 2025',
    description: 'Participated in college-level technical and coding activities.',
    icon: Code,
    goldRibbonText: 'TECHNICAL PARTICIPATION',
    tapeColor: 'coral',
    rotation: 1.5,
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 notebook-ruled-bg text-[#292524] border-t-2 border-stone-300 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#d4a017]/20 border border-[#d4a017] text-[#8a5800] font-tech text-xs tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#d4a017]" />
          <span>SECTION 07 • KEY ACTIVITIES</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 flex items-center justify-center gap-3">
          <span>Achievements &amp; Activities</span>
          <span className="font-handwriting text-2xl sm:text-3xl text-[#d4a017] font-normal">
            ★ gold stamps
          </span>
        </h2>
        <div className="flex justify-center mt-1">
          <CurlySquiggle color="#d4a017" className="w-40" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              style={{ transform: `rotate(${item.rotation}deg)` }}
              className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-sm scrapbook-shadow border-2 border-stone-300 flex flex-col justify-between"
            >
              {/* PushPin on corner */}
              <PushPin className="absolute -top-3 right-6 z-20" color={index === 0 ? '#d4a017' : '#b22222'} />
              <TapeStrip className="absolute -top-3 left-6 w-20 z-10" variant={item.tapeColor} rotation={-3} />

              <div>
                {/* Gold-stamp ribbon badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FFFBEB] border-2 border-[#d4a017] text-[#8A5800] font-tech text-[11px] font-extrabold uppercase shadow-sm mb-4">
                  <Star className="w-3.5 h-3.5 fill-[#d4a017] text-[#d4a017]" />
                  <span>{item.goldRibbonText}</span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl font-bold text-stone-900 leading-tight mb-2">
                  {item.title}
                </h3>

                {/* Description Quote from CV */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed bg-[#f9f7f2] p-4 rounded border-l-4 border-[#d4a017] mb-4">
                  "{item.description}"
                </p>
              </div>

              {/* Date & Verified Stamp footer */}
              <div className="pt-3 border-t border-dashed border-stone-200 flex items-center justify-between font-tech text-xs">
                <span className="text-stone-500 font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#b22222]" />
                  <span>{item.date}</span>
                </span>

                <span className="font-handwriting text-base text-[#556b2f] font-bold">
                  ★ Verified Activity
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
