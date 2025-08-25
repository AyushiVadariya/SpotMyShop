// auth.js

function loginShopkeeper() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  alert(`Logging in with: ${email}, ${password}`);
  // TODO: Add Firebase/Yellow integration
}

function signupShopkeeper() {
  const shopName = document.getElementById("shopName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  alert(`Signing up shop: ${shopName}, Email: ${email}`);
  // TODO: Add Firebase/Yellow integration
}
