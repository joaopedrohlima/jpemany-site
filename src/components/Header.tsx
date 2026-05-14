'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent 
        ${ isScrolled ? 'glass border-surface-border py-4' : 'bg-transparent py-6' }
        ${ mobileMenuOpen ? 'glass border-surface-border py-4' : '' }
        `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
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

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full">
          <div className="flex flex-col px-6 py-4 gap-4">
            <a
              href="#vendas"
              className="text-muted hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vendas
            </a>
            <a
              href="#eficiencia"
              className="text-muted hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eficiência
            </a>
            <a
              href="#sobre"
              className="text-muted hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="#contato"
              className="bg-primary text-white text-center py-3 rounded-lg hover:bg-primary-hover transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
