

/* var mySwiper = new Swiper ('.swiper-container', {
      pagination: 'swiper-pagination'
  })    */

$(function() {
    $(".rslides").responsiveSlides();
  });


$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true,
      mouseDrag : false,
  
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

/*$(document).ready(function() {
 
  $("#owl-example").owlCarousel();
 
});*/