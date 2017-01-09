$(document).ready(function(){

  $('.header__hamburger, .overlay').on('click', function(){
    $('.mobileNav').toggleClass('mobileNav--open');
    $('.overlay').toggleClass('overlay--visible');
  })

});