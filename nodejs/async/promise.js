// solves the problem of callback
// resolve - success
// reject - failure

import fs from "fs/promises";

// fs.readFile("data.txt", "utf8").then(success, takes function here).catch(error, also takes function);

fs.readFile("data.txt", "utf8")
  //success part
  .then((data) => {
    console.log(data);
  })

  //failure part
  .catch((error) => {
    console.log(error);
  });

//example
fs.readFile("users.json", "utf8")
  .then((data) => {
    console.log(data);
    return fs.readFile("posts.json", "utf8");
  })
  .then((data) => {
    console.log(data);
    return fs.readFile("comments.json", "utf8");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
