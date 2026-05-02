// === Cart store — fake, persisted to localStorage ===
// Never actually checks out. Built to look real.

const CART_KEY = 'bm_cart_v1';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch { return []; }
}
function saveCart(items) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {}
}

const CartContext = React.createContext(null);

function CartProvider({ children }) {
  const [items, setItems] = React.useState(loadCart);
  const [open, setOpen] = React.useState(false);
  const [pulse, setPulse] = React.useState(0);

  React.useEffect(() => { saveCart(items); }, [items]);

  const add = (productId, variant = 'one', qty = 1) => {
    setItems(prev => {
      const key = `${productId}::${variant}`;
      const idx = prev.findIndex(i => i.key === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { key, productId, variant, qty }];
    });
    setOpen(true);
    setPulse(p => p + 1);
  };
  const remove = (key) => setItems(prev => prev.filter(i => i.key !== key));
  const setQty = (key, qty) => setItems(prev =>
    prev.map(i => i.key === key ? { ...i, qty: Math.max(1, qty) } : i)
  );
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => {
    const p = SITE_PRODUCTS.find(x => x.id === i.productId);
    if (!p) return s;
    const price = i.variant === 'subscribe' ? p.priceSub : p.price;
    return s + price * i.qty;
  }, 0);

  return (
    <CartContext.Provider value={{
      items, count, subtotal, open, pulse,
      setOpen, add, remove, setQty, clear,
    }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}

window.CartProvider = CartProvider;
window.useCart = useCart;
