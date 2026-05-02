function Nav({ page, onNav }) {
  const linkStyle = {
    fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: 'var(--bm-ink)', textDecoration: 'none', cursor: 'pointer',
  };
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 30,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 72, padding: '0 56px',
      background: 'var(--bm-paper)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <span onClick={() => onNav('home')} style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1,
          textTransform: 'uppercase', cursor: 'pointer',
        }}>BOSS MODE</span>
        <a onClick={() => onNav('home')} style={linkStyle}>Energy</a>
        <a onClick={() => onNav('pdp')} style={linkStyle}>Myo-Peptide</a>
        <a style={linkStyle}>Science</a>
        <a style={linkStyle}>Story</a>
        <a style={linkStyle}>Find Us</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a style={linkStyle}>Account</a>
        <Button variant="primary" onClick={() => onNav('pdp')}>Shop →</Button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
