# Elly Pack - Site de Vendas

![Next.js](https://img.shields.io/badge/Next.js-13-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)

Um site moderno desenvolvido com Next.js para venda de packs de edição de vídeo e cursos.

## 🚀 Características

- ✨ Design moderno e responsivo
- 🌓 Modo claro/escuro
- 🎥 Player de vídeo integrado
- 💳 Integração com plataforma de pagamento
- 🎨 UI/UX otimizada para conversão
- 📱 Totalmente responsivo

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

## 🚀 Começando

Primeiro, clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd elly-site

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página atualiza automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para automaticamente otimizar e carregar [Geist](https://vercel.com/font), uma nova família de fontes para Vercel.

## 📁 Estrutura do Projeto

```
src/
├── app/              # Rotas e layouts da aplicação
├── components/       # Componentes React reutilizáveis
│   ├── ui/          # Componentes de UI básicos
│   └── ...          # Outros componentes
├── lib/             # Utilitários e configurações
└── ...
```

## 🔧 Configuração

O projeto utiliza várias configurações personalizadas:

- **TailwindCSS**: Configurado para modo escuro e temas personalizados
- **Next.js**: Configurado para exportação estática e otimização de imagens
- **ESLint**: Regras personalizadas para manter a qualidade do código

## 📦 Deploy

O projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions. Cada push para a branch `main` aciona o workflow de deploy.

Para fazer deploy manualmente:

```bash
npm run build
```

A maneira mais fácil de fazer deploy do seu app Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## 📚 Saiba Mais

Para aprender mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre as características e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.

Você pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js/) - sua opinião e contribuições são bem-vindas!

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia o guia de contribuição primeiro.

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

- **Mirai** - [GitHub](https://github.com/MiraiDevv)

---

Feito com ❤️ por Mirai
