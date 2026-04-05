// app.js
import { login, signup } from './auth.js';

export function initLoginPage() {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('mail');
  const passInput = document.getElementById('pass');
  if (!form || !emailInput || !passInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
      login({ email: emailInput.value.trim(), password: passInput.value });
      alert('Logged in!');
      window.location.href = 'index.html'; // redirect to home page
    } catch (err) {
      alert(err.message);
    }
  });
}
