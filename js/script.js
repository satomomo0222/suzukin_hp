 // left menu
 $('button.gmenu').on('click', function(){
  $(this).toggleClass('-open');
  $('.gnav').toggleClass('-open');
});


// ビデオのミュート操作
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

// fadein
$(window).scroll(function(){
  $('.fadein').each(function(){
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100){
      $(this).addClass('scrollin');
    } else {
      $(this).removeClass('scrollin');
    }
  });
});