$("#face").click(function () {
    $(this).addClass('spin').one("animationend", function () {
        $(this).removeClass('spin');
    });
});

$(".navTitles").click(function () {
    $("#footer").fadeOut();
});

$(".menuIcon").click(function () {
    $("#footer").fadeIn();
});

$(".menuIcon").click(function () {
    $(".menuIcon, .navTitles").toggleClass("openMenu");
});

$(".navTitles").click(function () {
    $(".menuIcon, .navTitles").removeClass("openMenu");
});

$(".menuIcon").click(function () {
    $("#aboutContent, #workContent, #funContent").fadeOut();
});

$("#about").click(function () {
    $("#aboutContent").fadeIn();
});

$("#work").click(function () {
    $("#workContent").fadeIn();
});

$("#fun").click(function () {
    $("#funContent").fadeIn();
});
