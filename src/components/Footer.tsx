import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-footer py-16 px-6 text-center">
      <div className="max-w-[1100px] mx-auto">
        {/* Social links */}
        <div className="flex justify-center gap-9 mb-10">
          <a
            href="https://instagram.com/monafloripafashion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @monafloripafashion"
            className="footer-social-link"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:monafloripafashion@gmail.com"
            aria-label="Email monafloripafashion@gmail.com"
            className="footer-social-link"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://wa.me/5567992980699"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="footer-social-link"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        <p className="text-white/70 text-[0.9rem] leading-relaxed tracking-[0.04em] mb-1">
          @monafloripafashion
        </p>
        <p className="text-white/70 text-[0.9rem] leading-relaxed tracking-[0.04em] mb-1">
          monafloripafashion@gmail.com
        </p>
        <p className="text-cyan-neon text-[0.95rem] mt-5 font-sans">
          WWW.MONAFLORIPAFASHION.COM
        </p>

        <div className="mt-9 text-[0.75rem] text-white/45">
          <p>Criado por <span className="text-white/70">LionLobs</span> · © 2026 Mona Floripa Fashion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
