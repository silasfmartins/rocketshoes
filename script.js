const nav = document.querySelector(".nav-list");
const btnMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector("#menu-mobile");
const bag = document.querySelector("#bag");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active")
  bag.classList.toggle("active")
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if(!targetElement.contains(event.target)) {
      targetElement.removeAttribute('data-target');
      html.addEventListener("click", handleHTMLClick);
      html.addEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }

  if (!targetElement.hasAttribute('data-target')) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "")
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu")
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu")
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);