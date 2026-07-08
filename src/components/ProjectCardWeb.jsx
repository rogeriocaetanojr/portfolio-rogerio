import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const carouselImages = [
  'https://via.placeholder.com/1280x720/222222/FFFFFF?text=Imagem+1',
  'https://via.placeholder.com/1280x720/333333/FFFFFF?text=Imagem+2',
  'https://via.placeholder.com/1280x720/444444/FFFFFF?text=Imagem+3',
  'https://via.placeholder.com/1280x720/555555/FFFFFF?text=Imagem+4',
  'https://via.placeholder.com/1280x720/666666/FFFFFF?text=Imagem+5',
];

const ChevronLeft = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export function ProjectCardWeb({ numero, nome = "Novo Projeto", descricao = "Descrição do projeto em breve.", detalhes, imagens = carouselImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (!isInView && !isExpanded) {
      setCurrentIndex(0);
      setDirection(1);
    }
  }, [isInView, isExpanded]);

  useEffect(() => {
    if (isHovered || !isInView || isExpanded) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, isInView, imagens.length, isExpanded]);

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
    <div ref={ref} className="project-card-container" style={{
      backgroundColor: '#0E0E0E',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      borderRadius: '16px',
      padding: '32px',
      maxWidth: '1100px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Cabeçalho */}
      <div className="card-web-header" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '24px', height: '110px' }}>
        {numero && (
          <div className="card-web-number" style={{
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
          <h3 className="card-web-title" style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
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

      {/* Carrossel - Etapa 2: Estado e Setas */}
      <div
        className="card-web-carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          width: '100%',
          marginTop: '24px'
        }}
      >
        <div className="card-web-carousel" style={{
          position: 'relative',
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          aspectRatio: '16/9',
          backgroundColor: '#1A1A1A',
          borderRadius: '12px',
        }}>
          {/* Container interno para as imagens com overflow hidden */}
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '12px', position: 'relative' }}>
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
        </div>

        {/* Detalhes Deslizantes - Agora ocupando 100% da largura do card */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="card-web-sheet"
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
                borderBottomLeftRadius: '16px',
                borderBottomRightRadius: '16px',
                zIndex: 20,
                padding: '24px 32px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
                overflowY: 'auto',
                maxHeight: '100%'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', zIndex: 10, flexShrink: 0 }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#FFF', margin: 0 }}>Detalhes do Projeto</h4>
                <span onClick={() => setIsExpanded(false)} style={{ color: '#BBCCD7', cursor: 'pointer', fontWeight: '500', fontSize: '0.95rem' }}>Ver menos</span>
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

        {/* Setas de Navegação */}
        <button
          onClick={prevImage}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
          className="card-web-btn-prev"
          style={{ ...buttonStyle, left: '-16px' }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
          className="card-web-btn-next"
          style={{ ...buttonStyle, right: '-16px' }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
