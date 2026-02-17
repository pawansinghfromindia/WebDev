# Week 5 : Promises

<details>
  <summary> <b> Promise and Promise States </b> </summary>
  
<br/>

**What is a promise ?** <br/>
A **Promise** in JavaScript is an object that represents the eventual result of an asynchronous operation - either a success (resolved) or 
a failure (rejected).

It’s commonly used for things like:
- Fetching data from an API / API Calls
- Reading files
- Timers (`setTimeout`)
- Database requests/calls


**Promise States** : A Promise has **3 states**
1. **Pending** - The operation is still running
2. **Fulfilled (Resolved)** - The operation completed successfully
3. **Rejected** - The operation failed

Once fulfilled or rejected, the Promise is **settled** and cannot change state.

```jsx
const p = new Promise();
console.log(p); // TypeError
```
```jsx
const p = new Promise((resolve, reject) => {
  resolve();
  reject();
});
console.log(p); // Promise { undefined }
```

#
</details>

<details>
  <summary> <b> Creating a promise </b> </summary>

```jsx
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});

console.log(myPromise); // Promise { 'Operation successful!' }
```
<details>
  <summary> Create a promisified version of fs.readFile() </summary>

```jsx
// Create a promisified version of fs.readFile()

const fs = require("fs");

function promisifiedReadFile(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, data) => {
      if (err) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

promisifiedReadFile("a.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("error");
  });

```

</details>

<details>
  <summary> Create a promisified version of fs.WriteFile() </summary>

How to write a a file in JS
```jsx
const fs = require("fs");

let data =
  "Hello there, \nI'm writting this text file.\nLine 1\n Line 2\nLine 3";

fs.writeFileSync("file1.txt", data);
console.log("File written successfully\n");
// Reading the file that we created
console.log(fs.readFileSync("file1.txt", "utf8"));

```
Create a file in a specified folder
```jsx
const fs = require("fs");
const path = require("path");

const filePath = `C:\\Users\\UserName\\Desktop\\class-3\\a\\b.txt`;
const dir = path.dirname(filePath);

// Create parent directories if they don't exist
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log(filePath);
console.log(dir);

fs.writeFileSync(filePath, "Hello, world!");

```

3 ways of writing files
```jsx
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

```


</details>

<details>
  <summary> Create a promisified version of SetTimeout() </summary>

Code of setTimeout using callback and using promisified function
```jsx
setTimeout(() => {
  console.log("Hello 1 sec has been passed", 1);
}, 1000);

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(2000).then(() => {
  console.log("Hello 2 Sec has been passed", 2);
});

setTimeoutPromisified(3000).then(() => {
  console.log("Hello 3 Sec has been passed", 3);
});
```


</details>




<details>
  <summary> Doubts </summary>

```jsx
const p = new Promise((resolve, reject) => {
  resolve("1");
  resolve("2");
});

p.then((data) => {
  console.log("Promise resolved " + data);
});

console.log("Hello Promise ");

/* 
output:
Hello Promise 
Promise resolved 1
*/
```
setTimeout
```js
function setTimeoutPromisified2(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, delay);
  });
}

setTimeoutPromisified2(1000)
  .then(function () {
    console.log("1 second has passed");
  })
  .catch(function () {
    console.log("An error came");
  })
  .finally(function () {
    console.log("Finally block will run either after success or failure");
  });

```


</details>

#
</details>

> `Promise` Class constructor take an argument as function which takes 2 arguments like `resolve` and `reject`
> - It's `Promise` class responsibility to run what we pass in the function

<details>
```js
class Promise{
  constructor(resolve, reject){
        reject(); // if error
        resolve(); // if no error
  }
  then(){
    resolve();
  }
  catch(){
    rejects()
  }
}
```
</details>

<details>
  <summary> <b> Consuming a promise </b> </summary>

```jsx
myPromise
  .then(result => {
    console.log(result); // if resolved
  })
  .catch(error => {
    console.log(error); // if rejected
  })
  .finally( () => {
    console.log("finally will run anyway); // irrespective of resolve and reject
  })
;
```
#
</details>

<details>
  <summary> <b> Async/await syntax </b> </summary>

```jsx
async function run() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();
```

**Async await syntax**

The `async` and `await` syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code,
making it easier to read and maintain. 

It builds on top of Promises and allows you to avoid chaining `.then()` and `.catch()` methods while still working with asynchronous operations.

`async/await` is essentially syntactic sugar on top of Promises. 

Code it :
```jsx
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
```
Let's make it async await which is a modern syntax
```js
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

```

#
</details>

<details>
  <summary> <b> Assignment </b> </summary>

<br/>

**Write code that**
1. logs `hi` after 1 second
2. logs `hello` 3 seconds after `step 1`
3. logs `hello there` 5 seconds after `step 2`

```jsx
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}

solve();
```

**Things to keep in mind**
1. You can only call `await` inside a function if that function is `async`
2. You can't have a `top level await`

#
</details>

<details>
  <summary> <b> Creating a async function </b> </summary>

<br/>

**Defining your own async function**

Q : Write a function that
1. Reads the contents of a file
2. Trims the extra space from the left and right
3. Writes it back to the file

**1. Callback approach**

In the callback approach, the function signature should look something like this - 

```jsx
function onDone() {
	console.log("file has been cleaned");
}
cleanFile("a.txt", onDone)
```

<details>
  <summary> Solution </summary>
  
```jsx
    const fs = require("fs");
    function cleanFile(filePath, cb) {
      fs.readFile(filePath, "utf-8", function (err, data) {
        data = data.trim();
        fs.writeFile(filePath, data, function () {
          cb();
        });
      });
    }
    
    function onDone() {
      console.log("file has been cleaned");
    }
    cleanFile("a.txt", onDone);
    
  ```

</details>  

**2. Promisified approach**

In the promisified approach, the function signature should look something like this - 

```jsx
async function main() {
   await cleanFile("a.txt")
   console.log("Done cleaning file");
}

main();
```

<details>
  <summary> Solution </summary>

```jsx
    const fs = require("fs");
    function cleanFile(filePath, cb) {
      return new Promise(function (resolve) {
        fs.readFile(filePath, "utf-8", function (err, data) {
          data = data.trim();
          fs.writeFile(filePath, data, function () {
            resolve();
          });
        });
      });
    }
    
    async function main() {
      await cleanFile("a.txt");
      console.log("Done cleaning file");
    }
    
    main();
    
```
</details>

#
</details>

<details>
  <summary> Question ? </summary>

| 1.                                   | 2.                                              | 3.                 |
|--------------------------------------|-------------------------------------------------|--------------------|
| Callback based Async function syntax |  Promisified Async Function with .then() syntax | Async await syntax |
| Traditional old way                  | Modern syntax then Callback                     | Most modern        |

> Note : **We can only write `await` always inside `async` function**

#
</details>

