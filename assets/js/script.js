// var slideIndex = 1;
// showSlides(SlideIndex);

// function plusSlide(n) {
//     showSlides(slideIndex += n);

// }
// function currentSlide(n) {
//      showSlides(slideIndex = n);
// }

// function showSlides(n){
//     var i;
//     var slides = document.getElementById("next");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//          slides[i].style.display = "none"; 
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1],style.display = "block";
//   dots[slideIndex-1].className += " active";
    
// }

// fixed

$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        cheakScroll(scrollOffset);

       $(window).on("scroll" ,function() {
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


// menu toglle
$("#nav-toggle ").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});
