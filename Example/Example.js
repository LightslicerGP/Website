window.addEventListener("load", function() {
  const loader = this.document.querySelector(".loader");
  loader.className += " hidden";
})

const button = document.getElementById("navbutton");
const navlinks = document.querySelector("header");
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

button.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  button.classList.toggle("open");
});

function clicked() {
  var dropdown = document.getElementById("dropdown-content");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}