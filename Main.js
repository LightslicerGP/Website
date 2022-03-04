/*
const youtubeKey = 'AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA'
const youtubeUser = 'UCiGIp50poRZRIAuRt604uRg'
*/

let getYTInfo = () => {
  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCiGIp50poRZRIAuRt604uRg&key=AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      document.getElementById('subcount').innerHTML = data.items[0].statistics.subscriberCount;
      document.getElementById('viewcount').innerHTML = data.items[0].statistics.viewCount;
      document.getElementById('videocount').innerHTML = data.items[0].statistics.videoCount;
    })
}

getYTInfo();

var modal = document.getElementById("temp");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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