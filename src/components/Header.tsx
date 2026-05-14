'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent 
        ${ isScrolled && !mobileMenuOpen ? 'glass border-surface-border py-4' : 'bg-transparent py-6' }
        `}
    >
      <div className={`container mx-auto px-6 flex items-center justify-between`}>
        <a href="/" className="flex items-center gap-2 group">
          <Image src="/logo.webp" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors">JPeMANY</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Sobre Nós
          </a>
          <a href="#vendas" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Aumente suas vendas
          </a>
          <a href="#eficiencia" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Eficiência
          </a>
          <a
            href="#contato"
            className="text-sm font-medium bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors glow-primary-hover"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/25 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                href="#vendas"
                className="text-3xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vendas
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                href="#eficiencia"
                className="text-3xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Eficiência
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="#sobre"
                className="text-3xl font-medium text-white hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nós
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#contato"
                className="mt-6 bg-primary text-white text-center py-4 px-10 rounded-full hover:bg-primary-hover transition-colors glow-primary-hover text-xl font-medium w-full max-w-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale Conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
