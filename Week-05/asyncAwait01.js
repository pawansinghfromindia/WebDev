const fs = require("fs");

function fsReadFilePrimisified(filePath, encoding) {
  return new Promise((resolve, rejects) => {
    fs.readFile(filePath, encoding, function (error, data) {
      if (error) {
        rejects("Error");
        return;
      }
      resolve(data);
    });
  });
}

function main() {
  fsReadFilePrimisified("b.txt", "utf-8")
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log("Error while reading the file");
    })
    .finally(function () {
      console.log("This will run anyway");
    });
}

main();
