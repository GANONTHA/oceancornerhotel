const spans = document.querySelectorAll(".burger-menu");
const lists = document.querySelectorAll(".nav-menu");
const navList = document.querySelector("ul");
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelectorAll(".mobile-menu ul li");

burgerMenu.addEventListener("click", () => {
  //Toggling the class Open in each element in order to make the menu disappear onlick and appear again after clicking again
  spans.forEach((span) => {
    span.classList.toggle("open");
  });
  lists.forEach((menu) => {
    menu.classList.toggle("open");
  });
  navList.classList.toggle("open");

  navLinks.forEach((li) => {
    li.classList.remove("close");
  });
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((li) => {
      li.classList.add("close");
    });
    spans.forEach((span) => {
      span.classList.toggle("open");
    });
    lists.forEach((menu) => {
      menu.classList.toggle("open");
    });
    navList.classList.toggle("open");
  });
});
