// CLICK EVENT
$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $(this).css("background", "lavender");
});

// HOVER EVENT
$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); },
  function() { $("#status").text("You left me :("); }
);

// DOUBLE CLICK EVENT
$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
  $(this).css("transform", "scale(1.2)");
});

// KEYPRESS EVENT
$(document).keydown(function(event) {
  $("#status").text("You pressed: " + event.key);
});

// MOUSEMOVE EVENT
$(document).mousemove(function(event) {
  $("#creature").css({
    left: event.pageX - 60,
    top: event.pageY - 60
  });
});
