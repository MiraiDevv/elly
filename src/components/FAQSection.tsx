'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FAQSectionProps } from '@/types/faq';

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Perguntas Frequentes",
  subtitle = "Tire suas dúvidas sobre o pack de edição",
  items = []
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white dark:bg-[#1A202C] py-16 sm:py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#F56565]">{title}</span>
          </h2>
          <p className="text-[#2D3748] dark:text-gray-300 text-lg">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white dark:bg-[#1A202C] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium text-[#2D3748] dark:text-white">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F56565]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#F56565]" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-[#2D3748] dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://pay.kiwify.com.br/jTsypd2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#F56565] text-white rounded-full text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300"
          >
            Comprar agora
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection; 