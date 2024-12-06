document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const collapsibleMenu = document.getElementById("collapsible-menu");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add("top-0");
      navbar.classList.add("left-0");
      navbar.classList.remove("-translate-x-1/2");

      navbar.classList.remove("container");

      navbar.querySelector("nav").classList.remove("rounded-full");
      navbar.querySelector("nav").classList.add("w-full");
      navbar.querySelector("nav").classList.add("shadow-lg");
      navbar.querySelector("nav").classList.add("border-b");
      navbar.classList.add("animate-navbar");
      navbar.querySelector("#collapsible-menu").classList.remove("mt-3");
      navbar.querySelector("#collapsible-menu").classList.add("shadow-md");
    } else {
      navbar.classList.remove("top-0");
      navbar.classList.remove("left-0");
      navbar.classList.remove("animate-navbar");
      navbar.classList.add("-translate-x-1/2");
      navbar.classList.add("left-1/2");

      navbar.classList.add("container");

      navbar.querySelector("nav").classList.add("rounded-full");
      navbar.querySelector("nav").classList.remove("w-full");
      navbar.querySelector("nav").classList.remove("border-b");

      navbar.querySelector("#collapsible-menu").classList.add("mt-3");
      navbar.querySelector("#collapsible-menu").classList.remove("shadow-md");
    }
  });
});
