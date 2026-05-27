let temp = 30;

if (temp < 0) {
    console.log("It's freezing!");
} else if (temp >= 0 && temp <= 15) {
    console.log("It's cold.");
} else if (temp >= 16 && temp <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}


switch (true) {
    case temp < 0:
        console.log("It's freezing!");
        break;
    case temp >= 0 && temp <= 15:
        console.log("It's cold.");
        break;
    case temp >= 16 && temp <= 25:
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

//Exercise 2:
const num = 10;

if (num % 2 == 0) {
    console.log("Divisible by 2.");
} else if (num % 3 == 0) {
    console.log("Divisible by 3.");
} else if (num % 2 == 0 && num % 3 == 0){
    console.log("Divisible by both.");
}else{
    console.log("Not divisible by 2 or 3.");
}

switch(true){
    case num % 2 == 0:
        console.log("Divisible by 2.");
        break;
    case num % 3 == 0:
        console.log("Divisible by 3.");
        break;
    case num % 2 == 0 && num % 3 == 0:
        console.log("Divisible by both.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3
