const fs = require("fs");

function cleanFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", function (error, data) {
    if (error) {
      console.log("Error while reading file");
    } else {
      let x = data.trim();
      fs.writeFile(filePath, x, function () {
        cb();
      });
    }
  });
}

function onDone() {
  console.log("File has been cleaned");
}

cleanFile("c.txt", onDone);
