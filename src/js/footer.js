//go through all .footer-link elements except those with .t3 class.
$(".footer-link:not(.t3)").hover(
    function () {
        // Set opacity to 40% for all .footer-link elements.
        $(".footer-link:not(.t3)").css("opacity", "0.4");
        // Set opacity to 100% for the hovered element.
        $(this).css("opacity", "1");
    },
    function () {
        // Restore opacity to 100% for all .footer-link elements when not hovered.
        $(".footer-link:not(.t3)").css("opacity", "1");
    }
);