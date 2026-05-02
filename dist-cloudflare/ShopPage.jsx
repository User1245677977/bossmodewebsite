function ShopPage() {
  const route = useHashRoute();
  // Read line filter from hash query (#/shop?line=myo)
  const queryStr = (route.path.split('?')[1] || '');
  const params = new URLSearchParams(queryStr);
  const lineFilter = params.get('line'); // 'myo' | 'energy' | null
  const filtered = SITE_PRODUCTS.filter(p => {
    if (!lineFilter) return true;
    if (lineFilter === 'myo') return p.line === 'Myo-Peptide';
    if (lineFilter === 'energy') return p.line === 'Energy';
    return true;
  });

  const filters = [
    { id: null, label: 'All' },
    { id: 'myo', label: 'Myo-Peptide™' },
    { id: 'energy', label: 'Energy' },
  ];

  return (
    <>
      {/* Header */}
      <section style={{ background: 'var(--bm-paper)', padding: '80px 80px 40px', borderBottom: '1px solid var(--line)' }}>
        <Eyebrow color="var(--bm-pink-deep)">Shop · {filtered.length} of {SITE_PRODUCTS.length} SKUs</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 112, lineHeight: 0.9, letterSpacing: '-0.03em',
          textTransform: 'uppercase', marginTop: 16,
        }}>Pick your<br/>weapon.</h1>

        <div style={{ display: 'flex', gap: 8, marginTop: 32 }}>
          {filters.map(f => {
            const active = (f.id || null) === (lineFilter || null);
            return (
              <a key={f.label} href={`#/shop${f.id ? `?line=${f.id}` : ''}`} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '10px 20px', borderRadius: 999,
                fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                background: active ? 'var(--bm-pink)' : 'transparent',
                color: active ? '#fff' : 'var(--bm-ink)',
                border: '1.5px solid var(--bm-ink)',
                textDecoration: 'none',
              }}>{f.label}</a>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--bm-paper)', padding: '40px 80px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {filtered.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="bm-product-card" style={{
              background: p.bg, borderRadius: 12, padding: 32,
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              minHeight: 460, display: 'flex', flexDirection: 'column',
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
                <img src={p.img} style={{ maxHeight: 320, maxWidth: '85%', width: 'auto', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(6px 8px 0 rgba(10,10,10,0.18))' }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 28, lineHeight: 1, textTransform: 'uppercase',
                  color: p.accent, letterSpacing: '-0.01em',
                }}>{p.flavor}</div>
                <div style={{ fontSize: 13, marginTop: 6, color: p.dark ? 'rgba(255,255,255,0.7)' : 'var(--fg-2)' }}>
                  {p.tagline}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: p.accent }}>${p.price.toFixed(2)} · 12-pack</span>
                  <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.accent }}>Shop →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

window.ShopPage = ShopPage;
