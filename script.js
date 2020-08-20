// Pages //
const aboutPage = document.getElementById('about');
const contactPage = document.getElementById('contact');
const podcastsPage = document.getElementById('podcasts');

// Podcast Player functionality //
const podcastCtn = document.getElementById('podcast-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const playbar = document.getElementById('playbar');
const playbarCtn = document.getElementById('playbar-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const wave = document.getElementById('wave');


const podcasts = ['Episode1', 'Episode2', 'Episode3'];

// keep order of podcast //
let podcastIdx = 0;

// load podcast details to DOM //
loadPodcast(podcasts[podcastIdx]);

// update details //
function loadPodcast(podcast) {
    title.innerText = podcast;
    cover.src = `img/${podcast}.jpg`;
    audio.src = `podcasts/${podcast}.mp3`;
}

// Podcast Player controls //

// Play
function playPodcast() {
    podcastCtn.classList.add('play');
    wave.classList.add('wave-play');

    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// Pause
function pausePodcast() {
    podcastCtn.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
    wave.classList.remove('wave-play');

}

// Last Track
function prevTrack() {
    podcastIdx--;

    if (podcastIdx < 0) {
        podcastIdx = podcasts.length - 1;
    }

    loadPodcast(podcasts[podcastIdx]);

    playPodcast();
}

// Next Track 
function nextTrack() {
    podcastIdx++;

    if (podcastIdx > podcasts.length - 1) {
        podcastIdx = 0;
    }

    loadPodcast(podcasts[podcastIdx]);

    playPodcast();
}

// Playbar //
function updatePlaybar(e) {
    const { duration, currentTime } = e.srcElement;
    const playPercent = (currentTime / duration) * 100;
    playbar.style.width = `${playPercent}%`

    if (playPercent === 100) {
        nextTrack();
    }
}

// Jump to click on playbar //
function setPlaybar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


// Funcionality to switch among pages //
function toggleAbout() {
    aboutPage.classList.toggle('about-view')
}

function toggleContact() {
    contactPage.classList.toggle('contact-view')
}

function togglePodcasts() {
    podcastsPage.classList.toggle('podcasts-view')
}

// Switch pages with keydown //


// Event Listeners //
// Play and Pause //
playBtn.addEventListener('click', () => {
    const playing = podcastCtn.classList.contains('play');

    if (playing) {
        pausePodcast();
        // wave.classList.remove('wave-play');
    } else {
        playPodcast();
        // wave.classList.add('wave-play');
    }
});

// Change Song //
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

// Play bar //
audio.addEventListener('timeupdate', updatePlaybar);

// Jump to click on playbar //
playbarCtn.addEventListener('click', setPlaybar);


