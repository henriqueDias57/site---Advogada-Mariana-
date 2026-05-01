import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  { name: 'Mariana Dias Ferreira', role: 'Advogada Fundadora', photo: '/team/mariana.png', bio: 'Pós-graduada em Direito do Trabalho e Direito Previdenciário. Dedicada a oferecer assistência e consultoria jurídica presencial com foco na resolução das demandas de seus clientes em Cruzeiro e região.', oab: 'OAB/SP 534.173' },
];

const cardVar = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="team" id="equipe" ref={ref}>
      <div className="team__inner">
        <motion.span className="section-tag" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>Equipe</motion.span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          A <em>Advogada</em>
        </motion.h2>
        <div className="team__grid">
          {team.map((t, i) => (
            <motion.article className="team-card" key={i} custom={i} variants={cardVar} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <div className="team-card__photo">
                <img src={t.photo} alt={t.name} loading="lazy" />
              </div>
              <h3 className="team-card__name">{t.name}</h3>
              <p className="team-card__role">{t.role}</p>
              <p className="team-card__bio">{t.bio}</p>
              <p className="team-card__oab">{t.oab}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
