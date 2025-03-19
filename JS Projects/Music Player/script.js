let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlBtn = document.getElementById("ctrlBtn")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlBtn.classList.contains("fa-pause")) {
        song.pause();
        ctrlBtn.classList.remove("fa-pause")
        ctrlBtn.classList.add("fa-play")
    }
    else {
        song.play();
        ctrlBtn.classList.add("fa-pause")
        ctrlBtn.classList.remove("fa-play")
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.currentTime = progress.value;
}