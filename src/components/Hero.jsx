import { useState } from 'react'
import caricatura from '../assets/caricatura.png'

export function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Sensibilidade máxima (divisor 1.5) e movimentos extremamentes livres
    const x = (e.clientX - centerX) / 1.5
    const y = (e.clientY - centerY) / 1.5
    
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <section id="inicio" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center', scrollMarginTop: '100px', padding: '0.8rem 5vw 0' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h1 className="titulo-gradiente" style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-0.04em', flexShrink: 0 }}>
          OI, EU SOU O ROGÉRIO
        </h1>
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ width: '100%', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <img 
            src={caricatura} 
            alt="Caricatura de Rogério Caetano" 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              objectFit: 'contain',
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
              transition: 'transform 0.1s ease-out',
              willChange: 'transform'
            }} 
          />
        </div>
      </div>
    </section>
  )
}
