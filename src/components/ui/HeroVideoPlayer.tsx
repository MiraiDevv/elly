'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface HeroVideoPlayerProps {
  videoId: string;
}

const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
      {!isPlaying ? (
        <>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="bg-[#F56565] text-white p-4 rounded-full hover:bg-[#E53E3E] transition-all duration-300 hover:scale-110"
              aria-label="Play video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      )}
    </div>
  );
};

export default HeroVideoPlayer; 