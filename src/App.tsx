import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SpiralDivider } from './components/SpiralDivider';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TrainingSection } from './components/TrainingSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#e8e4da] text-[#292524] flex flex-col font-sans selection:bg-[#d4a017] selection:text-[#1a1a1a]">
      {/* Floating Glassmorphism Scrapbook Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* A. Hero Section - Textured Dark Canvas + Organic Colorful Blob Cutouts */}
        <HeroSection />

        {/* Realistic Wire-Bound Notebook Divider across the screen with Star Punches & Binder Rings */}
        <SpiralDivider />

        {/* B. About Me Section - Lined Notebook Page */}
        <AboutSection />

        {/* C. Education Section - Hand-Drawn Scrapbook Timeline */}
        <EducationSection />

        {/* D. Skills Section - Interactive Sticker & Stamp Badges */}
        <SkillsSection />

        {/* E. Projects Section - Notebook Case Study Layout with Interactive Mockups */}
        <ProjectsSection />

        {/* F. Training Section - Notebook Training Card & Flow */}
        <TrainingSection />

        {/* G. Certifications Section - Stamp / Badge Grid */}
        <CertificationsSection />

        {/* H. Achievements Section - Doodle Ribbon & Gold Stamp Cards */}
        <AchievementsSection />

        {/* I. Contact & Footer Section - Jagged Torn Paper Transition + Dark Barcode Footer */}
        <ContactFooter />
      </main>
    </div>
  );
}
