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
import logo10 from "@/assets/img/logo10.png";
import logo11 from "@/assets/img/logo11.png";
import logo12 from "@/assets/img/logo12.png";
import logo13 from "@/assets/img/logo13.png";
import logo14 from "@/assets/img/logo14.png";
import logo15 from "@/assets/img/logo15.png";
import logo16 from "@/assets/img/logo16.png";
import logo17 from "@/assets/img/logo17.png";
import logo18 from "@/assets/img/logo18.png";
import logo19 from "@/assets/img/logo19.png";
import logo20 from "@/assets/img/logo20.png";
import logo21 from "@/assets/img/logo21.png";
import logo22 from "@/assets/img/logo22.png";
import logo23 from "@/assets/img/logo23.png";
import logo24 from "@/assets/img/logo24.png";
import logo25 from "@/assets/img/logo25.png";
import logo26 from "@/assets/img/logo26.png";
import logo27 from "@/assets/img/logo27.png";
import logo28 from "@/assets/img/logo28.jpeg";
import logo29 from "@/assets/img/logo29.png";
import logo30 from "@/assets/img/logo30.png";

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
  { src: logo10, alt: "Parceiro 10" },
  { src: logo11, alt: "Parceiro 11" },
  { src: logo12, alt: "Parceiro 12" },
  { src: logo13, alt: "Parceiro 13" },
  { src: logo14, alt: "Parceiro 14" },
  { src: logo15, alt: "Parceiro 15" },
  { src: logo16, alt: "Parceiro 16" },
  { src: logo17, alt: "Parceiro 17" },
  { src: logo18, alt: "Parceiro 18" },
  { src: logo19, alt: "Parceiro 19" },
  { src: logo20, alt: "Parceiro 20" },
  { src: logo21, alt: "Parceiro 21" },
  { src: logo22, alt: "Parceiro 22" },
  { src: logo23, alt: "Parceiro 23" },
  { src: logo24, alt: "Parceiro 24" },
  { src: logo25, alt: "Parceiro 25" },
  { src: logo26, alt: "Parceiro 26" },
  { src: logo27, alt: "Parceiro 27" },
  { src: logo28, alt: "Parceiro 28" },
  { src: logo29, alt: "Parceiro 29" },
  { src: logo30, alt: "Parceiro 30" },
];

// Duplicate for seamless loop
const duplicated = [...partnerLogos, ...partnerLogos];

const Parceiros = () => {
  return (
    <section id="parceiros" className="py-32 px-8 bg-off-white overflow-hidden relative">
      <div className="section-divider absolute top-0 left-0" />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[0.9rem] tracking-[0.2em] uppercase text-primary mb-4 font-sans font-medium">
            Quem Apoia
          </p>
          <h2 className="heading-section text-verde-petroleo">Parceiros</h2>
          <div className="line-gold mt-6" />
        </div>
      </div>

      <div className="relative mt-16">
        <div
          className="flex gap-16 w-max"
          style={{ animation: "marquee 40s linear infinite" }}
        >
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
