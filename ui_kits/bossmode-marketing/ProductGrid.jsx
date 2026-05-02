const PRODUCTS = [
  { id: 'myo-strawberry', line: 'Myo-Peptide', flavor: 'Strawberry Milkshake', img: '../../assets/can-myo-strawberry.png', bg: 'var(--bm-pink-bg)', accent: 'var(--bm-pink-deep)' },
  { id: 'myo-vanilla',    line: 'Myo-Peptide', flavor: 'Vanilla Marshmallow Milk', img: '../../assets/can-myo-vanilla.png', bg: 'var(--bm-blue-sky)', accent: 'var(--bm-blue-deep)' },
  { id: 'myo-chai',       line: 'Myo-Peptide', flavor: 'Chai Latte', img: '../../assets/can-myo-chai.png', bg: '#EBE5D7', accent: 'var(--bm-royal-deep)' },
  { id: 'en-apex',        line: 'Energy',      flavor: 'Apex Punch', img: '../../assets/can-energy-apex.png', bg: 'var(--bm-royal-deep)', accent: '#fff', dark: true },
  { id: 'en-strawberry',  line: 'Energy',      flavor: 'Candied Strawberry', img: '../../assets/can-energy-strawberry.png', bg: 'var(--bm-red)', accent: '#fff', dark: true },
  { id: 'en-lemonade',    line: 'Energy',      flavor: 'Frosted Lemonade', img: '../../assets/can-energy-lemonade.png', bg: 'var(--bm-sun-soft)', accent: 'var(--bm-ink)' },
];

function ProductGrid({ onSelect }) {
  return (
    <section style={{ background: 'var(--bm-ink)', padding: '120px 80px', color: 'var(--bm-paper)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
        <div>
          <Eyebrow color="var(--bm-pink)">Shop · 6 SKUs</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 88, lineHeight: 0.9, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-paper)',
          }}>Pick your<br/>weapon.</h2>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Capsule tone="pink">All</Capsule>
          <Capsule tone="outline" style={{ color: 'var(--bm-paper)', boxShadow: 'inset 0 0 0 1.5px rgba(244,239,228,0.4)' }}>Myo-Peptide</Capsule>
          <Capsule tone="outline" style={{ color: 'var(--bm-paper)', boxShadow: 'inset 0 0 0 1.5px rgba(244,239,228,0.4)' }}>Energy</Capsule>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {PRODUCTS.map(p => (
          <div key={p.id} onClick={() => onSelect && onSelect(p)}
               className="bm-product-card"
               style={{
                 background: p.bg, borderRadius: 12, padding: 32,
                 cursor: 'pointer', position: 'relative', overflow: 'hidden',
                 minHeight: 420, display: 'flex', flexDirection: 'column',
                 border: `2px solid ${p.dark ? p.bg : 'var(--bm-ink)'}`,
                 boxShadow: `8px 8px 0 0 ${p.dark ? 'var(--bm-pink)' : 'var(--bm-ink)'}`,
                 transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
               }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Capsule tone={p.dark ? 'blue' : 'pink'} style={{ fontSize: 10 }}>
                {p.line}
              </Capsule>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: p.accent, letterSpacing: '0.08em' }}>12 FL OZ</span>
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0' }}>
              <img src={p.img} style={{ height: 280, filter: 'drop-shadow(6px 8px 0 rgba(10,10,10,0.18))' }} />
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 28, lineHeight: 1, textTransform: 'uppercase',
                color: p.accent, letterSpacing: '-0.01em',
              }}>{p.flavor}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: p.accent }}>$3.99</span>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.accent }}>Shop →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.ProductGrid = ProductGrid;
window.PRODUCTS = PRODUCTS;
