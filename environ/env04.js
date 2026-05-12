
let count=0;

let envTitle = {
    title: "Somewhere Out in the Vast Universe",
    description: "A Romantic Story"
};

let cyreneNames =["Cyrene", "Demiurge", "Elysia?", "Mem", "PhiLia093"];

let mainEntity = {
    title: "Information",
    Introduction: "Hi~ Please call me Cyrene.",
    Mood: "mood: inspired",
    Element: "element: Ice",
    Path: "path: Remembrance",
    Rarity: "rarity: 5 Star",
    Location: "location: Amphoreus"
};

let pullCyrene = {
    title: "Pull Cyrene!",
    Pull: "You pulled for Cyrene " + count + "times!"
};

$("#button-1").click( function(){

        let message1 = "<h1>" + envTitle.title + "</h1>";
        message1 = message1 + "<p>" + envTitle.description + "</p>";

        $("#meetcyrene").html(message1);

});

$("#button-2").click( function(){

        let message1 = "<h2>" + cyreneNames + "</h2>";

        $("#meetcyrene").html(message1);

});

$("#button-3").click( function(){

        let message1 = "<h2>" + mainEntity.title + "</h2>";

         message1 = message1 + "<p>" + mainEntity.Introduction + "</p>";
         message1 = message1 + "<p>" + mainEntity.Mood + "</p>";
         message1 = message1 + "<p>" + mainEntity.Element + "</p>";
         message1 = message1 + "<p>" + mainEntity.Path + "</p>";
         message1 = message1 + "<p>" + mainEntity.Rarity + "</p>";
         message1 = message1 + "<p>" + mainEntity.Location + "</p>";

        $("#meetcyrene").html(message1);
});

$("#button-4").click( function(){

    let message1 = "<h2>" + pullCyrene.title + "</h2>";
    count = count +1;
    message1 = message1 + "<p> You pulled for Cyrene " + count + " times! </p>"
    


      $("#meetcyrene").html(message1);

});

function travel() {
    let input = prompt("Where do you want to go?");

    if (input == "Aedes Elysiae") {
        $("body").css("background-image", "url(AedesElysiae.png)");
    }

    else if (input == "Okhema") {
        $("body").css("background-image", "url(Okhema.webp)");
    }

    else {
        $("body").css("background-image", "url(AMPHOREUS.webp)");
    }
}

$("#button-5").click(function() {
    travel();
});