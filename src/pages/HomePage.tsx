import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import {
  STATS,
  FEATURES,
  CAPABILITIES,
  WORKFLOW,
  MOCK_CHANTIERS,
} from '../data/mock';

const Counter: React.FC<{ value: number; suffix: string }> = ({
  value,
  suffix,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 48;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-[Syne] text-4xl sm:text-5xl font-bold text-white">
      {display}
      {suffix}
    </span>
  );
};

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeChantier, setActiveChantier] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveFeature((v) => (v + 1) % FEATURES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveChantier((v) => (v + 1) % MOCK_CHANTIERS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="top" className="bg-[#0e0e0e] text-white overflow-x-hidden">
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden"
      >
        <motion.div style={{ y: yImg }} className="absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Chantier de rénovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/75 to-[#0e0e0e]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]/40" />
        </motion.div>

        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-[Outfit] text-[#D2B48C] text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 sm:mb-6"
          >
            MVP App Mobile BTP · Marseille
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-[Syne] font-bold text-[clamp(2.6rem,9vw,6.5rem)] leading-[0.92] tracking-tight max-w-4xl mb-6"
          >
            BatiPilot
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="font-[Outfit] text-white/75 text-base sm:text-xl max-w-xl leading-relaxed mb-8 sm:mb-10"
          >
            Pilotez vos chantiers de rénovation du lead au métrage terrain —
            devis, acomptes et conformité sous-traitants en un seul flux.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden px-7 py-3.5 bg-[#4A90E2] rounded-sm font-[Outfit] font-medium"
            >
              <span className="absolute inset-0 bg-[#355E3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Obtenir le devis forfait</span>
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 hover:border-[#D2B48C] hover:text-[#D2B48C] rounded-sm font-[Outfit] transition-colors duration-300"
            >
              Découvrir la solution
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="hidden sm:flex absolute bottom-8 right-8 lg:right-16 flex-col items-center gap-2"
          >
            <span className="font-[Outfit] text-[10px] tracking-widest uppercase text-white/40 rotate-90 origin-center mb-8">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-px h-10 bg-gradient-to-b from-[#4A90E2] to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative border-y border-white/5 bg-[#151515]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center sm:text-left"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 font-[Outfit] text-xs sm:text-sm text-white/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-[Outfit] text-[#4A90E2] text-xs tracking-[0.2em] uppercase"
              >
                La solution
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-[Syne] text-3xl sm:text-5xl font-bold mt-3 mb-6 leading-tight"
              >
                Du bureau au chantier, une seule source de vérité
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="font-[Outfit] text-white/60 text-base sm:text-lg leading-relaxed mb-8"
              >
                BatiPilot connecte administrateurs, gestionnaires et experts
                terrain. Validation des leads, affectation mobile, saisie des
                mètres et suivi financier — conçu pour une entreprise générale
                du bâtiment à Marseille.
              </motion.p>
              <ul className="space-y-4">
                {[
                  'Authentification multi-rôles',
                  'Sync temps réel bureau / terrain',
                  'Stack No-Code / Low-Code évolutive',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3 font-[Outfit] text-sm sm:text-base text-white/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B48C] shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] sm:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
                  alt="Chantier urbain"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/90 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-[-1rem] sm:bottom-8 sm:w-72 bg-[#1a1a1a]/95 backdrop-blur border border-white/10 p-4 rounded-sm shadow-2xl"
              >
                <p className="font-[Outfit] text-[10px] tracking-widest uppercase text-[#7D7D7D] mb-3">
                  Live chantier
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChantier}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="font-[Syne] font-semibold text-lg">
                      {MOCK_CHANTIERS[activeChantier].name}
                    </p>
                    <p className="font-[Outfit] text-xs text-white/50 mb-3">
                      {MOCK_CHANTIERS[activeChantier].ville} ·{' '}
                      {MOCK_CHANTIERS[activeChantier].statut}
                    </p>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${MOCK_CHANTIERS[activeChantier].progress}%`,
                        }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-[#4A90E2] to-[#355E3B]"
                      />
                    </div>
                    <p className="mt-2 font-[Outfit] text-xs text-[#D2B48C]">
                      {MOCK_CHANTIERS[activeChantier].progress}% avancé
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="fonctionnalites"
        className="relative py-20 sm:py-28 bg-[#121212]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
            <div>
              <span className="font-[Outfit] text-[#D2B48C] text-xs tracking-[0.2em] uppercase">
                Fonctionnalités
              </span>
              <h2 className="font-[Syne] text-3xl sm:text-5xl font-bold mt-3 leading-tight">
                Trois piliers. Zero friction.
              </h2>
            </div>
            <div className="flex gap-2">
              {FEATURES.map((f, i) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFeature(i)}
                  className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                    activeFeature === i ? 'bg-[#4A90E2] w-12' : 'bg-white/20'
                  }`}
                  aria-label={f.title}
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={FEATURES[activeFeature].id + '-img'}
                initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8%)' }}
                animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                exit={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8%)' }}
                transition={{ duration: 0.55 }}
                className="relative overflow-hidden rounded-sm min-h-[280px] sm:min-h-[400px]"
              >
                <img
                  src={FEATURES[activeFeature].image}
                  alt={FEATURES[activeFeature].title}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-multiply"
                  style={{ backgroundColor: FEATURES[activeFeature].accent }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={FEATURES[activeFeature].id + '-txt'}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span
                    className="inline-block font-[Outfit] text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-sm"
                    style={{
                      backgroundColor: `${FEATURES[activeFeature].accent}33`,
                      color: FEATURES[activeFeature].accent,
                    }}
                  >
                    0{activeFeature + 1} / 03
                  </span>
                  <h3 className="font-[Syne] text-2xl sm:text-4xl font-bold mb-4">
                    {FEATURES[activeFeature].title}
                  </h3>
                  <p className="font-[Outfit] text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                    {FEATURES[activeFeature].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FEATURES.map((f, i) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveFeature(i)}
                    className={`text-left p-4 border transition-all duration-300 rounded-sm ${
                      activeFeature === i
                        ? 'border-[#4A90E2] bg-[#4A90E2]/10'
                        : 'border-white/10 hover:border-white/25 bg-transparent'
                    }`}
                  >
                    <p className="font-[Syne] text-sm font-semibold mb-1">
                      {f.title}
                    </p>
                    <p className="font-[Outfit] text-xs text-white/40 line-clamp-2">
                      {f.text}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="terrain" className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=80"
            alt="Travaux de renovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#0e0e0e]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto w-[240px] sm:w-[280px]"
              >
                <div className="relative rounded-[2rem] border-[6px] border-[#2a2a2a] bg-[#1a1a1a] overflow-hidden shadow-2xl aspect-[9/19]">
                  <div className="absolute top-0 inset-x-0 h-7 bg-[#1a1a1a] z-10 flex justify-center items-end pb-1">
                    <span className="w-20 h-3 bg-black rounded-full" />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                    alt="Interface terrain"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                    <p className="font-[Outfit] text-[10px] tracking-widest uppercase text-[#4A90E2] mb-1">
                      App terrain
                    </p>
                    <p className="font-[Syne] font-semibold text-lg mb-3">
                      Métrage en cours
                    </p>
                    <div className="space-y-2">
                      {['Façade Sud — 42 m²', 'Cuisine — 18 ml', 'Photos : 12'].map(
                        (row) => (
                          <div
                            key={row}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-2 rounded-sm"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#355E3B]" />
                            <span className="font-[Outfit] text-xs">{row}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="font-[Outfit] text-[#4A90E2] text-xs tracking-[0.2em] uppercase">
                Application mobile
              </span>
              <h2 className="font-[Syne] text-3xl sm:text-5xl font-bold mt-3 mb-6 leading-tight">
                Pensée pour le casque, pas pour le bureau
              </h2>
              <p className="font-[Outfit] text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                Géolocalisation, upload photo, fiches chantier et saisie des
                mètres — une interface tactile claire pour les experts sur le
                terrain, synchronisée avec le back-office.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {CAPABILITIES.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="group p-5 border border-white/10 hover:border-[#4A90E2]/50 bg-white/[0.02] hover:bg-[#4A90E2]/5 transition-colors duration-300 rounded-sm"
                  >
                    <div
                      className="h-8 w-8 mb-4 flex items-center justify-center border border-white/15 group-hover:border-[#4A90E2] group-hover:bg-[#4A90E2] transition-all duration-300 rounded-sm"
                    >
                      <span className="font-[Syne] text-xs text-white/60 group-hover:text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-[Syne] font-semibold text-base mb-2">
                      {cap.title}
                    </h3>
                    <p className="font-[Outfit] text-sm text-white/45 leading-relaxed">
                      {cap.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parcours" className="relative py-20 sm:py-28 bg-[#151515]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="font-[Outfit] text-[#D2B48C] text-xs tracking-[0.2em] uppercase">
              Flux de travail
            </span>
            <h2 className="font-[Syne] text-3xl sm:text-5xl font-bold mt-3 leading-tight">
              Quatre étapes. Un chantier maîtrisé.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#4A90E2]/40 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {WORKFLOW.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  className="relative group"
                >
                  <div className="relative z-10 p-6 sm:p-7 border border-white/10 bg-[#0e0e0e] group-hover:border-[#355E3B] transition-colors duration-300 rounded-sm h-full">
                    <span className="font-[Syne] text-5xl font-bold text-white/[0.08] group-hover:text-[#4A90E2]/25 transition-colors duration-300 absolute top-4 right-4">
                      {step.step}
                    </span>
                    <div className="relative mb-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center bg-[#355E3B] text-white font-[Syne] text-sm font-bold rounded-sm group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-[Syne] text-xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="font-[Outfit] text-sm text-white/50 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Architecture moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0e0e0e]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#355E3B]/50 to-[#4A90E2]/30 mix-blend-overlay" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[Syne] text-3xl sm:text-5xl font-bold mb-6 leading-tight"
          >
            CDC complet et NDA prêts.
            <br />
            <span className="text-[#D2B48C]">Devis forfait.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-[Outfit] text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
          >
            Lancez votre MVP FlutterFlow + Bubble en toute sérénité. Specs
            techniques, rôles, flux terrain et intégrations déjà cadrés.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#4A90E2] hover:bg-[#355E3B] transition-colors duration-300 font-[Outfit] font-medium rounded-sm"
          >
            Démarrer le projet
          </motion.a>
        </div>
      </section>

      <section id="contact" className="relative py-20 sm:py-28 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="font-[Outfit] text-[#4A90E2] text-xs tracking-[0.2em] uppercase">
                Contact
              </span>
              <h2 className="font-[Syne] text-3xl sm:text-5xl font-bold mt-3 mb-6 leading-tight">
                Parlons de votre prochain chantier digital
              </h2>
              <p className="font-[Outfit] text-white/55 leading-relaxed mb-8">
                Une démo visuelle du MVP BatiPilot pour entreprises générales du
                bâtiment. Marseille et région PACA.
              </p>
              <div className="space-y-4 font-[Outfit] text-sm">
                <p className="flex gap-3">
                  <span className="text-[#D2B48C] w-20 shrink-0">Email</span>
                  <span className="text-white/80">contact@batipilot.fr</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-[#D2B48C] w-20 shrink-0">Tél</span>
                  <span className="text-white/80">04 91 00 00 00</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-[#D2B48C] w-20 shrink-0">Base</span>
                  <span className="text-white/80">Marseille, France</span>
                </p>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="font-[Outfit] text-xs text-white/40 mb-1.5 block">
                    Nom
                  </span>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#4A90E2] outline-none px-4 py-3 rounded-sm font-[Outfit] text-sm text-white placeholder:text-white/25 transition-colors"
                  />
                </label>
                <label className="block">
                  <span className="font-[Outfit] text-xs text-white/40 mb-1.5 block">
                    Société
                  </span>
                  <input
                    type="text"
                    placeholder="Entreprise BTP"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#4A90E2] outline-none px-4 py-3 rounded-sm font-[Outfit] text-sm text-white placeholder:text-white/25 transition-colors"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-[Outfit] text-xs text-white/40 mb-1.5 block">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="vous@entreprise.fr"
                  className="w-full bg-white/5 border border-white/10 focus:border-[#4A90E2] outline-none px-4 py-3 rounded-sm font-[Outfit] text-sm text-white placeholder:text-white/25 transition-colors"
                />
              </label>
              <label className="block">
                <span className="font-[Outfit] text-xs text-white/40 mb-1.5 block">
                  Message
                </span>
                <textarea
                  rows={4}
                  placeholder="Parlez-nous de vos chantiers..."
                  className="w-full bg-white/5 border border-white/10 focus:border-[#4A90E2] outline-none px-4 py-3 rounded-sm font-[Outfit] text-sm text-white placeholder:text-white/25 transition-colors resize-none"
                />
              </label>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#355E3B] hover:bg-[#4A90E2] transition-colors duration-300 font-[Outfit] font-medium rounded-sm"
              >
                Envoyer la demande
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
