$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
    elementId = $this.data('scroll'),
    elementOffset = $(elementId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop:  elementOffset
    }, 1000);

});


// nav togle
$("#nav-toggle ").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});
