$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
    elementId = $this.data('collapse');

    $this.toggleClass("active");
});