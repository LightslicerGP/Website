const button = document.getElementById("navbutton");
const navlinks = document.querySelector("header");

button.addEventListener("click", () => 
  {
    navlinks.classList.toggle("open");
    button.classList.toggle("open");
  }
);

function clicked() {
  var x = document.getElementById("dropdown-content");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}