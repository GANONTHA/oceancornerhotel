const spans = document.querySelectorAll(".burger-menu");
const lists = document.querySelectorAll(".nav-menu");
const navList = document.querySelector("ul");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", () => {
  //Toggling the class Open in each element in order to make the menu disappear onlick and appear again after clicking again
  spans.forEach((span) => {
    span.classList.toggle("open");
  });
  lists.forEach((menu) => {
    menu.classList.toggle("open");
  });
  navList.classList.toggle("open");
});
