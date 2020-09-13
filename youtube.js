

// $(document).ready(function () {

//     var key = 'AIzaSyCZDbEc3BzFvV3tJ_MUDRm4GDZTRoowCHk';
//     var playlistId = 'PLMnplcJQlwfvWOqC432uoPXdrFpkU4bVq';
//     var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

//     var options = {
//         part: 'snippet',
//         key: key,
//         maxResults: 20,
//         playlistId: playlistId
//     }

//     loadVideos();

//     function loadVideos() {
//         $.getJSON(URL, options, function (data) {
//             console.log(data);
//             var id = data.items[0].snippet.resourceId.videoId;
//             mainVideo(id);
//             playlist(data);
//         })
//     }

//     function mainVideo(id) {
//         $('#video').html(`
//         <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         `);
//     }

//     function playlist(data) {

//         $.each(data.items, function (i, item) {
//             var thumb = item.snippet.thumbnails.default.url;
//             var title = item.snippet.title;
//             var desc = item.snippet.description.substring(0, 100);
//             var vid = item.snippet.resourceId.videoId;

//             $('main').append(`
//             <article class="item" data-key="${vid}">
//                 <img src="${thumb}" alt="" class="thumb">
//                 <div class="details">
//                     <h4>${title}</h4>
//                     <p>${desc}</p>
//                 </div>
//             </article>
//                 `)
//         });


//         $('main').on('click', 'article', function () {
//             var id = $(this).attr('data-key');
//             mainVideo(id);
//         });

//     }



// });