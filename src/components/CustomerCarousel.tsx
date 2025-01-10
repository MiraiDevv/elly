'use client';

import React from 'react';
import Image from 'next/image';

const CustomerCarousel: React.FC = () => {
  const clients = [
    { 
      name: 'Otsuka', 
      image: 'https://yt3.googleusercontent.com/8t7GypfzGmty8Ba7negVgvOw5rwzbX_V-M77P0uA1KtWUolLs9dxvWwwawnwKMKUJ0jE7W85_w=s160-c-k-c0x00ffffff-no-rj',
      youtube: 'https://www.youtube.com/@OtsukaXD'
    },
    { 
      name: 'F0rsaken', 
      image: 'https://yt3.googleusercontent.com/mNfy7C3vVHVz0qNg8tPPKW0t-bgg9fekgZJJ30pguXFNPiI-XsKlFkcyuHdtuhjT78QE9RKMLw=s160-c-k-c0x00ffffff-no-rj',
      youtube: 'https://www.youtube.com/@f0rsaken'
    },
    { 
      name: 'Nuuhfps', 
      image: 'https://yt3.googleusercontent.com/y4fZL4z4tKjSYH_VcYUdVpQZWvi3xg5zR9ugCjlVK_4rDBNosr2pW-ODtdFPY-u_Fsx691vshlI=s160-c-k-c0x00ffffff-no-rj',
      youtube: 'https://www.youtube.com/@Nuuhfps'
    },
    { 
      name: 'AAABW', 
      image: 'https://yt3.googleusercontent.com/jgH-Sqx2ZdqiJP1Bf1u1u-RpIhRmxqtTmig_oBFFTT8PTWQrtz0LKRnH9mMZVi03j2Fa-LB_7g=s160-c-k-c0x00ffffff-no-rj',
      youtube: 'https://www.youtube.com/@aaabw_'
    },
    { 
      name: 'Brunowski', 
      image: 'https://yt3.googleusercontent.com/DN4qXrDa74eJP--U1q1Pg-bOAt22TfLeFGMTzvrHmDJyqy3j06xOEPwGRsOaeJP3sXK6Uqcw8w=s160-c-k-c0x00ffffff-no-rj',
      youtube: 'https://www.youtube.com/@ibrunowskivalorant'
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-[#111827] py-12 sm:py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#F56565] mb-2 sm:mb-4">
          CLIENTES QUE JÁ ATENDI
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-[#2D3748] dark:text-gray-300 text-center mb-8 sm:mb-16 max-w-4xl mx-auto px-4">
          Você terá acesso a todo material que uso para editar para os melhores canais de valorant</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <a 
                key={index} 
                href={client.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-transform hover:scale-105 duration-300 
                flex-[1_1_calc(50%-1rem)] sm:flex-[1_1_calc(33.333%-1rem)] lg:flex-[0_1_auto] 
                flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#F56565]/20 group-hover:border-[#F56565] transition-colors duration-300">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="text-[#2D3748] dark:text-gray-300 text-center mt-2 text-xs sm:text-sm group-hover:text-[#F56565] transition-colors duration-300">
                  {client.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCarousel; 