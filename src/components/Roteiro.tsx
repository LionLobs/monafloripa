import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Recepção",
    description: "Welcome drinks, networking e ambientação à beira-mar com DJ set.",
  },
  {
    num: "02",
    title: "Desfile",
    description: "Passarela com marcas selecionadas e curadoria de moda catarinense.",
  },
  {
    num: "03",
    title: "Sunset",
    description: "Encerramento com pôr do sol, música ao vivo e experiência premium.",
  },
];

const Roteiro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roteiro" className="py-16 px-6 gradient-experience relative text-off-white" ref={ref}>
      {/* Texture */}
      <div className="texture-overlay" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Cabeçalho com Celular em destaque ao lado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-center justify-center gap-4 md:gap-8 mb-12"
        >
          <div className="text-left">
            <p className="text-[0.8rem] md:text-[0.9rem] tracking-[0.2em] uppercase text-primary font-sans font-medium"
               style={{ textShadow: "0 1px 5px rgba(0,0,0,0.3)" }}>
              Programação
            </p>
            <h2 className="heading-section text-off-white text-[2.8rem] md:text-[4.5rem] leading-tight"
                style={{ textShadow: "0 2px 15px rgba(0,0,0,0.4)" }}>
              Roteiro
            </h2>
            <div className="line-gold mt-2 w-16 md:w-24" />
          </div>

          {/* Imagem do Celular - Tamanho Grande e Colada ao Texto */}
          <div className="w-40 md:w-64 flex-shrink-0">
            <img 
              src="/celular.png" 
              alt="Celular Roteiro" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="card-roteiro p-8"
            >
              <span className="font-elegant text-[4rem] font-bold text-primary leading-none mb-4 block opacity-70"
                    style={{ textShadow: "0 4px 15px rgba(63,181,168,0.4)" }}>
                {step.num}
              </span>
              <h3 className="font-elegant text-[1.8rem] font-semibold text-off-white mb-3"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
                {step.title}
              </h3>
              <p className="text-[1rem] leading-relaxed text-off-white/90">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roteiro;
