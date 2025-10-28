function changeMood(mood) {
    if (mood == "happy") {
        $("#character").html("😄");
        $("#message").html("I am feeling happy!");
        $("body").css("background-color", "lightyellow");
    } 
    else if (mood == "angry") {
        $("#character").html("😡");
        $("#message").html("Grrrr");
        $("body").css("background-color", "salmon");
    } 
    else if (mood == "sad") {
        $("#character").html("😢");
        $("#message").html("Waaaa");
        $("body").css("background-color", "lightblue");
    } 
    else {
        $("#character").html("😐");
        $("#message").html("The character is neutral.");
        $("body").css("background-color", "#f0f0f0");
    }
}

$("#happy-button").click(function() {
    changeMood("happy");
});

$("#angry-button").click(function() {
    changeMood("angry");
});

$("#sad-button").click(function() {
    changeMood("sad");
});
