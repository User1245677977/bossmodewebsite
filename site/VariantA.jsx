// VARIANT A — "HELLO CADENCE" (replaces Wordmark Slam)
// Same machine-gun rhythm as Stat Barrage, but instead of numbers, each beat is a "Hello ___" line.
// Alternates pink (peptide) and blue (energy). Closes on "Enter Peak State." big and white.
// Then BOSS MODE wordmark + tagline + can drift in.

function VariantA_HelloCadence({ embedded = false }) {
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

  const lines = [
    { hello: 'Hello', subject: 'faster recovery.',     tag: 'Peptide', color: '#EE3D8B' },
    { hello: 'Hello', subject: 'real muscle growth.',  tag: 'Peptide', color: '#EE3D8B' },
    { hello: 'Hello', subject: 'laser focus.',         tag: 'Energy',  color: '#2BB6E8' },
    { hello: 'Hello', subject: 'productive energy.',   tag: 'Energy',  color: '#2BB6E8' },
  ];

  // Timing
  const LINE_DUR = 620;       // each "Hello ___" lifecycle
  const T_LINES_END = lines.length * LINE_DUR;
  const T_PEAK = T_LINES_END + 120;     // "Enter Peak State." big slam
  const PEAK_DUR = 1100;
  const T_WORDMARK = T_PEAK + PEAK_DUR + 100;
  const T_TAG = T_WORDMARK + 600;
  const T_CAN = T_WORDMARK + 200;
  const T_CTA = T_TAG + 500;

  const peakT = clamp01((t - T_PEAK) / 600);
  const peakHoldT = clamp01((t - T_PEAK - 600) / 500);
  const wordmarkT = clamp01((t - T_WORDMARK) / 600);
  const tagT = clamp01((t - T_TAG) / 800);
  const canT = clamp01((t - T_CAN) / 1000);
  const ctaT = clamp01((t - T_CTA) / 500);

  return (
    <div style={{
      position: 'relative',
      width: '100%', height: embedded ? '100%' : '100vh',
      minHeight: 720,
      overflow: 'hidden',
      background: '#0A0A0A',
      fontFamily: 'var(--font-display)',
    }}>
      {/* Faint scanlines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 4px)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Crosshair tick marks in corners */}
      {['tl','tr','bl','br'].map((corner) => (
        <CornerTicks key={corner} corner={corner} opacity={clamp01(t / 400) * 0.5} />
      ))}

      {/* Top readout */}
      <div style={{
        position: 'absolute', top: 28, left: 28, right: 28,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'rgba(244,239,228,0.55)',
        zIndex: 5,
      }}>
        <span>· what's about to change ·</span>
        <span>boss mode / peak state</span>
      </div>

      {/* HELLO LINES — fired in sequence */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 3,
      }}>
        {lines.map((s, i) => {
          const start = i * LINE_DUR;
          const localT = (t - start) / LINE_DUR;
          // Smooth crossfade with gentle drift — no bouncy overshoot
          let opacity = 0, scale = 1, dy = 0;
          if (localT < 0) {
            opacity = 0;
            dy = 24;
          } else if (localT < 0.28) {
            // ease in
            const k = easeOutCubic(localT / 0.28);
            opacity = k;
            scale = 0.96 + 0.04 * k;
            dy = (1 - k) * 24;
          } else if (localT < 0.72) {
            opacity = 1;
            scale = 1;
            dy = 0;
          } else if (localT < 1) {
            // ease out
            const k = (localT - 0.72) / 0.28;
            opacity = 1 - k;
            scale = 1;
            dy = -k * 16;
          } else {
            opacity = 0;
          }
          if (t > T_LINES_END - 60) opacity = 0;
          return (
            <div key={i} style={{
              position: 'absolute',
              opacity,
              transform: `translateY(${dy}px) scale(${scale})`,
              textAlign: 'center',
              pointerEvents: 'none',
              maxWidth: '90vw',
              willChange: 'opacity, transform',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: s.color,
                marginBottom: 18,
              }}>
                · {s.tag} ·
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 'clamp(56px, 9vw, 150px)',
                lineHeight: 0.95, letterSpacing: '-0.03em',
                color: '#F4EFE4',
                textTransform: 'uppercase',
              }}>
                <span style={{ color: s.color }}>{s.hello}</span>{' '}
                {s.subject}
              </div>
            </div>
          );
        })}
      </div>

      {/* "ENTER PEAK STATE." — closer (smooth fade + subtle scale, no bounce) */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 4, pointerEvents: 'none',
        opacity: peakT * (1 - clamp01((t - T_WORDMARK + 100) / 400)),
        transform: `scale(${0.94 + 0.06 * easeOutCubic(peakT)})`,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(72px, 12vw, 200px)',
            lineHeight: 0.9, letterSpacing: '-0.04em',
            color: '#F4EFE4',
            textTransform: 'uppercase',
            textShadow: '6px 6px 0 #EE3D8B, 12px 12px 0 #2BB6E8',
          }}>
            Enter<br/>Peak State.
          </div>
        </div>
      </div>

      {/* WORDMARK after peak */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 4,
        pointerEvents: 'none',
        opacity: wordmarkT,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(80px, 16vw, 240px)', lineHeight: 0.85,
          letterSpacing: '-0.04em', color: '#F4EFE4',
          transform: `scale(${1.15 - 0.15 * easeOutBack(wordmarkT)})`,
          textAlign: 'center',
        }}>
          BOSS<br/>MODE
        </div>
      </div>

      {/* Cans — peptide + energy drift up together from the right */}
      <div style={{
        position: 'absolute', right: '4%', bottom: -40,
        zIndex: 2,
        opacity: canT,
        transform: `translateY(${(1 - easeOutCubic(canT)) * 200}px)`,
        display: 'flex', alignItems: 'flex-end', gap: 24,
      }}>
        <img src="../assets/cropped-can-myo-strawberry.png" alt=""
          style={{ height: 'min(58vh, 520px)', filter: 'drop-shadow(0 24px 50px rgba(0,0,0,0.55))', transform: 'rotate(-5deg) translateY(20px)' }} />
        <img src="../assets/cropped-can-energy-apex.png" alt=""
          style={{ height: 'min(64vh, 580px)', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))', transform: 'rotate(2deg)' }} />
      </div>

      {/* Tagline + CTA */}
      <div style={{
        position: 'absolute', left: '6%', bottom: '12%',
        zIndex: 5, maxWidth: '42%',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(44px, 6.5vw, 96px)', lineHeight: 0.9,
          letterSpacing: '-0.025em', textTransform: 'uppercase',
          margin: 0, color: '#F4EFE4',
          opacity: tagT,
          transform: `translateX(${(1 - tagT) * -32}px)`,
        }}>
          Sip.<br/>
          <span style={{ color: '#EE3D8B' }}>Dominate.</span><br/>
          Repeat.<sup style={{ fontSize: '0.4em', verticalAlign: 'top', fontWeight: 700, marginLeft: '0.04em' }}>™</sup>
        </h1>
        <div style={{
          marginTop: 32, display: 'flex', gap: 16,
          opacity: ctaT, transform: `translateY(${(1 - ctaT) * 16}px)`,
        }}>
          <a href="#/shop" style={ctaStyle('solid', '#F4EFE4', '#0A0A0A')}>Shop the lineup</a>
          <a href="#/science" style={ctaStyle('ghost', '#F4EFE4', '#0A0A0A')}>The science →</a>
        </div>
      </div>
    </div>
  );
}

// Backwards-compat: the picker imports VariantA_WordmarkSlam — alias to the new component.
const VariantA_WordmarkSlam = VariantA_HelloCadence;

Object.assign(window, { VariantA_HelloCadence, VariantA_WordmarkSlam });
