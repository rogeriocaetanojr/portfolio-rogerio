import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export function ProjectCard({ nome, descricao, imagens }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (imagens) {
      setCurrentIndex((prev) => (prev + 1) % imagens.length);
    }
  };

  const handlePrev = () => {
    if (imagens) {
      setCurrentIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
    }
  };

  useEffect(() => {
    if (!imagens || imagens.length <= 4) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [imagens, currentIndex]);

  const getVisibleImages = () => {
    if (!imagens || imagens.length === 0) return [];
    if (imagens.length <= 4) return imagens;
    
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(imagens[(currentIndex + i) % imagens.length]);
    }
    return visible;
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
    <div style={{ backgroundColor: '#0E0E0E', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '16px', padding: '32px', maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
      <p style={{ fontSize: '1rem', color: '#B0B0B0', marginTop: '8px' }}>
        {descricao}
      </p>
      
      <div style={{ marginTop: '24px', position: 'relative' }}>
        {imagens && imagens.length > 4 && (
          <button 
            onClick={handlePrev}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
            style={{ ...buttonStyle, left: '-16px' }}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', overflow: 'hidden' }}>
          <AnimatePresence mode="popLayout">
            {getVisibleImages().map((img) => (
              <motion.img 
                layout
                key={img} 
                src={img} 
                alt={`${nome} screenshot`} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ 
                  width: 'auto', 
                  height: '320px',
                  borderRadius: '16px',
                  flexShrink: 0
                }} 
              />
            ))}
          </AnimatePresence>
        </div>

        {imagens && imagens.length > 4 && (
          <button 
            onClick={handleNext}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
            style={{ ...buttonStyle, right: '-16px' }}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
