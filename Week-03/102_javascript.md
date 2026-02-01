# JS 102

<details>
  <summary> Topics to be covered </summary>

### Goal

1. I/O tasks
2. Callbacks
3. Functional arguments
4. Async vs Sync code
5. Event loops, callback queues, JS

### Next Goal

1. Async await, Promises
2. Practising async JS

**Hopefully, by the end of the class, you are able to understand the following code -** 

<details>
  <summary>Functional arguments </summary>
 
```jsx
    function sum(a, b) {
      return a + b;
    }
    
    function multiply(a, b) {
      return a * b;
    }
    
    function subtract(a, b) {
      return a - b;
    }
    
    function divide(a, b) {
      return a / b;
    }
    
    function doOperation(a, b, op) {
      return op(a, b)
    }
    
    console.log(doOperation(1, 2, sum))
```
</details>

<details>
  <summary>Callbacks </summary>
    
```jsx
    const fs = require("fs");
    
    fs.readFile("a.txt", "utf-8", function (err, contents) {
      console.log(contents);
    });
```
</details>

</details>
<!---------------------------START HERE---------------------------------------->

# Start here

<details>
  <summary>🔻<b> Introduction</b>  </summary>

<br/>

We already know `HTML` and `CSS` and in `JS` is tricky and until now we have seen basic syntax:
```
- The Basics - JavaScript 
- Properties of JavaScript  
- Syntax of JavaScript
- Complex data types JavaScript : Arrays  and Objects 
- Map, Filter and Arrow Functions
```
Let's start slightly more complex part of JavaScript but very language independent concepts in JS.

Generally, when you start coding you didn't know about these concepts like :
- What is Single Threaded Languages?
- What is Synchronous code vs Asynchronous code?
- Asynchronous vs Concurrency vs Parallelism 

> - Synchronous -> Do block while waiting
> - Asynchronous -> Don’t block while waiting
> - Concurrency  -> Handle multiple tasks at the same time (logically)
> - Parallelism  -> Execute multiple tasks at the same time (physically)

- Asynchronous -> “JS doesn’t wait for long tasks.”
- Concurrency -> “JS handles multiple tasks using the event loop.”
- Parallelism -> “JS achieves parallelism only via workers.”

JavaScript unfortunately doesn't support Parallelism


</details>
<!----------------JS Introduction --------------------------->

<details>
  <summary>🔻<b> Normal functions in JS</b>  </summary>

<br/>

The way to write functions in JS is as follows - 

***Function_declaration*** through Specifier/Keyword : `function`, function_name, parameter/s, logic code inside ***function_body***, return something if required, and ***function_call*** with or without argument/s.

**Find sum of two numbers**
```js
function sum(a, b) {
	return a + b;
}

let ans = sum(2, 3)
console.log(sum);
```
How this code executes? <br/>
-First control reach to line 1. <br/>
-Control registers the function as it sees function declarion. So, It will not execute the function, It skips & directly jump to line 5<br/>
-control reaches to line 5, and start executing it, here function call, so It will run the function and store the result in ans variable <br/>
-contol reaches to lin 6, It will log the output.

**Find sum from 1 to a number n**
```js
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

//Maths Formula sum = n*(n+1)/2
function findSum(n){
    return n*(n+1)/2;
}

const ans = sum(100);
console.log(ans);
console.log(findSum(100));
```

</details>
<!----------------JS Normal functions --------------------------->

<details>
  <summary>🔻<b> Synchronous code</b>  </summary>

<br/>

Que : **Synchronous code vs Asynchronous code**

Generally, When we're in college, we don't deal with these concepts. We start solving the DSA Problems on plaforms like Leetcode, Codechef etc.
We never touched the Asynchronous Code, bcuz when we do DSA we only deal with Synchronous code everytime.

But, When we write Backend while doing Fullstack Application, We do touch & write some Asynchronous code that's why we need to understand and learn this concept.

**Synchronous code** 
- Synchronous code is ***executed line by line***, in the order it's written.Each operation ***waits for the previous one to complete*** before moving on to the next one.

For example
```js
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
```

> All the codes that we write in DSA is ***Synchronous code*** which execute line by line.

For loop, while loop, If-Else statements etc all of these are Synchronous code.

> Synchronous doesn't necessarily mean it executes line by line only, like function declaration is skipped, break, return etc It does skip. When we see Asynchronous code then it will be more clear.

</details>

<details>
  <summary>🔻<b> Asynchronous Code </b>  </summary>

<br/>

**A**synchronous = Anti(Opposite) of Synchronous

Synchronous means Code runs in sync line 1, line 2, line 3, ....... line n-1, line n.

But real life Backends, real life computer science programs are not always Synchronous (for loops, while loops, if-else statements).

A lot of time the backend/frontend code we're writing involves **I/O Heavy Operations**.

</details>

<!----------------JS Synchronous code --------------------------->

<details>
  <summary>🔻<b> I/O heavy operations </b>  </summary>

<br/>

When we do DSA, we never deal with **I/O heavy operations**, there we only deal with **CPU heavy Operations** (for loop, while loop)
If we write a for(1 to million) then CPU will be occupy in running the for loop.

But a lot of time We have things to do in our program where the CPU Heavy Operations is not required. Those tasks are called **I/O heavy Operations** or I/O Bound Operations.

### I/O heavy operations

**I/O (Input/Output) heavy operations** refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.

#### Examples of I/O Heavy Operations:

1. Reading a file
2. Starting a clock
3. HTTP Requests


Suppose, We have a mac Machine, on which we're writing a `index.js` program which is going to read/write `file.csv` on the machine. Like there are a lot of compression program like you download it and it will clean up space on your machine. So, the cleanup or compressor program is suppose to find the files and delete file from your machine. Similary we have a program which read the file store in a variable do something and then write it back to the file.

So, a lot of time, while doing Backends, not in DSA. 

DSA Problem : Read the file on machine and clean it up. ❌ <br/>
DSA Standard Problem : Given you already have a csv file in a variable, clean it up.) ✔️

<img width="450" height="250" alt="image" src="https://github.com/user-attachments/assets/792c2294-4667-4f10-adfb-34613fafeefc" />


So, basically A program that has code for Reading a file there involves I/O Heavy Operations. bcuz Input and Ouput is not in the hand of programmers, Programmers don't know how much time it will take to read a file on machine. This is what **OS** does. here comes the concept **OS/Kernels**.

**OS/Kernels**

Do you think ? If you write a random program or download a random program on your machine, Should It have power to read/write files from you machine?
No, Ideally It shouldn't have by default access to read/write any file on our machine. Otherwise someone created a file which can read files on your machine and it will delete everything inside it or fill will random garbage value etc etc.

So whenever we downloaded a file from internet or write a program on ourself, What is inside this file : a lot code written, So we double clicked.
on it. Instead of opening directly. what happens is :

There are permission that your OS might asks like OS gives you pop up **Are you sure, Trust this file/program to open?** Only if you allow then it will read/write the file on your machine.

The same thing happens with `index.js` file, when we run it on our machine.
```cmd
node index.js
```
Unless node has access to everything on your machine, your index.js is not allowed to read other files on your machine.

Generally when we install node on our machine we gave the acess it to. That's bcuz NodeJS codebase is very well audited and trusted by developers and users that it will not do any random strange thing on our machine. Similart **JVM**, **RUST Compiler**, **GoLang**, **Bun** etc etc.

<img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/d213b326-9ec4-4945-9342-3155cd056d70" />



- So, When `index.js`program might be cleanup program where the job is to read a file, do something like space cleanup and re-write.
- When you read a file, you actually asks the OS/Kernels to give you the access to the file which you want to read.
- A program can't simply read any file on the machine directly. It needs permission from OS/Kernels.
- The OS/Kernels checks a lot of things like
  - NodeJS App has access to read/write or not?
  - The file you're going to read is that a valid file or not?
  - Is that file read by someone else?
  - Is that file written by someone else?
  - Is that file logged by any different program?
  - so on and so forth
- After all the checks done by OS/kernels is the when OS/Kernel will return you the file that you asked for.

So, If you want to access a file, asks OS/Kernels, OS/Kernels will take its own time It could be 1ms, 10ms, 100ms, 1sec and then return you the content of the file/file. This is what we call a **I/O Heavy Operations** why bcuz all we can do is ask OS to give as file and you have to wait until OS return the file.

So, It might be possible that for 100ms, you're stucked and your CPU(JS Thread Code) is not being really used in terms of your program. What if OS/Kernels return the file in 200ms or 1sec. JS Thread is doing nothing, control is waiting for the file to read. That's bcuz we have **Synchronous code**


While is OS/Kernels is figuring out and checks Does file this or that?
Wouldn't It be nice to move control to do the next step somehow until the OS/Kernels return the file. and Whenever the OS/Kernels return the file, control reaches back to previous line where the control was earlier.

What if we fired up the event to read and Control runs the next steps.

Example :
Reading a file on machine
Starting a clock
HTTP Requests

We’re going to introduce imports/requires next. 
A `require` statement lets you import code/functions export from another file/module.

> In NodeJS, RUST, Go, Java, C/C++ etc every language, a lot of developers have written their good code in various Libraries, if you want to call a function from their library then we have to import their library.

e.g. :
```cpp
#include<iostream>
// This line gets all the codes written in that headerfile iostream
```  
```js
const fs = require("fs"); // "fs" is a file system module/package which is imported through require method.
// What This line does is gets the code of that "fs" module in the variable fs
// when we write for, while, if else we don;t have to import bcuz those are part of syntax of js
```

Note : "fs" is an internal package that means it comes with NodeJS Runtime. which is not true for a lot of external packages like mangoes, express, honos these are external packages.

Let’s try to write code to do an `I/O` heavy operation - 
- We can't do this task in online environment repl.it or [jsfiddle.net](jsfiddle.net), we have to do it locally on machine.

1. Open NodeJS Locally 
```
Class-3
.
├── index.js
└── a.txt   
```
2. Create a file in there (a.txt) with some text inside
```txt
Hi there
You're reading the text file
आपके द्वारा चुनी गई भाषा में वेब पर कहीं भी लिखना आसान बनाता है
```
3. Write the code to read a file `synchronously`
`index.js`
```js
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
// this is ideally async task but we're doing it sync way for some reason
console.log(contents);

for(let i=1; i<=10; i++){
    console.log(i)
}
```
4. Create another file (b.txt)
5. Write the code to read the other file `synchronously`
```js
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

```
What is wrong in this code above?
- The code not optimal, we're firing up a read file request but waiting for response and again firing up another read request. That means we have 2 washing machine but we are washing 1 clothes in one machine and waiting for complete to wash another cloth in another  machine. while we can start one put the clothes in that start second and put the clothes in second.
- While we can run these sort of parallely like in Asynchronously. 

While you're running make sure you're giving the correct path or if you're running from other folder make sure you match the correct path of your file
```js
const fs = require("fs");
const contents = fs.readFileSync("./a.txt", "utf-8");
console.log(contents);

console.log(__dirname + "/class-3/a.txt"); //give you the current path_name

const path = path.join(__dirname + "a.txt");
fs.readFileSync(path, "utf-8");

```

</details>
<!----------------JS  I/O heavy operations --------------------------->

<details>
  <summary>🔻<b> I/O bound tasks vs CPU bound tasks </b>  </summary>


### CPU bound tasks

CPU-bound tasks are operations that are limited by the speed and power of the CPU.
These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.
```js
let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	
```
A real world example of a CPU intensive task is `running for 3 miles`.
Your legs/brain have to constantly be engaged for `3 miles while you run`

### I/O bound tasks

I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. 
These tasks spend most of their time waiting for I/O operations to complete.
```js
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
```
A real world example of an I/O bound task would be `Boiling water`. I don’t have to do much, I just have to put the water on the kettle, and my brain can be occupied elsewhere.

</details>
<!----------------JS  I/O bound tasks vs CPU bound tasks  --------------------------->

<details>
  <summary>🔻<b> Doing I/O bound tasks in the real world</b>  </summary>

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/258120cc-f94d-487f-a8c3-6700a6ebd5c3" />

What if you were tasked with doing 3 things

1. Boil some water.
2. Do some laundry
3. Send a package via mail

Would you do these 

1. One by one (synchronously)
2. Context switch between them (Concurrently)
3. Start all 3 tasks together, and wait for them to finish. The first one that finishes gets catered to first.

Good talk - Concurrency is not parallelism
 [https://www.youtube.com/watch?v=oV9rvDllKEg](https://www.youtube.com/watch?v=oV9rvDllKEg)

Synchronously (One by one)
```js
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("b.txt", "utf-8");
console.log(contents3);
```
<img width="202" height="250" alt="image" src="https://github.com/user-attachments/assets/90fe0044-423a-4a96-b404-5163a8a927f1" />

Start all 3 tasks together, and wait for them to finish. 
```js
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
```

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/b4251130-b81c-4b18-b58d-c7b6b18b663d" />


</details>
<!----------------JS  Doing I/O bound tasks in the real world --------------------------->

Before we do convert synchronous code to Asynchronous code, we need to understand **Functional Arguments**

<details>
  <summary>🔻<b> Functional arguments</b>  </summary>

This concept is simple but harder to digest.

Write a `calculator` program that adds, subtracts, multiplies, divides two arguments.


Approach #1

Calling the respective function
```js
function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function doArithmetic(a, b, whatToDO){
    if(whatToDO === 'sum'){
        return sum(a, b);
    }
    else if(whatToDO === 'sub'){
        return sub(a, b);
    }
    else if(whatToDO === 'mul'){
        return mul(a, b);
    }
    else if(whatToDO === 'div'){
        return div(a, b);
    }
    else if(whatToDO === 'mod'){
        return mod(a, b);
    }
    
}

// you're not allowed to call sum(), sub()
console.log(doArithmetic(10, 5, "sum")); // 15
console.log(doArithmetic(10, 5, "sub")); // 5
```
Now instead of passing the string as function name in the argument of function. <br/>
We can also pass the function name itself in the function call, this is what we call **Functional Argument**.

> When we pass a function as argument in another function is known as functional argument.

> Functional Argument is not required in any synchronous code. But It is super important in Asynchronous code. 

Approach #2

Passing in what needs to be done as an argument.
```js
function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

//You're not allowed sum(), sub()

const result1 = doArithmetic(10, 5, sum);
console.log(result1);

const result2 = doArithmetic(10, 5, sub);
console.log(result2);

const result3 = doArithmetic(10, 5, mul);
console.log(result3);
```

There are no good reason to pass function in arguments unless we reach a **Asynchronous code**. So, functional arguments are very important in Asynchronous code not important is synchronous code.

</details>
<!----------------JS Functional arguments  --------------------------->

<details>
  <summary>🔻<b> Asynchronous code, callbacks</b>  </summary>

```js
const fs = require("fs");

//I/O Heavy Operations but still Synchronous code
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

//CPU Intensive Heavy Operations
let s = 0;
for(int i=0; i<=10000000; i++){
    s += i;
}
console.log(s);
```
Can't we make this Asynchronous code. So that we can run CPU Intensive operation in concurrency.
```js
const fs = require("fs");

//I/O Heavy Operations = Asynchronous code, but there is still a problem?
const contents = fs.readFile("a.txt", "utf-8");  // instead of fs.readFileSync()
console.log(contents);

//CPU bound Intensive Heavy Operations
let s = 0;
for(int i=0; i<=10000000; i++){
    s += i;
}
console.log(s);
```
Problem is still there, If in real that is Asynchronous code then how will JS Thread knows that It has to skip that line and control move to next line and when the I/O bound operation completed, then control reach back to that line.

JS Thread is not smart enough that it knows when the file read sucessfully, the control will return back to this line. So How can be we do this? Answer is **Functional Argument (also known as Callbacks)** <br/>
This is where the **Functional Argument** comes into the picture and make a callback to do the job done.
```js
const fs = require("fs");

function fileReadcallback(error, contents) {
  console.log(contents);
}

//I/O Heavy Operations => Asynchronous code
fs.readFile("a.txt", "utf-8", fileReadcallback);

//CPU bound Intensive Heavy Operations
let s = 0;
for (let i = 0; i <= 1000000; i++) {
  s += i;
}
console.log(s);
```
> Error First Callbacks `fileReadcallback(error, contents)` and Error Last Callbacks `fileReadcallback(contents, error)`. Basically nothing but a pattern. Whoever wrote the code base of it he/she liked error first callback pattern nothing else. if error then it gives you the error details else error will be null

> Every Function in GoLang return 2 things, 1st is error and second thing is the actual thing you need.

```js
const fs = require("fs");

const contents = fs.readFile("a.txt", "utf-8", function(error, contents){
      console.log(contents);
      console.log(contents);
});


let s = 0;
for (let i = 0; i <= 1000000; i++) {
  s += i;
}
console.log(s);
```

What will happen first?
- a. The callback function printed first
- b. sum will be printed first
- c. It will depends on the OS read time so Vague
Answer seems c. vague But that's not true Answer is b. sum will be printed first always why We will see it next topic i.e. Architecture of JS Asynchronous code
> Bcuz the way JS Async Runtime Architecture works is that if there is a callback that is called It can't interrupt the current running CPU bound task in the middle of it.

<img width="863" height="558" alt="image" src="https://github.com/user-attachments/assets/b8872611-958e-4cf7-aff4-cecb9f04d1b1" />

```js
let a = 5;
let b = 10;
console.log(a);
console.log(b);
// wait for a second and then print their sum
console.log(a + b)
//---------------------------
let a = 5;
let b = 10;
console.log(a);
console.log(b);
// wait for a second : one artificial way of waiting
for(let i=0; i<= 10000000; i++){
   // do nothing just for waiting
}
console.log(a + b)
//---------------------------------
let a = 5;
let b = 10;
console.log(a);
console.log(b);
const beforeTime = Date.now();
// wait for exactly 1 sec
for (let i = 0; i <= 10000000; i++) {
  const currentTime = Date.now();
  if (currentTime - beforeTime >= 1000) {
    break;
  }
}
console.log(a + b);
// isn't this a sync code can't we make it Async
// wouldn't it be nice if we tell the OS to callback this after 1 sec
//--------------------------------
let a = 5;
let b = 10;
console.log(a);
console.log(b);

function callback(a, b){
    console.log(a + b);
}
// wait for a second : setInterval(func, 1000)
setInterval(callback, 1*1000);

for(let i=0; i<10; i++){
    console.log("Hello JS")
}
//Again this is the same thing as reading the file asynchronously
// It is also known as Busy wait, that making cpu busy forcefully
```


Let’s look at the code to read from a file asynchronously. <br/>
Here, we pass in a function as an argument. <br/>
This function is called a callback since the function gets called back when the file is read. <br/>

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/af1333bb-ae28-4bf6-a9ab-03f78f34b54e" />


```js
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
```

**setTimeout**

setTimeout is another asynchronous function that executes a certain code after some time

```js
function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");
```

Make a stopwatch
```js
let counter = 0;
function callback(){
      console.log(counter);
      counter += 1;
}

setInterval(callback, 1000);
//Here, we're free and said to someone call this function after one second
// Now we can do other things
let sum = 0;
for(int i=0; i<10000000000; i++){
    sum += i;
}

console.log("Sum is "+ sum);

```

</details>
<!----------------JS  Asynchronous code, callbacks --------------------------->

<details>
  <summary>🔻<b> JS Architecture for async code</b>  </summary>

How JS executes asynchronous code  [http://latentflip.com/loupe/](http://latentflip.com/loupe/)

**1. Call Stack**

- The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.
- When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.

```js
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();
```

**2. Web APIs**

- Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events.

**3. Callback Queue**

The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by Web APIs after they have completed their operation.

4. Event loop

The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.

</details>
<!----------------JS JS Architecture for async code  --------------------------->
