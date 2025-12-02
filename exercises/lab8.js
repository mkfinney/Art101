$(document).ready(() => {
  const $creature = $("#creature");
  const $status = $("#status");
  const $nameInput = $("#name-input");
  const $renameBtn = $("#rename-btn");

  // CLICK EVENT
  $creature.on("click", () => {
    $status.text("You clicked me! 🐾");
    $creature.css("background", "lavender");
  });

  // HOVER EVENT
  $creature.hover(
    () => $status.text("You’re close... 👀"),
    () => $status.text("You left me :(")
  );

  // DOUBLE CLICK EVENT
  $creature.on("dblclick", () => {
    $status.text("You woke me up!! 😳");
    $creature.css("transform", "scale(1.2)");
  });

  // KEYPRESS EVENT
  $(document).on("keydown", (event) => {
    $status.text("You pressed: " + event.key);
  });

  // MOUSEMOVE EVENT — creature follows cursor
  $(document).on("mousemove", (event) => {
    $creature.css({
      left: event.pageX - $creature.width() / 2,
      top: event.pageY - $creature.height() / 2
    });
  });

  // RENAME FEATURE — works with button or Enter key
  function renameCreature() {
    const name = $nameInput.val().trim();
    if (name) {
      $status.text(`You named your creature: ${name}`);
      $creature.text(name); // shows name inside the box
    } else {
      $status.text("Please type a name!");
      $creature.text(""); // clears previous name if input empty
    }
  }

  // Click button
  $renameBtn.on("click", renameCreature);

  // Press Enter inside input box
  $nameInput.on("keypress", (event) => {
    if (event.key === "Enter") {
      renameCreature();
    }
  });
});
