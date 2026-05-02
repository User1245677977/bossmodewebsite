// VARIANT C — "SPLIT UNIVERSE"
// Pink half slams in from left, blue half from right. Meet at the center, push slightly past, settle.
// Wordmark "BOSS MODE" reveals on the seam (using SVG mask: white in pink half, ink in blue half — split per-letter).
// Two cans (Myo strawberry left, Energy apex right) rise into the respective halves.
// Tagline locks in beneath.

function VariantC_SplitUniverse({ embedded = false }) {
  const reduced = useReducedMotion();
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    if (reduced) { setT(99999); return; }
    const start = performance.now();
    let raf;
    const tick = () => {
      setT(performance.now() - start);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  // Phase timing
  const T_SLAM = 0;
  const SLAM_DUR = 700;
  const T_WORDMARK = 700;
  const T_CANS = 1100;
  const T_TAG = 1900;
  const T_CTA = 2500;

  const slamT = clamp01((t - T_SLAM) / SLAM_DUR);
  // Half panels: enter from off-screen, overshoot to 0, settle
  // Use ease-out cubic; small bounce on the tail
  const panelEase = easeOutQuart(slamT);

  const wordmarkT = clamp01((t - T_WORDMARK) / 700);
  const cansT = clamp01((t - T_CANS) / 900);
  const tagT = clamp01((t - T_TAG) / 700);
  const ctaT = clamp01((t - T_CTA) / 500);

  // Pink panel translate from -100% to 0
  const pinkX = (1 - panelEase) * -100;
  const blueX = (1 - panelEase) * 100;

  return (
    <div style={{
      position: 'relative',
      width: '100%', height: embedded ? '100%' : '100vh',
      minHeight: 720,
      overflow: 'hidden',
      background: '#0A0A0A',
      fontFamily: 'var(--font-display)',
    }}>
      {/* Pink half */}
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
        background: 'linear-gradient(135deg, #FBE4EE 0%, #F8C5DC 60%, #EE3D8B 100%)',
        transform: `translateX(${pinkX}%)`,
        zIndex: 1,
      }} />
      {/* Blue half */}
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
        background: 'linear-gradient(225deg, #1B1A5E 0%, #2B2A82 50%, #2BB6E8 100%)',
        transform: `translateX(${blueX}%)`,
        zIndex: 1,
      }} />

      {/* Vertical seam line */}
      <div style={{
        position: 'absolute', top: '8%', bottom: '8%', left: '50%',
        width: 2, marginLeft: -1,
        background: '#0A0A0A',
        opacity: clamp01((slamT - 0.6) * 4) * 0.5,
        zIndex: 4,
      }} />

      {/* MYO label top-left */}
      <div style={{
        position: 'absolute', top: 32, left: 32,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.24em', textTransform: 'uppercase',
        color: '#0A0A0A',
        opacity: clamp01((slamT - 0.7) * 4) * 0.85,
        zIndex: 5,
      }}>
        Myo · Recovery · Pink
      </div>
      <div style={{
        position: 'absolute', top: 32, right: 32,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.24em', textTransform: 'uppercase',
        color: '#F4EFE4',
        opacity: clamp01((slamT - 0.7) * 4) * 0.85,
        zIndex: 5,
        textAlign: 'right',
      }}>
        Energy · Focus · Blue
      </div>

      {/* WORDMARK split — using two stacked copies, each clipped to its half */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 5,
        pointerEvents: 'none',
        opacity: wordmarkT,
        transform: `scale(${1.1 - 0.1 * easeOutBack(wordmarkT)})`,
      }}>
        <div style={{ position: 'relative' }}>
          {/* Ink version (visible in pink half) */}
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(80px, 16vw, 240px)', lineHeight: 0.85,
            letterSpacing: '-0.04em', color: '#0A0A0A', textAlign: 'center',
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
          }}>
            BOSS<br/>MODE
          </div>
          {/* Paper version (visible in blue half) */}
          <div style={{
            position: 'absolute', inset: 0,
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(80px, 16vw, 240px)', lineHeight: 0.85,
            letterSpacing: '-0.04em', color: '#F4EFE4', textAlign: 'center',
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
          }}>
            BOSS<br/>MODE
          </div>
        </div>
      </div>

      {/* Two cans rising */}
      <div style={{
        position: 'absolute', left: '12%', bottom: '14%',
        zIndex: 3,
        opacity: cansT,
        transform: `translateY(${(1 - easeOutCubic(cansT)) * 200}px) rotate(-6deg)`,
      }}>
        <img src="../assets/cropped-can-myo-strawberry.png" alt=""
          style={{ height: 'min(50vh, 420px)', filter: 'drop-shadow(8px 14px 0 rgba(10,10,10,0.18))' }} />
      </div>
      <div style={{
        position: 'absolute', right: '12%', bottom: '14%',
        zIndex: 3,
        opacity: cansT,
        transform: `translateY(${(1 - easeOutCubic(cansT)) * 200}px) rotate(6deg)`,
      }}>
        <img src="../assets/cropped-can-energy-apex.png" alt=""
          style={{ height: 'min(56vh, 460px)', filter: 'drop-shadow(0 14px 30px rgba(0,0,0,0.55))' }} />
      </div>

      {/* Tagline at bottom seam */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: '4%',
        textAlign: 'center', zIndex: 6,
        opacity: tagT,
        transform: `translateY(${(1 - tagT) * 16}px)`,
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(40px, 5.5vw, 84px)',
          letterSpacing: '-0.02em', textTransform: 'uppercase',
          margin: 0,
        }}>
          <span style={{ color: '#0A0A0A', padding: '0 0.2em', background: 'rgba(244,239,228,0.85)' }}>Sip.</span>{' '}
          <span style={{ color: '#F4EFE4', padding: '0 0.2em', background: 'rgba(10,10,10,0.85)' }}>Dominate.</span>{' '}
          <span style={{ color: '#0A0A0A', padding: '0 0.2em', background: 'rgba(244,239,228,0.85)' }}>Repeat.™</span>
        </h1>
        <div style={{
          marginTop: 24, display: 'inline-flex', gap: 16,
          opacity: ctaT, transform: `translateY(${(1 - ctaT) * 16}px)`,
        }}>
          <a href="#/shop" style={{
            display: 'inline-block',
            background: '#0A0A0A', color: '#F4EFE4',
            padding: '16px 28px',
            fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            textDecoration: 'none',
          }}>Shop the lineup</a>
          <a href="#/science" style={{
            display: 'inline-block',
            background: '#F4EFE4', color: '#0A0A0A',
            padding: '16px 28px',
            fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            textDecoration: 'none',
          }}>The science →</a>
        </div>
      </div>
    </div>
  );
}

function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

Object.assign(window, { VariantC_SplitUniverse, easeOutQuart });
