function HomeHero() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    try {
      const list = JSON.parse(localStorage.getItem('bm_waitlist') || '[]');
      list.push({ email, at: Date.now(), source: 'hero' });
      localStorage.setItem('bm_waitlist', JSON.stringify(list));
    } catch {}
    setSubmitted(true);
  };

  return (
    <section style={{ position: 'relative', minHeight: 760, overflow: 'hidden', background: 'var(--bm-paper)' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 180,
        background: "url('assets/facets-purple-frame.png') top center / cover no-repeat",
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 180,
        background: "url('assets/facets-purple-frame.png') bottom center / cover no-repeat",
        transform: 'scaleY(-1)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        padding: '120px 80px',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <Eyebrow color="var(--bm-pink-deep)">Pre-launch · 2.4g PeptiStrong®</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 144, lineHeight: 0.86, letterSpacing: '-0.03em',
            textTransform: 'uppercase', margin: '20px 0 0',
          }}>Recover<br/>144% faster.<sup style={{ fontSize: 26, color: 'var(--bm-pink)', fontWeight: 700, verticalAlign: 'super', marginLeft: 8 }}>3</sup></h1>
          <Capsule tone="pink" style={{ marginTop: 20, fontSize: 14, padding: '10px 20px' }}>
            Sip. Dominate. Repeat.™
          </Capsule>
          <p style={{ fontSize: 20, lineHeight: 1.4, marginTop: 24, maxWidth: 540, color: 'var(--fg-2)' }}>
            The world's first RTD peptide shake. Clinically proven plant-based peptides — 47% less fatigue,<sup>3</sup> 17% more strength.<sup>4</sup>
          </p>

          {/* Waitlist primary */}
          <div style={{ marginTop: 28, maxWidth: 540 }}>
            {submitted ? (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'var(--bm-ink)', color: 'var(--bm-paper)',
                padding: '16px 20px', borderRadius: 4,
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '0.02em', textTransform: 'uppercase' }}>✓ You're on the list.</span>
                <span style={{ color: 'rgba(244,239,228,0.7)', fontSize: 14 }}>First access when we ship.</span>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', gap: 0 }}>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Get notified when we ship"
                  style={{
                    flex: 1, height: 56, padding: '0 20px',
                    background: '#fff', color: 'var(--bm-ink)',
                    border: '2px solid var(--bm-ink)', borderRight: 'none',
                    borderRadius: '4px 0 0 4px',
                    fontFamily: 'var(--font-mono)', fontSize: 15, outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  height: 56, padding: '0 28px',
                  background: 'var(--bm-pink)', color: '#fff',
                  border: '2px solid var(--bm-ink)',
                  borderRadius: '0 4px 4px 0',
                  fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer',
                  boxShadow: '4px 4px 0 0 var(--bm-ink)',
                }}>Notify me →</button>
              </form>
            )}
            <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>
              ³ Kerr et al., Nutrients 2023 · ⁴ RCT manuscript submitted
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
          <img src="assets/cropped-can-myo-strawberry.png" style={{ maxHeight: 520, maxWidth: 280, width: 'auto', height: 'auto', objectFit: 'contain', transform: 'rotate(-6deg)', filter: 'drop-shadow(8px 12px 0 rgba(10,10,10,0.18))' }} />
          <img src="assets/cropped-can-energy-apex.png" style={{ maxHeight: 560, maxWidth: 300, width: 'auto', height: 'auto', objectFit: 'contain', transform: 'translateY(20px) rotate(4deg)', filter: 'drop-shadow(8px 12px 0 rgba(10,10,10,0.18))' }} />
        </div>
      </div>
    </section>
  );
}

function HomePillarStrip() {
  const pillars = [
    { n: '01', t: 'Clean\nEnergy', d: '140mg green tea caffeine, 500mg Cognizin®, 200mg CognatiQ®. Smooth focus, zero crash.' },
    { n: '02', t: 'Peptide\nPerformance', d: '20g protein + 2.4g clinical-dose PeptiStrong® peptides. Strength, recovery, output.' },
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

function HomeProductGrid() {
  return (
    <section style={{ background: 'var(--bm-ink)', padding: '120px 80px', color: 'var(--bm-paper)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
        <div>
          <Eyebrow color="var(--bm-pink)">Shop · 6 SKUs</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 88, lineHeight: 0.9, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-paper)',
          }}>Pick your<br/>weapon.</h2>
        </div>
        <Link to="/shop" style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bm-pink)', textDecoration: 'none' }}>Shop all →</Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {SITE_PRODUCTS.map(p => (
          <Link key={p.id} to={`/product/${p.id}`} className="bm-product-card" style={{
            background: p.bg, borderRadius: 12, padding: 32,
            cursor: 'pointer', position: 'relative', overflow: 'hidden',
            minHeight: 420, display: 'flex', flexDirection: 'column',
            border: `2px solid ${p.dark ? p.bg : 'var(--bm-ink)'}`,
            boxShadow: `8px 8px 0 0 ${p.dark ? 'var(--bm-pink)' : 'var(--bm-ink)'}`,
            textDecoration: 'none',
            transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Capsule tone={p.dark ? 'blue' : 'pink'} style={{ fontSize: 10 }}>
                {p.line}
              </Capsule>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: p.accent, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>12 FL OZ</span>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0' }}>
              <img src={p.img} style={{ maxHeight: 280, maxWidth: '80%', width: 'auto', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(6px 8px 0 rgba(10,10,10,0.18))' }} />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 28, lineHeight: 1, textTransform: 'uppercase',
                color: p.accent, letterSpacing: '-0.01em',
              }}>{p.flavor}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: p.accent }}>${p.price.toFixed(2)} · 12-pack</span>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.accent }}>Shop →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeScienceStrip() {
  const pillars = [
    { num: '144%', label: 'Faster recovery', sub: 'Increased muscle recovery rate.', ref: '3' },
    { num: '47%', label: 'Less fatigue', sub: 'Reduced muscular fatigue post-exercise.', ref: '3' },
    { num: '17%', label: 'More strength', sub: 'Greater strength gains than training alone.', ref: '4' },
    { num: '21.6%', label: 'More endurance', sub: 'Improvement in muscular endurance.', ref: '4' },
  ];
  return (
    <section style={{ background: 'var(--bm-paper-2)', padding: '120px 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
        <div>
          <Eyebrow color="var(--bm-pink-deep)">Clinically proven · 2.4g PeptiStrong®</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16, maxWidth: 800,
          }}>The numbers<br/>don't lie.</h2>
        </div>
        <Link to="/science" style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bm-pink)', textDecoration: 'none' }}>Read the science →</Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
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
        ³ Kerr et al., <em>Nutrients</em> 2023;15(4):986. RCT, healthy males, 2.4g/day. &nbsp;&nbsp; ⁴ RCT manuscript submitted; resistance training, 2.4g/day.<br/>
        These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
      </div>
    </section>
  );
}

function HomeFounderStrip() {
  return (
    <section style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', padding: '120px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5, background: "url('assets/facets-black.png') center/cover" }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow color="var(--bm-pink)">Our Story</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 80, lineHeight: 0.92, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16,
          }}>Built in<br/>adversity.</h2>
          <Link to="/about" style={{ display: 'inline-block', marginTop: 24, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bm-pink)', textDecoration: 'none' }}>Read Jonathan's story →</Link>
        </div>
        <div>
          <p style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(244,239,228,0.85)' }}>
            "A spinal cord injury at birth put me in a power wheelchair at age two. At 28, the doctors gave me weeks to live. I wasn't done."
          </p>
          <p style={{ fontSize: 22, lineHeight: 1.5, marginTop: 16, color: 'rgba(244,239,228,0.85)' }}>
            "I built a formula. It changed the game — for me, for my family. My wife asked me how I felt. I told her I felt like I was living on Boss Mode™."
          </p>
          <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--bm-pink)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>— Jonathan, Founder</div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <VariantB_StatBarrage />
      <HomeHero />
      <HomePillarStrip />
      <HomeScienceStrip />
      <HomeProductGrid />
      <HomeFounderStrip />
    </>
  );
}

window.HomePage = HomePage;
