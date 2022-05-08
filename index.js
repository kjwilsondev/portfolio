AOS.init({});

// Swiper Card Functions
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

// change this code in order to:
// switch button on left to right side as screen expands
// $(window).scroll(function () {
//   if ($(window).scrollTop() > 10) {
//     $(".profile").addClass("profile-smaller");
//   } else {
//     $(".profile").removeClass("profile-smaller");
//   }
// });

// for removing logo and first left side button
// var element = document.getElementById("myDiv");
// element.style.visibility = "visible";

// var element = document.getElementById("myDIV");
// element.classList.remove("mystyle");
