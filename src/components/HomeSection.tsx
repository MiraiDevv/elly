'use client';

import React from 'react';
import HeroSection from './HeroSection';
import CustomerCarousel from './CustomerCarousel';
import PomodoroSection from './PomodoroSection';

const HomeSection: React.FC = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-[#2D3748]">
      <div className="container mx-auto">
        <HeroSection
          title="Transforme suas ideias"
          highlightedText="em realidade!"
          description="Economize tempo editando seus vídeos com meu pack de edição completo!"
          buttonText="Comprar agora"
          titleColor="text-[#6B46C1]"
        />
      </div>
      <div className="bg-white dark:bg-[#2D3748]">
        <CustomerCarousel />
      </div>
      <div className="container mx-auto px-4 py-16">
        <PomodoroSection />
      </div>
    </main>
  );
};

export default HomeSection; 