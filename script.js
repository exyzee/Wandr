function toggle(){
  var promovid= document.querySelector(".promovid")
  var video= document.querySelector("video")
  promovid.classList.toggle("active")
  video.pause();
  video.currentTime = 0;
} 