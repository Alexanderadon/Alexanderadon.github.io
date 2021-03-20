$(function() {
    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

    cheakScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        cheakScroll(scrollOffset);
        
    });
    function cheakScroll(scrollOffset) {
        
        if (scrollOffset >= introH) {
            header.addClass("header--fixed");
        }
        else {
            header.removeClass("header--fixed")
        }
         
       }
       

});