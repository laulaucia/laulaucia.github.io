(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var rows = document.getElementsByClassName("row-2");
    for(var row of rows){row.closest(".material-placeholder").classList.add("row-2")};
    
    

  }); // end of document ready
})(jQuery); // end of jQuery name space

var boxes = document.getElementsByClassName("box");
var triangles = document.getElementsByClassName('triangle');
var blobs = document.getElementsByClassName('blob');
TweenMax.staggerTo(boxes, 3, {x:800, y:200}, .2);
