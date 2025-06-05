/*
const youtubeKey = 'AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA'
const youtubeUser = 'UCiGIp50poRZRIAuRt604uRg'
*/

let getYTInfo = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCiGIp50poRZRIAuRt604uRg&key=AIzaSyALqIoHfT_TGIAm3cGfblgX2F0PmtqRxuA`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("subcount").textContent =
        data.items[0].statistics.subscriberCount;
      document.getElementById("viewcount").textContent =
        data.items[0].statistics.viewCount;
      document.getElementById("videocount").textContent =
        data.items[0].statistics.videoCount;
    });
};

getYTInfo();

/* modal
  var modal = document.getElementById("temp");
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }; */
