(() => {
  'use strict';

  const switcher = document.getElementsByClassName('theme-switcher-button')[0];
  const getThemeStorage = localStorage.getItem('theme');
  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  switcher.addEventListener('click', () => {
    switcher.classList.toggle('checked');
    if (switcher.classList.contains('checked')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });

  if (getThemeStorage === 'dark') {
    document.documentElement.classList.add('dark');
    switcher.classList.add('checked');
  } else if (getThemeStorage === 'light') {
    document.documentElement.classList.add('light');
    switcher.classList.remove('checked');
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.add('light');
  }
})();
