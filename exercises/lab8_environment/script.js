// Creature 1 follows mouse
$(document).mousemove(function(event) {
  $("#creature1").css({
    left: event.pageX - 50,
    top: event.pageY - 50
  });
});

// Creature 2 double-click fades it in/out
$("#creature2").dblclick(function() {
  $(this).fadeToggle(500);
  $("#status").text("Creature 2 just disappeared or reappeared!");
});

// Creature 3 hover grows/shrinks
$("#creature3").hover(
  function() { $(this).css("transform", "scale(1.5)"); },
  function() { $(this).css("transform", "scale(1)"); }
);

// Rename creature using input
$("#rename-btn").click(function() {
  const name = $("#name-input").val();
  if(name) {
    $("#status").text("You named the first creature: " + name);
  } else {
    $("#status").text("Please type a name!");
  }
});
