import { addClass, removeClass } from "./helpers.js";

export default function toggleNavBarInit() {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const navItems = sidebar.querySelectorAll('.sidebar__nav-list li');
  let isOpen = false;

  removeClass(body, 'no-scroll');

  sidebar.addEventListener('click', (event) => {
    event.preventDefault();

    if (!isOpen) {
      toggleSidebar();
    }
  });

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (isOpen) {
        navItems.forEach(el => removeClass(el, 'active'));
        addClass(e.currentTarget, 'active');
      }
    });
  });

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (isOpen) {
        navItems.forEach(el => removeClass(el, 'active'));
        addClass(e.currentTarget, 'active');
      } else {
        e.preventDefault();
        toggleSidebar();
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (isOpen && !sidebar.contains(event.target)) {
      isOpen = false;
      removeClass(sidebar, 'active');
      removeClass(body, 'no-scroll');
    }
  });

  function toggleSidebar() {
    isOpen = !isOpen;
    isOpen ? addClass(sidebar, 'active') : removeClass(sidebar, 'active');
    isOpen ? addClass(body, 'no-scroll') : removeClass(sidebar, 'no-scroll');
  }
}