import { error } from "console";
import fs from "fs";

const cbToPromise = new Promise((resolve, reject) => {
  fs.readFile("data.txt", "utf8", (error, data) => {
    if (error) return reject(error);
    resolve(data);
  });
});

cbToPromise
  .then((data) => console.log(data))
  .catch((errro) => console.log(error)); 
