// signup-shopkeeper.js
const stateKey = 'shopData'; // MUST match dashboard.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('shopkeeperSignupForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      shopName: document.getElementById('shopName').value.trim(),
      shopAddress: document.getElementById('shopAddress').value.trim(),
      shopLocation: document.getElementById('shopLocation').value.trim(),
      ownerName: document.getElementById('ownerName').value.trim(),
      ownerContact: document.getElementById('ownerContact').value.trim(),
      shopContact: document.getElementById('shopContact').value.trim(),
      openTime: document.getElementById('openTime').value,
      closeTime: document.getElementById('closeTime').value,
      freeDay: document.getElementById('freeDay').value,
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value,
    };

    if (!formData.shopName) {
      alert('Please enter a shop name.');
      return;
    }

    // Build the initial state for dashboard
    const newState = {
      shopId: null,
      name: formData.shopName,
      bio: formData.shopLocation,   // short location / desc
      address: formData.shopAddress,
      location: formData.shopLocation,
      ownerName: formData.ownerName,
      ownerContact: formData.ownerContact,
      phone: formData.shopContact,
      openTime: formData.openTime,
      closeTime: formData.closeTime,
      freeDay: formData.freeDay,
      open: false,
      avatar: 'https://placehold.co/120x120/png',
      followers: 0,
      following: 0,
      highlights: [],
      products: [],
      chat: [],
    };

    // Save in localStorage
    localStorage.setItem(stateKey, JSON.stringify(newState));

    // Redirect to dashboard
    window.location.href = '/shopkeeper/dashboard.html';
  });
});
