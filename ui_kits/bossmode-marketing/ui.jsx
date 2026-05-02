// Shared atoms for the Boss Mode marketing UI kit.

const Eyebrow = ({ children, color, style }) => (
  <span style={{
    fontFamily: 'var(--font-text)',
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    color: color || 'var(--fg-2)',
    ...style,
  }}>{children}</span>
);

const Button = ({ variant = 'primary', children, onClick, style }) => {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, height: 48, padding: '0 22px', borderRadius: 4,
    fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    cursor: 'pointer', border: '2px solid var(--bm-ink)',
    transition: 'transform 120ms var(--ease-out), box-shadow 120ms var(--ease-out)',
    textDecoration: 'none',
  };
  const variants = {
    primary: { background: 'var(--bm-pink)', color: '#fff', boxShadow: '4px 4px 0 0 var(--bm-ink)' },
    energy:  { background: 'var(--bm-blue)', color: 'var(--bm-ink)', boxShadow: '4px 4px 0 0 var(--bm-ink)' },
    ghost:   { background: 'transparent', color: 'var(--bm-ink)' },
    inverse: { background: 'var(--bm-paper)', color: 'var(--bm-ink)', borderColor: 'var(--bm-paper)', boxShadow: '4px 4px 0 0 var(--bm-pink)' },
  };
  return (
    <button onClick={onClick} className="bm-btn" style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
};

const Capsule = ({ tone = 'pink', children, style }) => {
  const tones = {
    pink:    { background: 'var(--bm-pink)', color: '#fff' },
    blue:    { background: 'var(--bm-blue)', color: 'var(--bm-ink)' },
    ink:     { background: 'var(--bm-ink)', color: 'var(--bm-paper)' },
    soft:    { background: 'var(--bm-pink-bg)', color: 'var(--bm-pink-deep)' },
    outline: { background: 'transparent', color: 'var(--bm-ink)', boxShadow: 'inset 0 0 0 1.5px var(--bm-ink)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '8px 16px', borderRadius: 999,
      fontFamily: 'var(--font-text)', fontWeight: 700,
      fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
      ...tones[tone], ...style,
    }}>{children}</span>
  );
};

const Stat = ({ value, label, color = 'var(--bm-pink)' }) => (
  <div>
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 72, lineHeight: 0.9, color, letterSpacing: '-0.02em' }}>{value}</div>
    <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 6, color: 'var(--fg-2)' }}>{label}</div>
  </div>
);

const Slash = () => (
  <span style={{ color: 'var(--bm-pink)', fontFamily: 'var(--font-mono)', margin: '0 0.4em' }}>//</span>
);

Object.assign(window, { Eyebrow, Button, Capsule, Stat, Slash });
