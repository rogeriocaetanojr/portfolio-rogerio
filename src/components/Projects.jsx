import { ProjectCard } from './ProjectCard';
import imgAlertas from '../assets/projects/eh-brewing/alertas.png';
import imgHistorico from '../assets/projects/eh-brewing/historico.png';
import imgLogin from '../assets/projects/eh-brewing/login.png';
import imgNovoFermentador from '../assets/projects/eh-brewing/novofermentador.png';
import imgPlanta from '../assets/projects/eh-brewing/planta.png';

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
          nome="Novo Projeto"
          descricao="Descrição do projeto em breve."
          imagens={[]}
        />
      </div>
    </section>
  )
}
