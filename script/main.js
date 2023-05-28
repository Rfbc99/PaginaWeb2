$(document).ready(function() {
  setInterval(function(){
    $(' .SlideInterno a:first-child').fadeOut(500)
    .next('a').fadeIn(800)
    .end().appendTo('.SlideInterno');
  }, 8800);
});

$(document).ready(function() {
  setInterval(function(){
    $(' .SlideCarro a:first-child').fadeOut(500)
    .next('a').fadeIn(800)
    .end().appendTo('.SlideCarro');
  }, 8800);
});
