export function ProjectCard({ nome, descricao, imagens }) {
  return (
    <div>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
      <p style={{ fontSize: '1rem', color: '#B0B0B0', marginTop: '8px' }}>
        {descricao}
      </p>
      <div style={{ marginTop: '16px' }}>
        <p>Imagens:</p>
        <ul>
          {imagens && imagens.map((img, index) => (
            <li key={index}>{img}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
