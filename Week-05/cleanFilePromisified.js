const fs = require("fs");
const p = require("path");

function cleanFilePromisifed(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (error, data) {
      if (error) {
        console.log("Error while readind file");
        reject(error);
      } else {
        let x = data;
        x = x.trim();
        filePath = "C:\\Users\\PawanSingh\\Desktop\\class-3\\clean2\\c.txt";

        fs.writeFile(filePath, x, function (error) {
          if (error) {
            fs.mkdir(
              p.dirname(filePath),
              { recursive: true },
              function (error) {
                if (error) {
                  console.log("Error while making directory");
                } else {
                  console.log("directory created");
                  fs.writeFile(filePath, x, function (error) {
                    if (error) {
                      console.log(
                        " Directory created, Error while writing file",
                      );
                    } else {
                      console.log("Directory created, File has been cleaned");
                    }
                  });
                }
              },
            );
          } else {
            console.log("File has been cleaned");
          }
        });
      }
    });
  });
}

cleanFilePromisifed("c.txt")
  .then(function () {
    console.log("File has been cleaned");
  })
  .catch(function (error) {
    console.log("Error while cleaning file");
  });
