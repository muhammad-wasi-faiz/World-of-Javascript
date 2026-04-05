// auth.js
const USERS_KEY = 'sm_users';
const CURRENT_USER_KEY = 'sm_current_user';
const REDIRECT_KEY = 'sm_post_login_redirect';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function currentUser() { return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)); }

export function signup({ name, email, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  if (!name || name.trim().length < 2) throw new Error('Please enter your full name.');
  if (!EMAIL_RE.test(email)) throw new Error('Please enter a valid email.');
  if (!password || password.length < 8) throw new Error('Password must be at least 8 characters.');
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) throw new Error('This email is already registered.');
  const user = { name: name.trim(), email: email.toLowerCase(), password };
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, email: user.email }));
}

export function login({ email, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const user = users.find(u => u.email.toLowerCase() === (email || '').toLowerCase());
  if (!user || user.password !== password) throw new Error('Invalid email or password.');
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, email: user.email }));
}
