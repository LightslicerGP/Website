const button = document.getElementById("navbutton");
const navlinks = document.querySelector("header");

button.addEventListener("click", () => 
  {
    navlinks.classList.toggle("open");
    button.classList.toggle("open");
  }
);