import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import joaquinaImg from "@/assets/img/joaquina.jpg";

const details = [
  { label: "Local", value: "Mona Beach Club" },
  { label: "Endereço", value: "Praia da Joaquina, Florianópolis – SC" },
  { label: "Data", value: "12 de março de 2026" },
  { label: "Horário", value: "13h" },
];

const Local = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="local" className="py-32 px-8 bg-white relative" ref={ref}>
      {/* Divider line */}
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[0.9rem] tracking-[0.2em] uppercase text-primary mb-4 font-sans font-medium">Onde</p>
          <h2 className="heading-section text-verde-petroleo">Mona Beach Club</h2>
          <div className="line-gold mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden transition-all duration-400 hover:scale-[1.02]"
            style={{
              boxShadow: "0 20px 60px rgba(1,42,48,0.2), 0 10px 30px rgba(1,42,48,0.15), inset 0 0 100px rgba(1,42,48,0.1)",
              border: "1px solid rgba(63,181,168,0.2)",
            }}
          >
            <img
              src={joaquinaImg}
              alt="Praia da Joaquina, Florianópolis"
              className="w-full h-[550px] object-cover md:h-[550px] max-[768px]:h-auto max-[768px]:object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-elegant text-[2.5rem] font-semibold text-verde-petroleo mb-8"
                style={{ textShadow: "0 2px 10px rgba(1,42,48,0.1)" }}>
              Praia da Joaquina
            </h3>
            <p className="text-[1.1rem] leading-[1.9] text-verde-petroleo/85 mb-6">
              A Praia da Joaquina é cenário perfeito para unir moda, natureza e negócios. Com infraestrutura
              premium e vista privilegiada, o Mona Beach Club oferece uma experiência inesquecível para
              marcas, parceiros e convidados.
            </p>

            <div className="local-details-box mt-12">
              {details.map((d) => (
                <p key={d.label} className="flex items-center gap-4 mb-5 text-[1.05rem] text-verde-petroleo/85">
                  <strong className="text-primary min-w-[100px] font-semibold"
                          style={{ textShadow: "0 1px 3px rgba(63,181,168,0.2)" }}>
                    {d.label}:
                  </strong>
                  {d.value}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Local;
