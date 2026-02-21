import { motion } from "framer-motion";
import logoMona from "@/assets/img/logomona.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/CONVERTIDO.mp4"
      />

      {/* Overlay suave para legibilidade */}
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(1,42,48,0.5) 70%, rgba(1,42,48,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 pt-20 max-w-[1000px] mx-auto gap-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
         

          {/* Logo centralizada */}
          <div className="flex justify-center items-center my-2">
            <img
              src={logoMona}
              alt="Mona Floripa Fashion"
              className="block w-full max-w-[500px] h-auto mx-auto md:max-w-[580px] max-[768px]:max-w-[320px]"
            />
          </div>

          <p
            className="text-[0.85rem] md:text-[1rem] tracking-[0.3em] uppercase text-primary font-sans font-normal"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            Moda • Estratégia • Posicionamento
          </p>
          <p
            className="text-[1.2rem] md:text-[1.5rem] font-elegant font-medium text-off-white mb-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            12 de março • Mona Beach Club
          </p>
        </motion.div>

        <motion.a
          href="#contato"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="cta-button font-sans"
        >
          Garanta Sua Presença
        </motion.a>
      </div>

      {/* Marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 py-6 z-[3]"
        style={{
          background:
            "linear-gradient(to top, rgba(1,42,48,0.65), rgba(1,42,48,0))",
        }}
      >
        <div className="marquee-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="mr-16 text-[0.8rem] tracking-[0.45em] uppercase text-white/35 font-sans whitespace-nowrap"
            >
              Mona Floripa Fashion ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
