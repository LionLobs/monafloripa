import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const interesses = [
  "Marca",
  "Patrocinador",
  "Imprensa",
  "Influenciador",
  "Público",
  "Outro",
];

const Contato = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ nome: "", telefone: "", interesse: "", mensagem: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = "Campo obrigatório";
    if (!form.telefone.trim()) e.telefone = "Campo obrigatório";
    if (!form.interesse) e.interesse = "Selecione um interesse";
    if (!form.mensagem.trim()) e.mensagem = "Campo obrigatório";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const text = encodeURIComponent(
      `Olá! Meu nome é ${form.nome.trim()}.\nTelefone: ${form.telefone.trim()}\nInteresse: ${form.interesse}\nMensagem: ${form.mensagem.trim()}`
    );
    window.open(`https://wa.me/5567992980699?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 px-6 bg-verde-petroleo text-white relative overflow-hidden" ref={ref}>
      {/* Texture */}
      <div className="texture-overlay" />

      <div className="max-w-[560px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-[0.9rem] tracking-[0.2em] uppercase text-white/75 mb-4 font-sans font-medium">Fale Conosco</p>
          <h2 className="heading-section text-white">Garanta Sua Presença</h2>
          <div className="line-gold mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-[0.8rem] tracking-[0.12em] uppercase font-medium text-white/85">Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="input-translucent"
              maxLength={100}
            />
            {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
          </div>

          <div>
            <label className="block mb-2 text-[0.8rem] tracking-[0.12em] uppercase font-medium text-white/85">Telefone</label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="input-translucent"
              maxLength={20}
            />
            {errors.telefone && <p className="text-red-400 text-xs mt-1">{errors.telefone}</p>}
          </div>

          <div>
            <label className="block mb-2 text-[0.8rem] tracking-[0.12em] uppercase font-medium text-white/85">Interesse</label>
            <select
              value={form.interesse}
              onChange={(e) => setForm({ ...form, interesse: e.target.value })}
              className="input-translucent appearance-none"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <option value="" style={{ background: "#012A30" }}>Selecione seu interesse</option>
              {interesses.map((i) => (
                <option key={i} value={i} style={{ background: "#012A30" }}>{i}</option>
              ))}
            </select>
            {errors.interesse && <p className="text-red-400 text-xs mt-1">{errors.interesse}</p>}
          </div>

          <div>
            <label className="block mb-2 text-[0.8rem] tracking-[0.12em] uppercase font-medium text-white/85">Mensagem</label>
            <textarea
              placeholder="Sua mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              rows={4}
              className="input-translucent resize-vertical min-h-[120px]"
              maxLength={1000}
            />
            {errors.mensagem && <p className="text-red-400 text-xs mt-1">{errors.mensagem}</p>}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="submit-btn"
          >
            Quero Participar
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;
