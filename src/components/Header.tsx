'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import Link from 'next/link';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-surface-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Code2 className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">JPeMANY</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#vendas" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Vendas
          </Link>
          <Link href="#eficiencia" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Eficiência
          </Link>
          <Link href="#sobre" className="text-sm font-medium text-muted hover:text-white transition-colors">
            Sobre Nós
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors glow-primary-hover"
          >
            Fale Conosco
          </Link>
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
        <div className="md:hidden glass absolute top-full left-0 w-full border-b border-surface-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="#vendas"
              className="text-muted hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vendas
            </Link>
            <Link
              href="#eficiencia"
              className="text-muted hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eficiência
            </Link>
            <Link
              href="#sobre"
              className="text-muted hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="#contato"
              className="bg-primary text-white text-center py-3 rounded-lg hover:bg-primary-hover transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
