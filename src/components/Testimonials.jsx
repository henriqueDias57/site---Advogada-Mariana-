import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  { quote: 'A equipe do MAR conduziu a reestruturação societária do nosso grupo com uma precisão cirúrgica. O que parecia impossível de resolver em menos de seis meses, eles entregaram em quatro — e com economia de R$ 12 milhões em contingências.', name: 'Marcelo Teixeira', role: 'CEO · Grupo Teixeira Agropecuária' },
  { quote: 'Trabalhamos com a Dra. Carolina em uma disputa tributária que se arrastava há 8 anos no CARF. Ela não só reverteu a autuação como recuperou créditos que nem sabíamos que tínhamos direito. Profissionalismo impecável.', name: 'Fernanda Oliveira', role: 'CFO · Olympus Farmacêutica' },
  { quote: 'Em um divórcio com patrimônio de mais de R$ 200 milhões em jogo, o que mais me impressionou foi a discrição. Nenhum vazamento, nenhuma exposição. Protegeram minha família e meu legado como prometido.', name: 'Nome preservado a pedido do cliente', role: 'Empresário · Setor de Construção Civil' },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const goTo = useCallback((idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(() => goTo((current + 1) % testimonials.length, 1), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length, -1), [current, goTo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { next(); return 0; }
        return p + (100 / 60);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="testimonials" id="depoimentos" ref={ref}>
      <div className="testimonials__inner">
        <motion.span className="section-tag" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Depoimentos</motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          O que dizem nossos <em>clientes</em>
        </motion.h2>
        <div className="testimonials__carousel">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="testimonial__big-quote">"</span>
              <p className="testimonial__quote">{testimonials[current].quote}</p>
              <footer className="testimonial__author">
                <strong>{testimonials[current].name}</strong>
                <span>{testimonials[current].role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="testimonials__controls">
          <button className="testimonials__btn" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`testimonials__dot${i === current ? ' active' : ''}`} onClick={() => goTo(i, i > current ? 1 : -1)} aria-label={`Depoimento ${i + 1}`} />
            ))}
          </div>
          <button className="testimonials__btn" onClick={next} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div className="testimonials__progress">
          <div className="testimonials__progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
}
