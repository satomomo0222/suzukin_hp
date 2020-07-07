 // left menu
 $('button.gmenu').on('click', function(){
  $(this).toggleClass('-open');
  $('.gnav').toggleClass('-open');
});


var video = document.getElementById('video');

$('.sound-btn').on('click', function(){
  $('.sound-btn i').toggleClass('fa-volume-mute');
  $('.sound-btn i').toggleClass('fa-volume-up');
  var video = document.getElementById('video');
  if(video.muted){
    video.muted = false;
  }else{
    video.muted = true;
  }
});

// var mute = document.getElementById('mute');
// mute.addEventListener('click', function () {
//     if(video.muted){
//         video.muted = false;
//     }else{
//         video.muted = true;
//     }
// });