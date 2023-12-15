const spans = document.querySelectorAll(".burger-menu");
const lists = document.querySelectorAll(".nav-menu");
const navList = document.querySelector(".mobile-menu ul");
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelectorAll(".mobile-menu ul li");
const btn = document.querySelector(".check-availability");

console.log(navLinks);
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

// POPUP
const popup = document.getElementById("popup");

function openPopup() {
  btn.innerHTML = "submitting...";
  setTimeout(() => {
    popup.classList.add("open-popup");
    btn.innerHTML = "  Check Availability";
  }, 2000);
}

function closePopup() {
  popup.classList.remove("open-popup");
}
