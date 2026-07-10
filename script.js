const toggle = document.getElementById('theme-toggle');
const status = document.getElementById('theme-status');
const root = document.body;

const setTheme = (theme) => {
  root.classList.toggle('dark', theme === 'dark');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀︎' : '☾';
    toggle.querySelector('.theme-label').textContent = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  if (status) {
    status.textContent = theme === 'dark' ? 'Dark mode is on.' : 'Light mode is on.';
  }

  localStorage.setItem('theme', theme);
};

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme || 'light';
setTheme(initialTheme);

toggle?.addEventListener('click', () => {
  const isDark = root.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});
