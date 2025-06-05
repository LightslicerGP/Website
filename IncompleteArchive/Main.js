function toggleNav() {
  var nav_icons = document.getElementById("nav_icons");
  var nav_button = document.getElementById("nav_button");
  var nav_button_icon = document.getElementById("nav_button_icon")

  if (nav_icons.style.display === "contents") {
    nav_icons.style.display = "none"
    nav_button.classList.remove("active")
    nav_button_icon.style.position = "fixed";
  } else {
    nav_icons.style.display = "contents"
    nav_button.classList.add("active");
    nav_button_icon.style.position = "initial";
  }
}

//This is loader

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.className += " hidden";
  setTimeout(function () {
    loader.remove();
  }, 1000);
});

/*
document.cookie = "name=Modal; expires=172800000; path=/";

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
    
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
};

function getcookie() {
  if (getCookie("Modal") == null) {
    console.log('Cookie exists');
  } else {
    console.log('cookie doesnt exist');
  };
}

getcookie();

expires is in milliseconds (for cookies) 1000ms x 60s x 60m x 24h x (days)

document.getElementById("temp").modal.style.display = "none";
*/
