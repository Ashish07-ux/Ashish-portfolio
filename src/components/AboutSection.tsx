import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Code, BookOpen, Hammer, Sparkles, Terminal, Camera, Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import { TapeStrip, PaperClip, StarburstDoodle, CurlySquiggle } from './Doodles';

export const AboutSection: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    return localStorage.getItem('ashish_real_photo') || null;
  });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if static photo is present in public directory
  useEffect(() => {
    if (!photoUrl) {
      const testImg = new Image();
      testImg.src = '/photo.jpg';
      testImg.onload = () => {
        setPhotoUrl('/photo.jpg');
      };
    }
  }, [photoUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotoUrl(dataUrl);
        try {
          localStorage.setItem('ashish_real_photo', dataUrl);
        } catch (err) {
          console.warn('Could not save photo to localStorage (quota exceeded)', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(null);
    localStorage.removeItem('ashish_real_photo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 notebook-ruled-bg text-[#292524] overflow-hidden border-b-2 border-stone-200">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="profile-photo-upload"
      />

      {/* Section Header with Scrapbook Title */}
      <div className="max-w-4xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#d4a017]/20 border border-[#d4a017] text-[#925f0a] font-tech text-xs tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#d4a017]" />
          <span>SECTION 01 • PROFILE LOG</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 flex items-center justify-center gap-3">
          <span>About Me</span>
          <span className="font-handwriting text-2xl sm:text-3xl text-[#b22222] font-normal">
            (the developer)
          </span>
        </h2>
        <div className="flex justify-center mt-1">
          <CurlySquiggle color="#b22222" className="w-32" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Scrapbook Avatar Polaroid Photo Card */}
        <div className="md:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -4, scale: 0.95 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white p-4 pb-6 rounded-sm scrapbook-shadow border border-stone-300 max-w-xs w-full group"
          >
            {/* Washi tape at top */}
            <TapeStrip
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 z-20"
              variant="yellow"
              rotation={2}
            />

            {/* Paper clip on side */}
            <PaperClip className="absolute -top-3 right-4 z-20 w-6 h-12" color="#78716c" />

            {/* Polaroid Photo Frame */}
            {photoUrl ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative aspect-[3/4] bg-stone-900 rounded-xs overflow-hidden border border-stone-300 shadow-inner flex items-center justify-center cursor-pointer group/photo"
              >
                <img
                  src={photoUrl}
                  alt="Ashish Raj - B.Tech CSE Undergrad at Lovely Professional University"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
                />

                {/* Subtle vintage photo corner tag */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-xs bg-black/60 backdrop-blur-xs text-white text-[9px] font-tech font-bold uppercase tracking-wider border border-white/20">
                  LPU • CSE
                </div>

                {/* Starburst Doodle on corner */}
                <div className="absolute bottom-2 right-2 pointer-events-none drop-shadow-md">
                  <StarburstDoodle size={20} color="#d4a017" />
                </div>

                {/* Hover overlay with Change / Remove actions */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 text-center">
                  <span className="font-tech text-xs text-white font-bold flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full border border-white/40">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Change Photo</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="font-tech text-[10px] text-red-300 hover:text-red-100 flex items-center gap-1 mt-1 bg-red-950/60 px-2.5 py-1 rounded border border-red-500/40"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Photo Placeholder with Direct File Drop / Upload trigger */
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative aspect-[3/4] rounded-xs border-2 border-dashed flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? 'border-[#d4a017] bg-[#FFFBEB]'
                    : 'border-stone-400 bg-[#f9f7f2] hover:border-stone-600 hover:bg-[#f2efe9]'
                }`}
              >
                {/* Scrapbook Photo Placeholder Outline */}
                <div className="w-16 h-16 rounded-full bg-[#d4a017]/15 border-2 border-[#d4a017] flex items-center justify-center mb-3 shadow-xs">
                  <ImageIcon className="w-8 h-8 text-[#d4a017]" />
                </div>

                <p className="font-tech text-xs font-bold text-stone-800 uppercase tracking-wide">
                  Add Your Real Photo
                </p>
                <p className="font-handwriting text-sm text-[#b22222] mt-1">
                  Click or drag photo here
                </p>

                <div className="mt-3 px-3 py-1 rounded bg-[#d4a017] text-stone-950 font-tech text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Select File</span>
                </div>

                <span className="font-tech text-[9px] text-stone-500 mt-2">
                  Uploads your exact unedited photo
                </span>
              </div>
            )}

            {/* Polaroid caption handwritten */}
            <div className="mt-4 text-center">
              <p className="font-handwriting text-xl text-stone-800 font-bold leading-tight underline">
                Ashish Raj
              </p>
              <p className="font-tech text-[10px] text-stone-500 uppercase tracking-widest mt-0.5 font-semibold">
                Developer • Problem Solver
              </p>
            </div>

            {/* Scrapbook Labels around the card */}
            <div className="absolute -bottom-3 -left-3 rotate-[-6deg] bg-[#b22222] text-white px-2.5 py-1 rounded-sm shadow-md font-tech text-[10px] font-bold tracking-wider uppercase border border-stone-900">
              CODING
            </div>
            <div className="absolute -bottom-3 -right-3 rotate-[8deg] bg-[#556b2f] text-white px-2.5 py-1 rounded-sm shadow-md font-tech text-[10px] font-bold tracking-wider uppercase border border-stone-900">
              LEARNING
            </div>
          </motion.div>
        </div>

        {/* Right Column: Notebook Paper Log Sheet with Bio & Philosophy */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg scrapbook-shadow border border-stone-200"
          >
            {/* Top right washi tape */}
            <TapeStrip
              className="absolute -top-3 right-6 w-20"
              variant="coral"
              rotation={-3}
            />

            {/* Intro Quote */}
            <div className="mb-6">
              <span className="font-handwriting text-2xl sm:text-3xl text-[#b22222] font-bold block mb-2">
                "Hello, I'm Ashish Raj"
              </span>
              <p className="font-editorial text-lg sm:text-xl text-stone-900 leading-snug">
                A Computer Science &amp; Engineering undergraduate at{' '}
                <span className="bg-[#d4a017]/25 px-1.5 py-0.5 rounded text-stone-900 font-semibold border-b-2 border-[#d4a017]">
                  Lovely Professional University
                </span>
                .
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="relative p-4 rounded-md bg-[#f9f7f2] border-l-4 border-[#556b2f] mb-6 shadow-sm border border-stone-200">
              <p className="font-tech text-xs uppercase tracking-wider text-[#556b2f] font-bold mb-1 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>MY WORKING PHILOSOPHY</span>
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                "I enjoy learning by building, solving programming problems, and turning concepts into practical projects. I'm continuously improving my programming, database, and problem-solving skills through hands-on work."
              </p>
            </div>

            {/* 4 Scrapbook Pillar Badges in Natural Tones */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-2.5 rounded bg-[#f9f7f2] border border-stone-300 text-center transform rotate-[-1deg] hover:rotate-0 transition-transform">
                <Code className="w-4 h-4 mx-auto text-[#b22222] mb-1" />
                <span className="font-tech text-[10px] font-bold text-stone-800 uppercase block tracking-wider">
                  CODING
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#f9f7f2] border border-stone-300 text-center transform rotate-[1deg] hover:rotate-0 transition-transform">
                <BookOpen className="w-4 h-4 mx-auto text-[#556b2f] mb-1" />
                <span className="font-tech text-[10px] font-bold text-stone-800 uppercase block tracking-wider">
                  LEARNING
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#f9f7f2] border border-stone-300 text-center transform rotate-[-2deg] hover:rotate-0 transition-transform">
                <Hammer className="w-4 h-4 mx-auto text-[#d4a017] mb-1" />
                <span className="font-tech text-[10px] font-bold text-stone-800 uppercase block tracking-wider">
                  BUILDING
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#f9f7f2] border border-stone-300 text-center transform rotate-[2deg] hover:rotate-0 transition-transform">
                <Sparkles className="w-4 h-4 mx-auto text-stone-700 mb-1" />
                <span className="font-tech text-[10px] font-bold text-stone-800 uppercase block tracking-wider">
                  PROBLEM SOLVING
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
