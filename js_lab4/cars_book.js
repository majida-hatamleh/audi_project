alert("Welcome to The world of Audi!");
var age = prompt("How old are you");
// this part is just checking the age
if (age<18){
    //console.log("how old are you");
    alert("You are below the legal age,thank you to visit our website :)");
}else{
    alert("wonderful, you are within the legal age!")
    var driving_license= prompt("Do you have a driving license")
        if (driving_license== 'yes'){
        //console.log("Do you have a driving license");
        alert("You can get to try one of our cars, book your appointment now")
        }else{
        alert("Sorry you can't get to try one of our cars");
        }
}

