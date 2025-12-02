function askNumber(secretNumber) {
    const userGuess = Number(prompt("Guess 1–10?"));

    if (userGuess === secretNumber) {
        $("#output").html("🎉 You got it!");
    } else if (userGuess < secretNumber) {
        $("#output").html("Too low! Try a higher number.");
    } else if (userGuess > secretNumber) {
        $("#output").html("Too high! Try a lower number.");
    } else {
        $("#output").html("Please enter a valid number.");
    }
}

$("#good-button").on("click", () => askNumber(5));

