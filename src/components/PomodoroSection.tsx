'use client';

import React from 'react';

const PomodoroSection: React.FC = () => {
  return (
    <div className="w-full">
      {/* First Section - Acceleration Message */}
      <div className="w-full bg-white dark:bg-[#1A202C] rounded-3xl p-12 text-center shadow-lg border border-gray-100 dark:border-transparent">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#F56565]">Nós aceleramos</span>{' '}
          <span className="text-[#6B46C1]">o aprendizado E você acelera</span>{' '}
          <span className="text-[#F56565]">seus resultados.</span>
        </h2>
        <p className="text-[#2D3748] dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Junte-se ao nosso clube da EditTiming e descubra como fazer seu conteúdo brilhar. Aprenda o futuro da edição, construa sua marca pessoal e fique à frente das últimas tendências em edição e criação de conteúdo.
        </p>
        <button className="bg-[#F56565] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300">
          Comprar agora
        </button>
      </div>

      {/* Second Section - "Is it for you?" */}
      <div className="mt-20 mb-16 text-center">
        <h2 className="text-4xl font-bold">
          <span className="text-[#F56565]">Este treinamento é</span>{' '}
          <span className="text-[#F56565]">para você</span>{' '}
          <span className="text-[#6B46C1]">?</span>
        </h2>
      </div>

      {/* Third Section - Three Steps */}
      <div className="space-y-16">
        {/* Step 1 */}
        <div className="bg-white dark:bg-[#1A202C] rounded-3xl p-8 flex items-center justify-between shadow-lg border border-gray-100 dark:border-transparent">
          <div className="flex-1 pr-8">
            <h3 className="text-2xl mb-4">
              <span className="text-[#F56565]">Se você é iniciante,</span>{' '}
              <span className="text-[#F56565]">este treinamento é</span>{' '}
              <span className="text-[#6B46C1]">ideal</span>.
            </h3>
            <p className="text-[#2D3748] dark:text-gray-300">
              Aqui, você aprenderá os fundamentos do método Pomodoro, começando com sessões básicas de 25 minutos e descobrindo como maximizar sua produtividade desde o primeiro dia.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-[#6B46C1]/5 dark:bg-black/40 rounded-lg p-6 text-8xl font-bold text-[#F56565] text-center shadow-inner border border-[#6B46C1]/10">01</div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-[#1A202C] rounded-3xl p-8 flex items-center justify-between shadow-lg border border-gray-100 dark:border-transparent">
          <div className="flex-1">
            <div className="bg-[#6B46C1]/5 dark:bg-black/40 rounded-lg p-6 text-8xl font-bold text-[#F56565] text-center shadow-inner border border-[#6B46C1]/10">02</div>
          </div>
          <div className="flex-1 pl-8">
            <h3 className="text-2xl mb-4">
              <span className="text-[#F56565]">Se você já tem experiência,</span>{' '}
              <span className="text-[#F56565]">este treinamento é o seu próximo</span>{' '}
              <span className="text-[#6B46C1]">passo</span>.
            </h3>
            <p className="text-[#2D3748] dark:text-gray-300">
              Aprenda técnicas avançadas do Pomodoro, como ajustar intervalos, gerenciar interrupções e utilizar ferramentas digitais para potencializar sua produtividade.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-[#1A202C] rounded-3xl p-8 flex items-center justify-between shadow-lg border border-gray-100 dark:border-transparent">
          <div className="flex-1 pr-8">
            <h3 className="text-2xl mb-4">
              <span className="text-[#F56565]">Para quem busca se superar,</span>{' '}
              <span className="text-[#F56565]">este treinamento é o</span>{' '}
              <span className="text-[#6B46C1]">desafio final</span>.
            </h3>
            <p className="text-[#2D3748] dark:text-gray-300">
              Domine estratégias avançadas de gestão de tempo, combine o Pomodoro com outras técnicas de produtividade e desenvolva seu próprio sistema personalizado.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-[#6B46C1]/5 dark:bg-black/40 rounded-lg p-6 text-8xl font-bold text-[#F56565] text-center shadow-inner border border-[#6B46C1]/10">03</div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Benefits Comparison */}
      <div className="mt-20 mb-16 text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-[#F56565]">Todos os benefícios do</span>{' '}
          <span className="text-[#F56565]">método</span>{' '}
          <span className="text-[#6B46C1]">pomodoro</span>
        </h2>
        
        <div className="flex gap-8 max-w-6xl mx-auto">
          {/* With Method */}
          <div className="flex-1 bg-[#6B46C1]/[0.02] dark:bg-[#1A202C] rounded-3xl p-8 text-left shadow-lg border border-[#6B46C1]/20 dark:border-transparent">
            <h3 className="text-2xl mb-6">
              <span className="text-[#6B46C1]">Com o método</span>{' '}
              <span className="text-[#6B46C1]">Pomodoro</span>
              <span className="text-[#2D3748] dark:text-white">, você:</span>
            </h3>
            <ul className="space-y-6">
              {/* Time Management */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">Otimiza seu tempo:</span>
                  <span className="text-[#6B46C1]/60"> Foco intenso por 25 minutos e pausas estratégicas</span>
                </div>
              </li>
              {/* Focus */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">Aumenta o foco:</span>
                  <span className="text-[#6B46C1]/60"> Elimina distrações e mantém alta produtividade</span>
                </div>
              </li>
              {/* Mental Fatigue */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">Reduz a fadiga mental:</span>
                  <span className="text-[#6B46C1]/60"> Pausas regulares mantêm sua mente fresca e energizada</span>
                </div>
              </li>
              {/* Quality */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">Melhora a qualidade:</span>
                  <span className="text-[#6B46C1]/60"> Trabalho focado leva a melhores resultados</span>
                </div>
              </li>
              {/* Discipline */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#6B46C1] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-[#6B46C1] font-medium">Desenvolve disciplina:</span>
                  <span className="text-[#6B46C1]/60"> Cria hábitos produtivos e consistentes</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Without Method */}
          <div className="flex-1 bg-[#6B46C1]/[0.02] dark:bg-[#1A202C] rounded-3xl p-8 text-left shadow-lg border border-[#6B46C1]/20 dark:border-transparent">
            <h3 className="text-2xl mb-6">
              <span className="text-[#F56565]">Sem o método</span>{' '}
              <span className="text-[#F56565]">Pomodoro</span>
              <span className="text-[#2D3748] dark:text-white">, você:</span>
            </h3>
            <ul className="space-y-6">
              {/* Time Waste */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">Perde tempo:</span>
                  <span className="text-[#6B46C1]/60"> Trabalha sem estrutura e desperdiça energia</span>
                </div>
              </li>
              {/* Distractions */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">Sofre com distrações:</span>
                  <span className="text-[#6B46C1]/60"> Interrupções constantes quebram seu fluxo</span>
                </div>
              </li>
              {/* Exhaustion */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">Esgota-se rapidamente:</span>
                  <span className="text-[#6B46C1]/60"> Trabalho sem pausas leva à exaustão</span>
                </div>
              </li>
              {/* Quality */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">Entrega trabalhos medianos:</span>
                  <span className="text-[#6B46C1]/60"> Falta de foco compromete a qualidade</span>
                </div>
              </li>
              {/* Procrastination */}
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#F56565] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <span className="text-[#F56565] font-medium">Procrastina mais:</span>
                  <span className="text-[#6B46C1]/60"> Sem estrutura, adia tarefas importantes</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <button className="mt-12 bg-[#F56565] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#E53E3E] transition-colors duration-300">
          Comprar agora
        </button>
      </div>
    </div>
  );
};

export default PomodoroSection; 