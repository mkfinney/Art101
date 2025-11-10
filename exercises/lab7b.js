
$(".color-box").click(function () {
    $(this).animate({
        width: "180px",
        height: "180px"
    }, 200).animate({
        width: "150px",
        height: "150px"
    }, 200);
});


$("#hide-btn").click(function () {
    $(".color-box").eq(1).fadeOut(800);
});

