/**
 * 1. variable
 * Memory Element
 * Data Storage
 * var(don't use), let, const
 */

// variable can be declared only once, value can be set only once
const name = "Sailesh Gurung";
console.log(name);

// value can be set multiple times
let age = 25;
age = 40;
age = 60;
console.log(age); // output [60] ; last value will be printed/considered

/**
 * 2. Conditional Statement
 * if-else
 * switch
 */

if (age < 50) {
  // code
} else if (age > 10) {
  // code
} else {
  // code
}

const day = "Sunday";
switch (name) {
  case "Sunday":
    // code
    break;

  case "Monday":
    // code
    break;

  default:
    break;
}

/**
 * 3. Loop
 * Run the code repeatedly
 */

// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
let i = 0;

while (i < 10) {
  // console.log(i);
  i = i + 2;
}

// Array - List - []
// Array's position starts from zero (0)
const marks = [40, 20, 53, 65, 98, 48, 20];
console.log("marks array", marks);
const myArray = [90, "hello", true, "sam", [10, "Hari"]];
console.log(myArray);
console.log("position array:", marks[2]);

// Object - collection of data
const student = {
  name: "Sailesh",
  class: 10,
  age: 25,
  address: "Chitwan",
  phone: 9811896987,
};
console.log(student);
console.log(student["phone"]);
console.log(student.class);

// function
function square(a) {
  console.log(a * a);
}
square(5);

// function sum (a, b) {
//     return a+ b;
// }

// arrow function
const sum = (a, b) => {
  return a + b;
};

const result = sum(5, 10);
console.log("5+10 =>", result);


