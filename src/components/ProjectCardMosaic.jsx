import { motion } from 'framer-motion';

export function ProjectCardMosaic({ nome = "Novo Projeto", descricao = "Descrição do projeto em breve." }) {
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

      {/* Grade de Imagens (Placeholders) */}
      <div className="mosaic-grid">
        <div className="mosaic-cell"></div>
        <div className="mosaic-cell mosaic-cell-large"></div>
        <div className="mosaic-cell"></div>
        <div className="mosaic-cell"></div>
        <div className="mosaic-cell"></div>
      </div>
    </div>
  );
}
