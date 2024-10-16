const navToggle = document.querySelector(".nav-toggle");//selelecionamos el selector de html
const navMenu = document.querySelector(".nav-menu");//selelecionamos el selector de html

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});