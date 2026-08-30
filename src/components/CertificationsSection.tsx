import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Database, FileCode, Sparkles } from 'lucide-react';
import { TapeStrip, PaperClip, StarburstDoodle, CurlySquiggle } from './Doodles';

interface CertItem {
  title: string;
  issuer: string;
  date: string;
  badgeLabel: 'CERTIFIED' | 'COMPLETED' | 'LEARNING';
  badgeColor: string;
  tapeVariant: 'yellow' | 'coral' | 'teal' | 'olive' | 'white';
  rotation: number;
  icon: React.ElementType;
}

const certifications: CertItem[] = [
  {
    title: 'C Programming Fundamentals',
    issuer: 'Infosys Springboard',
    date: 'May 2026',
    badgeLabel: 'CERTIFIED',
    badgeColor: 'bg-[#b22222] text-white border-stone-900',
    tapeVariant: 'coral',
    rotation: -1.5,
    icon: FileCode,
  },
  {
    title: 'Database Management Systems',
    issuer: 'Oracle',
    date: 'May 2026',
    badgeLabel: 'COMPLETED',
    badgeColor: 'bg-[#556b2f] text-white border-stone-900',
    tapeVariant: 'olive',
    rotation: 1.8,
    icon: Database,
  },
  {
    title: 'Python Programming Fundamentals',
    issuer: 'Infosys Springboard',
    date: 'Dec 2025',
    badgeLabel: 'CERTIFIED',
    badgeColor: 'bg-[#d4a017] text-stone-950 border-stone-900',
    tapeVariant: 'yellow',
    rotation: -1.2,
    icon: ShieldCheck,
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 notebook-grid-bg text-[#292524] border-t-2 border-stone-300 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#b22222]/15 border border-[#b22222] text-[#8b1818] font-tech text-xs tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#b22222]" />
          <span>SECTION 06 • CREDENTIAL VAULT</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 flex items-center justify-center gap-3">
          <span>Official Certifications</span>
          <span className="font-handwriting text-2xl sm:text-3xl text-[#b22222] font-normal">
            ★ verified credentials
          </span>
        </h2>
        <div className="flex justify-center mt-1">
          <CurlySquiggle color="#b22222" className="w-36" />
        </div>
      </div>

      {/* Grid of Stamp Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ y: -6, rotate: 0 }}
              style={{ transform: `rotate(${cert.rotation}deg)` }}
              className="relative bg-white/95 backdrop-blur-sm p-6 rounded-sm scrapbook-shadow border-2 border-stone-300 flex flex-col justify-between"
            >
              {/* Tape Strip */}
              <TapeStrip
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 z-20"
                variant={cert.tapeVariant}
                rotation={index % 2 === 0 ? -2 : 3}
              />

              <div>
                {/* Status Stamp Top Badge */}
                <div className="flex justify-between items-start mb-4 pt-1">
                  <div className="w-10 h-10 rounded-full bg-[#f9f7f2] border-2 border-stone-800 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-stone-800" />
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded-sm font-tech text-[10px] font-extrabold tracking-widest uppercase border shadow-sm ${cert.badgeColor}`}
                  >
                    {cert.badgeLabel}
                  </span>
                </div>

                {/* Cert Title */}
                <h3 className="font-editorial text-xl font-bold text-stone-900 leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Issuer Organization */}
                <p className="font-tech text-xs text-stone-600 font-semibold mb-4">
                  Issuer: <span className="text-stone-900 font-bold">{cert.issuer}</span>
                </p>
              </div>

              {/* Date & Bottom Stamp Badge */}
              <div className="pt-4 border-t-2 border-dashed border-stone-200 flex items-center justify-between">
                <span className="font-tech text-xs text-stone-500 font-bold">
                  {cert.date}
                </span>

                <div className="flex items-center gap-1 font-handwriting text-base text-[#b22222] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COMPLETED</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
