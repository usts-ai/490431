import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../data/mock';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-sm bg-[#4A90E2]">
            <span className="absolute inset-0 bg-[#355E3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-[Syne] font-bold text-white text-sm">BP</span>
          </span>
          <span className="font-[Syne] text-white text-xl tracking-tight font-semibold">
            BatiPilot
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => goTo(link.href)}
              className="relative px-4 py-2 text-sm text-white/75 hover:text-white transition-colors duration-300 font-[Outfit] group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-[#4A90E2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo('#contact')}
            className="relative overflow-hidden px-5 py-2.5 bg-[#4A90E2] text-white text-sm font-[Outfit] font-medium rounded-sm group"
          >
            <span className="absolute inset-0 bg-[#355E3B] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative">Demander un devis</span>
          </button>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-[#1a1a1a]/98 border-b border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => goTo(link.href)}
                  className="text-left text-white/90 font-[Syne] text-lg py-3 border-b border-white/5"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                type="button"
                onClick={() => goTo('#contact')}
                className="mt-4 w-full py-3 bg-[#4A90E2] text-white font-[Outfit] rounded-sm"
              >
                Demander un devis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
