'use client';

import { motion, type Transition } from 'framer-motion';
import { ArrowRight, BarChart3, Globe } from 'lucide-react';
import HeroBackground from './HeroBackground';

const badgeTransition: Transition = { duration: 0.5 };
const titleTransition: Transition = { duration: 0.5, delay: 0.1 };
const textTransition: Transition = { duration: 0.5, delay: 0.2 };
const buttonsTransition: Transition = { duration: 0.5, delay: 0.3 };
const cardsTransition: Transition = { duration: 0.8, delay: 0.6 };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={badgeTransition}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted">Soluções Digitais</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={titleTransition}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Impulsione sua empresa com a <span className="text-gradient-primary">JPeMANY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={textTransition}
            className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Aumente suas vendas com uma presença digital sólida e eleve sua eficiência com dashboards inteligentes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={buttonsTransition}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#vendas"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary-hover transition-all glow-primary-hover"
            >
              Conheça nossas soluções
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 bg-surface text-white rounded-full font-medium border border-surface-border hover:bg-surface-border transition-colors"
            >
              Falar com especialista
            </a>
          </motion.div>
        </div>

        {/* Floating Cards Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={cardsTransition}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass p-6 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Aumente suas Vendas</h3>
              <p className="text-muted text-sm leading-relaxed">Sites institucionais e landing pages focadas em conversão com design de ponta.</p>
            </div>
          </div>
          <div className="glass p-6 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-2">Aumente sua Eficiência</h3>
              <p className="text-muted text-sm leading-relaxed">Dashboards personalizados para visualizar dados e tomar decisões mais rápidas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
