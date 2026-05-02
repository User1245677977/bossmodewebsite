function ProductPage({ productId }) {
  const cart = useCart();
  const p = SITE_PRODUCTS.find(x => x.id === productId);
  const [qty, setQty] = React.useState(1);
  const [variant, setVariant] = React.useState('subscribe');

  if (!p) {
    return (
      <section style={{ padding: '120px 80px', minHeight: 600, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 80, textTransform: 'uppercase' }}>Not found</h1>
        <Link to="/shop" style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>← Back to shop</Link>
      </section>
    );
  }

  const isEnergy = p.line === 'Energy';
  const facetBg = isEnergy ? 'facets-navy' : 'facets-pink';

  const onAdd = () => {
    cart.add(p.id, variant, qty);
  };

  // Other products in same line for "you may also like"
  const related = SITE_PRODUCTS.filter(x => x.line === p.line && x.id !== p.id);

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ padding: '24px 80px', borderBottom: '1px solid var(--line)', background: 'var(--bm-paper)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', letterSpacing: '0.08em' }}>
          <Link to="/" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <Link to={`/shop?line=${isEnergy ? 'energy' : 'myo'}`} style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>{p.line}</Link>
          {' / '}
          <span style={{ color: 'var(--bm-ink)' }}>{p.flavor}</span>
        </span>
      </div>

      {/* Main */}
      <section style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', minHeight: 720, background: 'var(--bm-paper)' }}>
        <div style={{ position: 'relative', overflow: 'hidden', background: p.bg }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `url('../assets/${facetBg}.png') center/cover`,
            opacity: isEnergy ? 1 : 0.55,
          }} />
          <img src={p.img} style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            maxHeight: '82%', maxWidth: '70%',
            width: 'auto', height: 'auto', objectFit: 'contain',
            filter: 'drop-shadow(12px 18px 0 rgba(10,10,10,0.25))',
          }} />
        </div>

        <div style={{ padding: '64px 64px' }}>
          <Eyebrow color={isEnergy ? 'var(--bm-blue-deep)' : 'var(--bm-pink-deep)'}>
            {p.line} · 12-Pack · 12 fl oz cans
          </Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 72, lineHeight: 0.92, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16,
          }}>{p.flavor}</h1>
          <div style={{ marginTop: 12, fontSize: 18, color: 'var(--fg-2)', fontStyle: 'italic' }}>
            {p.tagline}
          </div>

          {!isEnergy && (
            <div style={{
              marginTop: 20, padding: '16px 20px',
              background: 'var(--bm-ink)', color: 'var(--bm-paper)',
              borderRadius: 8,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, lineHeight: 1, letterSpacing: '-0.01em' }}>
                Recover 144% faster.<sup style={{ fontSize: 12, color: 'var(--bm-pink)', verticalAlign: 'super', marginLeft: 4 }}>3</sup>
              </div>
              <div style={{ fontSize: 13, marginTop: 6, color: 'rgba(244,239,228,0.7)' }}>
                47% less fatigue.³ Clinically proven at 2.4g/day.
              </div>
            </div>
          )}

          <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 24, color: 'var(--fg-2)', maxWidth: 540 }}>
            {p.blurb}
          </p>

          <div style={{ display: 'flex', gap: 32, marginTop: 28 }}>
            {p.stats.map(s => <Stat key={s.l} value={s.v} label={s.l} color={isEnergy ? 'var(--bm-blue-deep)' : 'var(--bm-pink)'} />)}
          </div>

          {/* Variant + qty */}
          <div style={{ marginTop: 32, padding: 22, border: '2px solid var(--bm-ink)', borderRadius: 8, background: '#fff' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input type="radio" name="v" checked={variant === 'subscribe'} onChange={() => setVariant('subscribe')} style={{ accentColor: 'var(--bm-pink)', marginTop: 4 }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700 }}>Subscribe & save 15%</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--bm-pink)' }}>${p.priceSub.toFixed(2)}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 4 }}>Ships every 4 weeks. Cancel anytime.</div>
                </div>
              </label>
              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input type="radio" name="v" checked={variant === 'one'} onChange={() => setVariant('one')} style={{ accentColor: 'var(--bm-pink)', marginTop: 4 }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700 }}>One-time purchase</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>${p.price.toFixed(2)}</span>
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
            <Button variant={isEnergy ? 'energy' : 'primary'} onClick={onAdd} style={{ flex: 1 }}>Add to cart →</Button>
          </div>

          {!isEnergy && (
            <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.04em', lineHeight: 1.6 }}>
              ³ Kerr et al., Nutrients 2023;15(4):986. RCT, healthy males, 2.4g/day. These statements have not been evaluated by the FDA.
            </div>
          )}
        </div>
      </section>

      {/* Ingredient panel */}
      <section style={{ background: 'var(--bm-paper-2)', padding: '96px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <div>
            <Eyebrow color="var(--bm-pink-deep)">What's inside</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.02em',
              textTransform: 'uppercase', marginTop: 16,
            }}>The receipts<br/>are on the can.</h2>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--bm-pink)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Ingredients</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {p.ingredients.map(i => (
                <div key={i} style={{
                  background: '#fff', padding: '12px 16px', border: '1.5px solid var(--bm-ink)',
                  borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 13,
                }}>{i}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: 'var(--bm-paper)', padding: '96px 80px' }}>
          <Eyebrow color="var(--bm-pink-deep)">More from {p.line}</Eyebrow>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 12, marginBottom: 32,
          }}>Stack the deck.</h3>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${related.length}, 1fr)`, gap: 24 }}>
            {related.map(r => (
              <Link key={r.id} to={`/product/${r.id}`} className="bm-product-card" style={{
                background: r.bg, borderRadius: 12, padding: 24,
                minHeight: 320, display: 'flex', flexDirection: 'column',
                border: `2px solid ${r.dark ? r.bg : 'var(--bm-ink)'}`,
                boxShadow: `6px 6px 0 0 ${r.dark ? 'var(--bm-pink)' : 'var(--bm-ink)'}`,
                textDecoration: 'none',
                transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
              }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={r.img} style={{ height: 220 }} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
                  lineHeight: 1, textTransform: 'uppercase', color: r.accent,
                  letterSpacing: '-0.01em',
                }}>{r.flavor}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: r.accent, marginTop: 6 }}>${r.price.toFixed(2)}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

window.ProductPage = ProductPage;
