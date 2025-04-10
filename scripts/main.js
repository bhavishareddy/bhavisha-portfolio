const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  toggleBtn.textContent = html.classList.contains('dark') ? '🌙' : '☀️';
});

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
});
