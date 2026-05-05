import Link from 'next/link';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <Code2 className="text-primary w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">JPeMANY</span>
            </Link>
            <p className="text-muted max-w-sm mb-6 leading-relaxed">
              Transformando a complexidade digital em soluções elegantes e eficientes para impulsionar os resultados da sua empresa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-muted hover:text-white">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-muted hover:text-white">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#servicos" className="text-muted hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="#sobre" className="text-muted hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Casos de Sucesso</Link></li>
              <li><Link href="#contato" className="text-muted hover:text-primary transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>contato@jpemany.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} JPeMANY. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
