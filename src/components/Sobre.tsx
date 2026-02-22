import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Sobre = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const cards = [
    {
      title: "Moda",
      // Substitua a <div> abaixo pelo ícone (SVG ou Componente) da sua ID Visual
      icon: <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto" />, 
      description: "Curadoria exclusiva do que há de mais sofisticado no cenário catarinense.",
    },
    {
      title: "Estratégia",
      icon: <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto" />, 
      description: "Posicionamento de marca desenhado para atrair o público certo.",
    },
    {
      title: "Conexão",
      icon: <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto" />, 
      description: "Networking de alto nível entre empresários e influenciadores.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-off-white overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        
        {/* Bloco Superior: Imagem da Modelo + Textos */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 mb-24">
          
          {/* Lado Esquerdo: Imagem da Modelo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 lg:w-2/5"
          >
            <div className="relative">
              {/* Detalhe decorativo sutil atrás da imagem */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 -z-10" />
              <img 
                src="/modelo-sobre.jpg" // Nome do arquivo na sua pasta public
                alt="Modelo Mona Floripa" 
                className="w-full h-auto shadow-2xl rounded-sm object-cover border-l-4 border-primary"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </motion.div>

          {/* Lado Direito: Textos adaptados */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
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
              <p className="text-verde-petroleo/85 leading-relaxed font-elegant text-[1.1rem] max-w-[850px] mx-auto md:mx-0">
                O Mona Floripa Fashion nasce para destacar o melhor 
                da moda catarinense em um ambiente elegante, contemporâneo e estrategicamente pensado para gerar visibilidade real e conexões relevantes.
              </p>
              <p className="text-verde-petroleo/85 leading-relaxed font-elegant text-[1.1rem] max-w-[850px] mx-auto md:mx-0">
                Reunindo marcas catarinenses, influenciadores, empresários e um público altamente qualificado, o evento se consolida como uma vitrine poderosa para marcas que buscam posicionamento, autoridade e conexão com consumidores de alto valor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid de Cards (Seu estilo original) */}
        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="card-sobre text-center"
            >
              <div className="text-primary mb-6 flex justify-center">
                {card.icon}
              </div>
              <h3 className="font-elegant text-[2rem] font-semibold text-verde-petroleo mb-4">
                {card.title}
              </h3>
              <p className="text-verde-petroleo/85 text-base leading-[1.8]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
