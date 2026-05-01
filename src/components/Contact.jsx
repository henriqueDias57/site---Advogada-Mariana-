import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-hot-toast';
import { Send } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const area = formData.get('area');
    const message = formData.get('message');

    const text = `Olá! Gostaria de falar sobre um caso. Seguem meus dados:

*Nome:* ${name}
*E-mail:* ${email}
*Telefone:* ${phone || 'Não informado'}
*Área de interesse:* ${area || 'Não selecionada'}

*Mensagem:*
${message}`;

    const whatsappNumber = "5512997429299";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    toast.success('Redirecionando para o WhatsApp...', {
      style: {
        background: '#1a1a1a',
        color: '#e2cca0',
        border: '1px solid rgba(226, 204, 160, 0.2)',
      },
      iconTheme: {
        primary: '#e2cca0',
        secondary: '#1a1a1a',
      },
    });

    setTimeout(() => {
      window.open(url, '_blank');
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); e.target.reset(); }, 3000);
    }, 1000);
  };

  return (
    <section className="cta-section" id="contato" ref={ref}>
      <div className="cta-section__inner">
        <div className="cta-section__left">
          <motion.span className="section-tag" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.5 }}>Contato</motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.1 }}>
            Vamos conversar sobre o seu <em>caso</em>
          </motion.h2>
          <motion.p className="cta-section__desc" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 }}>
            A primeira consulta é sigilosa e sem compromisso. Preencha o formulário ou entre em contato diretamente. Nossa equipe retornará em até 24 horas úteis.
          </motion.p>
          <motion.div className="cta-section__info" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="cta-section__info-item">
              <span className="cta-section__info-label">Endereço</span>
              <span className="cta-section__info-value">Rua Professor Virgílio Antunes<br/>Centro, Cruzeiro — SP, Brasil</span>
            </div>
            <div className="cta-section__info-item">
              <span className="cta-section__info-label">Telefone / WhatsApp</span>
              <span className="cta-section__info-value">(12) 99742-9299</span>
            </div>
            <div className="cta-section__info-item">
              <span className="cta-section__info-label">E-mail</span>
              <span className="cta-section__info-value">contato@marianaferreira.adv.br</span>
            </div>
            <div className="cta-section__info-item">
              <span className="cta-section__info-label">Horário</span>
              <span className="cta-section__info-value">Seg — Sex · 8h às 19h</span>
            </div>
          </motion.div>
        </div>
        <motion.div className="cta-section__right" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.7, delay: 0.3 }}>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <motion.div className="contact-form__success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                ✓ Mensagem enviada com sucesso.<br/>Retornaremos em breve.
              </motion.div>
            ) : (
              <>
                <div className="contact-form__group">
                  <label htmlFor="name">Nome completo</label>
                  <input type="text" id="name" name="name" required autoComplete="name" />
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required autoComplete="email" />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" />
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="area">Área de interesse</label>
                  <select id="area" name="area">
                    <option value="">Selecione uma área</option>
                    <option value="empresarial">Direito Empresarial</option>
                    <option value="tributario">Direito Tributário</option>
                    <option value="contencioso">Contencioso Cível</option>
                    <option value="imobiliario">Direito Imobiliário</option>
                    <option value="trabalhista">Direito Trabalhista</option>
                    <option value="familia">Família e Sucessões</option>
                    <option value="outro">Outra</option>
                  </select>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message">Descreva brevemente sua situação</label>
                  <textarea id="message" name="message" rows="4" required />
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  <span>Enviar Mensagem pelo WhatsApp</span>
                  <Send size={18} />
                </button>
                <p className="contact-form__note">Todas as informações são tratadas com sigilo absoluto nos termos da LGPD.</p>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
