import React from 'react';
import { StarPunchHole } from './Doodles';

export const SpiralDivider: React.FC = () => {
  // We generate an array of spiral loops across the screen width
  const loopCount = 28;
  const loops = Array.from({ length: loopCount });

  return (
    <div className="relative w-full z-20 select-none overflow-hidden">
      {/* Upper edge dark shadow transition */}
      <div className="h-4 bg-gradient-to-b from-[#1a1a1a] to-[#262626]" />

      {/* Binder Spine Strip in Natural Stone */}
      <div className="relative w-full bg-stone-300 border-y-2 border-stone-400 py-3 sm:py-3.5 shadow-inner flex items-center justify-between px-2 sm:px-4">
        {/* Wire binding rings */}
        <div className="w-full flex items-center justify-around gap-1 sm:gap-2">
          {loops.map((_, index) => (
            <div key={index} className="relative flex flex-col items-center flex-shrink-0">
              {/* Top hole punch */}
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-stone-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-stone-600" />

              {/* Metallic Coil Ring */}
              <div className="w-2.5 sm:w-3.5 h-9 sm:h-12 -my-2 rounded-full bg-gradient-to-r from-stone-400 via-stone-100 to-stone-500 shadow-md border border-stone-400/80 z-30 transform -rotate-6" />

              {/* Bottom hole punch */}
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#f9f7f2] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-stone-400" />
            </div>
          ))}
        </div>

        {/* Notebook Spiral Spine decorative center tag */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40 bg-[#1a1a1a]/95 border border-stone-700 px-3.5 py-0.5 rounded-full text-stone-300 text-[10px] sm:text-xs font-tech tracking-widest uppercase shadow-md flex items-center gap-1.5 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017]" />
          <span>ASHISH'S SPIRAL JOURNAL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017]" />
        </div>
      </div>

      {/* Lower paper lip with star-punched holes decoration and paper shadow */}
      <div className="relative bg-[#f9f7f2] h-6 sm:h-8 border-t border-stone-200 shadow-sm flex items-center justify-around px-4">
        {Array.from({ length: 14 }).map((_, i) => (
          <StarPunchHole key={i} size={14} className="opacity-25 hidden sm:flex text-stone-500" />
        ))}
      </div>
    </div>
  );
};
