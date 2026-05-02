function PDP({ product, onBack }) {
  const p = product || PRODUCTS[0];
  const isEnergy = p.line === 'Energy';
  const [qty, setQty] = React.useState(1);
  const [variant, setVariant] = React.useState('subscribe');

  return (
    <section style={{ background: 'var(--bm-paper)' }}>
      <div style={{ padding: '24px 80px', borderBottom: '1px solid var(--line)' }}>
        <span onClick={onBack} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', letterSpacing: '0.08em', cursor: 'pointer' }}>
          ← Shop / {p.line} / <span style={{ color: 'var(--bm-ink)' }}>{p.flavor}</span>
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 720 }}>
        <div style={{ position: 'relative', overflow: 'hidden', background: p.bg }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `url('../../assets/${isEnergy ? 'facets-navy' : 'facets-pink'}.png') center/cover`,
            opacity: isEnergy ? 1 : 0.55,
          }} />
          <img src={p.img} style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            height: '78%', filter: 'drop-shadow(12px 18px 0 rgba(10,10,10,0.25))',
          }} />
        </div>

        <div style={{ padding: '64px 64px' }}>
          <Eyebrow color={isEnergy ? 'var(--bm-blue-deep)' : 'var(--bm-pink-deep)'}>
            {p.line} · 12-Pack
          </Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 80, lineHeight: 0.9, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16,
          }}>{p.flavor}</h1>

          {!isEnergy && (
            <div style={{
              marginTop: 20, padding: '16px 20px',
              background: 'var(--bm-ink)', color: 'var(--bm-paper)',
              borderRadius: 8,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, lineHeight: 1, letterSpacing: '-0.01em' }}>
                Recover 144% faster.<sup style={{ fontSize: 14, color: 'var(--bm-pink)', verticalAlign: 'super', marginLeft: 4 }}>3</sup>
              </div>
              <div style={{ fontSize: 13, marginTop: 6, color: 'rgba(244,239,228,0.7)' }}>
                47% less fatigue.³ Clinically proven at 2.4g/day.
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
            <Capsule tone="ink">2.4g PeptiStrong®</Capsule>
            <Capsule tone="ink">Plant-Based</Capsule>
            <Capsule tone="ink">PeakO2®</Capsule>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.5, marginTop: 24, color: 'var(--fg-2)', maxWidth: 480 }}>
            {isEnergy
              ? 'Clean, dependable focus and smooth energy — without the crash. Green tea caffeine, Cognizin®, L-theanine.'
              : "World's first RTD peptide shake. Clinically proven plant-based peptides for strength, recovery, and endurance."}
          </p>

          <div style={{ display: 'flex', gap: 32, marginTop: 28 }}>
            <Stat value={isEnergy ? '125mg' : '20g'} label={isEnergy ? 'Caffeine' : 'Protein'} />
            <Stat value={isEnergy ? '5g' : '2.4g'} label={isEnergy ? 'Sugar' : 'PeptiStrong®'} />
            <Stat value="0" label="Artificial" />
          </div>

          <div style={{ marginTop: 32, padding: 22, border: '2px solid var(--bm-ink)', borderRadius: 8, background: '#fff' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input type="radio" name="v" checked={variant === 'subscribe'} onChange={() => setVariant('subscribe')} style={{ accentColor: 'var(--bm-pink)', marginTop: 4 }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700 }}>Subscribe & save 15%</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--bm-pink)' }}>$40.79</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 4 }}>Ships every 4 weeks. Cancel anytime.</div>
                </div>
              </label>
              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input type="radio" name="v" checked={variant === 'one'} onChange={() => setVariant('one')} style={{ accentColor: 'var(--bm-pink)', marginTop: 4 }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700 }}>One-time purchase</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>$47.99</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, marginTop: 20, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '2px solid var(--bm-ink)', borderRadius: 4, height: 48 }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 44, height: 48, background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer' }}>−</button>
              <span style={{ width: 36, textAlign: 'center', fontFamily: 'var(--font-mono)' }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width: 44, height: 48, background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer' }}>+</button>
            </div>
            <Button variant={isEnergy ? 'energy' : 'primary'} style={{ flex: 1 }}>Add to cart →</Button>
          </div>

          {!isEnergy && (
            <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.04em', lineHeight: 1.6 }}>
              ³ Kerr et al., Nutrients 2023;15(4):986. RCT, healthy males, 2.4g/day. These statements have not been evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

window.PDP = PDP;
