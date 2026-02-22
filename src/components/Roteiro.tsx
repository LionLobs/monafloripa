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
      <div className="texture-overlay" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Container Ultra Compacto: Texto e Imagem lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-center justify-center gap-4 mb-8"
        >
          <div className="text-left">
            <p className="text-[0.8rem] tracking-[0.2em] uppercase text-primary font-sans font-medium">
              Programação
            </p>
            <h2 className="heading-section text-off-white text-[2.5rem] md:text-[3.5rem] leading-tight">
              Roteiro
            </h2>
            <div className="line-gold mt-2 w-12" />
          </div>

          {/* Imagem pequena e colada */}
          <div className="w-20 md:w-32 flex-shrink-0">
            <img 
              src="/celular.png" 
              alt="Celular" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Grid de Cards com espaçamento reduzido */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="card-roteiro p-6"
            >
              <span className="font-elegant text-[3.5rem] font-bold text-primary leading-none mb-2 block opacity-70">
                {step.num}
              </span>
              <h3 className="font-elegant text-[1.6rem] font-semibold text-off-white mb-2">
                {step.title}
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-off-white/90">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roteiro;
