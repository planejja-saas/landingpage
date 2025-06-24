import { useState, useEffect } from 'react';

export default function Beneficios() {
  const font = `'Inter', sans-serif`;
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    section: {
      fontFamily: font,
      backgroundColor: '#FFFCF8',
      padding: '64px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: '16px',
      color: '#1C140D',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '48px',
      textAlign: 'center',
      maxWidth: '720px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '32px',
      width: '100%',
      maxWidth: '960px',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '32px 24px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      gap: '16px',
    },
    iconWrapper: {
      width: '56px',
      height: '56px',
      backgroundColor: '#FA8F24',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: '28px',
      height: '28px',
      color: '#fff',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '4px',
      color: '#1C140D',
    },
    cardText: {
      fontSize: '15px',
      color: '#666',
    },
    button: {
      marginTop: '48px',
      backgroundColor: '#FA8F24',
      color: '#1C140D',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 600,
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      transform: hovered ? 'scale(1.05)' : 'scale(1)',
    },
  };

  const benefits = [
    {
      title: 'Orçamentos instantâneos',
      text: 'Gere orçamentos em segundos e ganhe agilidade no atendimento.',
      icon: (
        <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Apresentações profissionais',
      text: 'Encante seus clientes com propostas bem organizadas e visuais.',
      icon: (
        <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 118 0v2M7 10h10M7 6h10M5 20h14" />
        </svg>
      ),
    },
    {
      title: 'Mais vendas com menos esforço',
      text: 'Foque no relacionamento, deixe o sistema cuidar dos detalhes.',
      icon: (
        <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5 0 2.5-1 2.5-2.5S13.5 3 12 3 9.5 4 9.5 5.5 10.5 8 12 8zM12 14v7m-4-7h8a4 4 0 00-8 0z" />
        </svg>
      ),
    },
    {
      title: 'Acesse de qualquer lugar',
      text: 'Use no celular, tablet ou computador com facilidade.',
      icon: (
        <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5zM5.25 4.5h13.5v15H5.25z" />
        </svg>
      ),
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Por que usar o Planejja?</h2>
      <p style={styles.subtitle}>
        Uma plataforma simples que transforma sua marcenaria em um negócio mais profissional, ágil e rentável.
      </p>

      <div style={styles.grid}>
        {benefits.map((b, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconWrapper}>{b.icon}</div>
            <div>
              <h3 style={styles.cardTitle}>{b.title}</h3>
              <p style={styles.cardText}>{b.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        style={styles.button}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Quero experimentar agora
      </button>
    </section>
  );
}
