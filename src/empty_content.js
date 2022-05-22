const button = document.querySelector(".mine");
const video = document.getElementById("video");
const close = document.querySelector(".close");

button.addEventListener('click', (e) => {
    console.log("clicked");
    video.classList.toggle("hidden");
    button.classList.toggle("hidden");
    close.classList.toggle("black");
    video.play();
})
close.addEventListener('click', (e) => {
    video.classList.toggle("hidden");
    button.classList.toggle("hidden");
    close.classList.toggle("black");
    video.pause();
    video.currentTime = 0;
})