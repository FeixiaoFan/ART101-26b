let count = 0;

let buttonCreature = {
    name: "Little Ica",
    species: "Gluttonous Pegasus",
    favoriteFood: "Stellar Jades",
    moods: ["hungry", "elated", "hyper", "sleepy", "inspired", "awe-struck"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";

    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});