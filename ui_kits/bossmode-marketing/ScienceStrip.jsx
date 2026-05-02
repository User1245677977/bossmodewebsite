function ScienceStrip() {
  const pillars = [
    { num: '144%', label: 'Faster recovery', sub: 'Increased muscle recovery rate.', ref: '3' },
    { num: '47%', label: 'Less fatigue', sub: 'Reduced muscular fatigue post-exercise.', ref: '3' },
    { num: '17%', label: 'More strength', sub: 'Greater strength gains than training alone.', ref: '4' },
    { num: '21.6%', label: 'More endurance', sub: 'Improvement in muscular endurance.', ref: '4' },
  ];
  return (
    <section style={{ background: 'var(--bm-paper-2)', padding: '96px 80px' }}>
      <Eyebrow color="var(--bm-pink-deep)">Clinically proven · 2.4g PeptiStrong®</Eyebrow>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.02em',
        textTransform: 'uppercase', marginTop: 16, maxWidth: 800,
      }}>The numbers<br/>don't lie.</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 48 }}>
        {pillars.map(p => (
          <div key={p.label} style={{
            background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8,
            padding: 28, boxShadow: '6px 6px 0 0 var(--bm-ink)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 64, lineHeight: 0.9, letterSpacing: '-0.03em',
              color: 'var(--bm-pink)',
            }}>{p.num}<sup style={{ fontSize: 18, color: 'var(--bm-ink)', verticalAlign: 'super', marginLeft: 4 }}>{p.ref}</sup></div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 22, lineHeight: 1.1, textTransform: 'uppercase',
              marginTop: 10, letterSpacing: '-0.01em',
            }}>{p.label}</div>
            <p style={{ fontSize: 14, lineHeight: 1.5, marginTop: 8, color: 'var(--fg-2)' }}>{p.sub}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', lineHeight: 1.7 }}>
        ³ Kerr et al., <em>Nutrients</em> 2023;15(4):986. RCT, healthy males, 2.4g/day. &nbsp;&nbsp; ⁴ RCT manuscript submitted; resistance training population, 2.4g/day.<br/>
        These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
      </div>
    </section>
  );
}

window.ScienceStrip = ScienceStrip;
