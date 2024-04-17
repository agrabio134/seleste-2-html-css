$(document).ready(function() {

    var owl = $("#owl-demo1");

    owl.owlCarousel({
        items: 2, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [360, 1] // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function() {
        owl.trigger('next.owl.carousel');
    })
    $(".prev").click(function() {
        owl.trigger('prev.owl.carousel');
    })
    $(".play").click(function() {
        owl.trigger('play.owl.autoplay', [1000]);
    })
    $(".stop").click(function() {
        owl.trigger('stop.owl.autoplay');
    })

});
