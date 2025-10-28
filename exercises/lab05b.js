function changeEnvironment(mode) {
    if (mode == "night") {
        $("body").css("background-color", "darkblue");
        $("body").css("color", "white");
        $("#message").html("It’s nighttime. The stars are out 🌙");
    } else if (mode == "day") {
        $("body").css("background-color", "lightyellow");
        $("body").css("color", "black");
        $("#message").html("It’s daytime! The sun is shining ☀️");
    } else {
        $("#message").html("Hmm... I don't know this mode!");
    }
}

$("#day-button").click(function () {
    changeEnvironment("day");
});

$("#night-button").click(function () {
    changeEnvironment("night");
});
