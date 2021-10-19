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

function clicked() {
  var dropdown = document.getElementById("dropdown-content");
  var dropdownimg = document.getElementById("dropdownimg");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
    dropdownimg.style.transform = "rotate(90deg)";
  } else {
    dropdown.style.display = "none";
    dropdown.style.height = null;
    dropdownimg.style.transform = null;
  }
}