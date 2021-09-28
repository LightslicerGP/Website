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

///////////////LEARNING SECTION


/////cookies

//set a cookie name with a value
document.cookie = "name=LightslicerGP";
document.cookie = "id=24";

//set the word/variable(constant) "cookies" to be the list of cookies on the page
const cookies =
  document
  .cookie
  .split(';')
  .map(
    cookie => cookie.split('=')
  )
  .reduce(
    (accumulator, [key, value]) =>
    ({
      ...accumulator,
      [key.trim()]: decodeURIComponent(value)
    }), {}
  );

//then retreive the cookie with the name of a cookie
console.log(
  cookies.name + " " + cookies.id + " " + "< cookie that was set by, and retrieved by custom code"
);
//(all the cookies)
console.log(cookies);
console.log("^ all the cookies with the user");

/////delete the cookie

//creating the temporary cookie
document.cookie = "test=deletethis";
//documenting that the cookie exists
console.log(cookies.test);
//set the date to before computers existed or somth
document.cookie = "test=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// to prove its gone, go to inspect element> the "Application" tab> open the cookie dropdown> click cookies till you see the ones set





/////json files
const fs = require('fs');
  
// Data which will write in a file.
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' .
fs.writeFile('Output.txt', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})