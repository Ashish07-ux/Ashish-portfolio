import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Layers, Database, HeartHandshake, Sparkles, Check } from 'lucide-react';
import { TapeStrip, PushPin, StarburstDoodle, CurlySquiggle } from './Doodles';

interface SkillGroup {
  category: string;
  badge: string;
  icon: React.ElementType;
  colorTheme: string;
  tapeColor: 'yellow' | 'coral' | 'teal' | 'olive';
  skills: {
    name: string;
    bg: string;
    text: string;
    border: string;
    rotation: number;
  }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    badge: 'CORE CODE',
    icon: Code2,
    colorTheme: '#d4a017',
    tapeColor: 'yellow',
    skills: [
      { name: 'Python', bg: 'bg-teal-100', text: 'text-teal-900', border: 'border-teal-300', rotation: 3 },
      { name: 'C', bg: 'bg-stone-100', text: 'text-stone-800', border: 'border-stone-300', rotation: -2 },
      { name: 'C++', bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-300', rotation: -2 },
      { name: 'SQL', bg: 'bg-stone-800', text: 'text-white', border: 'border-stone-950', rotation: 4 },
    ],
  },
  {
    category: 'Technologies',
    badge: 'UI & WEB',
    icon: Layers,
    colorTheme: '#b22222',
    tapeColor: 'coral',
    skills: [
      { name: 'HTML', bg: 'bg-rose-100', text: 'text-rose-900', border: 'border-rose-300', rotation: 2 },
      { name: 'CSS', bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-300', rotation: -4 },
      { name: 'Bootstrap', bg: 'bg-purple-100', text: 'text-purple-900', border: 'border-purple-300', rotation: 2 },
    ],
  },
  {
    category: 'Databases & Tools',
    badge: 'STORAGE & DEV',
    icon: Database,
    colorTheme: '#556b2f',
    tapeColor: 'olive',
    skills: [
      { name: 'MySQL', bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-300', rotation: -2 },
      { name: 'MongoDB', bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-300', rotation: 2 },
      { name: 'Git', bg: 'bg-purple-100', text: 'text-purple-900', border: 'border-purple-300', rotation: -3 },
      { name: 'GitHub', bg: 'bg-stone-100', text: 'text-stone-800', border: 'border-stone-300', rotation: 2 },
      { name: 'VS Code', bg: 'bg-sky-100', text: 'text-sky-900', border: 'border-sky-300', rotation: -1.5 },
    ],
  },
  {
    category: 'Soft Skills',
    badge: 'COLLABORATION',
    icon: HeartHandshake,
    colorTheme: '#556b2f',
    tapeColor: 'olive',
    skills: [
      { name: 'Problem Solving', bg: 'bg-yellow-50', text: 'text-yellow-900', border: 'border-yellow-300', rotation: 2 },
      { name: 'Adaptability', bg: 'bg-lime-100', text: 'text-lime-900', border: 'border-lime-300', rotation: -2.5 },
      { name: 'Teamwork', bg: 'bg-orange-100', text: 'text-orange-900', border: 'border-orange-300', rotation: 1.8 },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [activeSticker, setActiveSticker] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 notebook-ruled-bg text-[#292524] border-t-2 border-stone-300 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#b22222]/15 border border-[#b22222] text-[#8b1818] font-tech text-xs tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#b22222]" />
          <span>SECTION 03 • SKILLS STICKER PACK</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 flex items-center justify-center gap-3">
          <span>Skills Sticker Pack</span>
          <span className="font-handwriting text-2xl sm:text-3xl text-[#b22222] font-normal">
            ★ peel &amp; tap
          </span>
        </h2>
        <p className="font-handwriting text-lg text-stone-600 mt-2">
          Interactive natural sticker badges from Ashish's developer toolkit
        </p>
        <div className="flex justify-center mt-1">
          <CurlySquiggle color="#d4a017" className="w-36" />
        </div>
      </div>

      {/* Grid of Scrapbook Skill Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, groupIdx) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-sm scrapbook-shadow border border-stone-300"
            >
              {/* Washi Tape Strip on Corner */}
              <TapeStrip
                className="absolute -top-3.5 left-8 w-24 z-20"
                variant={group.tapeColor}
                rotation={groupIdx % 2 === 0 ? -3 : 2}
              />

              {/* Header of Skill Sheet */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-dashed border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div
                    style={{ backgroundColor: `${group.colorTheme}20`, borderColor: group.colorTheme }}
                    className="w-9 h-9 rounded-md border flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" style={{ color: group.colorTheme }} />
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-bold text-stone-900 leading-none">
                      {group.category}
                    </h3>
                    <span className="font-tech text-[10px] text-stone-500 uppercase tracking-widest mt-1 block">
                      {group.badge}
                    </span>
                  </div>
                </div>

                <span className="font-handwriting text-base text-stone-500">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Interactive Sticker Badges */}
              <div className="flex flex-wrap gap-3 pt-1">
                {group.skills.map((skill, skillIdx) => {
                  const isHovered = activeSticker === skill.name;

                  return (
                    <motion.button
                      key={skillIdx}
                      onMouseEnter={() => setActiveSticker(skill.name)}
                      onMouseLeave={() => setActiveSticker(null)}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        transform: isHovered ? 'scale(1.1) rotate(0deg)' : `rotate(${skill.rotation}deg)`,
                      }}
                      className={`relative px-4 py-2 rounded-md font-tech text-xs sm:text-sm font-bold border-2 shadow-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${skill.bg} ${skill.text} ${skill.border} ${
                        isHovered ? 'shadow-lg z-20 ring-2 ring-stone-800' : ''
                      }`}
                    >
                      {/* Stamp border serrated corner aesthetic */}
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                      <span>{skill.name}</span>
                      {isHovered && <Check className="w-3.5 h-3.5 ml-0.5 animate-bounce" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom Scrapbook annotation */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span className="font-handwriting text-sm text-stone-600">
                  ★ verified from CV
                </span>
                <span className="font-tech text-[10px] uppercase">
                  STAMP #{groupIdx + 1}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
