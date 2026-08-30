import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, BookMarked, Sparkles, CheckCircle2 } from 'lucide-react';
import { TapeStrip, PushPin, StarburstDoodle, HandArrow, CurlySquiggle } from './Doodles';

interface EducationEntry {
  institution: string;
  period: string;
  degreeOrClass: string;
  scoreType: string;
  scoreValue: string;
  tapeColor: 'yellow' | 'coral' | 'teal' | 'olive';
  badgeColor: string;
  rotation: number;
  highlightText: string;
}

const educationList: EducationEntry[] = [
  {
    institution: 'Lovely Professional University',
    period: '2025 – Present',
    degreeOrClass: 'B.Tech – Computer Science and Engineering',
    scoreType: 'CGPA',
    scoreValue: '8.3',
    tapeColor: 'yellow',
    badgeColor: '#d4a017',
    rotation: -1,
    highlightText: 'Current Undergrad Journey',
  },
  {
    institution: 'DAV Public School',
    period: 'March 2023 – May 2024',
    degreeOrClass: 'Class XII',
    scoreType: 'Percentage',
    scoreValue: '80.1%',
    tapeColor: 'coral',
    badgeColor: '#b22222',
    rotation: 1.5,
    highlightText: 'Senior Secondary',
  },
  {
    institution: 'DAV Public School',
    period: 'March 2021 – May 2022',
    degreeOrClass: 'Class X',
    scoreType: 'Percentage',
    scoreValue: '86.4%',
    tapeColor: 'olive',
    badgeColor: '#556b2f',
    rotation: -1.2,
    highlightText: 'Secondary Schooling',
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 notebook-grid-bg text-[#292524] border-t-2 border-stone-300 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#556b2f]/20 border border-[#556b2f] text-[#3f5022] font-tech text-xs tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#556b2f]" />
          <span>SECTION 02 • ACADEMIC TIMELINE</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 flex items-center justify-center gap-3">
          <span>Education Timeline</span>
          <span className="font-handwriting text-2xl sm:text-3xl text-[#556b2f] font-normal">
            ★ milestones
          </span>
        </h2>
        <div className="flex justify-center mt-1">
          <CurlySquiggle color="#556b2f" className="w-36" />
        </div>
      </div>

      {/* Hand-Drawn Timeline Tree */}
      <div className="max-w-3xl mx-auto relative">
        {/* Central Hand-Drawn Timeline Dotted Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-stone-400 z-0" />

        <div className="space-y-12 relative z-10">
          {educationList.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Center Badge Pin */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-stone-800 shadow-md flex items-center justify-center z-20">
                  <GraduationCap className="w-4 h-4 text-stone-800" />
                </div>

                {/* Content Notebook Card */}
                <div
                  className={`w-full sm:w-[44%] pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'
                  }`}
                >
                  <div
                    style={{ transform: `rotate(${item.rotation}deg)` }}
                    className="relative bg-white p-5 sm:p-6 rounded-sm scrapbook-shadow scrapbook-shadow-hover border border-stone-300"
                  >
                    {/* Washi Tape / PushPin on Card */}
                    <TapeStrip
                      className={`absolute -top-3 ${isEven ? 'right-6' : 'left-6'} w-20 z-20`}
                      variant={item.tapeColor}
                      rotation={isEven ? -2 : 3}
                    />

                    {/* Date Pill Tag */}
                    <div
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 border border-stone-300 font-tech text-xs text-stone-700 font-bold mb-2 ${
                        isEven ? 'sm:ml-auto' : ''
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#b22222]" />
                      <span>{item.period}</span>
                    </div>

                    {/* Institution Name */}
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold text-stone-900 leading-tight mb-1">
                      {item.institution}
                    </h3>

                    {/* Degree / Class */}
                    <p className="font-sans text-sm sm:text-base font-semibold text-stone-700 mb-3">
                      {item.degreeOrClass}
                    </p>

                    {/* Score / Grade Stamp Badge */}
                    <div
                      className={`flex items-center gap-2 pt-2 border-t border-dashed border-stone-200 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      <span className="font-tech text-xs text-stone-500 uppercase tracking-wider">
                        {item.scoreType}:
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#f9f7f2] border-2 border-stone-800 text-stone-900 font-tech text-sm font-extrabold shadow-sm">
                        <Award className="w-3.5 h-3.5 text-[#d4a017]" />
                        <span>{item.scoreValue}</span>
                      </span>
                    </div>

                    {/* Handwritten annotation note */}
                    <div className="mt-3">
                      <span className="font-handwriting text-base text-[#b22222] font-bold">
                        ★ {item.highlightText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for the opposite side */}
                <div className="hidden sm:block sm:w-[44%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
