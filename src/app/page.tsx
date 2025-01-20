import HeroSection from '@/components/HeroSection';
import CustomerCarousel from '@/components/CustomerCarousel';
import AboutPack from '@/components/AboutPack';
import PackIncludes from '@/components/PackIncludes';
import PackAccess from '@/components/PackAccess';
import FAQSection from '@/components/FAQSection';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
        title="Transforme suas ideias"
        highlightedText="em realidade!"
        description="Economize tempo editando seus vídeos com meu pack de edição completo!"
        buttonText="Comprar agora"
        titleColor="text-[#6B46C1]"
      />
      <CustomerCarousel />
      <AboutPack />
      <PackIncludes />
      <PackAccess />
      <FAQSection
        items={[
          {
            question: "O que está incluso no pack?",
            answer: "O pack inclui 15GB de arquivos de alta qualidade, uma aula em vídeo exclusiva ensinando como editar seu primeiro vídeo, acesso à comunidade exclusiva e atualizações gratuitas."
          },
          {
            question: "Como recebo o acesso após a compra?",
            answer: "Após a confirmação do pagamento, você receberá um email com todas as instruções de acesso ao pack e à comunidade exclusiva."
          },
          {
            question: "O acesso é vitalício?",
            answer: "Sim! Você terá acesso vitalício a todo o conteúdo do pack, incluindo atualizações futuras."
          },
          {
            question: "Preciso ter experiência em edição?",
            answer: "Não! O pack é ideal tanto para iniciantes quanto para editores mais experientes. Incluímos um tutorial detalhado para ajudar você a começar."
          },
          {
            question: "Posso usar o pack em projetos comerciais?",
            answer: "Sim! Todos os arquivos incluídos no pack possuem licença comercial, permitindo seu uso em projetos pessoais e comerciais."
          }
        ]}
      />
    </main>
  );
} 