function PillarStrip() {
  const pillars = [
    { n: '01', t: 'Clean\nEnergy', d: 'Green tea caffeine, Cognizin® citicoline, L-theanine. Smooth focus, zero crash.' },
    { n: '02', t: 'Peptide\nPerformance', d: '2.4g clinically dosed PeptiStrong® peptides. Strength, recovery, output.' },
    { n: '03', t: 'RTD\nConvenience', d: '12 fl oz. Shelf-stable. Built for the gym bag, the desk, the back of the fridge.' },
  ];
  return (
    <section style={{ background: 'var(--bm-paper)', padding: '120px 80px' }}>
      <Eyebrow color="var(--bm-pink-deep)">What we stand for</Eyebrow>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 88, lineHeight: 0.9, letterSpacing: '-0.02em',
        textTransform: 'uppercase', marginTop: 16, maxWidth: 900,
      }}>Three pillars.<br/>No compromises.</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, marginTop: 64 }}>
        {pillars.map(p => (
          <div key={p.n} style={{ borderTop: '4px solid var(--bm-ink)', paddingTop: 24 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--bm-pink)', letterSpacing: '0.04em' }}>{p.n}</div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 48, lineHeight: 0.95, textTransform: 'uppercase',
              marginTop: 12, letterSpacing: '-0.01em', whiteSpace: 'pre-line',
            }}>{p.t}</div>
            <p style={{ fontSize: 16, lineHeight: 1.5, marginTop: 16, color: 'var(--fg-2)' }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

window.PillarStrip = PillarStrip;
