/////cookies

//set a cookie name with a value

var LightslicerGP = Math.ceil(Math.random() * (1000 - 0) + 0);

document.cookie = "name=" + LightslicerGP;
document.cookie = "id=24";

//set the word/variable(const) "cookies" to be the list of cookies on the page
const cookies =
  document.cookie.split(';').map(
    cookie => cookie.split('=')
  ).reduce(
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