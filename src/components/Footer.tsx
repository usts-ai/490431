import React from 'react';
import { motion } from 'framer-motion';
import { FOOTER_LINKS } from '../data/mock';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'LinkedIn', href: '#contact' },
    { label: 'Instagram', href: '#contact' },
    { label: 'YouTube', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#121212] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#4A90E2]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#355E3B]/25 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center bg-[#4A90E2] rounded-sm font-[Syne] font-bold text-sm">
                BP
              </span>
              <span className="font-[Syne] text-xl font-semibold">BatiPilot</span>
            </div>
            <p className="font-[Outfit] text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              MVP mobile et web pour piloter vos chantiers de rénovation à Marseille :
              leads, terrain, devis et conformité sous-traitants.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group relative h-10 w-10 flex items-center justify-center border border-white/15 rounded-sm overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[#4A90E2] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative text-[10px] font-[Outfit] tracking-wide uppercase text-white/80 group-hover:text-white">
                    {s.label.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {(
            [
              ['Produit', FOOTER_LINKS.produit],
              ['Entreprise', FOOTER_LINKS.entreprise],
              ['Légal', FOOTER_LINKS.legal],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-[Syne] text-sm font-semibold tracking-wide mb-4 text-[#D2B48C]">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-[Outfit] text-sm text-white/55 hover:text-white transition-colors duration-300 inline-flex group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#4A90E2] group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="origin-left h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12 mb-6"
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[Outfit] text-xs text-white/40">
            © {year} BatiPilot — Marseille. Tous droits réservés.
          </p>
          <p className="font-[Outfit] text-xs text-white/40">
            CDC complet et NDA prêts · Devis forfait
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
