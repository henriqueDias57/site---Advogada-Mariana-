import { motion } from 'framer-motion';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
const titleReveal = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } };

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-lines" aria-hidden="true">
        {[0,1,2,3,4].map(i => <div className="hero__line" key={i} />)}
      </div>
      <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
        <motion.p className="hero__label" variants={fadeUp}>Advocacia Estratégica e Especializada</motion.p>
        <motion.h1 className="hero__title" variants={titleReveal}>
          <span className="hero__title-line">Mariana</span>
          <span className="hero__title-line">Ferreira</span>
        </motion.h1>
        <motion.p className="hero__subtitle" variants={fadeUp}>Consultoria & Contencioso de Elite</motion.p>
        <motion.p className="hero__desc" variants={fadeUp}>
          Excelência e precisão estratégica em Direito do Trabalho e Previdenciário. Protegemos seu patrimônio e garantimos seus direitos com atendimento exclusivo.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <a href="#contato" className="btn btn--primary" onClick={(e) => scrollTo(e, '#contato')}>Fale Conosco</a>
          <a href="#sobre" className="btn btn--ghost" onClick={(e) => scrollTo(e, '#sobre')}>Conheça o Escritório</a>
        </motion.div>
      </motion.div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}
