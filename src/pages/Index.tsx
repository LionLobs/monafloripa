import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Roteiro from "@/components/Roteiro";
import Local from "@/components/Local";
import Parceiros from "@/components/Parceiros";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Roteiro />
      <Local />
      <Parceiros />
      <Contato />
      <Footer />
    </main>
  );
};

export default Index;
