import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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

  return (
    <section id="sobre" className="section-padding bg-off-white overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Bloco de Apresentação: Imagem + Texto */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 mb-20">
          
          {/* Lado Esquerdo: Imagem da Modelo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 lg:w-2/5"
          >
            <div className="relative">
              {/* Moldura decorativa sutil usando as cores do seu CSS */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 -z-10" />
              <img 
                src="/modelo-sobre.PNG" // CERTIFIQUE-SE DE TER ESSA IMAGEM NA PASTA PUBLIC
                alt="Mona Floripa Fashion" 
                className="w-full h-auto shadow-2xl rounded-sm object-cover"
                style={{ maxHeight: '650px' }}
              />
            </div>
          </motion.div>

          {/* Lado Direito: Textos (Sua estrutura original preservada) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left"
          >
            <p className="text-[0.9rem] tracking-[0.3em] uppercase text-primary mb-4 font-sans font-medium">
              Moda • Estratégia • Posicionamento
            </p>
            <h2 className="heading-section text-verde-petroleo mb-6">
              O Evento
            </h2>
            <div className="line-gold mb-8 md:mx-0" />
            
            <div className="space-y-6">
              <p className="text-verde-petroleo/85 leading-relaxed font-elegant text-[1.1rem]">
                O Mona Floripa Fashion nasce para destacar o melhor 
                da moda catarinense em um ambiente elegante, contemporâneo e estrategicamente pensado para gerar visibilidade real e conexões relevantes.
              </p>
              <p className="text-verde-petroleo/85 leading-relaxed font-elegant text-[1.1rem]">
                Reunindo marcas catarinenses, influenciadores, empresários e um público altamente qualificado, o evento se consolida como uma vitrine poderosa para marcas que buscam posicionamento, autoridade e conexão com consumidores de alto valor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid de Cards (Seu código original preservado) */}
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
