let myCommutes = ["friend drives me", "dad drives me", "bike", "e-bike", "lime scooter", "mom drives me"];

let myFavouriteCommute = {
    type: "E-bike",
    route: 5,
    print: "Quickest way around town",
    hasMiddleDoor: false,
    drivers: ["Mom", "Dad", "Sister"]
};

let megaSentence = "<p>My two top commutes from the array are: " + myCommutes[2] + ", " + myCommutes[5] + "</p>";

megaSentence += "<p>My favourite commute possesses such characteristics: type - " 
                + myFavouriteCommute.type 
                + ", route number " 
                + myFavouriteCommute.route 
                + ", the best driver: " 
                + myFavouriteCommute.drivers[0] 
                + "</p>";

$("#output").html(megaSentence);
