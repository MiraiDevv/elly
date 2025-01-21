'use client';

import React from 'react';

const PackIncludes: React.FC = () => {
  const items = [
    {
      title: '15GB de Arquivos',
      description: 'Arquivos de alta qualidade prontos para usar em seus projetos'
    },
    {
      title: 'Aula em Vídeo',
      description: 'Tutorial exclusivo ensinando como editar seu primeiro vídeo'
    },
    {
      title: 'Canal Exclusivo',
      description: 'Participe de uma comunidade no discord com um canal único onde você receber suporte, pode trocar ideias e receber ajuda de outros editores nos canais livres, divulgar seu trabalho e criar conexões com amigos apaixonados por edição.'
    },
    {
      title: 'Atualizações',
      description: 'Receba novos conteúdos e atualizações do pack'
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-[#1E293B] py-16 sm:py-24 md:py-32 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#9333EA]">O QUE ESTÁ</span>{' '}
          <span className="text-[#F56565]">INCLUSO</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-24">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-[#0F172A] p-6 sm:p-8 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#F56565] transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#F56565] mb-2 sm:mb-4">{item.title}</h3>
              <p className="text-base sm:text-lg text-[#2D3748] dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#F56565] mb-4 sm:mb-8">
            Veja o Pack em Ação
          </h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/_ED1ByP25Bg"
              title="Pack Preview"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackIncludes; 