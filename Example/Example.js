const hamburger = document.querySelector(".navbutton");
const navlinks = document.querySelector("header");

hamburger.addEventListener("click", () => 
  {
    navlinks.classList.toggle("open");
  }
);