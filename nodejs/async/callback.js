// Callback

// 1. first definition:- function used as a parameter
// Higher order function
/* function myFunction(myParams) {}
myFunction(function(){}) */

// 2. second definition:- function called after async task completion
import fs from "fs";

fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) return console.log(error);
  console.log(data);
});

// callback hell
/*
1. get users
2. get posts fo that users
3. get comments of that posts
*/

fs.readFile("users.json", "utf8", (error, data) => {
  if (error) console.log(error);
  console.log(data);
  fs.readFile("posts.json", "utf-8", (perror, pdata) => {
    if (perror) console.log(perror);
    console.log(pdata);
    fs.readFile("comments.json", "utf-8", (cerror, cdata) => {
      if (cerror) console.log(cerror);
      console.log(cdata);
    });
  });
});
