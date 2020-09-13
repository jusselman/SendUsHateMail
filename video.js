const video = document.getElementById('video');
const vidBtn = document.getElementById('playVid');
const stopBtn = document.getElementById('stopVid');
const timebar = document.getElementById('timebar');
const timestamp = document.getElementById('timestamp');
const playIco = document.getElementById('playIco');



// Pause and Play functionality //
function toggleStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// switch between play btn and pause btn //
function togglePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// update timebar //
function updateTimebar() {
    timebar.value = (video.currentTime / video.duration) * 100;
    // get mins//
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;


}

// set video time to timebar //
function setTimebar() {
    video.currentTime = (+timebar.value * video.duration) / 100;
}

// stop function //
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}





// videoplayer event Listeners //
video.addEventListener('click', toggleStatus);
video.addEventListener('pause', togglePlayIcon);
video.addEventListener('click', togglePlayIcon);
video.addEventListener('timeupdate', updateTimebar);

vidBtn.addEventListener('click', toggleStatus);

stopBtn.addEventListener('click', stopVideo);

timebar.addEventListener('change', setTimebar);
