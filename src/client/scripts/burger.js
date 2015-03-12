$(".cross").hide();
$("#burger-menu").hide();
$(".hamburger").click(function () {
    $("#burger-menu").slideToggle("slow", function () {
        $(".hamburger").hide();
        $(".cross").show();
    });
});

$(".cross").click(function () {
    $("#burger-menu").slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();
    });
});