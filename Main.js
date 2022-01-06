/*
const youtubeKey = 'AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA'
const youtubeUser = 'UCiGIp50poRZRIAuRt604uRg'
*/
const subCount = document.getElementById('subcount');
const viewCount = document.getElementById('viewcount');
const videoCount = document.getElementById('videocount');

let getYTInfo = () => {
  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCiGIp50poRZRIAuRt604uRg&key=AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      subCount.innerHTML = data.items[0].statistics.subscriberCount;
      viewCount.innerHTML = data.items[0].statistics.viewCount;
      videoCount.innerHTML = data.items[0].statistics.videoCount;
    })
}
getYTInfo();

var modal = document.getElementById("temp");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
  document.getElementById("temp").modal.style.display = "none";
*/