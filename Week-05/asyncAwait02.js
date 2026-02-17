const fs = require("fs");

function fsReadFilePrimisified(filePath, encoding) {
  return new Promise((resolve, rejects) => {
    fs.readFile(filePath, encoding, function (error, data) {
      if (error) {
        rejects(error);
        return;
      }
      resolve(data);
    });
  });
}

async function main() {
  try {
    let file1content = await fsReadFilePrimisified("b.txt", "utf-8");
    let file2content = await fsReadFilePrimisified("c.txt", "utf-8");
    let file3content = await fsReadFilePrimisified("d.txt", "utf-8");

    console.log(file1content);
    console.log(file2content);
    console.log(file3content);
  } catch (error) {
    console.log("Error in main block");
  } finally {
    console.log("Finally will run anyway");
  }
}

main();
console.log("Hi");
console.log("Hello");
