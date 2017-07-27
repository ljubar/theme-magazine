$(document).ready(function(){

  $('.header__hamburger, .overlay').on('click', function(){
    $('.nav__wrap').toggleClass('nav__wrap--open');
    $('.overlay').toggleClass('overlay--visible');
  })

});