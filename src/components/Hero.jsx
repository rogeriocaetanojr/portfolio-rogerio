import { useState } from 'react'
import caricatura from '../assets/caricatura.png'

export function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Sensibilidade equilibrada (divisor 2)
    const x = (e.clientX - centerX) / 2
    const y = (e.clientY - centerY) / 2

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center', scrollMarginTop: '100px', padding: '0.8rem 5vw 0' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h1 className="titulo-gradiente" style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-0.04em', flexShrink: 0 }}>
          OI, EU SOU O ROGÉRIO
        </h1>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ width: '100%', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <div className="animacao-flutuacao" style={{ width: '100%', maxWidth: '450px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={caricatura}
              alt="Caricatura de Rogério Caetano"
              style={{
                width: '100%',
                objectFit: 'contain',
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                transition: 'transform 0.15s ease-out',
                willChange: 'transform'
              }}
            />
          </div>
        </div>
      </div>
      <p className="hero-subtitle" style={{
        position: 'absolute',
        bottom: '20vh',
        left: '5vw',
        textAlign: 'left',
        maxWidth: '350px',
        color: '#9BA8B5',
        fontSize: '1.15rem',
        lineHeight: '1.6',
        margin: 0,
        zIndex: 10
      }}>
        Desenvolvedor front-end e mobile, cursando Engenharia de Software.
      </p>
    </section>
  )
}
