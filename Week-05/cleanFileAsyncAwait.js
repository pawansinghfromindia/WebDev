const { count } = require("console");
const fs = require("fs");

function cleanFilePromisifed(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (error, data) {
      if (error) {
        console.log("Error while reading file");
        reject(error);
      } else {
        try {
          let x = data;
          x = x.trim();
          fs.writeFile(filePath, x, function (error) {
            if (!error) {
              console.log("File has been cleaned");
            } else {
              console.log("Error while writting file", error);
            }
          });
        } catch (error) {
          console.log("Error while writting file", error);
        }
      }
    });
  });
}

async function main() {
  await cleanFilePromisifed("b.txt");
  console.log("inside main");
}

//main();

// Better way to write this

function cleanFilePromise(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function (error) {
        if (error) {
          reject();
        } else {
          console.log("count", filePath);
          resolve();
        }
      });
    });
  });
}

async function solve() {
  await cleanFilePromise("b.txt");
  console.log("File cleaning Done", 1);
  await cleanFilePromise("c.txt");
  console.log("File cleaning Done", 2);
}

solve();
