export function About() {
  const textoStyle = {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.25rem',
    lineHeight: '1.7',
    color: '#D7E2EA',
    marginBottom: '16px',
    textAlign: 'justify',
  }

  return (
    <section id="sobre" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '60px 5vw 4rem', scrollMarginTop: '100px' }}>
      <div>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Sobre Mim</h2>
      </div>
      <div style={{ backgroundColor: '#0E0E0E', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '16px', padding: '40px', maxWidth: '1100px', width: '100%', margin: '0 auto', marginTop: '2rem' }}>
        <div>
          <p style={textoStyle}>
            Meu nome é Rogério Caetano, tenho 26 anos e sou de Curitiba, Paraná. Atualmente curso o sétimo período de Engenharia de Software e venho me especializando em desenvolvimento front-end e mobile, trabalhando principalmente com JavaScript, TypeScript e React Native.
          </p>
          <p style={textoStyle}>
            Minha paixão por tecnologia começou ainda muito novo, guiada pela curiosidade de entender como as coisas funcionam por trás das telas e foi isso que me trouxe até aqui. Hoje, além do código, tenho um interesse especial por UI/UX, buscando sempre unir uma boa experiência de uso a interfaces bem construídas.
          </p>
          <p style={textoStyle}>
            Já atuei como estagiário na UniSenai - PR, no desenvolvimento full stack de um portal educacional para estudantes, experiência que me ajudou a entender o processo de construção de um produto de ponta a ponta. Você pode conhecer mais sobre esse e outros projetos na aba Projetos.
          </p>
          <p style={{ ...textoStyle, marginBottom: 0 }}>
            Fora do código, gosto de jogar bola, correr e jogar no computador, hobbies que me ajudam a equilibrar a rotina e recarregar as energias para os próximos desafios.
          </p>
        </div>
      </div>
    </section>
  )
}
