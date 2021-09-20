const youtubeKey = 'AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA'
const youtubeUser = 'UCiGIp50poRZRIAuRt604uRg'
const subCount = document.getElementById('subcount')
const viewCount = document.getElementById('viewcount')
const videoCount = document.getElementById('videocount')

let getSubscribers = () => {
  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      subCount.innerHTML = data.items[0].statistics.subscriberCount;
    })
}
getSubscribers();

let getViews = () => {
  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      viewCount.innerHTML = data.items[0].statistics.viewCount;
    })
}
getViews();

let getVideos = () => {
  fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      videoCount.innerHTML = data.items[0].statistics.videoCount;
    })
}
getVideos();


var modal = document.getElementById("temp");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}