(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    
    

  }); // end of document ready
})(jQuery); // end of jQuery name space

var boxes = document.getElementsByClassName("box");
var triangles = document.getElementsByClassName('triangle');
var blobs = document.getElementsByClassName('blob');
TweenMax.staggerTo(boxes, 3, {x:800, y:200}, .2);