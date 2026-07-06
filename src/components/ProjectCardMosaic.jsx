import { motion } from 'framer-motion';

const carouselImages = [
  'https://via.placeholder.com/1280x720/222222/FFFFFF?text=Imagem+1',
  'https://via.placeholder.com/1280x720/333333/FFFFFF?text=Imagem+2',
  'https://via.placeholder.com/1280x720/444444/FFFFFF?text=Imagem+3',
  'https://via.placeholder.com/1280x720/555555/FFFFFF?text=Imagem+4',
  'https://via.placeholder.com/1280x720/666666/FFFFFF?text=Imagem+5',
];

export function ProjectCardMosaic({ nome = "Novo Projeto", descricao = "Descrição do projeto em breve." }) {
  return (
    <div style={{ 
      backgroundColor: '#0E0E0E', 
      border: '1px solid rgba(255, 255, 255, 0.18)', 
      borderRadius: '16px', 
      padding: '32px', 
      maxWidth: '1100px', 
      width: '100%', 
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '600px' 
    }}>
      {/* Cabeçalho */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
        <p style={{ fontSize: '1rem', color: '#B0B0B0', marginTop: '8px' }}>
          {descricao}
        </p>
      </div>

      {/* Carrossel - Etapa 1: Estrutura Base */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        {/* Imagem Principal */}
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url("${carouselImages[0]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      </div>
    </div>
  );
}
