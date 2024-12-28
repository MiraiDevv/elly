'use client';

import React from 'react';
import HeroVideoPlayer from './ui/HeroVideoPlayer';

const PackIncludes: React.FC = () => {
  const items = [
    {
      title: '8GB de Arquivos',
      description: 'Arquivos de alta qualidade prontos para usar em seus projetos'
    },
    {
      title: 'Aula em Vídeo',
      description: 'Tutorial exclusivo ensinando como editar seu primeiro vídeo'
    },
    {
      title: 'Suporte Exclusivo',
      description: 'Acesso ao nosso grupo de suporte para tirar suas dúvidas'
    },
    {
      title: 'Atualizações',
      description: 'Receba novos conteúdos e atualizações do pack'
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-[#1E293B] py-32 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-[#9333EA]">O QUE ESTÁ</span>{' '}
          <span className="text-[#F56565]">INCLUSO</span>
        </h2>

        <div className="grid grid-cols-2 gap-8 mb-24">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-[#0F172A] p-8 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#F56565] transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-[#F56565] mb-4">{item.title}</h3>
              <p className="text-[#2D3748] dark:text-gray-300 text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#F56565] mb-8">
            Veja o Pack em Ação
          </h3>
          <div className="aspect-video w-full">
            <HeroVideoPlayer videoId="85yju1va4J8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackIncludes; 