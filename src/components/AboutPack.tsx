'use client';

import React from 'react';
import Image from 'next/image';

const AboutPack: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1A202C] py-16 sm:py-24 md:py-32 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/assets/mockup/ellypack_mockup(1).png"
                alt="Pack Preview"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-[#9333EA]">SOBRE</span>{' '}
              <span className="text-[#F56565]">O PACK</span>
            </h2>
            <p className="text-base sm:text-lg text-[#2D3748] dark:text-gray-300 leading-relaxed">
              Se você quer otimizar seu tempo e criar vídeos de qualidade de forma rápida e fácil, nosso Pack de Edição é a solução perfeita. Com 15GB de arquivos de alta qualidade e uma aula em vídeo exclusiva, você aprenderá a editar seu primeiro vídeo de forma simples e eficiente, sem complicações. Economize horas no processo de edição e foque no que realmente importa: criatividade e resultado final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPack; 