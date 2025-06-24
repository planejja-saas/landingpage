import { useState } from 'react';

export default function Hero() {
  const font = `'Inter', sans-serif`;
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    section: {
      fontFamily: font,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 64px)',
      padding: '32px 24px',
      backgroundColor: '#FFFCF8',
      boxSizing: 'border-box',
    },
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '1280px',
      height: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)', // Sombra forte ao redor do card
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.65)', // Imagem mais escura
      zIndex: 1,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '40px',
      right: '40px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      color: '#ffffff',
    },
    title: {
      fontSize: '38px',
      fontWeight: 700,
      marginBottom: '16px',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: 400,
      marginBottom: '24px',
    },
    button: {
      backgroundColor: '#FA8F24',
      color: '#1C140D',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 600,
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <img src="/heroSection.webp" alt="Marcenaria" style={styles.image} />
        <div style={styles.overlay} />
        <div style={styles.content}>
          <h1 style={styles.title}>
            Automatize orçamentos com inteligência para sua marcenaria
          </h1>
          <p style={styles.subtitle}>
            Gere orçamentos rápidos, bonitos e precisos para seus móveis planejados. Impressione seus clientes e feche mais vendas.
          </p>
          <button
            style={styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Começar agora
          </button>
        </div>
      </div>
    </section>
  );
}
