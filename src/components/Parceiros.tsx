import partnerLogo1 from "@/assets/img/logo-partner-1.jpeg";
import logoMona from "@/assets/img/logo-mona.png";
import logo1 from "@/assets/img/logo1.png";
import logo2 from "@/assets/img/logo2.jpeg";
import logo3 from "@/assets/img/logo3.png";
import logo4 from "@/assets/img/logo4.png";
import logo5 from "@/assets/img/logo5.png";
import logo6 from "@/assets/img/logo6.png";
import logo7 from "@/assets/img/logo7.png";
import logo8 from "@/assets/img/logo8.png";
import logo9 from "@/assets/img/logo9.png";

const partnerLogos = [
  { src: logo1, alt: "Aperol" },
  { src: logo2, alt: "Campari" },
  { src: logo3, alt: "Guava" },
  { src: logo4, alt: "Copal Distribuidora" },
  { src: logo5, alt: "Maria Náutica Swimwear" },
  { src: logo6, alt: "Realiza Decorações e Eventos" },
  { src: logo7, alt: "Absolut" },
  { src: logo8, alt: "Caroline Prestes Assessoria Jurídica" },
  { src: logo9, alt: "Parceiro 9" },
  
  
];

// Duplicate for seamless loop
const duplicated = [...partnerLogos, ...partnerLogos];

const Parceiros = () => {
  return (
    <section id="parceiros" className="py-32 px-8 bg-off-white overflow-hidden relative">
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[0.9rem] tracking-[0.2em] uppercase text-primary mb-4 font-sans font-medium">Quem Apoia</p>
          <h2 className="heading-section text-verde-petroleo">Parceiros</h2>
          <div className="line-gold mt-6" />
        </div>
      </div>

      <div className="relative mt-16">

        <div className="flex gap-16 w-max" style={{ animation: "marquee 40s linear infinite" }}>
          {duplicated.map((logo, i) => (
            <div key={i} className="card-parceiro">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[80%] max-h-[70%] object-contain transition-transform duration-400 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
