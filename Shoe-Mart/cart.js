import { getProductById } from './data.js';

const CART_KEY = 'sm_cart';
const CHECKOUT_KEY = 'sm_checkout_items';

function read(key, fallback) {
try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function write(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

const clampQty = (n) => Math.max(1, Math.min(99, Number(n) || 1));

export function getCart() { return read(CART_KEY, []); }
export function setCart(items) { write(CART_KEY, items); }
export function clearCart() { write(CART_KEY, []); }

export function addToCart(id, qty = 1) {
const items = getCart();
qty = clampQty(qty);
const found = items.find(it => it.id === id);
if (found) found.qty = clampQty(found.qty + qty);
else items.push({ id, qty });
setCart(items);
}

export function removeFromCart(id) {
setCart(getCart().filter(it => it.id !== id));
}

export function setQty(id, qty) {
qty = clampQty(qty);
const items = getCart();
const it = items.find(i => i.id === id);
if (it) it.qty = qty;
setCart(items);
}

export function detailedCart() {
return getCart().map(it => {
const p = getProductById(it.id);
if (!p) return null;
return { ...it, product: p, subtotal: (p.price || 0) * (it.qty || 1) };
}).filter(Boolean);
}

export function setCheckoutSelection(items) { write(CHECKOUT_KEY, items); }
export function getCheckoutSelection() { return read(CHECKOUT_KEY, []); }
export function clearCheckoutSelection() { localStorage.removeItem(CHECKOUT_KEY); }