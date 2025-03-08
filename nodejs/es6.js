// es-5/6

//destructuring
const user = {
    name: "Sailesh Gurung",
    age: 25,
    phone: 9811896987
}
console.log(user.name, user.age, user.phone)
const { name, age, phone } = user
console.log(name, age, phone)

const marks = [20,50, 60];
const [science, computer, english] = marks;
console.log(marks)

//template literals
const tDetails = `hello my  name is ${name} and i am ${age} years old`
console.log(tDetails)

// spread operator ( object/array) //copy the data
// ...
const student = {
    name: "Sailesh",
    class: 10,
} 

const results = {
    science: 90,
    math:50,
    english: 80
}

const finalResult = { ...student, ...results}
console.log(finalResult)

// higer order array methods 
const numbers = [90, 52, 5641, 62, 8, 352, 856, 32, 561]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + 5);
  }

// 1. map 
// [x,x,x] => [y,y,y]
console.log("MAP==============================")
numbers.map(num => console.log(num + 5))

// 2. filter
// [x,y,x] => [x,x]
const filteredNumber = numbers.filter((num) => num > 100 )
console.log(filteredNumber)

// 3. sort => asc, desc 
const sortedNumber = numbers.sort((a,b) => a-b); //ascending number
console.log(sortedNumber)
//descending number b-a