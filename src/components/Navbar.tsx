import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoClean from "@/assets/img/logo_clean.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Roteiro", href: "#roteiro" },
  { label: "Local", href: "#local" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "py-4 shadow-[0_2px_20px_rgba(0,0,0,0.1)]"
      }`}
      style={{
        background: scrolled ? "rgba(1, 42, 48, 0.98)" : "rgba(1, 42, 48, 0.95)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8">
        <a href="#" className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(63,181,168,0.5)]">
          <img src={logoClean} alt="Mona Floripa Fashion" className="h-[45px] w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[0.9rem] font-sans font-medium tracking-[0.05em] uppercase text-off-white transition-all duration-300 hover:text-primary hover:[text-shadow:0_0_10px_rgba(63,181,168,0.5)] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 after:bg-primary after:transition-all after:duration-300 after:shadow-[0_0_8px_hsl(173,50%,48%)] hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-off-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-3/4 z-50 flex flex-col pt-20 px-8"
            style={{
              background: "rgba(1, 42, 48, 0.98)",
              backdropFilter: "blur(20px)",
              boxShadow: "-5px 0 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            <button
              className="absolute top-5 right-5 text-off-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-lg font-elegant tracking-wider text-off-white/80 hover:text-primary transition-colors border-b border-white/10"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
