const fs = require("fs");

let p = new Promise((resolve, reject) => {
  fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});
p.then((data) => {
  console.log("我是 then", data);
}).catch((err) => {
  console.error("我是 catch", err);
});