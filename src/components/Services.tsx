'use client';

import { motion } from 'framer-motion';
import { LayoutTemplate, MonitorSmartphone, Palette, LineChart, Database, Zap } from 'lucide-react';

const services = [
  {
    category: "Aumentar Vendas",
    description: "Atraia mais clientes e feche mais negócios com uma presença digital de alto impacto.",
    items: [
      {
        title: "Sites Institucionais",
        description: "Desenvolvimento de sites modernos, rápidos e otimizados para SEO que transmitem a credibilidade da sua marca.",
        icon: MonitorSmartphone,
      },
      {
        title: "Landing Pages",
        description: "Páginas focadas em conversão com design estratégico para maximizar seus resultados em campanhas.",
        icon: LayoutTemplate,
      },
      {
        title: "Identidade Visual",
        description: "Criação de marcas fortes e memoráveis que se destacam no mercado e conectam com seu público.",
        icon: Palette,
      }
    ]
  },
  {
    category: "Aumentar Eficiência",
    description: "Otimize seus processos e tome decisões baseadas em dados em tempo real.",
    items: [
      {
        title: "Dashboards Interativos",
        description: "Painéis de controle personalizados para visualizar os KPIs da sua empresa com clareza e precisão.",
        icon: LineChart,
      },
      {
        title: "Integração de Dados",
        description: "Unificação de diferentes fontes de dados para uma visão centralizada do seu negócio.",
        icon: Database,
      },
      {
        title: "Automação de Tarefas",
        description: "Redução de trabalho manual através de sistemas inteligentes e automatizados.",
        icon: Zap,
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nossas Soluções</h2>
          <p className="text-lg text-muted">
            Oferecemos um leque completo de serviços digitais desenhados para transformar os desafios da sua empresa em oportunidades de crescimento.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((section, idx) => (
            <div key={idx}>
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-primary inline-block">
                  {section.category}
                </h3>
                <p className="text-muted text-lg max-w-2xl">{section.description}</p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    variants={itemVariants}
                    className="glass p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-muted leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
