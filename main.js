import './styles/styles.scss';
import toggleNavBarInit from './scripts/toggleNavBar.js';

const mediaQuery = window.matchMedia("(max-width: 1280px)");

mediaQuery.onchange = (e) => {
  if (e.matches) {
    console.log('matches on resize');
    toggleNavBarInit();
  } else {
    console.log('not match')
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (mediaQuery.matches) {
    console.log('matches on load');
    toggleNavBarInit();
  }
});

