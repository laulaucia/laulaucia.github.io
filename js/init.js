  document.addEventListener('DOMContentLoaded', function() {

     var intro = gsap.timeline({}); 
intro.from("#all-star", {scale: 200, duration: 2});
intro.from("h1", {x: -100, duration: 1});


var starLine = gsap.timeline({ yoyo: true, repeat: 2, delay: 1}).reverse();
starLine.to("#seafoamStar", {rotation: 36, transformOrigin:"50% 50%", duration: 1}, "<");
starLine.fromTo("#pinkCircle",{scale:0, transformOrigin:"50% 50%"}, {scale: 1.1, duration: 2, x:0, y:0}, "<");
starLine.to("#whiteStar", {rotation: -396, duration: 2, transformOrigin:"50% 50%", ease: "expo"}, "<");
starLine.fromTo("#lavenderCircle",{scale:0, transformOrigin:"50% 50%"}, {scale: 1.1, duration: 1, x:0, y:0}, "<");
  
document.getElementById("all-star").addEventListener("click",     function() {
  console.log("clicked");
  starLine.reversed(!starLine.reversed());
});
     M.AutoInit();
    // var elems = document.querySelectorAll('.materialboxed');
    // var instances = M.Materialbox.init(elems);
    //     var paralaxelems = document.querySelectorAll('.parallax');
    // var instances = M.Parallax.init(paralaxelems);
  });
