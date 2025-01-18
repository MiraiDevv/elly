'use client';

import React from 'react';

interface HeroSectionProps {
  title: string;
  highlightedText: string;
  description: string;
  buttonText?: string;
  titleColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightedText,
  description,
  buttonText = 'Comprar Agora',
  titleColor = 'text-[#9333EA]'
}) => {
  return (
    <div className="w-full bg-white dark:bg-[#1E293B]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-6 md:py-24 gap-4 md:gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 mt-4 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
            <span className={titleColor}>{title}</span>{' '}
            <span className={titleColor}>{highlightedText}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#2D3748] dark:text-gray-300 mb-4 md:mb-8 max-w-2xl">
            {description}
          </p>
          <a
            href="https://pay.kiwify.com.br/7r2BTsF"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F56565] text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300 flex items-center gap-2"
          >
            {buttonText}
            <span className="text-lg md:text-xl">→</span>
          </a>
        </div>

        <div className="w-full md:w-1/2 px-2 md:px-0">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
            <video
              src="/assets/videos/EllyPack.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 