import { ProjectCardMobile } from './ProjectCardMobile';
import { ProjectCardWeb } from './ProjectCardWeb';
import imgAlertas from '../assets/projects/eh-brewing/alertas.png';
import imgHistorico from '../assets/projects/eh-brewing/historico.png';
import imgLogin from '../assets/projects/eh-brewing/login.png';
import imgNovoFermentador from '../assets/projects/eh-brewing/novofermentador.png';
import imgPlanta from '../assets/projects/eh-brewing/planta.png';

import imgSenaiLogin from '../assets/projects/portal-senai/login.png';
import imgSenaiFeed from '../assets/projects/portal-senai/feed.png';
import imgSenaiNovaComunidade from '../assets/projects/portal-senai/novacomunidade.png';
import imgSenaiComunidade1 from '../assets/projects/portal-senai/comunidade1.png';
import imgSenaiPerfil from '../assets/projects/portal-senai/perfil.png';

import imgTecnoChatbot from '../assets/projects/tecnotooling/chatbot.jpeg';
import imgTecnoLogin from '../assets/projects/tecnotooling/login.jpeg';
import imgTecnoPerfil from '../assets/projects/tecnotooling/perfil.jpeg';
import imgTecnoUpload from '../assets/projects/tecnotooling/upload.jpeg';

import imgPizzaHome from '../assets/projects/pizzaria/home.png';
import imgPizzaSobre from '../assets/projects/pizzaria/sobre.png';
import imgPizzaCardapio from '../assets/projects/pizzaria/cardapio.png';
import imgPizzaCarrinho from '../assets/projects/pizzaria/carrinho.png';

export function Projects() {
  return (
    <section id="projetos" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px 5vw 20vh', scrollMarginTop: '100px' }}>
      <div>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Projetos</h2>
      </div>
      <div style={{ width: '100%', marginTop: '1rem', position: 'sticky', top: '100px', zIndex: 1 }}>
        <ProjectCardMobile
          numero="01"
          nome="EH BREWING CO"
          descricao="Sistema de monitoramento e controle de temperatura para cervejaria artesanal."
          detalhes={`Aplicativo móvel desenvolvido em parceria com a cervejaria EH Brewing para monitoramento e controle em tempo real do processo de fermentação. Construído com React Native (Expo) e TypeScript, o app se conecta ao CLP da planta, permitindo que o cervejeiro acompanhe a temperatura de cada fermentador.\n\nO sistema oferece ajuste de setpoint manual ou via perfil programado com rampas/patamares automáticos, além de disparar alertas inteligentes sempre que uma variável sai da faixa ideal.\n\nConta ainda com histórico completo de ações, cadastro de novos fermentadores e suporte a tema claro/escuro, entregando controle ágil e confiável direto na palma da mão.`}
          imagens={[imgLogin, imgPlanta, imgNovoFermentador, imgAlertas, imgHistorico]}
        />
      </div>
      <div style={{ width: '100%', marginTop: '1rem', position: 'sticky', top: '100px', zIndex: 2 }}>
        <ProjectCardMobile
          numero="02"
          nome="TECNOTOOLING"
          descricao="Aplicativo inovador com chatbot para consultas rápidas da empresa"
          detalhes={`Solução desenvolvida em conjunto a empresa parceira para permitir consultas rápidas a documentos técnicos da Tecnotooling.\n\nAs dúvidas dos usúarios (funcionários da empresa) são enviadas pelo aplicativo móvel desenvolvido em React Native, indo para a API em Node.js com LangChain, onde é feito o processamento dos arquivos, gerando embeddings via OpenAI e armazenando tudo no ChromaDB e SQLite.\n\nAo receber uma pergunta, o sistema utiliza RAG para buscar os trechos mais relevantes e gerar respostas precisas com apoio da IA, retornando tudo ao aplicativo de forma ágil e confiável.`}
          imagens={[
            imgTecnoLogin,
            imgTecnoChatbot,
            imgTecnoUpload,
            imgTecnoPerfil
          ]}
        />
      </div>
      <div style={{ width: '100%', marginTop: '1rem', position: 'sticky', top: '100px', zIndex: 3 }}>
        <ProjectCardWeb
          numero="03"
          nome="COMUNIDADE DE ESTUDANTES SENAI"
          descricao="Plataforma educacional para estudantes de Engenharia de Software do UniSenai"
          detalhes={`Desenvolvimento full-stack de uma plataforma educacional modular baseada em arquitetura de microsserviços independentes e plug-ins. No back-end, atuou na criação e implementação de APIs RESTful utilizando NestJS e TypeScript, na estruturação de sistemas seguros de autenticação via JWT, na modelagem de banco de dados relacional com Prisma ORM e na integração de comunicação assíncrona entre os microsserviços através do RabbitMQ.\n\nVisando a resiliência do sistema, aplicou padrões como Dead Letter Queues, além de realizar a containerização com Docker Compose e a automação de pipelines de integração contínua (CI) via GitHub Actions.\n\nNo front-end, desenvolveu interfaces dinâmicas, reativas e com gerenciamento de estado otimizado utilizando LitElement, sendo responsável pela criação de um Design System consistente com suporte nativo à alternância entre os modos claro e escuro. Implementou componentes visuais padronizados para cards interativos, barras laterais e feeds de comunidades, garantindo a simetria do layout através de CSS moderno, além de estruturar rotas de navegação fluidas e fluxos de usabilidade sem gargalos para o usuário final.`}
          imagens={[
            imgSenaiLogin,
            imgSenaiFeed,
            imgSenaiNovaComunidade,
            imgSenaiComunidade1,
            imgSenaiPerfil
          ]}
        />
      </div>
      <div style={{ width: '100%', marginTop: '1rem', position: 'sticky', top: '100px', zIndex: 4 }}>
        <ProjectCardWeb
          numero="04"
          nome="PIZZARIA"
          descricao="Projeto de estudo com o objetivo de simular o site de uma pizzaria fictícia."
          detalhes={`Projeto fictício desenvolvido com fins de estudo e prática, simulando o site de uma pizzaria com fluxo completo de cardápio e carrinho de compras.\n\nConstruído com React 19 e Vite, utilizando TailwindCSS para toda a estilização, com auxílio de clsx e tailwind-merge para composição e merge inteligente de classes CSS, garantindo um código limpo e escalável.`}
          imagens={[
            imgPizzaHome,
            imgPizzaSobre,
            imgPizzaCardapio,
            imgPizzaCarrinho
          ]}
        />
      </div>
    </section>
  )
}
