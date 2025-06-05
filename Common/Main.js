window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.className += " hidden";
  setTimeout(function () {
    loader.remove();
  }, 1000);
});
