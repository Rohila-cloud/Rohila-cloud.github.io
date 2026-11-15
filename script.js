(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const storedTheme = localStorage.getItem('kamola-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    icon.textContent = dark ? '☀' : '☾';
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    document.querySelector('meta[name="theme-color"]').content = dark ? '#101827' : '#f5f8ff';
  }

  applyTheme(storedTheme || (prefersDark ? 'dark' : 'light'));
  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('kamola-theme', next);
    applyTheme(next);
  });
})();
