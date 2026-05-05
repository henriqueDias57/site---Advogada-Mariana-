import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Olá Dra. Mariana, meu nome é ${formData.name}.\nMeu telefone é ${formData.phone}.\n\nMensagem: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5512997429299?text=${encodedText}`, '_blank');
  };

  return (
    <section className="cta-section" id="contato" ref={ref}>
      <div className="cta-section__inner">
        
        {/* Informações */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>
          <span className="section-tag">Contato</span>
          <h2 className="section-title">
            Fale com a <em>Especialista</em>
          </h2>
          <p className="cta-section__desc">
            Precisa de orientação jurídica especializada? Preencha o formulário para falar diretamente comigo pelo WhatsApp. Atendimento presencial em Cruzeiro/SP e online para todo o Brasil.
          </p>

          <div className="cta-section__info">
            <div>
              <span className="cta-section__info-label">Endereço</span>
              <span className="cta-section__info-value">Rua Professor Virgílio Antunes, 57<br/>Centro, Cruzeiro — SP</span>
            </div>
            <div>
              <span className="cta-section__info-label">Telefone / WhatsApp</span>
              <span className="cta-section__info-value">(12) 99742-9299</span>
            </div>
            <div>
              <span className="cta-section__info-label">E-mail</span>
              <span className="cta-section__info-value">marianadiasferreira10@adv.oabsp.org.br</span>
            </div>
            <div>
              <span className="cta-section__info-label">Horário</span>
              <span className="cta-section__info-value">Segunda a Sexta<br/>09h às 18h</span>
            </div>
          </div>
        </motion.div>

        {/* Formulário WhatsApp */}
        <motion.form 
          className="contact-form"
          onSubmit={handleWhatsAppSubmit}
          variants={fadeUp} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-form__group">
            <label htmlFor="name">Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="phone">Telefone / WhatsApp</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="contact-form__group">
            <label htmlFor="message">Como posso ajudar?</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
            Enviar para o WhatsApp
          </button>
        </motion.form>
        
      </div>
    </section>
  );
}
