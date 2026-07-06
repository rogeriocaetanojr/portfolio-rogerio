import { ProjectCard } from './ProjectCard';
import { ProjectCardMosaic } from './ProjectCardMosaic';
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

export function Projects() {
  return (
    <section id="projetos" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '60px 5vw 4rem', scrollMarginTop: '100px' }}>
      <div>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Projetos</h2>
      </div>
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <ProjectCard
          nome="EH BREWING CO"
          descricao="Sistema de monitoramento e controle de temperatura para cervejaria artesanal."
          imagens={[imgLogin, imgPlanta, imgNovoFermentador, imgAlertas, imgHistorico]}
        />
      </div>
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <ProjectCard
          nome="TECNOTOOLING"
          descricao="Aplicativo inovador com chatbot para consultas rápidas da empresa"
          imagens={[
            imgTecnoLogin,
            imgTecnoChatbot,
            imgTecnoUpload,
            imgTecnoPerfil
          ]}
        />
      </div>
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <ProjectCardMosaic
          nome="COMUNIDADE DE ESTUDANTES SENAI"
          descricao="Plataforma educacional para estudantes de Engenharia de Software do UniSenai"
          imagens={[
            imgSenaiLogin,
            imgSenaiFeed,
            imgSenaiNovaComunidade,
            imgSenaiComunidade1,
            imgSenaiPerfil
          ]}
        />
      </div>
    </section>
  )
}
