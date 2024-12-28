'use client';

import React from 'react';

const CustomerCarousel: React.FC = () => {
  const clients = [
    { 
      name: 'Otsuka', 
      image: './clients/otsuka.jpg',
      youtube: 'https://www.youtube.com/@OtsukaXD'
    },
    { 
      name: 'F0rsaken', 
      image: './clients/f0rsaken.jpg',
      youtube: 'https://www.youtube.com/@f0rsaken'
    },
    { 
      name: 'Nuuhfps', 
      image: './clients/nuuhfps.jpg',
      youtube: 'https://www.youtube.com/@Nuuhfps'
    },
    { 
      name: 'AAABW', 
      image: './clients/aaabw.jpg',
      youtube: 'https://www.youtube.com/@aaabw_'
    },
    { 
      name: 'Brunowski', 
      image: './clients/iBrunowski.jpg',
      youtube: 'https://www.youtube.com/@ibrunowskivalorant'
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-[#111827] py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#F56565] mb-4">
          CLIENTES QUE JÁ ATENDI
        </h2>
        <p className="text-xl text-[#2D3748] dark:text-gray-300 text-center mb-16 max-w-4xl mx-auto">
          VOU TE ENSINAR O MESMO PROCESSO QUE UTILIZO PARA EDITAR PARA OS MAIORES INFLUENCIADORES DA INTERNET!
        </p>
        
        <div className="flex justify-center items-center gap-8">
          {clients.map((client, index) => (
            <a 
              key={index} 
              href={client.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform hover:scale-105 duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#F56565]/20 group-hover:border-[#F56565] transition-colors duration-300">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#2D3748] dark:text-gray-300 text-center mt-2 text-sm group-hover:text-[#F56565] transition-colors duration-300">{client.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerCarousel; 