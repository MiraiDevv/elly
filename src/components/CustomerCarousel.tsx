'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ModernSwiper from './ui/ModernSwiper';

interface Client {
  name: string;
  youtube: string;
  handle: string;
  image?: string;
}

const initialClients: Client[] = [
  { name: 'Otsuka', handle: 'OtsukaXD', youtube: 'https://www.youtube.com/@OtsukaXD' },
  { name: 'F0rsaken', handle: 'f0rsaken', youtube: 'https://www.youtube.com/@f0rsaken' },
  { name: 'Nuuhfps', handle: 'Nuuhfps', youtube: 'https://www.youtube.com/@Nuuhfps' },
  { name: 'AAABW', handle: 'aaabw_', youtube: 'https://www.youtube.com/@aaabw_' },
  { name: 'Brunowski', handle: 'ibrunowskivalorant', youtube: 'https://www.youtube.com/@ibrunowskivalorant' }
];

const CustomerCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clients, setClients] = useState<Client[]>(initialClients);

  useEffect(() => {
    const fetchThumbnails = async () => {
      const updatedClients = await Promise.all(
        clients.map(async (client: Client) => {
          try {
            const res = await fetch(`/api/getChannelThumbnail?handle=${client.handle}`);
            if (!res.ok) throw new Error('Failed to fetch thumbnail');
            const data = await res.json();
            return { ...client, image: data.thumbnailUrl };
          } catch (error) {
            console.error('Error fetching thumbnail for', client.handle, error);
            return client;
          }
        })
      );
      setClients(updatedClients);
    };
    fetchThumbnails();
  }, []);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index % 6);
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-[#111827] py-16 sm:py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
          <span className="bg-gradient-to-r from-[#F56565] to-[#9333EA] text-transparent bg-clip-text">
            CLIENTES QUE JÁ ATENDI
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-[#2D3748] dark:text-gray-300 text-center mb-12 sm:mb-16">
            Você terá acesso a todo material que uso para editar para os melhores canais de valorant
          </p>
          
          <div className="relative w-full">
            <ModernSwiper
              slidesPerView={3}
              gap={32}
              autoPlay={true}
              autoPlayInterval={3000}
              showArrows={true}
              showDots={false}
              onSlideChange={handleSlideChange}
            >
              {clients.map((client, index) => (
                <div key={index} className="flex flex-col items-center">
                  <a 
                    href={client.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#F56565]/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F56565] to-[#9333EA] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <Image
                        src={client.image || 'https://via.placeholder.com/128'}
                        alt={client.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <p className="mt-4 text-sm sm:text-base font-medium bg-gradient-to-r from-[#F56565] to-[#9333EA] bg-clip-text text-transparent opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {client.name}
                    </p>
                  </a>
                </div>
              ))}
            </ModernSwiper>
            
            {/* Custom dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-4 bg-[#F56565]'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-[#F56565]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCarousel; 