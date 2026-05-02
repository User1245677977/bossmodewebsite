function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: 760, overflow: 'hidden',
      background: 'var(--bm-paper)',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 180,
        background: "url('../../assets/facets-purple-frame.png') top center / cover no-repeat",
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
        background: "url('../../assets/facets-purple-frame.png') bottom center / cover no-repeat",
        transform: 'scaleY(-1)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        padding: '140px 80px',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center',
      }}>
        <div>
          <Eyebrow color="var(--bm-pink-deep)">Clinically proven · 2.4g PeptiStrong®</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 152, lineHeight: 0.86, letterSpacing: '-0.03em',
            textTransform: 'uppercase', margin: '20px 0 0',
          }}>Recover<br/>144% faster.<sup style={{ fontSize: 28, color: 'var(--bm-pink)', fontWeight: 700, verticalAlign: 'super', marginLeft: 8 }}>3</sup></h1>
          <Capsule tone="pink" style={{ marginTop: 20, fontSize: 14, padding: '10px 20px' }}>
            Sip. Dominate. Repeat.
          </Capsule>
          <p style={{ fontSize: 20, lineHeight: 1.4, marginTop: 28, maxWidth: 540, color: 'var(--fg-2)' }}>
            The world's first RTD peptide shake. Clinically proven plant-based peptides — 47% less fatigue,<sup>3</sup> 17% more strength.<sup>4</sup>
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
            <Button variant="primary">Shop Myo-Peptide →</Button>
            <Button variant="ghost">See the science</Button>
          </div>
          <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>
            ³ Kerr et al., Nutrients 2023 · ⁴ RCT manuscript submitted
          </div>
        </div>

        <div style={{ position: 'relative', height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
          <img src="../../assets/can-myo-strawberry.png" style={{ height: 520, transform: 'rotate(-6deg)', filter: 'drop-shadow(8px 12px 0 rgba(10,10,10,0.18))' }} />
          <img src="../../assets/can-energy-apex.png" style={{ height: 560, transform: 'translateY(20px) rotate(4deg)', filter: 'drop-shadow(8px 12px 0 rgba(10,10,10,0.18))' }} />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
