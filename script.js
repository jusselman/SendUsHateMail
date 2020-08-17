const aboutPage = document.getElementById('about');
const contactPage = document.getElementById('contact');
const podcastsPage = document.getElementById('podcasts')



function toggleAbout() {
    aboutPage.classList.toggle('about-view')
}

function toggleContact() {
    contactPage.classList.toggle('contact-view')
}

function togglePodcasts() {
    podcastsPage.classList.toggle('podcasts-view')
}