import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, X, ChevronDown } from "lucide-react";

// 1. Dados das Perguntas Frequentes Atualizados
const faqData = [
  {
    question: "Onde será realizado o evento?",
    answer: "O Mona Floripa Fashion acontecerá no exclusivo Mona Beach Club, um cenário paradisíaco à beira-mar em Florianópolis na praia da Joaquina."
  },
  {
    question: "Como faço para confirmar minha presença?",
    answer: "A confirmação deve ser feita através do nosso sistema oficial. Utilize o link enviado em seu convite digital."
  },
  {
    question: "Como faço pra ser um patrocinador?",
    answer: "Entre em contato no final do site e saiba mais sobre nossos benefícios de ser um patrocinador. "
  }
];

const steps = [
  { num: "01", title: "Recepção", description: "Experiência de tapete vermelho para os convidados, com fotos profissionais na chegada, degustações, stands com exposição das marcas patrocinadoras e/ou apoiadoras" },
  { num: "02", title: "Desfile", description: "O desfile do Mona Floripa Fashion apresenta 6 looks por marca. Se o tempo permitir, teremos uma ação especial diretamente na areia da Praia da Joaquina." },
  { num: "03", title: "Sunset", description: "O espaço do Mona Beach Club fica aberto para networking e consumação, em um momento único para conexões reais entre marcas, influencers e convidados exclusivos da moda catarinense." },
];

const Roteiro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [showChat, setShowChat] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    const phone = "5567992980699";
    const message = encodeURIComponent("oii, vim pelo site e quero mais informações");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="roteiro" className="py-16 px-6 gradient-experience relative text-off-white" ref={ref}>
      <div className="texture-overlay" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Cabeçalho com Celular Grudado */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-center justify-center mb-12 relative"
        >
          <div className="text-left z-20">
            <p className="text-[0.8rem] md:text-[0.9rem] tracking-[0.2em] uppercase text-primary font-sans font-medium">Programação</p>
            <h2 className="heading-section text-off-white text-[3rem] md:text-[5rem] leading-none italic">Roteiro</h2>
            <div className="line-gold mt-2 w-16 md:w-24" />
          </div>

          <div className="w-44 md:w-72 flex-shrink-0 -ml-6 md:-ml-12 z-10 pointer-events-none">
            <motion.img 
              src="/celular.png" 
              alt="Celular Roteiro" 
              className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="card-roteiro p-8"
            >
              <span className="font-elegant text-[4rem] font-bold text-primary leading-none mb-4 block opacity-70">{step.num}</span>
              <h3 className="font-elegant text-[1.8rem] font-semibold text-off-white mb-3">{step.title}</h3>
              <p className="text-[1rem] leading-relaxed text-off-white/90">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- WIDGET DE IA E FAQ --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {showChat && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-4 w-[320px] md:w-[380px] bg-[#0a1a1a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="bg-primary p-4 text-black flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm">Mona Assistente Virtual</h4>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest font-semibold">Online agora</p>
                </div>
                <X size={20} className="cursor-pointer" onClick={() => setShowChat(false)} />
              </div>

              <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                <p className="text-xs text-primary mb-4 font-medium uppercase tracking-tighter">Informações Importantes</p>
                
                <div className="space-y-3">
                  {faqData.map((item, index) => (
                    <div key={index} className="border-b border-white/5 pb-2">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center text-left text-sm font-medium text-off-white hover:text-primary transition-colors py-2"
                      >
                        {item.question}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${activeFaq === index ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-off-white/70 py-2 leading-relaxed italic">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                   <button 
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-primary hover:text-black transition-all duration-300 uppercase tracking-wider"
                   >
                     Conversar em tempo real
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowChat(!showChat)}
          className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(63,181,168,0.3)] group relative"
        >
          {showChat ? <X size={28} className="text-black" /> : <MessageCircle size={28} className="text-black group-hover:rotate-12 transition-transform" />}
          {!showChat && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25"></span>}
        </motion.button>
      </div>
    </section>
  );
};

export default Roteiro;
