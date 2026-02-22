import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: "✦",
    title: "Conexão Real",
    description: "Networking estratégico entre marcas, influenciadores e profissionais da moda catarinense.",
  },
  {
    icon: "◆",
    title: "Visibilidade Estratégica",
    description: "Exposição qualificada em um dos cenários mais icônicos de Florianópolis.",
  },
  {
    icon: "✧",
    title: "Mercado & Negócios",
    description: "Um espaço pensado para gerar negócios reais e posicionar sua marca com autoridade.",
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
        
        {/* Container Flex para Imagem + Texto */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 mb-24">
          
          {/* Lado Esquerdo: Imagem da Modelo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img 
              src="/modelo-sobre.jpg" // Substitua pelo caminho da sua imagem
              alt="Modelo Mona Floripa"
              className="w-full h-auto shadow-2xl rounded-sm object-cover border-l-4 border-primary"
              style={{ maxHeight: '550px' }}
            />
          </motion.div>

          {/* Lado Direito: Seus Textos Originais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <p className="text-[0.9rem] tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">
              Moda • Estratégia • Posicionamento
            </p>
            <h2 className="heading-section text-verde-petroleo mb-6">
              O Evento
            </h2>
            <div className="line-gold mb-8 md:mx-0" />
            
            <p className="text-verde-petroleo/85 leading-relaxed font-elegant text-[1.1rem]">
              O Mona Floripa Fashion nasce como vitrine estratégica da moda catarinense, unindo marcas,
              profissionais e criadores em uma experiência exclusiva à beira-mar.
            </p>
            <p className="text-verde-petroleo/85 leading-relaxed mt-4 font-elegant text-[1.1rem]">
              Mais do que um desfile, é um encontro de negócios, posicionamento e construção de valor —
              na paisagem única da Praia da Joaquina.
            </p>
          </motion.div>
        </div>

        {/* Seus Cards Originais (Mantidos exatamente como antes) */}
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
