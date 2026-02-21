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
    <section id="roteiro" className="py-32 px-8 gradient-experience relative text-off-white" ref={ref}>
      {/* Texture */}
      <div className="texture-overlay" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[0.9rem] tracking-[0.2em] uppercase text-primary mb-4 font-sans font-medium"
             style={{ textShadow: "0 1px 5px rgba(0,0,0,0.3)" }}>Programação</p>
          <h2 className="heading-section text-off-white" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.4)" }}>
            Roteiro
          </h2>
          <div className="line-gold mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="card-roteiro"
            >
              <span className="font-elegant text-[5rem] font-bold text-primary leading-none mb-6 block opacity-70"
                    style={{ textShadow: "0 4px 15px rgba(63,181,168,0.4)" }}>
                {step.num}
              </span>
              <h3 className="font-elegant text-[2.2rem] font-semibold text-off-white mb-4"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
                {step.title}
              </h3>
              <p className="text-[1.05rem] leading-[1.8] text-off-white/90">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roteiro;
