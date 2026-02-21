import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: "✦",
    title: "Conexão Real",
    description: "Conectamos marcas de moda catarinenses com influenciadores, imprensa e um público estratégico que gera crescimento real e resultados mensuráveis.",
  },
  {
    icon: "◆",
    title: "Visibilidade Estratégica",
    description: "Cada marca terá destaque no desfile com 6 looks, stands personalizados e cobertura profissional completa do evento.",
  },
  {
    icon: "✧",
    title: "Mercado & Negócios",
    description: "Um evento focado em resultados: networking qualificado, posicionamento de marca e geração de oportunidades comerciais concretas.",
  },
];

const Sobre = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 px-8 bg-off-white relative" ref={ref}>
      {/* Divider line */}
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[0.9rem] tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">Moda • Estratégia • Posicionamento</p>
          <h2 className="heading-section text-verde-petroleo mb-6">
            O Evento
          </h2>
          <div className="line-gold mb-8" />
          <p className="text-verde-petroleo/85 leading-relaxed max-w-[850px] mx-auto font-elegant text-[1.1rem]">
            O Mona Floripa Fashion nasce como vitrine estratégica da moda catarinense, unindo marcas,
            profissionais e criadores em uma experiência exclusiva à beira-mar.
          </p>
          <p className="text-verde-petroleo/85 leading-relaxed max-w-[850px] mx-auto mt-4 font-elegant text-[1.1rem]">
            Mais do que um desfile, é um encontro de negócios, posicionamento e construção de valor —
            na paisagem única da Praia da Joaquina.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="card-sobre text-center"
            >
              <span className="text-[3.5rem] text-primary mb-6 block leading-none" style={{ filter: "drop-shadow(0 2px 5px rgba(63,181,168,0.3))" }}>
                {card.icon}
              </span>
              <h3 className="font-elegant text-[2rem] font-semibold text-verde-petroleo mb-4">{card.title}</h3>
              <p className="text-verde-petroleo/85 text-base leading-[1.8]">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
