// xxs - max 400px
// xs - 401 - 599px
// sm - 600 - 899px
// lg - min 900px

var between = function (x, min, max) {
  return x >= min && x <= max;
}

var responsiveBg = {
  config : {
    xs: {min: 0, max: 400},
    sm: {min: 401, max: 599},
    md: {min: 600, max: 899},
    lg: {min: 900, max: 9999999},
    element: '.responsiveBg',
    loadedClass: 'responsiveBg--loaded'
  },

  range: null,

  init: function(){
    responsiveBg.run();
    $(window).on('resize', responsiveBg.run);
  },
  run: function(){
    // calculate current range
    var width = $(window).width();
    var range = responsiveBg.checkRange(width);
    if(responsiveBg.range != range){
      responsiveBg.range = range;
      responsiveBg.processImages();

    }
  },

  processImages: function(){
    $(responsiveBg.config.element).each(function(){
      var src = $(this).data(responsiveBg.range);
      if(src){
        var $el = $(this);
        var el = this;
        var image = new Image();
        image.onload = function(e){
          $el.css('background-image','url(' + src + ')').addClass(responsiveBg.config.loadedClass);
          // checking image if it is dark or bright to set proper logo on article page. crazy.
          if($('.articleLogo').length && $(window).width() > 1199){
            var canvas = $('<canvas />')[0];
            canvas.getContext('2d').drawImage(image, 0, 0, 500, 500, 0, 0, 500, 500);
            var pixels  = canvas.getContext('2d').getImageData(0, 0, canvas.width,canvas.height).data;
            var pixelCount = canvas.width * canvas.height;
            var sum = 0;
            var counter = 0;
            for (var i = 0, offset; i < pixelCount; i = i + 10) {
              offset = i * 4;
              sum += pixels[offset] +pixels[offset+1] +pixels[offset+2];
              counter += 3;
            }
            if(sum/counter > 127.5) $('.articleLogo').addClass('articleLogo--dark');
          }
          //end
        };
        image.src = src;
      }
    })
},

checkRange: function(w){
  if(between(w, responsiveBg.config.lg.min,responsiveBg.config.lg.max)){
    return 'lg';
  }else if(between(w, responsiveBg.config.md.min,responsiveBg.config.md.max)){
    return 'md';
  }else if(between(w, responsiveBg.config.sm.min,responsiveBg.config.sm.max)){
    return 'sm';
  }
  return 'xs';
}
};

$(document).ready(function(){
  responsiveBg.init();

});