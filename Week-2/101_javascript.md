# JS 101


<details>
  <summary> 🔻<b> The Basics - <code>JavaScript</code> </b></summary>

### Web development

Web development involves writing a lot of HTML, CSS and JS code. 

Historically (and even today to some extend), browsers could only understand HTML, CSS and JS.

Any website that you see, is a bunch of HTML, CSS and JS files along with some assets (images, videos etc).

<img width="350" height="200" alt="image" src="https://github.com/user-attachments/assets/349427e3-5193-4d3e-bdb6-ff244cde7693" />

```powershell
Website/
│
├── index.html
├── style.css
└── script.js
```

99.99% of the time website is build in ```HTML + CSS + JS``` files. But for 0.01% time, 
we can use different languages like ```C++, RUST, Goland``` etc there are ways to do it.

<br/>


### Facts/Callouts

1. React, NextJS are ```frameworks```. They compile down to HTML, CSS, JS in the end. That is what your browser understands.

```powershell
JS-Framework/
│
├── React
├── NextJS
└── Astro

- Frameworks involves writing JS Frontend.
- JavaScript is mostly used in frontend, little bit of backend also. 
```

Here, Generally a term is coined in Web Dev **```MERN``` Stack**
- M -> MongoDB
- E -> ExpressJS
- R -> React
- N -> NextJS

2. When you run your C++ code on ```leetcode```, it does not run on your browser/machine. It runs somewhere else.
   Your browser can’t (almost) compile and run C++ code.

3. If someone asks — What all languages can your browser interpret, the answer is HTML, CSS, JS and **WebAssembly**.
   It can, technically, run C++/Rust code that is compiled down to Wasm.


> **Assembly** -> ```C++``` code compiled down to Assembly which OS understands and interpret and run. 

> **WebAssembly** ->  Apart from ```HTML + CSS + JS``` Browsers also understand ```WebAssembly```, A lot of languages like ```RUST, C``` etc
  compiled down to Web Assembly (Wasm)
> - In some specific case e.g. Background removal on Google Meet, when you go to googlemeet.com, select background removal-It runs in a web worker
    and that code is written in ```GO, Rust, C``` languages not in ```HTML, CSS, JS```
> - So, There're usecases to run ```C/C++/RUST/GOLang``` in browsers in some minute cases. 

<br/>

### Before we proceed, do one of the following

**Ways to run JavaScript**
1. Online JavaScript Playground
2. Install Node.js locally
3. Keep your browser console open for testing locally

<br/>

</details>

<!---------------- JS Basics ---------------------------->

<details>
  <summary> 🔻<b> Properties of <code>JavaScript</code> </b></summary>

<br/>

Every language comes with it’s unique set of features. 

Javascript has the following -

### 1. Interpreted
<br/>

JavaScript is an **interpreted language, meaning it's executed line-by-line** 
 at runtime by the **JavaScript engine** in the browser or server environment, rather than being compiled into machine code beforehand.

- ```C++``` code -> first compiled in ```Binary Code``` -> then ```.exe``` file ```Runs on Machine```
- ```JS``` code -> directly ```Runs on Machine```

<img width="350" height="200" alt="image" src="https://github.com/user-attachments/assets/1989fa80-d7d8-401f-be12-4c0046496d6f" />

**Upsides** - 

1. There is one less step to do before running your code

**Downsides** -

1. Performance Overhead:
2. More prone to runtime errors

### 2. Dynamically Typed
<br/>

Variables in JavaScript are **not bound to a specific data type**. 
Types are determined at runtime and can change as the program executes.

**C++ Code (will compile)**
```c++
#include <iostream>

int main() { 
  int a = 1;
  a = "hello";
  a = true;
}
```
**JS Code (won’t compile)**
```js
var a = 1;
a = "Shankar";
a = true;

console.log(a)
```

### 3. Single threaded
<br/>

JavaScript **executes code in a single-threaded environment**, meaning it processes one task at a time. <br/>
We will dive deeper into this later.

<img width="350" height="200" alt="image" src="https://github.com/user-attachments/assets/0bfce745-00c1-4e20-82f6-f9cd89b6f3e1" />


### 4. Garbage collected
<br/>

JavaScript **automatically manages memory allocation and deallocation through garbage collection**, 
which helps prevent memory leaks by automatically reclaiming memory used by objects no longer in use.

**Memory Management**  <br/>
Memory Management through **Garbage Collector**
1. Written by Smart people, those who written this language.
2. Usually no dangling pointers/memory issues
3. As a developer, You can't do manual memory management
4. Example : ```Java```, ```JavaScript```

**Manual** Memory Management
1. As a developer, You can allocate and de-allocate memory yourself.
2. As developer involve manually, Can lead to dangling pointers/memory issues.
3. Since developers have to do manual memory management. So, Learning Curve is very high.

**The RUST way** of Memory Management
1. RUST has its own ownership model for memory management.
2. Makes RUST extremely safe to memory error. 

> Since there're a lot checks in ```RUST``` that's why it takes time while compiling.
That's why ```RUST``` is compiled language not Interpreted language.

<img width="350" height="200" alt="image" src="https://github.com/user-attachments/assets/e9b25ba0-592e-4f7c-a6b1-e3438e7185df" />


### Conclusion

**Is JS a good language ?**
- Yes and no. It is beginner friendly, but has a lot of performance overhead.
- Bun is trying to solve for a lot of this, but there’s a long way to go before JS can compete with languages like ```C++/Rust```

<br/>

</details>
<!---------------- JS Properties ---------------------------->
<details>
  <summary> 🔻<b> Syntax of <code>JavaScript</code> </b></summary>


### 1. **Variables**

Variables are used to store data. In JavaScript, you declare variables using `var`, `let`, or `const`.

```js
let name = "Krishna";     // Variable that can be reassigned
const age = 30;           // Constant variable that cannot be reassigned
var isStudent = true;     // Older way to declare variables, function-scoped
```

- Assignment
    
  Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza.
  Use appropriate variable declarations (`let`, `const`, or `var`).
  Try logging it using `console.log`
```js
let color = "Black";
const height = 170;
let isLikePizza = true;

console.log(color);
console.log(height);
console.log(isLikePizza);
```

### 2. **Data types**

```js
// Simple Datatype
let number = 42;             // Number
let float = 3.14;            // Number
let char = 'A';              // Char
let string = "Hello World";  // String
let isActive = false;        // Boolean

// Complex Datatype
let numbers = [1, 2, 3];                   // Array
let object = { id : 101, name : "Ram" };  // Object
```

### 3. **Operators** 

```js
let sum = 10 + 5;          // Arithmetic operator
let sub = 10 - 5;
let mul = 10 * 5;
let div = 10 / 5;
let mod = 10 % 5;

let isEqual = (10 === 10); // Comparison operator
let isNotEqual = (10 !== 10);

let isTrue = (true && false); // Logical operator
let isFalse = (true || false);
```

### 4. **Functions** 

```js
// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("Shiv"); // "Hello, Shiv"

console.log(message);
```
> Function_name is also called as Function_Signature

- Assignment #1
    
Write a function `sum` that finds the sum of two numbers. <br/>
Side question - Try passing in a string instead of a number and see what happens?
```js
function findSum(num1, num2){
    return num1 + num2;
}

let result = findSum(12, 16);
console.log(result);  // 28

let result2 = findSum('12', 16);
console.log(result2); //'12161' as String
```

- Assignment #2
    
Write a function called `canVote` that returns true or false if the `age` of a user is >= 18
```js
function canVote(age){
    if(age >= 18){
       return true;
    }
    else{
       return false;
    }
}

let age = 19;
console.log('User\'s can vote '+ canVote(age));
```    

### 5. **Conditionals : If/Else** 

```js
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```
- Assignment
    
Write an if/else statement that checks if a number is even or odd. 
If it's even, print "The number is even." Otherwise, print "The number is odd."
```js
if (num % 2 == 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}
```
```js
if(num > 0 ){
   console.log("The number is positive.");
}
else if(num == 0){
   console.log("The number is Zero.");
}
else{
   console.log("The number is negative.");
}
```

### 6. **Loops** 

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}
```

- Assignment
    
Write a function called sum that finds the `sum` from 1 to a number

```js
function sum(num){
    let sumOfNum = 0;
    for(let i=0; i<=num; i++){
        sumOfNum += i;
    }
    return sumOfNum;
}

// Mathematical formula
function findSumOfnNaturalNumber(n){
    return n*(n-1)/2;
}

let n = 25;
let result = sum(n);
console.log(result);
console.log(findSumOfnNaturalNumber(n));
```

</details>

<!----------------JS Syntax---------------------------->
<details>
  <summary>🔻<b> Complex data types <code>JavaScript</code> : <code>Arrays </code> and <code>Objects </code> </b></summary>


## Objects

An object in JavaScript is a collection of `key-value pairs`,
where each `key` is a string and each `value` can be any valid JavaScript data type, including another object.

> In JavaScript they're known as `key-value pairs` and in Java and RUST, they're known as `HashMaps`

**Why Object?** <br/>
Let's say we have to store multiple things like name, age, email, password about as a single user who is signning up to your WebApps.
```js
function isLegal(name, age){
     if(age >= 18){
          console.log(name + " is allowed to vote bcuz his age is  "+ age);
     }
     else{
          console.log(name + " is Not allowed to vote bcuz his age is  "+ age);
     }
}

let username1 = "Abc";
let age1 = 18;
let password1 = "*****";


let username2 = "Xyz";
let age2 = 11;
let password2 = "*****";

isLegal(username1, age1);
isLegal(username2, age2);

```

But what if the user has a lot of properties like address, country, city, pincode etc etc. <br/>
Not only that Also on your WebApps, there are n number of users.
- So, if we do that we have to define m numbers of same variables for n users which is a ugly way to do it and at the same time It voilets DRY principle of
  computer Science.
- Wouldn't it be nice if we can do so in just one time in few lines, That's where something came into picture and i.e. **objects** or **Key-Value pairs**
  **HashMaps**

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/d4583fa8-16cd-42bd-8bb2-84eb9cd67956" />


```js
let user = {
	name: "Vishnu",
	age: 19
}

console.log("User name is " + user.name);
console.log("User age is " + user["age"]);
```

Writing a combine variable is better than writing n variables separately.
```js
function isLegal(name, age){
     if(age >= 18){
          console.log(name + " is allowed to vote bcuz his age is  "+ age);
     }
     else{
          console.log(name + " is Not allowed to vote bcuz his age is  "+ age);
     }
}

user1 = {
       name: "abc",
       password:"*****",
       age: 18
}
user2 = {
       name: "xyz",
       password:"*****",
       age: 17
}
isLegal(user1.name, user1.age);
isLegal(user2.name, user2.age);
```
We're doing same thing but instead of using n separated varibales, we're using combined variables i.e object. <br/>
We can do still better than this, instead of passing n different variables, we can take the leverage of using combine variable Object and pass only the
object.
```js
function isLegal(user){
     let name = user.name;
     let age = user.age;
     if(age >= 18){
          console.log(name + " is allowed to vote bcuz his age is  "+ age);
     }
     else{
          console.log(name + " is Not allowed to vote bcuz his age is  "+ age);
     }
}

user1 = {
       name: "abc",
       password:"*****",
       age: 18
}
user2 = {
       name: "xyz",
       password:"*****",
       age: 17
}
isLegal(user1);
isLegal(user2);
```

> Basically what an Object does is encapsulate the things.

> Object can get very complex like object inside object.

```js
let user = {
       name: "Ram",
       age: 21,
       email: "ram@email.com",
       address : {
            vill: "xyz",
            pincode: 161010,
            city: 'Awadh',
            country: "Bharat"
       },
       metadata : {
             books: ["book1", "book2", "book3"],
             games: [ { board: "BCCI"}]
       }
}


console.log("user "+user.metadata.books[1]); //user book2
console.log("user "+user.metadata.games[0].board); //user BCCI
```
- Assignment #1   
Write a function that takes a `user` as an input and greets them with their name and age
```js
function greetsUser(user){
      console.log(`Hi, ${user.name}, Your age is ${user.age}`)
}

user1 = {
    name: "Deva",
    age: 21,
    gender: "Male"
}

greetsUser(user1);
```

- Assignment #2  
Write a function that takes a new object as input which has `name` , `age`  and `gender` and greets the user
with their gender (Hi `Mr/Mrs/Others` Akash, your age is 21)
```js
function greetsUser(user){
      let greet = "Hi ";
      if(user.gender === "Male"){
        greet += "Mr.";
      }
      else if(user.gender === "Female"){
        greet += "Ms.";
      }
      else{
        greet += "Others."
      }
      console.log(`${greet} ${user.name}, your age is ${user.age}`)
}

user1 = {
    name: "Akash",
    age: 21,
    gender: "Male"
}
user2 = {
    name: "Durga",
    age: 20,
    gender: "Female"
}
user3 = {
    name: "Srikhandi",
    age: 25,
    gender: "Others"
}
greetsUser(user1);
greetsUser(user2);
greetsUser(user3);
```

- Assignment #3  
Also tell the user if they are legal to vote or not.
```js
function greetsUser(user){
      let greet = "";
      if(user.gender === "Male"){
        greet += "Mr.";
      }
      else if(user.gender === "Female"){
        greet += "Ms.";
      }
      else{
        greet += "Others."
      }
      console.log(``)
      if(user.age >= 18){
        console.log(`Hi ${greet} ${user.name}, your age is ${user.age}.You're eligible for Vote`);
      }
      else{
        console.log(`Hi ${greet} ${user.name}, your age is ${user.age}.You're not eligible for Vote`);
      }
  
}  

user1 = {
    name: "Deva",
    age: 17,
    gender: "Male"
}
user2 = {
    name: "Durga",
    age: 20,
    gender: "Female"
}
user3 = {
    name: "Srikhandi",
    age: 25,
    gender: "Others"
}
greetsUser(user1);
greetsUser(user2);
greetsUser(user3);
```
<!----------------- Objects -------------------------->

## Arrays

Arrays let us group data together.

```js
user1 = "Krishna";
user2 = "Arjun";
user3 = "Karn";
// Instead of n-variables, we can have one single variable i.e. Arrays

const users = ["Krishna", "Arjun", "Karn"];

console.log(users);

const firstUser = users[0];
const secondUser = users[1];
const thirdUser = users[2];
console.log(firstUser, secondUser, thirdUser);

for(let i=0;  i<3; i++){
  console.log(users[i]);
}

const totalUsers = users.length;
for(let i=0;  i<totalUsers; i++){
  console.log(users[i]);
}

let ages = [21, 22, 23];
console.log(ages);
```

- Assignment
Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about `filter` in JS


### Array of Objects

We can have more complex objects, for example an array of objects
```js
const users = [{
		name: "Surya",
		age: 21
	}, {
		name: "Chandra",
		age: 22
	}
}

const user1 = users[0] 
const user1Age = users[0].age
```
- Assignment
    
Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
```js

```

### Object of Objects

We can have an even more complex object (object of objects)
```js
const user1 = {
	name: "Ganesh",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "206 20A"
	}
}

const city = user1.address.city;
```

- Assignment
    
Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male.
```js

```
<!----------------- Arrays --------------------------->


</details>
<details>
  <summary><b>Map, Filter and Arrow Functions </b>  </summary>

## Arrow Function vs Normal Function
```js
// Normal Function in JS
function sum(a, b){
    return a + b;
}
// Array Function in JS
const sum = (a, b) => {
    return a + b;
}
// Both are almost same, not exactly
const ans = sum(3, 7);
console.log(ans);
```
| Normal Function                           | Arrow Function                            |
|-------------------------------------------|-------------------------------------------|
| Does bind `this` to object                | Doesn't bind `this` to object             |
| So, Used with constructor `new`           | So, Can't be used with constructor `new`  |
| Can be call it before declaration         | Can't call it before declaration          |
| Have to `return` anyway  explicitly       | allow implicit return, means No `return` needed if single expression.  |
| Has `arguments`                           | Has no `arguments`, has rest parameters   |
| Usecases : Object methods, Event handlers | Usecases : Callbacks, Short utility functions |

```js
const user = {
  name: "Ramayan",
  normal: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

user.normal(); // Ramayan
user.arrow();  // undefined
/*----------------------*/
// Constructor inside a class Person
function Person(name){
  this.name = name;
}
const p1 = new Person("Bharat");

const Animal = (name) => {
  this.name = name;
};
const a1 = new Animal("Ashwa"); // Error
/*----------------------*/
sum(1,2);  // Okay
function sum(a,b){
  return a+b;
}

sum2(1,3); // Error
const sum2 = (a,b) => a+b;
/*----------------------*/

function sum(a,b){
  return a+b;
}
const sum2 = (a,b) => a+b;
/*----------------------*/

function test() {
  console.log(arguments); // {'0':'a', '1':2}
}
test('a',2);

// const test1 = () => {
//   console.log(arguments); //Error
// }
// test1(1,2)

const test2 = (...args) => console.log(args);
test2(1,'2')
```
## Map

## Filter

## Reduce

</details>
<!----------------JS Complex data types Arrays and Objects --------------------------->

<details>
  <summary>🔻<b> Introduction </b>  </summary>


</details>
<!----------------JS Introduction --------------------------->

<details>
  <summary>🔻<b> Normal functions in JS</b>  </summary>


</details>
<!----------------JS Normal functions --------------------------->

<details>
  <summary>🔻<b> Synchronous code</b>  </summary>


</details>
<!----------------JS Synchronous code --------------------------->

<details>
  <summary>🔻<b> I/O heavy operations </b>  </summary>


</details>
<!----------------JS  I/O heavy operations --------------------------->

<details>
  <summary>🔻<b> I/O bound tasks vs CPU bound tasks </b>  </summary>


</details>
<!----------------JS  I/O bound tasks vs CPU bound tasks  --------------------------->

<details>
  <summary>🔻<b> Doing I/O bound tasks in the real world</b>  </summary>


</details>
<!----------------JS  Doing I/O bound tasks in the real world --------------------------->

<details>
  <summary>🔻<b> Functional arguments</b>  </summary>


</details>
<!----------------JS Functional arguments  --------------------------->

<details>
  <summary>🔻<b> Asynchronous code, callbacks</b>  </summary>


</details>
<!----------------JS  Asynchronous code, callbacks --------------------------->

<details>
  <summary>🔻<b> JS Architecture for async code</b>  </summary>


</details>
<!----------------JS JS Architecture for async code  --------------------------->
