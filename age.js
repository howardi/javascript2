
function lifeInWeeks(age){
    
    //  If my age is 39yrs.
    // x = 90-age * 365 = 18615
    // y = 90 - age * 52 = 2652
    // z = 90 - age * 12 = 612

    var ageRemaining = 90 - age;
    var days = ageRemaining * 365;
    var weeks = ageRemaining * 52;    
    var months = ageRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left.");
     
}
lifeInWeeks( age = prompt("How old are you?"));