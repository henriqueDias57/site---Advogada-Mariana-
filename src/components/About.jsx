import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="about" id="sobre" ref={ref}>
      <div className="about__inner">
        <div className="about__col-left">
          <motion.span className="section-tag" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6 }}>O Escritório</motion.span>
          <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.7, delay: 0.1 }}>
            Uma tradição construída sobre <em>resultados</em>
          </motion.h2>
        </div>
        <div className="about__col-right">
          <motion.p className="about__text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.2 }}>
            Sou Mariana Dias Ferreira, advogada pós-graduada em Direito do Trabalho e Direito Previdenciário. Meu escritório nasceu da vocação de oferecer assistência jurídica humanizada, transparente e de excelência.
          </motion.p>
          <motion.p className="about__text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.3 }}>
            Localizado no centro de Cruzeiro, São Paulo, ofereço atendimento presencial dedicado a entender profundamente as necessidades de cada cliente, garantindo que seus direitos trabalhistas e previdenciários sejam plenamente assegurados.
          </motion.p>
          <motion.p className="about__text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.4 }}>
            Acredito em uma advocacia artesanal, onde cada caso recebe atenção exclusiva e uma estratégia personalizada para alcançar os melhores resultados possíveis.
          </motion.p>
          <motion.div className="about__signature" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ duration: 0.6, delay: 0.5 }}>
            <span className="about__signature-line" />
            <span className="about__signature-name">Mariana Ferreira</span>
            <span className="about__signature-role">Advogada · OAB/SP 534.173</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
