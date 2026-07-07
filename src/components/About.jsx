export function About() {
  const textoStyle = {
    fontSize: '1.3rem',
    lineHeight: '1.8',
    color: '#D7E2EA',
    marginBottom: '20px',
    textAlign: 'left',
  }

  return (
    <section id="sobre" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px 5vw 4rem', scrollMarginTop: '100px' }}>
      <div>
        <h2 className="about-title" style={{ fontSize: '2.5rem', textAlign: 'center' }}>Sobre Mim</h2>
      </div>
      <div className="about-card" style={{ backgroundColor: '#0E0E0E', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '16px', padding: '32px 40px', maxWidth: '1100px', width: '100%', margin: '0 auto', marginTop: '1rem' }}>
        <div>
          <p style={textoStyle}>
            Meu nome é Rogério Caetano, tenho 26 anos e sou de Curitiba, Paraná. Atualmente curso o sétimo período de Engenharia de Software e venho me especializando em desenvolvimento front-end e mobile, trabalhando principalmente com JavaScript, TypeScript, React e React Native.
          </p>
          <p style={textoStyle}>
            Minha paixão por tecnologia começou ainda muito novo, guiado pela curiosidade de entender como as coisas funcionam por trás das telas e foi isso que me trouxe até aqui. Hoje, além do código, tenho um interesse especial por UI/UX, buscando sempre unir uma boa experiência de uso a interfaces bem construídas.
          </p>
          <p style={textoStyle}>
            Já atuei como estagiário na UniSenai-PR, no desenvolvimento full stack de um portal educacional para estudantes, experiência que me ajudou a entender o processo de construção de um produto de ponta a ponta. Você pode conhecer mais sobre esse e outros projetos na aba Projetos.
          </p>
          <p style={{ ...textoStyle, marginBottom: 0 }}>
            Fora do código, gosto de jogar bola, correr e jogar no computador, hobbies que me ajudam a equilibrar a rotina e recarregar as energias para os próximos desafios.
          </p>
        </div>
      </div>
    </section>
  )
}
