import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselImages = [
  'https://via.placeholder.com/1280x720/222222/FFFFFF?text=Imagem+1',
  'https://via.placeholder.com/1280x720/333333/FFFFFF?text=Imagem+2',
  'https://via.placeholder.com/1280x720/444444/FFFFFF?text=Imagem+3',
  'https://via.placeholder.com/1280x720/555555/FFFFFF?text=Imagem+4',
  'https://via.placeholder.com/1280x720/666666/FFFFFF?text=Imagem+5',
];

const ChevronLeft = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRight = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export function ProjectCardMosaic({ nome = "Novo Projeto", descricao = "Descrição do projeto em breve.", imagens = carouselImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, imagens.length]);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % imagens.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#FFF',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'background-color 0.2s',
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
      flexDirection: 'column'
    }}>
      {/* Cabeçalho */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
        <p style={{ fontSize: '1rem', color: '#B0B0B0', marginTop: '8px' }}>
          {descricao}
        </p>
      </div>

      {/* Carrossel - Etapa 2: Estado e Setas */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          width: '100%',
          marginTop: '24px'
        }}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          aspectRatio: '16/9',
          backgroundColor: '#1A1A1A',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          {/* Imagem Principal */}
          <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={(d) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.8 })}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={(d) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.8 })}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url("${imagens[currentIndex]}")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
          </AnimatePresence>
        </div>

        {/* Setas de Navegação */}
        <button
          onClick={prevImage}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
          style={{ ...buttonStyle, left: '-16px' }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
          style={{ ...buttonStyle, right: '-16px' }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots de Navegação (Etapa 4) */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '16px'
      }}>
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentIndex ? '#FFFFFF' : '#444444',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            aria-label={`Ir para a imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
