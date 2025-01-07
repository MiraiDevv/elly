'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

const PackAccess: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] py-16 sm:py-24 md:py-32 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-[#9333EA]">TENHA ACESSO</span>{' '}
          <span className="text-[#F56565]">AO PACK</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - Placeholder Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Placeholder with gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1E293B] dark:to-[#0F172A] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/20 to-[#F56565]/20"></div>
              </div>
              
              {/* Price badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#F56565] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transform rotate-12 shadow-lg">
                <span className="text-xs sm:text-sm font-semibold line-through opacity-75">R$197</span>
                <span className="text-lg sm:text-xl font-bold ml-2">R$50</span>
              </div>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Animated discount badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F56565]/10 rounded-full mb-6 sm:mb-8 animate-pulse">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F56565]" />
              <span className="text-sm sm:text-base text-[#F56565] font-medium">75% DE DESCONTO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3748] dark:text-white mb-4 sm:mb-6">
              Economize tempo e dinheiro com nosso pack completo!
            </h3>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-center justify-center md:justify-start text-[#2D3748] dark:text-gray-300">
                <span className="inline-block w-2 h-2 bg-[#F56565] rounded-full mr-3"></span>
                Oferta por tempo limitado
              </li>
              <li className="flex items-center justify-center md:justify-start text-[#2D3748] dark:text-gray-300">
                <span className="inline-block w-2 h-2 bg-[#F56565] rounded-full mr-3"></span>
                Acesso vitalício ao conteúdo
              </li>
              <li className="flex items-center justify-center md:justify-start text-[#2D3748] dark:text-gray-300">
                <span className="inline-block w-2 h-2 bg-[#F56565] rounded-full mr-3"></span>
                Suporte exclusivo
              </li>
            </ul>

            <a
              href="https://pay.kiwify.com.br/7r2BTsF"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F56565] to-[#9333EA] rounded-full animate-pulse"></div>
              
              {/* Button content */}
              <div className="relative bg-[#F56565] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold w-full text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
                OBTER ACESSO AGORA
                <span className="block text-xs sm:text-sm font-normal">Promoção por tempo limitado!</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackAccess; 