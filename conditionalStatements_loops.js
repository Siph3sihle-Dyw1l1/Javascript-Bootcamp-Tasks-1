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
} else if (num % 2 == 0 && num % 3 == 0) {
    console.log("Divisible by both.");
} else {
    console.log("Not divisible by 2 or 3.");
}

switch (true) {
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
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even number:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
let max = 0;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}
console.log("Largest number: " + max);

//Exercise 4
let cnt = 1;
while (cnt < 11) {
    console.log(cnt);
    cnt += 1;
}

console.log("Even number:");
let cnt2 = 1;
while (cnt2 < 21) {
    if (cnt2 % 2 == 0) {
        console.log(cnt2);
    }
    cnt2 += 1;
}

let sum2 = 0;
let cnt3 = 1;
while (cnt3 < 101) {
    sum2 += cnt3;
    cnt3 += 1;
}
console.log("Sum = " + sum2);

let cnt4 = 0;
while (cnt4 < 50) {
    if (cnt4 % 5 == 0) {
        console.log(cnt4);
    }
    cnt4 += 1;
}