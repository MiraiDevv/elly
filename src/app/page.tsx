import HeroSection from '@/components/HeroSection';
import CustomerCarousel from '@/components/CustomerCarousel';
import AboutPack from '@/components/AboutPack';
import PackIncludes from '@/components/PackIncludes';
import PackAccess from '@/components/PackAccess';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
        title="Transforme suas ideias"
        highlightedText="em realidade!"
        description="Domine o Premiere: edição precisa, timing perfeito e psicologia nos cortes. Aprenda com quem já gerou resultados."
        buttonText="Comprar agora"
        titleColor="text-[#6B46C1]"
      />
      <CustomerCarousel />
      <AboutPack />
      <PackIncludes />
      <PackAccess />
    </main>
  );
} 