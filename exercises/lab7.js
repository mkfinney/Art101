$(document).ready(() => {
    $(".nice-block span").on("click", function () {
        const $block = $(this).parent();
        const $paragraph = $block.find("p");
        const $span = $(this);

        // Animate paragraph expansion/collapse
        $paragraph.slideToggle(400);

        // Toggle "Show secret!" / "Hide secret!" with emoji
        $span.text($span.text() === "Show secret! 🔍" ? "Hide secret! ✨" : "Show secret! 🔍");

        // Change block background color when expanded/collapsed
        $block.toggleClass("more");
        if ($block.hasClass("more")) {
            $block.css("background", "#ffb6c1"); // lighter pink when expanded
        } else {
            $block.css("background", "pink"); // original pink
        }
    });
});
