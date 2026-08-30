import React from 'react';

export const StarburstDoodle: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#EAA838',
  size = 28,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none ${className}`}
  >
    <path
      d="M20 2V38M2 20H38M7.5 7.5L32.5 32.5M7.5 32.5L32.5 7.5"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const StarIconDoodle: React.FC<{ className?: string; color?: string; size?: number; fill?: string }> = ({
  className = '',
  color = '#EAA838',
  size = 24,
  fill = 'currentColor',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M12 2L14.8 8.6L22 9.2L16.5 14L18.2 21.1L12 17.3L5.8 21.1L7.5 14L2 9.2L9.2 8.6L12 2Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandArrow: React.FC<{ className?: string; color?: string; direction?: 'right' | 'down' | 'curve' }> = ({
  className = '',
  color = '#E05A47',
  direction = 'right',
}) => {
  if (direction === 'curve') {
    return (
      <svg
        width="60"
        height="36"
        viewBox="0 0 60 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M4 8C18 3 44 2 52 24M52 24L44 20M52 24L56 16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'down') {
    return (
      <svg
        width="32"
        height="48"
        viewBox="0 0 32 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M16 4C14 18 17 32 16 44M16 44L8 36M16 44L24 37"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="48"
      height="24"
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 12C18 10 32 13 44 12M44 12L36 5M44 12L36 19"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CurlySquiggle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#2E8B92',
}) => (
  <svg
    width="84"
    height="16"
    viewBox="0 0 84 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 11C12 3 18 14 26 8C34 2 40 13 48 8C56 3 62 13 70 8C74 5 78 7 81 9"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PaperClip: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#94A3B8',
}) => (
  <svg
    width="28"
    height="50"
    viewBox="0 0 28 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-md ${className}`}
  >
    <path
      d="M8 14V36C8 41.5228 12.4772 46 18 46C23.5228 46 28 41.5228 28 36V10C28 4.47715 23.5228 0 18 0C12.4772 0 8 4.47715 8 10V34C8 37.3137 10.6863 40 14 40C17.3137 40 20 37.3137 20 34V12"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const PushPin: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#DE5B49',
}) => (
  <svg
    width="26"
    height="32"
    viewBox="0 0 26 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-md ${className}`}
  >
    <circle cx="13" cy="11" r="8" fill={color} stroke="#B83F30" strokeWidth="1.5" />
    <circle cx="11" cy="9" r="2.5" fill="#FFFFFF" fillOpacity="0.6" />
    <path d="M13 19V30" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const TapeStrip: React.FC<{
  className?: string;
  variant?: 'yellow' | 'coral' | 'teal' | 'olive' | 'white';
  rotation?: number;
}> = ({ className = '', variant = 'yellow', rotation = 0 }) => {
  const colorMap = {
    yellow: 'bg-[#FEEF72]/85 border-y border-[#F3DB36]/40',
    coral: 'bg-[#FFA599]/85 border-y border-[#F87171]/40',
    teal: 'bg-[#99EBE5]/85 border-y border-[#2DD4BF]/40',
    olive: 'bg-[#D3E5B7]/85 border-y border-[#A3E635]/40',
    white: 'bg-white/75 border-y border-stone-200/60',
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`h-5 w-20 shadow-sm backdrop-blur-[1px] ${colorMap[variant]} ${className}`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black/5 clip-jagged" />
      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-black/5 clip-jagged" />
    </div>
  );
};

export const StarPunchHole: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 18,
}) => (
  <div
    style={{ width: size, height: size }}
    className={`relative flex items-center justify-center ${className}`}
  >
    <svg
      viewBox="0 0 24 24"
      fill="#121316"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
    >
      <path d="M12 2L14.6 8.5L21.5 9.1L16.2 13.8L17.8 20.6L12 17L6.2 20.6L7.8 13.8L2.5 9.1L9.4 8.5L12 2Z" />
    </svg>
  </div>
);

export const SpiralRing: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex flex-col items-center select-none ${className}`}>
    {/* Upper loop of metallic spiral ring */}
    <div className="w-4 h-11 sm:w-5 sm:h-14 rounded-full bg-gradient-to-r from-stone-400 via-stone-100 to-stone-600 shadow-md border border-stone-400/40 relative z-20" />
    {/* Shadow behind */}
    <div className="absolute top-1 left-1.5 w-4 h-11 sm:w-5 sm:h-14 rounded-full bg-black/40 blur-[2px] z-10" />
  </div>
);
