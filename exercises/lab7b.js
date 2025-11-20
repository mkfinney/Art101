// LAB 7B — jQuery Page Manipulations

// 1. Change text when a button is clicked
$("#change-text-btn").click(function() {
    $("#text-to-change").text("Text has been updated!");
});

// 2. Toggle visibility of an element
$("#toggle-btn").click(function() {
    $("#toggle-element").toggle();
});

// 3. Hover effect
$("#hover-box").hover(
    function() { $(this).css("background-color", "lightblue"); },
    function() { $(this).css("background-color", "pink"); }
);

// 4. Add a class when clicked
$("#add-class-btn").click(function() {
    $("#class-target").addClass("highlighted");
});

// 5. Remove a class when clicked
$("#remove-class-btn").click(function() {
    $("#class-target").removeClass("highlighted");
});

// 6. Append new element to a container
$("#append-btn").click(function() {
    $("#container").append("<p>New paragraph added!</p>");
});

// 7. Change CSS dynamically
$("#css-btn").click(function() {
    $("#style-target").css({
        "color": "red",
        "font-weight": "bold",
        "font-size": "18px"
    });
});

// 8. Double click effect
$("#dblclick-box").dblclick(function() {
    $(this).css("border", "3px solid purple");
});

// 9. Keypress event on input
$("#name-input").keydown(function(event) {
    $("#status").text("You typed: " + event.key);
});
