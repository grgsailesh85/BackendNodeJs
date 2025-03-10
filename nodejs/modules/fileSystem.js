// Asynchronous -> Do not wait
// Synchronous -> Wait

import fs, { unlink } from "fs";
// fs-fileSystem

// Synchronous methods
// 1. Read
// for text file -> utf8
// for image file -> base64

// const result = fs.readFileSync('data.txt', 'utf8');
// console.log(result)
// const image = fs.readFileSync("mentor.jpeg","base64")
// console.log(image)

// 2. Write

// fs.writeFileSync("data.txt","This file is newly written.")

// 3. Update

// fs.appendFileSync('data.txt', "\nThis file is updated without removing existing file.")

// 4. Delete

//unlink ->  removes only file
//rm -> remove both files and folder
// fs.rmSync("data.txt")

//Asynchronous method

//1. READ
fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) console.log(error);
  console.log(data);
});
console.log("this text will be printed first");

//2. WRITE
fs.writeFile("data.txt", "this data is written asynchronously", () => {
  console.log("Data is Written Successfully");
});

//3. UPDATE
fs.appendFile();

//4. DELETE
fs.rm();
