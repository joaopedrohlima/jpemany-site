'use client';

import { motion, type Transition } from 'framer-motion';
import { useState } from "react";

const textTransition: Transition = { duration: 0.5 };
const formTransition: Transition = { duration: 0.5, delay: 0.2 };

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSuccess("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      setSuccess("Erro ao enviar.");
    }

    setLoading(false);
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 max-w-6xl mx-auto border border-surface-border relative overflow-hidden">
          {/* Internal glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={textTransition}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Vamos decolar seu negócio?</h2>
              <p className="text-muted text-lg mb-8">
                Preencha o formulário e um de nossos especialistas entrará em contato para entender seus desafios e apresentar as melhores soluções digitais.
              </p>
              
              <div className="space-y-4 text-muted">
                <p>✓ Avaliação gratuita do seu cenário atual</p>
                <p>✓ Proposta personalizada sem compromisso</p>
                <p>✓ Especialistas focados no seu nicho</p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={formTransition}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Nome completo..."
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="(99) 99999-9999"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-4 rounded-lg transition-all glow-primary-hover cursor-pointer"
              >
                {loading ? "Enviando..." : "Solicitar Contato"}
              </button>
              {success && <p>{success}</p>}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
