'use client';

import React from 'react';
import { X, Mail, MessageCircle, Globe, ArrowUpRight, Sparkles } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const ContactSection: React.FC = () => {
  const contacts = [
    {
      type: 'Twitter',
      value: '@ellyvfx',
      description: 'Me siga para atualizações e dicas de edição'
    },
    {
      type: 'Instagram',
      value: '@ellyminada',
      description: 'Confira meu trabalho e bastidores'
    },
    {
      type: 'Email',
      value: 'Enviar email',
      description: 'Entre em contato para parcerias e dúvidas'
    },
    {
      type: 'Discord',
      value: 'Comunidade Discord',
      description: 'Junte-se à nossa comunidade de editores'
    }
  ];

  const contactIcons = {
    Twitter: <X className="w-6 h-6" />,
    Instagram: <InstagramIcon />,
    Email: <Mail className="w-6 h-6" />,
    Discord: <MessageCircle className="w-6 h-6" />
  };

  const contactColors = {
    Twitter: 'hover:bg-[#F56565] hover:scale-110',
    Instagram: 'hover:bg-[#F56565] hover:scale-110',
    Email: 'hover:bg-[#F56565] hover:scale-110',
    Discord: 'hover:bg-[#F56565] hover:scale-110'
  };

  const contactUrls = {
    Twitter: 'https://twitter.com/ellyvfx',
    Instagram: 'https://instagram.com/ellyminada',
    Email: 'mailto:ellypackcontato@gmail.com',
    Discord: '#'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#2D3748] py-16 text-[#2D3748] dark:text-white relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#F56565]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#6B46C1]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F56565]/10 dark:bg-[#F56565]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#F56565]" />
            <span className="text-[#F56565] font-medium">24/7 Suporte</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#F56565] animate-fade-in-up">Vamos</span>{' '}
            <span className="text-[#6B46C1] animate-fade-in-up animation-delay-200">Conectar</span>
          </h1>
          <p className="text-xl text-[#2D3748] dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Escolha o melhor canal para entrar em contato e transformar suas ideias em realidade.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={contact.type}
              href={contactUrls[contact.type as keyof typeof contactUrls]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-[#1A202C] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#6B46C1]/20 dark:border-transparent animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F56565]/0 to-[#6B46C1]/0 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-[#6B46C1]/5 dark:bg-black/40 ${contactColors[contact.type as keyof typeof contactColors]} transition-all duration-300`}>
                    {contactIcons[contact.type as keyof typeof contactIcons]}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2D3748] dark:text-white">{contact.type}</h3>
                    <p className="text-[#2D3748]/60 dark:text-gray-400">{contact.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6B46C1]/40 group-hover:text-[#F56565] group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white/40 dark:group-hover:text-[#F56565] transition-all duration-300" />
              </div>
              <p className="text-[#2D3748]/60 dark:text-gray-400 group-hover:text-[#2D3748] dark:group-hover:text-gray-300 transition-colors duration-300">
                {contact.description}
              </p>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F56565]/10 to-[#6B46C1]/10 dark:from-[#F56565]/20 dark:to-[#6B46C1]/20 border border-[#6B46C1]/20 dark:border-transparent backdrop-blur-sm animate-fade-in-up">
            <Globe className="w-5 h-5 text-[#F56565]" />
            <span className="text-[#2D3748] dark:text-gray-300 font-medium">Disponível para projetos globais</span>
          </div>
          
          <div className="mt-8 p-8 bg-white dark:bg-[#1A202C] rounded-3xl shadow-lg border border-[#6B46C1]/20 dark:border-transparent transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F56565] to-[#6B46C1] rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#F56565] to-[#6B46C1] text-transparent bg-clip-text">
                Horário de Atendimento
              </span>
            </h3>
            <p className="text-[#2D3748] dark:text-gray-300 text-lg">
              Segunda a Sexta • 9:00 - 18:00 (Horário de Brasília)
            </p>
            <p className="text-[#2D3748]/60 dark:text-gray-400 mt-2">
              Responderemos sua mensagem o mais breve possível!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 