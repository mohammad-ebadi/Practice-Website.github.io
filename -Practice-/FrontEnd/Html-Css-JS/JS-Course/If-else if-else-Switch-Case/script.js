// If / else if / else
let time = "19";

if (time > 6 && time < 12) {
    console.log("Good Morning");
}
else if (time > 12 && time < 18) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}


// Switch / Case

let role ="moderator";

switch (role) {
    case "guest":
        console.log("Guest User");
        break;
    case "moderator":
        console.log("Moderator User");
        break;
    default :
        console.log("Unknown User");
}
