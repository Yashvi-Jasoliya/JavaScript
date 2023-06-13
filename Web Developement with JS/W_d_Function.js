console.log("This is a Tutorial of JavaScript");

function greet(name, greetText = "Greetings from js..") {
    // let name1 = Name1;  // Block level..
    console.log(greetText + " " + name);
    console.log(name + " is a good student");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;

    //This line will not execute (Unreachable code)
    //console.log("Function is not returned..");
}

let name = "Yashvi";  // Global..
let name1 = "Sakshi";
let name2 = "Krisha";
let name3 = "Devanshi";
let greetText = "Heyy Good Morning..";

greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
// let returnVal = greet(name3);
// console.log(returnVal);

let returnVal = sum(10, 20, 30);
console.log(returnVal);

// fn and below syntax both are same but fn is s.c
// console.log(name + " is a good student");
// console.log(name1 + " is a good student");
// console.log(name2 + " is a good student");
// console.log(name3 + " is a good student");
