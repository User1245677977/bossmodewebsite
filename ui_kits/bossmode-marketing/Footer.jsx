function Footer() {
  const cols = [
    { title: 'Shop', items: ['Myo-Peptide', 'Energy', 'Bundles', 'Subscribe & Save'] },
    { title: 'Learn', items: ['Science', 'Ingredients', 'Reviews', 'FAQ'] },
    { title: 'Company', items: ['Story', 'Press', 'Careers', 'Wholesale'] },
    { title: 'Connect', items: ['Instagram', 'TikTok', 'YouTube', 'Newsletter'] },
  ];
  return (
    <footer style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', padding: '96px 80px 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        background: "url('../../assets/facets-black.png') center/cover",
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 88, lineHeight: 0.86, letterSpacing: '-0.03em',
            textTransform: 'uppercase',
          }}>BOSS<br/>MODE</div>
          <Capsule tone="pink" style={{ marginTop: 16 }}>Sip. Dominate. Repeat.</Capsule>
        </div>
        {cols.map(c => (
          <div key={c.title}>
            <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.55)', marginBottom: 16 }}>{c.title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {c.items.map(i => (
                <li key={i}><a style={{ color: 'var(--bm-paper)', textDecoration: 'none', fontSize: 14 }}>{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1, marginTop: 80, paddingTop: 24, borderTop: '1px solid rgba(244,239,228,0.12)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(244,239,228,0.55)', letterSpacing: '0.08em' }}>
        <span>© 2026 BOSS MODE™. ALL RIGHTS RESERVED.</span>
        <span>Built for people who treat their body like it's worth investing in.</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
