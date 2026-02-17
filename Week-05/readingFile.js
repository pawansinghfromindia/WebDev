const { error } = require("console");
const fs = require("fs");

// First wasy to read file using Synchronous method
let content = fs.readFileSync("a.txt", "utf-8");
console.log(content);
console.log("--------------1st----------------");

// Second way of reading file using callback Async method
fs.readFile("a.txt", "utf-8", (error, contents) => {
  if (error) {
    console.log("Error whole reading file");
    return;
  }
  console.log(contents);
  console.log("------------2nd------------------");
});

// 3rd way to read file using Promised Function Async
function fsReadFilePromisified(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

fsReadFilePromisified("a.txt", "utf-8")
  .then((data) => {
    console.log(data);
    console.log("--------------3rd----------------");
  })
  .catch((error) => {
    console.log("Error whole reading file");
  });
