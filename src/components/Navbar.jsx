import { useState, useEffect } from 'react';

export default function Navbar() {
  const font = `'Inter', sans-serif`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { id: 'produto', label: 'Produto' },
    { id: 'solucoes', label: 'Soluções' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'precos', label: 'Preços' },
  ];

  const styles = {
    navbar: {
      fontFamily: font,
      display: menuOpen && isMobile ? 'none' : 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '20px',
      gap: '12px',
      color: '#111827',
      fontFamily: font,
      cursor: 'pointer',
    },
    logoImage: {
      height: '20px',
      objectFit: 'contain',
    },
    navLinks: {
      display: 'flex',
      gap: '24px',
      fontSize: '16px',
      fontFamily: font,
    },
    link: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'color 0.2s',
      cursor: 'pointer',
    },
    actions: {
      display: 'flex',
      gap: '12px',
      fontFamily: font,
      alignItems: 'center',
    },
    login: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'transparent',
      border: '1px solid #FA8F24',
      color: '#374151',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '6px',
      transition: 'color 0.2s, background 0.2s',
    },
    signup: {
      backgroundColor: '#FA8F24',
      color: '#1C140D',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 600,
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    },
    icon: {
      width: '16px',
      height: '16px',
    },
    hamburger: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      cursor: 'pointer',
    },
    bar: {
      width: '20px',
      height: '2px',
      backgroundColor: '#333',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.3)',
      zIndex: 199,
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '70%',
      height: '100%',
      backgroundColor: '#ffffff',
      boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease-in-out',
      fontFamily: font,
      zIndex: 200,
    },
    closeBtn: {
      alignSelf: 'flex-end',
      fontSize: '32px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      lineHeight: '1',
    },
  };

  return (
    <>
      <header style={styles.navbar}>
        <div style={styles.logo}>
          <img src="/planejjapng.png" alt="Logo" style={styles.logoImage} />
        </div>

        {!isMobile && (
          <>
            <nav style={styles.navLinks}>
              {links.map((link) => (
                <a key={link.id} href={`#${link.id}`} style={styles.link}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div style={styles.actions}>
              <button style={styles.login}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={styles.icon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12H3m0 0l4-4m-4 4l4 4m13-8v8m0 0a2 2 0 002-2V6a2 2 0 00-2-2v8z"
                  />
                </svg>
                Entrar
              </button>

              <button style={styles.signup}>Cadastrar</button>
            </div>
          </>
        )}

        {isMobile && (
          <div style={styles.hamburger} onClick={() => setMenuOpen(true)}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
        )}
      </header>

      {menuOpen && isMobile && (
        <div style={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      {isMobile && (
        <aside style={styles.mobileMenu}>
          <button style={styles.closeBtn} onClick={() => setMenuOpen(false)}>
            ×
          </button>

          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{ ...styles.link, fontSize: '18px' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button
            style={{
              ...styles.login,
              width: '100%',
              justifyContent: 'center',
              marginTop: '16px',
            }}
          >
            Entrar
          </button>
          <button
            style={{
              ...styles.signup,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Cadastrar
          </button>
        </aside>
      )}
    </>
  );
}
