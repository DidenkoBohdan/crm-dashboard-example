import './styles/styles.scss';
import toggleNavBarInit from './scripts/toggleNavBar.js';

const mediaQuery = window.matchMedia("(max-width: 1280px)");

mediaQuery.onchange = (e) => {
  if (e.matches) {
    toggleNavBarInit();
  } else {
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (mediaQuery.matches) {
    toggleNavBarInit();
  }
});

