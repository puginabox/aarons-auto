$(".cross-hamburger").hide();
$(".hamburger-menu").hide();
$(".hamburger-button").click(function () {
    $(".hamburger-menu").slideToggle(200, 'easeInOutQuart', function () {
        $(".hamburger-button").hide();
        $(".cross-hamburger").show();
    });
});
$(".cross-hamburger").click(function () {
    $(".hamburger-menu").slideToggle(200, 'easeInOutQuart', function () {
        $(".cross-hamburger").hide();
        $(".hamburger-button").show();
    });
});