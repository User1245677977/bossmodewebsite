function CartDrawer() {
  const cart = useCart();
  if (!cart.open && cart.items.length === 0 && !cart.open) {} // keep mounted

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => cart.setOpen(false)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(10,10,10,0.5)',
          opacity: cart.open ? 1 : 0,
          pointerEvents: cart.open ? 'auto' : 'none',
          transition: 'opacity 200ms var(--ease-out)',
          zIndex: 50,
        }}
      />
      {/* Drawer */}
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 460, maxWidth: '100vw',
        background: 'var(--bm-paper)', zIndex: 51,
        transform: cart.open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 280ms var(--ease-out)',
        display: 'flex', flexDirection: 'column',
        borderLeft: '2px solid var(--bm-ink)',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 28px', borderBottom: '1px solid var(--line)',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Your Cart · {cart.count}
          </div>
          <button onClick={() => cart.setOpen(false)} style={{
            background: 'transparent', border: 'none', fontSize: 28, cursor: 'pointer',
            color: 'var(--bm-ink)', lineHeight: 1, padding: 4,
          }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 28 }}>
          {cart.items.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 80 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 0.95 }}>
                Empty.<br/>For now.
              </div>
              <p style={{ marginTop: 16, color: 'var(--fg-2)' }}>Pick your weapon.</p>
              <Button variant="primary" onClick={() => { cart.setOpen(false); window.location.hash = '#/shop'; }} style={{ marginTop: 24 }}>Shop →</Button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {cart.items.map(item => {
                const p = SITE_PRODUCTS.find(x => x.id === item.productId);
                if (!p) return null;
                const price = item.variant === 'subscribe' ? p.priceSub : p.price;
                return (
                  <div key={item.key} style={{
                    display: 'grid', gridTemplateColumns: '88px 1fr', gap: 16,
                    paddingBottom: 20, borderBottom: '1px solid var(--line)',
                  }}>
                    <div style={{
                      background: p.bg, borderRadius: 4, height: 100,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid var(--line)',
                    }}>
                      <img src={p.img} style={{ maxHeight: 80, maxWidth: 80, width: 'auto', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(2px 3px 0 rgba(10,10,10,0.18))' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.line} · 12-pack</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, lineHeight: 1.1, textTransform: 'uppercase', marginTop: 4, letterSpacing: '-0.01em' }}>{p.flavor}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-pink)', letterSpacing: '0.04em', marginTop: 4 }}>
                        {item.variant === 'subscribe' ? 'Subscribe & save 15%' : 'One-time'}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--bm-ink)', borderRadius: 4, height: 32 }}>
                          <button onClick={() => cart.setQty(item.key, item.qty - 1)} style={{ width: 28, height: 32, background: 'transparent', border: 'none', fontSize: 16, cursor: 'pointer' }}>−</button>
                          <span style={{ width: 24, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 13 }}>{item.qty}</span>
                          <button onClick={() => cart.setQty(item.key, item.qty + 1)} style={{ width: 28, height: 32, background: 'transparent', border: 'none', fontSize: 16, cursor: 'pointer' }}>+</button>
                        </div>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>${(price * item.qty).toFixed(2)}</span>
                          <button onClick={() => cart.remove(item.key)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--fg-3)', textDecoration: 'underline', fontFamily: 'var(--font-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cart.items.length > 0 && (
          <div style={{ padding: 28, borderTop: '2px solid var(--bm-ink)', background: 'var(--bm-paper-2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
              <span>Subtotal</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500 }}>${cart.subtotal.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--fg-2)', marginBottom: 16, textAlign: 'center' }}>
              Shipping &amp; taxes calculated at checkout.
            </div>
            <Button variant="primary" onClick={() => alert('Checkout opens at launch. You\u2019ve got the goods queued.')} style={{ width: '100%', height: 56, fontSize: 14 }}>
              Checkout →
            </Button>
            <div style={{ marginTop: 12, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Pre-launch · checkout opens soon
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

window.CartDrawer = CartDrawer;
