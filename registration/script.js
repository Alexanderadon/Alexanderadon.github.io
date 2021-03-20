$(document).ready(function () {
    $(".dws-form").on("click", ".tab", function () {
    //    Удаляем класс
        $(".dws-form").find(".active").removeClass("active");
    //    Добавляем класс
        $(this).addClass("active");
        $(".tab-form").eq($(this).index()).addClass("active");
    });
});