import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, BookOpen, User, GraduationCap, Wrench, Code2, Award, Trophy, Mail } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Skills', href: '#skills', icon: Wrench },
  { label: 'Projects', href: '#projects', icon: Code2 },
  { label: 'Training', href: '#training', icon: BookOpen },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'Achievements', href: '#achievements', icon: Trophy },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'training', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 pointer-events-none">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`pointer-events-auto flex items-center justify-between gap-1 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2 rounded-full border transition-all duration-300 backdrop-blur-md shadow-md ${
          scrolled
            ? 'bg-[#1c1917]/90 border-stone-700 shadow-black/40 text-stone-200'
            : 'bg-[#1c1917]/75 border-stone-700/60 shadow-black/20 text-stone-200'
        }`}
      >
        {/* Brand Tag / Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#d4a017]/15 border border-[#d4a017]/40 text-[#d4a017] font-tech text-[11px] tracking-wider uppercase hover:bg-[#d4a017]/25 transition-colors group"
        >
          <span className="w-2 h-2 rounded-full bg-[#d4a017] animate-pulse" />
          <span className="font-black">ASHISH.DEV</span>
          <span className="text-[10px] font-handwriting text-stone-300 group-hover:text-white hidden xs:inline">★ notebook</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-2.5 py-1.5 rounded-full font-bold uppercase tracking-wider text-[11px] transition-all duration-200 ${
                  isActive
                    ? 'text-stone-950 font-black'
                    : 'text-stone-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#d4a017] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Button - Quick Contact */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#b22222] text-white font-bold text-[11px] uppercase tracking-wider shadow-sm hover:bg-[#991b1b] active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 max-w-sm mx-auto bg-[#1c1917] border border-stone-700 rounded-2xl p-4 shadow-2xl z-50 text-stone-100"
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-2">
              <span className="font-handwriting text-lg text-[#d4a017]">Scrapbook Contents</span>
              <span className="font-tech text-[11px] text-stone-400">Ashish Raj's Portfolio</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 py-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#d4a017] text-stone-950 font-black'
                        : 'bg-white/5 hover:bg-white/10 text-stone-200'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-stone-800 flex justify-between items-center text-xs">
              <span className="text-stone-400 font-tech text-[10px]">LPU • B.Tech CSE</span>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="text-[#d4a017] font-bold underline"
              >
                Say Hello →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
