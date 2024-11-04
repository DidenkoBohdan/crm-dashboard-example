function addClass(selector = {}, className = '') {
  selector.classList.add(className);
}

function removeClass(selector, className) {
  selector.classList.remove(className);
}

function toggleClass(selector, className) {
  selector.classList.toggle(className);
}

export { addClass, removeClass, toggleClass };