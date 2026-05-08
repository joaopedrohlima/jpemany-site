'use client';

import { motion, type Variants } from 'framer-motion';
import { LayoutTemplate, MonitorSmartphone, Palette, ArrowRight } from 'lucide-react';

const items = [
  {
    title: "Sites Institucionais",
    description: "Sites modernos, extremamente rápidos e otimizados para SEO que constroem autoridade e transmitem a credibilidade da sua marca.",
    icon: MonitorSmartphone,
  },
  {
    title: "Landing Pages",
    description: "Máquinas de conversão com design estratégico, desenhadas milimetricamente para maximizar o ROI das suas campanhas de tráfego pago.",
    icon: LayoutTemplate,
  },
  {
    title: "Identidade Visual",
    description: "Marcas fortes, premium e memoráveis que se destacam no mercado, conectam com seu público e elevam o valor do seu negócio.",
    icon: Palette,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function SalesGrowth() {
  return (
    <section id="vendas" className="py-32 relative overflow-hidden bg-surface/30">
      {/* Background decorations for extra highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 text-primary font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Expansão Acelerada
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 as const }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Nós ajudamos você a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-300">
              Aumentar suas Vendas
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 as const }}
            className="text-xl text-muted/90 leading-relaxed max-w-2xl mx-auto"
          >
            Atraia os clientes certos, engaje seu público e feche mais negócios com uma presença digital de altíssimo impacto, focada em resultados reais.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {items.map((item, itemIdx) => (
            <motion.div
              key={itemIdx}
              variants={itemVariants}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />
              
              <div className="glass p-10 rounded-3xl hover:border-primary/50 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col bg-surface-dark/40 backdrop-blur-md relative overflow-hidden">
                {/* Shine effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-[0.03] group-hover:animate-shine" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all duration-500">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed flex-grow text-lg">{item.description}</p>
                
                <div className="mt-8 pt-6 border-t border-surface-border/50 flex items-center text-primary font-medium group-hover:gap-2 transition-all cursor-pointer">
                  <span>Saber mais</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
