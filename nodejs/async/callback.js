// Callback

// 1. first definition:- function used as a parameter
// Higher order function
/* function myFunction(myParams) {}
myFunction(function(){}) */

// 2. second definition:- function called after async task completion
import fs from "fs";

fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) console.log(error);
  console.log(data);
});

// callback hell 
