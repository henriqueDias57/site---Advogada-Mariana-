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
        <div className="team__profile">
          <div className="team__profile-photo">
            <img src={team[0].photo} alt={team[0].name} loading="lazy" />
          </div>
          <div className="team__profile-info">
            <h3 className="team__profile-name">{team[0].name}</h3>
            <span className="team__profile-role">{team[0].role}</span>
            <p className="team__profile-bio">{team[0].bio}</p>
            <span className="team__profile-oab">{team[0].oab}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
