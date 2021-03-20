
    // $("[data-scroll]").on("click", function(event) {
    //     event.preventDefault();
  
    //     var elementId = $(this).data('scroll'),
    //     elementOffset = $(elementId).offset().top;
  
    //     $("html, body").animate({
    //       scrollTop : elementOffset
    // },



        /* Smooth scroll */
        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();
    
            var $this = $(this),
            elementId = $this.data('scroll'),
            elementOffset = $(elementId).offset().top;
    
            $("#nav a").removeClass("active");
            $this.addClass("active");
    
            $("html, body").animate({
                scrollTop:  elementOffset
            }, 300);

        });