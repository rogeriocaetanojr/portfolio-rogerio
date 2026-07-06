import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselImages = [
  'https://via.placeholder.com/1280x720/222222/FFFFFF?text=Imagem+1',
  'https://via.placeholder.com/1280x720/333333/FFFFFF?text=Imagem+2',
  'https://via.placeholder.com/1280x720/444444/FFFFFF?text=Imagem+3',
  'https://via.placeholder.com/1280x720/555555/FFFFFF?text=Imagem+4',
  'https://via.placeholder.com/1280x720/666666/FFFFFF?text=Imagem+5',
];

export function ProjectCardMosaic({ nome = "Novo Projeto", descricao = "Descrição do projeto em breve." }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

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

      {/* Carrossel - Etapa 2: Estado e Setas */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        {/* Imagem Principal */}
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url("${carouselImages[currentIndex]}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </AnimatePresence>

        {/* Setas de Navegação */}
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            zIndex: 2
          }}
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            zIndex: 2
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
