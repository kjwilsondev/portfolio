AOS.init({});

(async () => {
  // Let's go
  //   fadeIn(title);
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene, {
    relativeInput: false,
    hoverOnly: false,
    pointerEvents: true,
    precision: 0.01,
  });
  //   if ($(window).width() > 640) { //set up breaking point

  //     $('#scene').parallax(); // this or any other code you need

  // }
})();

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 10) {
//     $("#navBar").addClass("floatingNav");
//   } else {
//     $("#navBar").removeClass("floatingNav");
//   }
// });
