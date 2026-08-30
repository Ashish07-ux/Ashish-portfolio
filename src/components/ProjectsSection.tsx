import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  Shield,
  Sun,
  Moon,
  Volume2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  KeyRound,
  Terminal,
  Activity,
  Zap,
} from 'lucide-react';
import { TapeStrip, PushPin, StarburstDoodle, CurlySquiggle, HandArrow } from './Doodles';

export const ProjectsSection: React.FC = () => {
  // Project 1 Interactive State: Smart Vehicle Simulation
  const [obstacleDistance, setObstacleDistance] = useState<number>(35); // cm
  const [isLowLight, setIsLowLight] = useState<boolean>(false);

  const isBuzzerActive = obstacleDistance < 20;
  const isVehicleStopped = obstacleDistance < 15;
  const speedPercentage = isVehicleStopped ? 0 : Math.min(100, Math.round((obstacleDistance / 50) * 100));

  // Project 2 Interactive State: Password Strength Checker Simulation
  const [testPassword, setTestPassword] = useState<string>('Ashish@2026#Code');

  const hasLength = testPassword.length >= 8;
  const hasNumbers = /\d/.test(testPassword);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(testPassword);
  const hasUpper = /[A-Z]/.test(testPassword);
  const hasLower = /[a-z]/.test(testPassword);
  const hasCases = hasUpper && hasLower;

  const passedCount = [hasLength, hasNumbers, hasSpecial, hasCases].filter(Boolean).length;
  let strengthLabel = 'Very Weak';
  let strengthColor = 'text-red-500 bg-red-100 border-red-300';
  let strengthWidth = '25%';

  if (passedCount === 2) {
    strengthLabel = 'Moderate';
    strengthColor = 'text-amber-600 bg-amber-100 border-amber-300';
    strengthWidth = '50%';
  } else if (passedCount === 3) {
    strengthLabel = 'Strong';
    strengthColor = 'text-blue-600 bg-blue-100 border-blue-300';
    strengthWidth = '75%';
  } else if (passedCount === 4) {
    strengthLabel = 'Very Secure ★';
    strengthColor = 'text-emerald-700 bg-emerald-100 border-emerald-300';
    strengthWidth = '100%';
  }

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 notebook-grid-bg text-[#292524] border-t-2 border-stone-300 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-[#d4a017]/20 border border-[#d4a017] text-[#8a5800] font-tech text-xs tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#d4a017]" />
          <span>SECTION 04 • CASE STUDIES</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 flex items-center justify-center gap-2 flex-wrap">
          <span>Explore Some of My Projects</span>
          <span className="text-[#d4a017] text-4xl">★</span>
        </h2>
        <p className="font-handwriting text-lg sm:text-xl text-stone-600 mt-2">
          Hardware automation and software problem-solving prototypes
        </p>
        <div className="flex justify-center mt-1">
          <CurlySquiggle color="#b22222" className="w-44" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* ========================================================
            PROJECT 01: SMART SAFETY VEHICLE
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-sm scrapbook-shadow border border-stone-300"
        >
          {/* Corner Washi Tape */}
          <TapeStrip className="absolute -top-3.5 left-10 w-28 z-20" variant="yellow" rotation={-2} />

          {/* Scrapbook Category Sticker */}
          <div className="absolute -top-3.5 right-6 rotate-2 bg-[#b22222] text-white px-3 py-1 rounded-sm shadow-md font-tech text-xs font-bold tracking-wider uppercase border border-stone-900">
            HARDWARE + AUTOMATION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-tech text-xs font-bold text-[#d4a017] bg-[#1a1a1a] px-2.5 py-0.5 rounded">
                  PROJECT 01
                </span>
                <span className="font-tech text-xs text-stone-500 font-semibold">
                  Feb 2026 – May 2026
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                Smart Safety Vehicle
              </h3>

              <p className="font-tech text-xs sm:text-sm text-stone-600 italic">
                "Built a smart vehicle that detects obstacles and stops automatically."
              </p>

              {/* Technology Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Arduino UNO', 'HC-SR04', 'LDR', 'L298N'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#f9f7f2] border border-stone-300 font-tech text-xs font-bold text-stone-800 shadow-2xs"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              {/* Bullet Points from CV */}
              <div className="space-y-2 pt-2 border-t border-dashed border-stone-200">
                <div className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="text-[#b22222] font-bold text-base leading-none mt-0.5">★</span>
                  <span>Used an ultrasonic sensor for obstacle detection and collision prevention.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="text-[#556b2f] font-bold text-base leading-none mt-0.5">★</span>
                  <span>Added automatic headlights using an LDR sensor in low-light conditions.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="text-[#d4a017] font-bold text-base leading-none mt-0.5">★</span>
                  <span>Implemented buzzer alerts and speed control for improved safety.</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Column: Smart Safety Vehicle Diagram & Live Simulator */}
            <div className="lg:col-span-6 bg-[#1a1a1a] rounded-xl p-5 border-2 border-stone-800 text-stone-100 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700 mb-4 text-xs font-tech">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[#d4a017] font-bold">HARDWARE SIMULATOR</span>
                </div>
                <span className="text-stone-400">Arduino UNO Logic</span>
              </div>

              {/* Vehicle SVG / CSS Blueprint Visual */}
              <div className="relative h-44 bg-[#121316] rounded-lg border border-stone-800 p-3 overflow-hidden flex flex-col justify-between">
                {/* Visual Chassis & Headlights */}
                <div className="relative flex items-center justify-between w-full">
                  {/* Vehicle Body */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-24 h-14 bg-stone-800 border border-stone-600 rounded-lg flex flex-col items-center justify-center shadow-lg">
                      <span className="font-tech text-[9px] text-[#d4a017] font-bold">SMART CHASSIS</span>
                      <span className="font-tech text-[8px] text-stone-400">L298N DRIVER</span>
                      {/* Wheels */}
                      <div className="absolute -top-1.5 left-2 w-4 h-2 bg-stone-950 rounded-sm" />
                      <div className="absolute -top-1.5 right-2 w-4 h-2 bg-stone-950 rounded-sm" />
                      <div className="absolute -bottom-1.5 left-2 w-4 h-2 bg-stone-950 rounded-sm" />
                      <div className="absolute -bottom-1.5 right-2 w-4 h-2 bg-stone-950 rounded-sm" />
                    </div>

                    {/* HC-SR04 Ultrasonic Sensor on Front */}
                    <div className="relative flex flex-col items-center bg-[#556b2f] p-1.5 rounded border border-lime-300">
                      <span className="font-tech text-[7px] text-white font-bold">HC-SR04</span>
                      <div className="flex gap-1 mt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-lime-200" />
                        <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-lime-200" />
                      </div>
                    </div>
                  </div>

                  {/* Ultrasonic Ping Waves Simulation */}
                  <div className="flex-1 px-3 flex items-center justify-center">
                    <div className="relative w-full h-1 bg-stone-800 rounded">
                      <div
                        style={{ width: `${Math.min(100, (obstacleDistance / 50) * 100)}%` }}
                        className={`h-full transition-all duration-200 ${
                          isBuzzerActive ? 'bg-red-500 animate-pulse' : 'bg-[#d4a017]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Obstacle Wall */}
                  <div className="w-6 h-20 bg-stone-700 border-2 border-stone-500 rounded flex items-center justify-center">
                    <span className="font-tech text-[8px] -rotate-90 text-stone-300 uppercase font-bold">
                      BARRIER
                    </span>
                  </div>
                </div>

                {/* Headlights & Status indicators */}
                <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[11px] font-tech">
                  <div className="flex items-center gap-1.5">
                    <span className="text-stone-400">Headlights:</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isLowLight
                          ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/50 shadow-[0_0_8px_rgba(250,204,21,0.4)]'
                          : 'bg-stone-800 text-stone-500'
                      }`}
                    >
                      {isLowLight ? '💡 ON (Auto LDR)' : 'OFF (Daylight)'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-stone-400">Status:</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isVehicleStopped
                          ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {isVehicleStopped ? '⛔ AUTO STOPPED' : `DRIVING (${speedPercentage}%)`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Hardware Sliders / Toggles */}
              <div className="mt-4 space-y-3 bg-stone-900/80 p-3 rounded-lg border border-stone-800 text-xs font-tech">
                <div>
                  <div className="flex justify-between text-stone-300 mb-1">
                    <span>Obstacle Distance (Ultrasonic HC-SR04):</span>
                    <span className="font-bold text-[#d4a017]">{obstacleDistance} cm</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={obstacleDistance}
                    onChange={(e) => setObstacleDistance(Number(e.target.value))}
                    className="w-full accent-[#d4a017] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 mt-0.5">
                    <span>5cm (Hazard)</span>
                    <span className="text-red-400">&lt;15cm (Auto Brake)</span>
                    <span>50cm (Clear)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsLowLight(!isLowLight)}
                      className={`px-3 py-1.5 rounded-md border flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isLowLight
                          ? 'bg-[#d4a017] text-stone-950 border-[#d4a017] font-bold'
                          : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-600'
                      }`}
                    >
                      {isLowLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                      <span>{isLowLight ? 'Night Mode (LDR Active)' : 'Day Mode (LDR Light)'}</span>
                    </button>
                  </div>

                  {isBuzzerActive && (
                    <div className="flex items-center gap-1 text-red-400 font-bold animate-pulse text-[11px]">
                      <Volume2 className="w-4 h-4" />
                      <span>BUZZER ALERT!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            PROJECT 02: PASSWORD STRENGTH CHECKER
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-sm scrapbook-shadow border border-stone-300"
        >
          {/* Corner Washi Tape */}
          <TapeStrip className="absolute -top-3.5 left-10 w-28 z-20" variant="coral" rotation={1.5} />

          {/* Scrapbook Category Sticker */}
          <div className="absolute -top-3.5 right-6 rotate-[-2deg] bg-[#556b2f] text-white px-3 py-1 rounded-sm shadow-md font-tech text-xs font-bold tracking-wider uppercase border border-stone-900">
            PYTHON + SECURITY
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-tech text-xs font-bold text-[#b22222] bg-[#1a1a1a] px-2.5 py-0.5 rounded">
                  PROJECT 02
                </span>
                <span className="font-tech text-xs text-stone-500 font-semibold">
                  Oct 2025 – Nov 2025
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                Password Strength Checker
              </h3>

              <p className="font-tech text-xs sm:text-sm text-stone-600 italic">
                "Developed a Python program to check the strength of passwords."
              </p>

              {/* Technology Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Python', 'String Operations', 'NumPy', 'Conditional Statements'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#f9f7f2] border border-stone-300 font-tech text-xs font-bold text-stone-800 shadow-2xs"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              {/* Bullet Points from CV */}
              <div className="space-y-2 pt-2 border-t border-dashed border-stone-200">
                <div className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="text-[#b22222] font-bold text-base leading-none mt-0.5">★</span>
                  <span>Checked password length.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="text-[#556b2f] font-bold text-base leading-none mt-0.5">★</span>
                  <span>Checked numbers and special characters.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="text-[#d4a017] font-bold text-base leading-none mt-0.5">★</span>
                  <span>Checked different letter cases.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="text-stone-700 font-bold text-base leading-none mt-0.5">★</span>
                  <span>Provided basic suggestions to create stronger and more secure passwords.</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Column: Live Password Security Terminal Playground */}
            <div className="lg:col-span-6 bg-[#1a1a1a] rounded-xl p-5 border-2 border-stone-800 text-stone-100 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700 mb-4 text-xs font-tech">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#d4a017]" />
                  <span className="text-[#d4a017] font-bold">PYTHON SECURITY CLI</span>
                </div>
                <span className="text-stone-400">validator.py</span>
              </div>

              {/* Live Interactive Input */}
              <div className="space-y-3 font-tech text-xs">
                <div>
                  <label className="block text-stone-400 mb-1 text-[11px]">
                    Type a password to test rules in real-time:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={testPassword}
                      onChange={(e) => setTestPassword(e.target.value)}
                      placeholder="e.g. MySecret#99"
                      className="w-full bg-[#121316] border border-stone-700 rounded-lg px-3.5 py-2.5 text-stone-100 font-tech text-xs sm:text-sm focus:outline-none focus:border-[#d4a017]"
                    />
                    <button
                      onClick={() => setTestPassword('Pass123!')}
                      className="absolute right-2 top-2 px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-[10px]"
                    >
                      Sample
                    </button>
                  </div>
                </div>

                {/* Strength Meter Bar */}
                <div className="bg-[#121316] p-3 rounded-lg border border-stone-800">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-stone-400 text-[11px]">Calculated Strength:</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${strengthColor}`}>
                      {strengthLabel}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: strengthWidth }}
                      className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 transition-all duration-300 rounded-full"
                    />
                  </div>
                </div>

                {/* Validation Rules Grid */}
                <div className="grid grid-cols-2 gap-2 bg-[#121316] p-3 rounded-lg border border-stone-800 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    {hasLength ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-red-400" />
                    )}
                    <span className={hasLength ? 'text-stone-200' : 'text-stone-500'}>
                      Length &ge; 8 chars
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {hasCases ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-red-400" />
                    )}
                    <span className={hasCases ? 'text-stone-200' : 'text-stone-500'}>
                      Upper &amp; Lower cases
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {hasNumbers ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-red-400" />
                    )}
                    <span className={hasNumbers ? 'text-stone-200' : 'text-stone-500'}>
                      Numbers (0-9)
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {hasSpecial ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-red-400" />
                    )}
                    <span className={hasSpecial ? 'text-stone-200' : 'text-stone-500'}>
                      Special characters
                    </span>
                  </div>
                </div>

                {/* Suggestions Output */}
                <div className="text-[11px] text-stone-400 pt-1">
                  <span className="text-[#d4a017] font-bold">Suggestion: </span>
                  {passedCount === 4
                    ? 'Great! Password satisfies all length, character, and case security guidelines.'
                    : 'Add missing numbers, special symbols, or mix uppercase and lowercase letters.'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
