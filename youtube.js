$(document).ready(function () {

    var key = 'AIzaSyCZDbEc3BzFvV3tJ_MUDRm4GDZTRoowCHk';
    var playlistId = 'PLMnplcJQlwfvWOqC432uoPXdrFpkU4bVq';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVideos();

    function loadVideos() {
        $.getJSON(URL, options, function (data) {
            console.log(data);
            var id = data.items[0].snippet.resourceId.videoId;
            mainVideo(id);
        })
    }

    function mainVideo(id) {
        $('#video').html(`
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `);
    }
});