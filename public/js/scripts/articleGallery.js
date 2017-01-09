$(document).ready(function(){

  if(typeof galleryLinks!="undefined" && galleryLinks.length > 1){
    $('.article__openGallery').addClass('article__openGallery--visible');

    $('.article__openGallery').on('click',function(){
      var gallery = blueimp.Gallery(galleryLinks, {
        container: '#blueimp-gallery',
        carousel: true,
        startSlideshow: false,
        closeOnSlideClick: true,
        closeOnEscape: true,
        closeOnSwipeUpOrDown: true,
        disableScroll: true,
        enableKeyboardNavigation: true,
      });
    });

  }



});