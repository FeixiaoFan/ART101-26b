// Variables and tables with values to be used for functions

let count = 0;

let titleVals = {
    title: "Somewhere Out in the Vast Universe",
    description: "A Romantic Story"
};

let cyreneNames = ["Cyrene", "Demiurge", "Elysia?", "Mem", "PhiLia093"];

let cyreneInfo = {
    title: "Information",
    Introduction: "Hi~ Please call me Cyrene.",
    Mood: "mood: inspired",
    Element: "element: Ice",
    Path: "path: Remembrance",
    Rarity: "rarity: 5 Star",
    Location: "location: Amphoreus"
};

// Using the values in titleVals and displaying them

$("#button-1").click(function(){
    let message = "<h1>" + titleVals.title + "</h1>";
    message = message + "<p>" + titleVals.description + "</p>";

    $("#meetcyrene").html(message);
});

// Using all the values within the cyreneNames table and displaying them

$("#button-2").click(function(){
    let message = "<h2>" + cyreneNames + "</h2>";

    $("#meetcyrene").html(message);
});

// Using the cyreneInfo values to display

$("#button-3").click(function(){
    let message = "<h2>" + cyreneInfo.title + "</h2>";
    message = message + "<p>" + cyreneInfo.Introduction + "</p>";
    message = message + "<p>" + cyreneInfo.Mood + "</p>";
    message = message + "<p>" + cyreneInfo.Element + "</p>";
    message = message + "<p>" + cyreneInfo.Path + "</p>";
    message = message + "<p>" + cyreneInfo.Rarity + "</p>";
    message = message + "<p>" + cyreneInfo.Location + "</p>";

    $("#meetcyrene").html(message);
});

// Button for incrementing the pull count and updating the text based on the count

$("#button-4").click(function(){
    let message = "<h2>Pull Cyrene!</h2>";
    count = count + 1;
    message = message + "<p> You pulled for Cyrene " + count + " times! </p>"

    $("#meetcyrene").html(message);
});

// Function for going to different regions based on what the user inputs

function travel() {
    let input = prompt("Where do you want to go?");

    if (input == "Aedes Elysiae") {
        $("body").css("background-image", "url(AedesElysiae.png)");
    }

    else if (input == "Okhema") {
        $("body").css("background-image", "url(Okhema.webp)");
    }

    else { // If the input does not match one of the above values, defaults to this
        $("body").css("background-image", "url(AMPHOREUS.webp)");
    }
}

// Button that uses the travel function to go to the different regions

$("#button-5").click(function() {
    travel();
});

$('.text').hover(
    function() {
        $(this).addClass('enlarged');
    },
    function() {
        $(this).removeClass('enlarged');
    }
);