/* SpotMyShop — Shopkeeper Dashboard */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const stateKey = 'shopData';

const defaultState = {
  shopId: null,
  name: 'Your Shop',
  bio: '',
  address: '',
  location: '',
  ownerName: '',
  ownerContact: '',
  phone: '',
  openTime: '',
  closeTime: '',
  freeDay: '',
  open: false,
  avatar: 'https://placehold.co/120x120/png',
  followers: 0,
  following: 0,
  highlights: [],
  products: [],
  chat: [],
};

let S = loadState();

document.addEventListener('DOMContentLoaded', () => {
  ensureShopId();

  // Buttons & forms
  $('#btnChangeAvatar')?.addEventListener('click', changeAvatar);
  $('#btnEditProfile')?.addEventListener('click', openProfileModal);
  $('#btnAddProduct')?.addEventListener('click', openAddProduct);
  $('#btnNewHighlight')?.addEventListener('click', openHighlightModal);

  $('#closeProductModal')?.addEventListener('click', () => $('#productModal').close());
  $('#closeProfileModal')?.addEventListener('click', () => $('#profileModal').close());
  $('#closeHighlightModal')?.addEventListener('click', () => $('#highlightModal').close());

  $('#productForm')?.addEventListener('submit', onSaveProduct);
  $('#profileForm')?.addEventListener('submit', onSaveProfile);
  $('#highlightForm')?.addEventListener('submit', onSaveHighlight);
  $('#chatForm')?.addEventListener('submit', onSendChat);

  // Tabs
  $$('.tab').forEach(btn =>
    btn.addEventListener('click', () => switchTab(btn.dataset.tab))
  );

  renderAll();
});

/* ---------- State ---------- */
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey));
    return { ...defaultState, ...(saved || {}) };
  } catch {
    return { ...defaultState };
  }
}

function save() {
  localStorage.setItem(stateKey, JSON.stringify(S));
}

function ensureShopId() {
  if (!S.shopId) {
    S.shopId = "ylw:" + btoa(crypto.randomUUID()).slice(0, 15);
    save();
  }
}

/* ---------- Render ---------- */
function renderAll() {
  renderProfile();
  renderHighlights();
  renderGrids();
  renderChat();
}

function renderProfile() {
  $('#shopAvatar').src = S.avatar || 'https://placehold.co/120x120/png';
  $('#shopName').textContent = S.name || 'Your Shop';
  $('#shopId').textContent = `ShopID: ${S.shopId}`;
  $('#shopBio').textContent = S.bio || '';
  $('#shopAddress').textContent = S.address || '';

  $('#statPosts').textContent = S.products.length;
  $('#statFollowers').textContent = S.followers || 0;
  $('#statFollowing').textContent = S.following || 0;

  const badge = $('#shopStatus');
  const isOpen = computeAutoOpen() ?? S.open;
  if (isOpen) {
    badge.textContent = 'Open';
    badge.classList.add('open');
    $('#phoneBadge').textContent = S.phone ? `Call: ${S.phone}` : 'No phone';
  } else {
    badge.textContent = 'Closed';
    badge.classList.remove('open');
    $('#phoneBadge').textContent = 'Phone hidden';
  }

  // Pre-fill edit modal
  $('#inpShopName').value = S.name || '';
  $('#inpBio').value = S.bio || '';
  $('#inpAddress').value = S.address || '';
  $('#inpPhone').value = S.phone || '';
}

function computeAutoOpen() {
  if (!S.openTime || !S.closeTime || !S.freeDay) return null;
  const now = new Date();
  const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
  const currentTime = now.toTimeString().slice(0, 5);
  if (currentDay === S.freeDay) return false;
  return (currentTime >= S.openTime && currentTime <= S.closeTime);
}

function renderHighlights() {
  const row = $('#highlightsRow');
  row.querySelectorAll('.hl.item').forEach(n => n.remove());
  S.highlights.forEach(label => {
    const btn = document.createElement('button');
    btn.className = 'hl item';
    btn.innerHTML = `<div class="hl-circle"></div><span>${escapeHtml(label)}</span>`;
    row.insertBefore(btn, $('#btnNewHighlight'));
  });
}

function renderGrids() {
  const pg = $('#photosGrid'); pg.innerHTML = '';
  const vg = $('#videosGrid'); vg.innerHTML = '';
  S.products.forEach(p => {
    const el = cardFor(p);
    if (p.type === 'photo') pg.appendChild(el);
    if (p.type === 'video') vg.appendChild(el);
  });
}

function cardFor(p) {
  const el = document.createElement('div');
  el.className = 'card';
  el.dataset.id = p.id;
  el.innerHTML = `
    ${p.type === 'photo'
      ? `<img src="${p.src}" alt="${escapeHtml(p.title)}">`
      : `<video src="${p.src}" muted playsinline></video>`}
    <div class="badge-chip">₹${p.price ?? '-'}</div>
  `;
  return el;
}

function renderChat() {
  const list = $('#chatList');
  list.innerHTML = '';
  S.chat.forEach(m => {
    const div = document.createElement('div');
    div.className = 'msg' + (m.me ? ' me' : '');
    div.textContent = m.text;
    list.appendChild(div);
  });
  list.scrollTop = list.scrollHeight;
}

/* ---------- Modals ---------- */
function openAddProduct() { $('#productModal').showModal(); }
function openProfileModal() { $('#profileModal').showModal(); }
function openHighlightModal() { $('#highlightModal').showModal(); }

/* ---------- Save ---------- */
function onSaveProduct(e) {
  e.preventDefault();
  const title = $('#prodTitle').value.trim();
  if (!title) return alert('Enter product title.');
  S.products.unshift({ id: crypto.randomUUID(), type: 'photo', title, src: $('#prodUrl').value.trim(), price: 0 });
  save(); renderGrids(); $('#productModal').close();
}

function onSaveProfile(e) {
  e.preventDefault();
  S.name = $('#inpShopName').value.trim() || S.name;
  S.bio = $('#inpBio').value.trim();
  S.address = $('#inpAddress').value.trim();
  S.phone = $('#inpPhone').value.trim();
  save(); renderProfile(); $('#profileModal').close();
}

function onSaveHighlight(e) {
  e.preventDefault();
  const label = $('#hlLabel').value.trim();
  if (label) {
    S.highlights.push(label);
    save(); renderHighlights();
  }
  $('#highlightModal').close(); $('#hlLabel').value = '';
}

/* ---------- Chat ---------- */
function onSendChat(e) {
  e.preventDefault();
  const text = $('#chatMessage').value.trim();
  if (!text) return;
  S.chat.push({ id: crypto.randomUUID(), text, me: true });
  save(); renderChat();
}

/* ---------- Utils ---------- */
function changeAvatar() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async () => {
    const f = input.files[0];
    if (f) {
      S.avatar = await fileToDataURL(f);
      save(); renderProfile();
    }
  };
  input.click();
}

function fileToDataURL(file) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}

function escapeHtml(s = '') {
  return s.replace(/[&<>"']/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]
  ));
}
