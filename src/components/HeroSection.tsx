'use client';

import React from 'react';
import HeroVideoPlayer from './ui/HeroVideoPlayer';

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
      <div className="flex flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col items-start">
          <h1 className="text-6xl font-bold mb-4">
            <span className={titleColor}>{title}</span>{' '}
            <span className={titleColor}>{highlightedText}</span>
          </h1>
          <p className="text-[#2D3748] dark:text-gray-300 text-2xl mb-8">
            {description}
          </p>
          <a
            href="https://pay.kiwify.com.br/7r2BTsF"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F56565] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300 flex items-center gap-2"
          >
            {buttonText}
            <span className="text-xl">→</span>
          </a>
        </div>

        <div className="w-full max-w-2xl">
          <HeroVideoPlayer videoId="85yju1va4J8" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 