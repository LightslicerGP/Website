window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  loader.className += " hidden";
  setTimeout(function() {
    loader.remove();
  }, 1500);
})



const button = document.getElementById("navbutton");
const navlinks = document.querySelector("header");

button.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  button.classList.toggle("open");
});