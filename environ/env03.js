
let envTitle = "<h2>Forests Edge</h2>";


let envElements = ["rocks", "fog", "fallen leaves", "small stream", "hidden paths"];


let characters = [
    { name: "Red Fox", type: "spirit animal", power: "cleverness" },
    { name: "Lamb", type: "tattoo inspiration", power: "calm presence" }
];


$("#output").append(envTitle);


$("#output").append("<p>Environment elements: " + envElements.join(", ") + "</p>");


characters.forEach(function(char) {
    $("#output").append("<p>Character: " + char.name + ", Type: " + char.type + ", Power: " + char.power + "</p>");
});
