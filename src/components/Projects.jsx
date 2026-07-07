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
    <section id="projetos" className="projects-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px 5vw 20vh', scrollMarginTop: '100px' }}>
      <div>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Projetos</h2>
      </div>
      <div className="projects-card-wrapper" style={{ width: '100%', marginTop: '1rem', marginBottom: '30vh', position: 'sticky', top: '100px', zIndex: 1 }}>
        <ProjectCardMobile
          numero="01"
          nome="EH BREWING CO"
          descricao="Sistema de monitoramento e controle de temperatura para cervejaria artesanal."
          detalhes={`Aplicativo móvel desenvolvido em parceria com a cervejaria EH Brewing para monitoramento e controle em tempo real do processo de fermentação. Construído com React Native (Expo) e TypeScript, o app se conecta ao CLP da planta, permitindo que o cervejeiro acompanhe a temperatura de cada fermentador.\n\nO sistema oferece ajuste de setpoint manual ou via perfil programado com rampas/patamares automáticos, além de disparar alertas inteligentes sempre que uma variável sai da faixa ideal.\n\nConta ainda com histórico completo de ações, cadastro de novos fermentadores e suporte a tema claro/escuro, entregando controle ágil e confiável direto na palma da mão.`}
          imagens={[imgLogin, imgPlanta, imgNovoFermentador, imgAlertas, imgHistorico]}
        />
      </div>
      <div className="projects-card-wrapper" style={{ width: '100%', marginTop: '1rem', marginBottom: '30vh', position: 'sticky', top: '100px', zIndex: 2 }}>
        <ProjectCardMobile
          numero="02"
          nome="TECNOTOOLING"
          descricao="Aplicativo inovador com chatbot para consultas rápidas da empresa"
          detalhes={`Solução desenvolvida em conjunto a empresa parceira para permitir consultas rápidas a documentos técnicos da Tecnotooling.\n\nAs dúvidas dos usúarios (funcionários da empresa) são enviadas pelo aplicativo móvel desenvolvido em React Native, indo para a API em Node.js com LangChain, onde é feito o processamento dos arquivos, gerando embeddings via OpenAI e armazenando tudo no ChromaDB e SQLite.\n\nAo receber uma pergunta, o sistema utiliza RAG para buscar os trechos mais relevantes e gerar respostas precisas com apoio da IA, retornando tudo ao aplicativo de forma ágil e confiável.`}
          imagens={[
            imgTecnoLogin,
            imgTecnoChatbot,
            imgTecnoPerfil,
            imgTecnoUpload
          ]}
        />
      </div>
      <div className="projects-card-wrapper" style={{ width: '100%', marginTop: '1rem', marginBottom: '30vh', position: 'sticky', top: '100px', zIndex: 3 }}>
        <ProjectCardWeb
          numero="03"
          nome="COMUNIDADE DE ESTUDANTES SENAI"
          descricao="Plataforma educacional para estudantes de Engenharia de Software do UniSenai"
          detalhes={`Uma plataforma educacional modular, construída com arquitetura de microsserviços e sistema de plug-ins independentes. No back-end, as APIs foram desenvolvidas com NestJS e TypeScript, com autenticação segura via JWT e banco de dados modelado com Prisma ORM. A comunicação entre os microsserviços acontece de forma assíncrona através do RabbitMQ, com Dead Letter Queues garantindo resiliência mesmo em falhas.\n\nTodo o ambiente é containerizado com Docker Compose, e o processo de integração contínua é automatizado via GitHub Actions.\n\nNo front-end, as interfaces foram construídas com LitElement, priorizando reatividade e um gerenciamento de estado limpo. Um Design System próprio dá consistência visual ao projeto, com suporte nativo a modo claro e escuro, cards interativos, barras laterais e feeds de comunidade, tudo pensado para uma navegação fluida e sem atritos para o usuário final.`}
          imagens={[
            imgSenaiLogin,
            imgSenaiFeed,
            imgSenaiNovaComunidade,
            imgSenaiComunidade1,
            imgSenaiPerfil
          ]}
        />
      </div>
      <div className="projects-card-wrapper" style={{ width: '100%', marginTop: '1rem', marginBottom: '30vh', position: 'sticky', top: '100px', zIndex: 4 }}>
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
      {/* Espaçador: dá "peso" de scroll para o card 4 travar como os anteriores */}
      <div className="projects-spacer" style={{ width: '100%', height: '25vh' }} aria-hidden="true" />
    </section>
  )
}
