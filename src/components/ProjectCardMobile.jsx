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

export function ProjectCardMobile({ numero, nome, descricao, detalhes, imagens }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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
    if (!imagens || imagens.length <= 3) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [imagens, currentIndex]);

  const getVisibleImages = () => {
    if (!imagens || imagens.length === 0) return [];
    if (imagens.length < 4) return imagens;
    
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
    <div style={{ backgroundColor: '#0E0E0E', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '16px', padding: '32px', maxWidth: '1100px', width: '100%', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '24px', height: '110px' }}>
        {numero && (
          <div style={{ 
            fontSize: '4.5rem', 
            fontWeight: '900', 
            color: '#E2E8F0', 
            lineHeight: '1', 
            letterSpacing: '-2px',
            flexShrink: 0
          }}>
            {numero}
          </div>
        )}
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
          <p style={{ fontSize: '1rem', color: '#B0B0B0', marginTop: '8px' }}>
            {descricao}
            {' '}
            <span 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                marginLeft: '8px',
                color: '#BBCCD7',
                cursor: 'pointer',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'text-decoration 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              {isExpanded ? 'Ver menos' : 'Ver mais'}
            </span>
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: '24px', position: 'relative' }}>
        {imagens && imagens.length > 3 && (
          <button 
            onClick={handlePrev}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
            style={{ ...buttonStyle, left: '-16px' }}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', overflow: 'hidden', position: 'relative', width: '100%' }}>
            {(!imagens || imagens.length === 0) ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div 
                key={`placeholder-${i}`}
                style={{
                  width: '180px',
                  height: '320px',
                  borderRadius: '16px',
                  backgroundColor: '#1a1a1a',
                  flexShrink: 0
                }}
              />
            ))
          ) : (
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
          )}
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: 'auto',
                  minHeight: '80%',
                  backgroundColor: 'rgba(14, 14, 14, 0.85)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  zIndex: 20,
                  padding: '24px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'sticky', top: 0, zIndex: 10 }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#FFF', margin: 0 }}>Detalhes do Projeto</h4>
                </div>
                <div style={{ fontSize: '1rem', color: '#D7E2EA', lineHeight: '1.6' }}>
                  {detalhes ? detalhes.split('\n\n').map((paragraph, index, arr) => (
                    <p key={index} style={{ marginBottom: index === arr.length - 1 ? 0 : '16px' }}>
                      {paragraph}
                    </p>
                  )) : null}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {imagens && imagens.length > 3 && (
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
