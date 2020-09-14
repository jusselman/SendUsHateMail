// Pages //
const aboutPage = document.getElementById('about');
const contactPage = document.getElementById('contact');
const podcastsPage = document.getElementById('podcasts');
const mainPage = document.getElementById('main');
const mainBack = document.getElementById('mainBack');
const vidEl = document.getElementById('video');
const logoFlip = document.getElementById('logoFlip');


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

function toggleFlip() {
    mainPage.classList.toggle('main-view');
    mainBack.classList.toggle('main--back-view');
    vidEl.classList.toggle('video-view');
    logoFlip.classList.toggle('video-view');
}