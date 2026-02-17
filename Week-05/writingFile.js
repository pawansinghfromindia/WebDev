const fs = require("fs");
const path = require("path");

content = "I'm js code, writing text file";
fs.writeFileSync("b.txt", content, "utf-8");
console.log("Written Successfully", 1);

fs.writeFile("c.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("Written Successfully", 2);
  }
});

function fsWriteFilePromisified(path, content, encoding) {
  return new Promise((resolve, rejects) => {
    fs.writeFile(path, content, encoding, (error) => {
      if (error) {
        rejects(error);
      } else {
        resolve(error);
      }
    });
  });
}

fsWriteFilePromisified("d.txt", content, "utf-8")
  .then(() => {
    console.log("File Written successfully", 3);
  })
  .catch((error) => {
    console.log("Error while reading file");
  });
