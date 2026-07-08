import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

export function Contact() {
  return (
    <section id="contato" style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '60px 5vw 3rem', scrollMarginTop: '100px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 className="contact-title">Contato</h2>
          <p className="contact-subtitle" style={{ color: '#9BA8B5', fontSize: '1.15rem', marginTop: '0.5rem' }}>Me encontre em um dos canais abaixo.</p>
        </div>

        <div className="contact-links" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
          <a href="https://wa.me/41992522036" target="_blank" rel="noopener noreferrer" className="link-contato" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://linkedin.com/in/rogeriocaetanojr/" target="_blank" rel="noopener noreferrer" className="link-contato" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/rogeriocaetanojr" target="_blank" rel="noopener noreferrer" className="link-contato" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="mailto:rcaetanojunior@gmail.com" className="link-contato" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
