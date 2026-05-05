'use client';

import { motion } from 'framer-motion';
import { LineChart, Database, Zap, ArrowUpRight } from 'lucide-react';

const items = [
  {
    title: "Dashboards Interativos",
    description: "Painéis de controle personalizados para visualizar os KPIs da sua empresa com clareza matemática e precisão.",
    icon: LineChart,
  },
  {
    title: "Integração de Dados",
    description: "Unificação de diferentes fontes de informações para uma visão centralizada e inteligente do seu negócio.",
    icon: Database,
  },
  {
    title: "Automação de Tarefas",
    description: "Redução drástica de trabalho manual através de sistemas inteligentes, liberando seu time para tarefas de alto valor.",
    icon: Zap,
  }
];

export default function Efficiency() {
  return (
    <section id="eficiencia" className="py-24 relative bg-background border-t border-surface-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Aumentar <span className="text-gray-400">Eficiência</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Otimize seus processos operacionais, reduza custos invisíveis e tome decisões estratégicas baseadas em dados em tempo real, não em intuição.
              </p>
              
              <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1">
                Descubra nossas soluções
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-8 rounded-2xl border border-surface-border bg-surface/10 hover:bg-surface/30 transition-colors ${
                    idx === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-gray-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                  </div>
                  <p className="text-muted/80 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
