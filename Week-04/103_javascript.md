# Week 4 - Async Deep Dive

Before deep diving into Async, Let's understand few concepts like Clases in JS bcuz this is what need to know before understanding Promises.



<details>
  <summary>🔻 <b>Classes in JS</b> </summary>


## Class

<details>
  <summary> #1 Primitive types : <code> number, string, boolean </code> </summary>

<br/>

1. number : `1, 3.14, 3.3333, 100000000`
2. string : `'a', '1', "abc", 'shiva'`
3. boolean : `true, false`

<details>
  <summary>see more about Primitive types</summary>

```js
let num1 = 1;
let num2 = 2.0;
let num3 = 3.3333;
let num4 = 10000000000; //10^10

let str1 = "a";
let str2 = "1";
let str3 = "Shiva";

let bool1 = true;
let bool2 = false;

console.log(num1, num2, num3, num4); // 1 2 3.3333 10000000000
console.log(str1, str2, str3); // a 1 Shiva
console.log(bool1, bool2); // true false
```
 
</details>

</details>

<details>
  <summary> #2 Complex types : <code> Objects, Arrays </code> </summary>

<br/>

1. Objects
2. Arrays

<details>
  <summary>see more Complex types</summary>

Arrays :
```js
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1.1, 2.2, 3.3, 4.4, 5.5];
let arr3 = [1000000, 2000000, 3000000, 400000, 50000];

let arr4 = ["a", "e", "i", "o", "u"];
let arr5 = ["Brahma", "Vishnu", "Mahesh", "Shakti", "Asura"];

let arr6 = [true, false];

console.log(arr1); // [ 1, 2, 3, 4, 5 ]
console.log(arr1.join(",")); // 1,2,3,4,5
console.log(JSON.stringify(arr1)); // "[1,2,3,4,5]"
console.log(arr1.reduce((res, ele) => res + "-" + ele)); // 1-2-3-4-5

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

```

Objects :
```js
let users = {
  name: "Shiva",
  age: 21,
};

console.log(users.name);    // Shiva
console.log(users.age);     // 21
console.log(users["name"]); // Shiva
console.log(users["age"]);  // 21
```
Object of Arrays:
```js
const obj = {
  arr: [1, 2, 3, 4, 5],
  brr: ["Aakash", "Vayu", "Jal", "Agni", "Prithvi"],
  crr: [true, false],
};
console.log(obj.arr); // [ 1, 2, 3, 4, 5 ]
console.log(obj["arr"]); // [ 1, 2, 3, 4, 5 ]
console.log(obj.arr[0]); // 1
console.log(obj["arr"][0]); // 1

// to Don't get confused always use dot operator
console.log(obj.arr);
console.log(obj.arr[0]);
```

```js
const user = {
  name: "Prithvi",
  age: 25,
  cities: ["CHD", "DL", "BLR", "MB"],
  id_card: ["VoterID", "AdharID", "PassportID"],
};

console.log(user.cities); // [ 'CHD', 'DL', 'BLR', 'MB' ]
console.log(user.id); // undefined , no error why?
// Since JS is loosly time it will not through error rather it return a value undefined
console.log(user.id_card); // [ 'VoterID', 'AdharID', 'PassportID' ]

```

Array of Objects
```js
let arr = [
  {
    name: "Brahma",
    age: 21,
  },
  {
    name: "Vishnu",
    age: 22,
  },
  {
    name: "Mahesh",
    age: 23,
  },
];

console.log(arr); // print the whole array
/*
[
  { name: 'Brahma', age: 21 },
  { name: 'Vishnu', age: 22 },
  { name: 'Mahesh', age: 23 }
]
*/
console.log(arr[0]); // { name: 'Brahma', age: 21 }
console.log(arr[0].name); // Brahma
```
</details>

</details>

<details>
  <summary> #3 Classes <code> class, this, new, constructor, static, extends, super, implements</code> </summary>

<br/>

It is not that, We can't write out code without classes. 
We can do exactly same without class also.

But it is saying or recommendation to use Classes in very long code base bcuz it makes your code cleaner to read compared to code without classes.
There are other use cases of classes like for DRY Principle, Code Resuability through Inheritance.

**In JavaScript, classes give us a way to define blueprints for creating objects.**

> **Class objects** are different from the **objects that we create directly**.
```js
class Rectangle{
// class definition
}
let r1 = new Rectangle(); // class object

let user = {
     name : 'abc',
     age : 21
} // object i.r that is of Object Class provided by JS
```


example :
```js
class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
   }
   
}

const rect = new Rectangle(2, 4)
const area = rect.area();
console.log(area)
```


### Key Concepts

1. **Class Declaration**:
    - You declare a class using the `class` keyword.
    - Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.

2. **Constructor**:
    - A special method inside the class that is called when you create an instance (an object) of the class.
    - It’s used to initialize the properties of the object.

3. **Methods**:
    - Functions that are defined inside the class and can be used by all instances of the class.

4. **Inheritance**:
    - Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.

5. **Static Methods**:
    - Methods that belong to the class itself, not to instances of the class. You call them directly on the class.

6. **Getters and Setters**:
    - Special methods that allow you to define how properties are accessed and modified.


<details>
  <summary>see more Classes</summary>

Variables :
```js
let a = 2;
let b = 3;
let sum = a + b;
console.log(sum); // 5
```
Functions :
```js
function sum(a, b){
    return a + b;
}

console.log(sum(2, 3)); // 5
// OR
let ans = sum(2, 3);
console.log(ans); // 5
```
Classes :
```js
class Arithmetic {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    const sum = this.a + this.b;
    return sum;
  }
}

let s1 = new Arithmetic(2, 3);
let ans = s1.sum();
console.log(ans); // 5
```
#### Flappy Bird Game

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/bc251b7e-3583-4dde-be04-3775c54ba202" />

Let's we have to make a FLAPPY BIRD GAME. <br/>
When you want to make something like this that a bunch of properties and function attched to an object that is where we create classes.

> Classes are used primarily when you want to not just create key-value pairs but also want to attached functions to it on top of these properties.

```js
function area(r){
    return r.width * r.height;
}
function paint(r){
   console.log("Color of the rectangle is " + r.color );
}


let r1 = {
    width: 10,
    height: 20,
    color: "red",
}
// you can create n rectangles like r1, r2, r3,....
let ans = area(r1);
console.log(ans); // 200
paint(r1); // Color of the rectangle is red
```
Instead of doing this way we can do this with class
```js
class Rectangle{
      constructor(width, height, color){
          this.width = width;
          this.height = height;
          this.color = color;
      }
      area(){
          return this.width * this.height;
      }
      paint(){
          console.log("Color of the rectangle is " + this.color);
      }
}

// Create an object of Rectangle Class using new Keywords
let r1 = new Rectangle(10, 20, "red");
let area = r1.area();
console.log(area); // 200
r1.paint(); // Color of the rectangle is red

let r2 = new Rectangle(15, 25, "green");
let r3 = new Rectangle(25, 35, "orange");
console.log(r2.area()); // 375
console.log(r3.area()); // 875
```

> Keywords like `class`, `this`, `new`, `constructor`, `static`, `extends`, `super`, `implements` 

> In the Class, `function` keyword is not used to create function(i.e. known as Method).

> When we create an object of Class, the `constructor()` is called automatically, which is a special method and it construct the object,
> initialize the properties of object( i.e. knows as variables or data-members) 

There are some benefits of creating objects from a class rather than creating raw objects. <br/>
We can create n numbers of objects from a class. <br/>
Through class objects we call all the functions attached to it.

One of the reason why we learn class is bcuz `Promise` that we have to learn in JS is also a class that JavaScript provides and someone is written
it already, and to able to use it we have to understand it, so understand Promises we need to under classes.

**`static` Method**
- This is a special method, which is created by putting `static` keyword inside the class.
- static method is called by class itself not by the object of class like normal method of the class.
- One of the use case of static function is It is used in **Singleton class** (where we have only one class, base class)
- We will see about the types of classes in a so called very important concept known as **Inheritance**

```js
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  static whoAmI() {
    console.log("I'm static method");
  }

  area() {
    return this.width * this.height;
  }
  paint() {
    console.log("Color of the rectangle is " + this.color);
  }
}

// Create an object of Rectangle Class using new Keywords
let r1 = new Rectangle(10, 20, "red");
let area = r1.area();
console.log(area); // 200
r1.paint(); // Color of the rectangle is red

// Static method can only called by class itself not object of the class
//r1.whoAmI(); // TypeError: r1.whoAmI is not a function
Rectangle.whoAmI(); // I'm static method

```

</details>

</details>



<!-----------Classes in JS----------------------->

</details>

<details>
  <summary> 🔻 <b>Inheritance in classes</b> </summary>

<br/>

> Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one. This is what known as
**Inheritance**.

> - `Single Inheritance`: A class inherits from only one base class. (e.g. Class A -> Class B)
> - `Multilevel Inheritance`: A class is derived from another derived class, forming a chain (e.g. Class A -> Class B -> Class C)
> - `Hierarchical Inheritance`: Multiple classes inherit from a single base class. (e.g. Class A -> Class B, Class A -> Class C)
> - `Multiple Inheritance`: A class inherits from more than one base class. (e.g. Class A -> Class C, Class B -> Class C)
> - `Hybrid Inheritance`: A combination of two or more types of inheritance 

> `Multiple Inheritance` is supported by C++ and Python,
> But **Java does not support Multiple Inheritance** directly through classes due to the ***diamond problem***
> - diamond problem : ambiguity when two parent classes have methods with the same name.

> `Multiple and Hybrid Inheritance` is complex and may lead to ambiguity, especially in languages like C++ without virtual inheritance.
> In **Java, `multiple and hybrid inheritance`** are achieved using **interfaces**, not classes, to avoid ambiguity and maintain simplicity.

<details>
  <summary> C++ Virtual inheritance</summary>

```cpp
class A { public: int x; };
class B : public A { };
class C : public A { };
class D : public B, public C { }; // D has two copies of A   
```
```cpp
class B : virtual public A { };
class C : virtual public A { };
class D : public B, public C { }; // Only one copy of A in D   
```

</details>

- We will see about the types of classes in a so called very important concept known as **Inheritance**
  - Class and Encapsulation
  - Base Class | Parent Class
  - Sub Class  | Child Class | derive class
  - Singleton Class
  - Overrride vs Overwrite
  - Polymorphism
  - Extends vs Implements
  - Abstraction
  - Interface (i.e. contract)

> All of these are something called **OOP** i.e. **Object Oriented Programming**

A textbook definition and question like why should we use classes ?, What is OOP ? etc

Rarely you will create classes that need inheritance in JavaScript. In TypeScript, there are some use cases where you have to write modular code where
you do use inheritance but it is rare.


<details>
  <summary>see more Inheritance</summary>

Till we have a single class Rectangle, no problem. <br/>
Now we have Rectangle + Square + Circle classes.
```js
//  RECTANGLE CLASS
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  paint() {
    console.log("Color is " + this.color);
  }
}

// SQUARE CLASS
class Square {
  constructor(side, color) {
    this.side = side;
    this.color = color;
  }

  area() {
    return this.side * this.side;
  }
  perimeter() {
    return 4 * this.side;
  }
  paint() {
    console.log("Color is " + this.color);
  }
}

// CIRCLE CLASS
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  area() {
    return 3.14 * this.radius * this.radius;
  }
  perimeter() {
    return 2 * 3.14 * this.radius;
  }
  paint() {
    console.log("Color is " + this.color);
  }
}

// Create an object of different Classes using new Keywords
let r1 = new Rectangle(10, 20, "red");
let s1 = new Square(10, "blue");
let c1 = new Circle(10, "green");

console.log(r1.area()); // 200
console.log(s1.area()); // 100
console.log(c1.area()); // 314

r1.paint(); // red
s1.paint(); // blue
c1.paint(); // green

```
There is a problem with above code i.e. We're repeating the code `color, paint()` which is voilation of **DRY : Don't repeat yourself** principles

<img width="500" height="350" alt="image" src="https://github.com/user-attachments/assets/1955458b-46b8-4ed1-babb-65f9717e225c" />

<br/>

How can we overcome that? <br/>
By putting all the common code at the same place and reuse it this is where the concept of **Inheritance** come into picture.
- We can keep the common things of classes within a another class i.e. known as **Parent Class or Base Class or Super Class** and all the **Child or
  Sub Class or Derive Class** can extends the Parent class and use all of its data members and member functions.

Here in our case where  we have Rectangle, Square and Circle class. <br/>
So, we can create a Parent Class i.e. Shape class, Now shape will have the common properties and functions and all the base classes can use it. <br/>
Here, we have to follows some rules of inheritance.
- Always create Parent class on top of every class
- To use the parent class in child class, extends parent in child using the keyword `extends` 
- Also call the constructor of parent class in each child class constructor so that they can use parent class using the keyword `super`. Make sure
  call `super()` in the child class first before using the `this` bcuz this needs that everything must be ready for it otherwise error.

<img width="500" height="350" alt="image" src="https://github.com/user-attachments/assets/16066a5b-e20c-4a9d-8eb3-9f3e8f53d6ae" />



```js
// PARENT CLASS SHAPE
class Shape {
  constructor(color) {
    this.color = color;
  }

  paint() {
    console.log("Color is " + this.color);
  }
}

//  CHILD CLASS RECTANGLE
class Rectangle extends Shape {
  constructor(width, height, color) {
    // let shapeObj = new Shape(color);
    // Shape_construtor(color){
    //     this.color = color
    // } this thing is done by super()
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// CHILD CLASS SQUARE
class Square extends Shape {
  constructor(side, color) {
    super(color);
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
  perimeter() {
    return 4 * this.side;
  }
}

// CHILD CLASS CIRCLE
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  area() {
    return 3.14 * this.radius * this.radius;
  }
  perimeter() {
    return 2 * 3.14 * this.radius;
  }
}

// Create an object of different Classes using new Keywords
let r1 = new Rectangle(10, 20, "red");
let s1 = new Square(10, "blue");
let c1 = new Circle(10, "green");

console.log(r1.area()); // 200
console.log(s1.area()); // 100
console.log(c1.area()); // 314

r1.paint(); // red
s1.paint(); // blue
c1.paint(); // green

```
Basically removed the duplicates code into Parent class and reuse it in every child class. <br/>
Generally we don't use inheritance in JS but there will be some functionality that you want to abstract out in Base class then you use it.

Suppose one more features is going to add that is volume in every class.
So how can we do that?
```js
class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  volume(){
         //return this.width * this.height * this.width;
         return this.area() * this.width; // we have already area just multiply it with depth
  }
}
```
We can also move the volumr function logic in Parent Class bcuz Logic is same `volume = area()* depth` and all shape has now depth. <br/>
Now since we're using `area()` funtion inside it Parent class, so It is must to have `area()` in every child class otherwise it throws error to handle
that we can write `area()` function which is only run if it in not found in child. here comes the another concept of OOP i.e. `Method Overriding`.

```js
// PARENT CLASS SHAPE
class Shape {
  constructor(depth, color) {
    this.depth = depth;
    this.color = color;
  }

  paint() {
    console.log("Color is " + this.color);
  }

  area() {
    throw new console.error("The area must be implmented in subclass");
  }
  volume() {
    return this.area() * this.depth;
  }
}

//  CHILD CLASS RECTANGLE
class Rectangle extends Shape {
  constructor(width, height, depth, color) {
    super(depth, color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// CHILD CLASS SQUARE
class Square extends Shape {
  constructor(side, color) {
    super(side, color);
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
  perimeter() {
    return 4 * this.side;
  }
}

// CHILD CLASS CIRCLE
class Circle extends Shape {
  constructor(radius, color) {
    super(radius, color);
    this.radius = radius;
  }

  area() {
    return 3.14 * this.radius * this.radius;
  }
  perimeter() {
    return 2 * 3.14 * this.radius;
  }
}

// Create an object of different Classes using new Keywords
let r1 = new Rectangle(10, 20, 30, "red");
let s1 = new Square(10, "blue");
let c1 = new Circle(10, "green");

console.log(r1.area()); // 200
console.log(s1.area()); // 100
console.log(c1.area()); // 314

console.log(r1.volume()); // 6000
console.log(s1.volume()); // 1000
console.log(c1.volume()); // 3140

r1.paint(); // red
s1.paint(); // blue
c1.paint(); // green

```
> first when function of a class is called it will look into child class if it found it will run it and if it not found,
> it will look into parent class, if it found it will run otherwise throw error.

Write a function which compare 2 class object and check which one volume is greater.
```js
// we can write that function like
function whohasMoreArea(s1, s2) {
  if (s1.volume() > s2.volume()) {
    console.log(s1);
  } else {
    console.log(s2);
  }
}

whohasMoreArea(new Rectangle(10, 20, 30, "red"), new Square(10, "blue"));
// Rectangle { depth: 30, color: 'red', width: 10, height: 20 }
```

Can we have 2 parent class of a child class? : yes, java Not allowed due to diamond problem, so java use Interfaces instead of `extends` to inherit
from Interfaces we use `implements`. We will also see this in TypeScript.
  
</details>


</details>

<!-----------Inheritance in classes----------------------->

<details>
  <summary>🔻 <b>Some more classes</b> </summary>

<br/>

There are also classes that JS provides **by default** which are already written by someone. We do only use them.<br/>
Example :
- `Date` class,
- `Map` class,
- `Promise` class , ....... etc.

**Date**
```js
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format

console.log(now.getDay());   // 1,2,3,....29/29/30/31
console.log(now.getMonth()); // 0,1,2,3,4,5,6,7,8,9,10,11
console.log(now.getYear());  // 1970
```

**Map**
```js
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));
```

**Promise**
```js
let myPromise = new Promise();
myPromise.then()

// It is not like this exactly.
```

We will see Promises in details bcuz It is special class in JS.

<details>
  <summary>see more...</summary>
  
</details>


</details>


<!----------- Some more classes ----------------------->


<details>
  <summary> 🔻 <b>Promise class</b> </summary>

## Promise

A **Promise** in JavaScript is an object that represents the `eventual completion` (or failure) of an asynchronous operation and its resulting value.

Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.

Promise is an important class to know about. <br/>

> Calling a promise is easy, defining your own promise is where things get hard


In the end `Promise` is nothing but class, just like `Date` or `Map` provided by JS  or `Rectangle`, `Square` etc created and defined by us.

You can also code/write `Promise` class by yourself if you want. It is not difficult to code if you know Async Program.

```js
let p1 = new Promise();
```

We know about I/O Intensive Bound Operations vs CPU Intensive Bound Operations 

<details>
	<summary> Reading file Sync and Async </summary>

Reading file sync way
```js
// load the fs module/library to use readFile function
const fs = require("fs");

//reading file sync way
let content = fs.readFileSync("a.txt", "utf-8");
console.log(content);
```
Reading file also if error so do error handling
```js
// load the fs module/library to use readFile function
const fs = require("fs");

// How to handle error if file not found
try {
  let content = fs.readFileSync("a123.txt", "utf-8");
  console.log(content);
} catch (error) {
  console.log("Error while reading the file..... \n", error);
}
```
Reading the file in Asyn way using `readFile()` which takes a callback function.
```js
// load the fs module/library to use readFile function
const fs = require("fs");

// Now reading file : Async way

function callback(error, data) {
  if (error) {
    console.log("Error while reading file \n", error);
  } else {
    console.log(data);
  }
}

fs.readFile("a.txt", "utf-8", callback);

let control = 0;
for(let i = 0; i < 1000000; i++){
	control += i;
}
console.log(control);
```

</details>

So, `Promises` are sort of alternate to using `Callback functions` for Async code like reading file, Timer, database calls, API Calls.

Before 2014, Promises didn't exists, Callbacks were the only way to do Async operations.



<details>
	<summary> Promises as alternative to Callbacks </summary>

Promisified way to do Async operations, (Another little better way, more readable, slighly more mordern syntax and bunch of other benefits of promises over callbacks) But promises does the same thing waht callbacks function does. <br/>
e.g. : Reading file(i/o), doing database call, clocks timers, doing api call.

**From where these Promises comes out of the box of JS Syntax ?**

***In Computer Science Elite things People made which they understand and world doesn't.*** <br/>
Then they write their code using the elite thing. <br/>
- one such elite thing is `promises` and 
- `Dependency Injection` : unfortunately, all bigger code bases adopeted, Hence we have to learn about them. same thing is true about Promises.
Everything we can do with promises, can be done by suing Callback functions. <br/>
But It is more modern syntax that make you feel more superior developer that's why you learn it.


If you want to print "Hi there" on the screen after 5 seconds of your program start?
```js
function callback(){
	console.log("Hi there");
}

setTimeout(callback, 5*1000);

let sum = 0;
for(let i=0; i<1000; i++){
	sum+=i;
}
console.log(sum);
```
Is this Sync operation or Async Operations ? : **Async** bcuz we can do another operations instead of waiting for 5 secs.

**[Visualize it Here](http://latentflip.com/loupe/)**

</details>

Questions are : <br/>
**How to write a Promise ?** <br/>
**How do you use a Promise ?** <br/>

**Callback Version** of Printing a clock after 3 seconds Async code using `setTimeout(callback, 3000)`

**Promisified Version** of Printing a clock after 3 seconds Async code using `Promise Class and Promisified Function` i.e. Modern syntax of doing same thing. `setTimeoutPromisiifed(3000).then(callback)`

Only difference is Promisified Version is not a global function exists to you in JS while setTimeout() exists globally in JS.

But if it did exist, It would look something like this
```js
function setTimeoutPromisified(ms){
		return new Promise(resolve => setTimeout(resolve, ms));
}
```



### Using a function that returns a promise

Ignore the function definition of `setTimeoutPromisifed` for now


<details>
	<summary><b>1.  Code for Promisified version of setTimout </b> similar to Async Callback functions </summary>

```js
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// SYNTAX OF CALLING A PROMISIFIED FUNCTION ASYNC
function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)

```


> Note : `setTimeout(callback, 3000)` is something that is still written in traditional way rest almost all Async operations like readFile, Database call, API Calls are something that you usually write in Promisified way, not traditional callback function way.


</details>


<details>
	<summary><b>2. Code for Promisified version of reading a file </b>similar to Async Callback functions </summary>

```js
// include the module/library to readFile
const fs = require("fs");

// Promise Class is provided by JS that we're using it Promisified Function

// Defining the Promisified function
function fsReadFilePromisified(filePath, encoding) {
  //........Black Box for beginners as of now
}

// using the promisified function
function callback(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(data);
  }
}

fsReadFilePromisified("a.txt", "utf-8").then(callback);


/*
const fs = require("fs");

function callback(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(data);
  }
}

fs.readFile("a.txt", "utf-8", callback);
*/
```

Defining the Promisified Function
```js
function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}
```

</details>

<img width="350" height="200" alt="image" src="https://github.com/user-attachments/assets/afdd7942-d92c-4a98-8d2d-c87cabec9b45" />

> Note : Although both calling Asynchronously, both are same in performance, it's just that modern syntax is Promisified version.

Real world Example of Promisified function is `fetch()`
```js
fetch("api.google.com");
// what it returns is Promise.
// So on this promise you can call .then().catch() and so on so forth
```

<!----------- Promise class ----------------------->

## Question related to Promises

**Que : Why is that when we write callback function `callback(error, data)` not `callback(data, error)`?** <br/>
Ans : It is because whoever wrote `fs.readFile()` wrote it in a way that whenever the file is read, the callback function must be have 2 parameters first parameter is for error and second parameter is for data/content that a file has. Since while reading the file, it might get error or file not found to handle it, it is written like that.

<details>
	<summary> code for above </summary>

```js
const fs = require("fs");

function callback(err, data){
	if(err){
      // while error
      console.log("Error while reading the file");
    }
    else{
      // log the file data which has been read
      console.log(data);
    }
}

fs.readFile("a.txt", "utf-8", callback);
```
```js
const fs = require("fs");

//fs.readFile("a.txt", "utf-8", callback);
fs.readFile("a.txt", "utf-8", function callback(err, data){
	if(err){
      // while error
      console.log("Error while reading the file");
    }
    else{
      // log the file data which has been read
      console.log(data);
    }
});
```
```js
const fs = require("fs");

//fs.readFile("a.txt", "utf-8", callback);
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    // while error
    console.log("Error while reading the file");
  } else {
    // log the file data which has been read
    console.log(data);
  }
});
```
</details>

Interview Question : **Convert `fs.readFile()` to its Promisified Version** <br/>
Unfortunately, FileSystem  `fs` module/library was written back then, the only function it exposes few like `readFileSync()`, `readFile()`. <br/>
It didn't exposes its Promisified Version.

So, We can write it. It's difficult as of now we only know the How to call promisified function ? once we learned How to define promisified function.

<details>
	<summary> Let's code it </summary>

```js
const { log } = require("console");
const fs = require("fs");

function fsReadFilePromisified(filepath, encoding) {
  let p = new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return p;
}

function callback(content) {
  console.log(content);
}

//older ways, there we need to define the callback with 2 parameter err, data
//fs.readFile("a.txt", "utf-8", callback);

// promisified way
fsReadFilePromisified("a.txt", "utf-8").then(callback);
//Read the a.txt file with specified encoding and if everything goes well then only call the callback function which is inside then().
```
The way promises makes our life easier is that it has better syntax. 

Not only `then()` we also have `catch()` which can be called on top of then() If something went wrong in that case then() will not call there we can call the callback mentioned in catch().
```js
function callback(data){
		console.log(data);
}
function callbackErr(err){
		console.log("error while reading the file", err);
}

fsReadFilePromisified("a.txt", "utf-8")
		.then(callback)
		.catch(callbackErr)

```
```js
const { log } = require("console");
const fs = require("fs");

function fsReadFilePromisified(filepath, encoding) {
  let p = new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return p;
}

function callback(content) {
  console.log(content);
}

function callbackErr(err) {
  console.log("error while reading", err);
}

// promisified way
fsReadFilePromisified("a1.txt", "utf-8").then(callback).catch(callbackErr);
//Read the a.txt file with specified encoding and if everything goes well then only call the callback function which is inside then() otherwise if anything went wrong call catch with its callbackErr which will only run if then() didn't run.
```
</details>

<details>
	<summary> <b>Que : can we call promisified function by creating a variable?</b> </summary>

<br/>

Ans : Yes, We can and this will be exactly same like without it.
```js
fsReadFilePromisified("a.txt", "utf-8").then(callback).catch(callbackErr);

// or

let p = fsReadFilePromisified("a.txt", "utf-8");
p.then(callback).catch(callbackErr);

// Both are same.
```
</details>

<details>
	<summary> <b>Que : Without calling `.then()` can we call `.catch()`</b> </summary>

<br/>

Ans : Yes we can but then what is the use of it that we're reading the file but not printing it. <br/>
So if file is read the without any error then catch() will not called but if any error while reading the file then catch callbackerr will be called.
```js
let p = fsReadFilePromisified("a11.txt", "utf-8");
p.then(callback).catch(callbackErr);

// VS

let p = fsReadFilePromisified("a11.txt", "utf-8");
p.catch(callbackErr);
```
</details>

<details>
	<summary> <b>Promises can be either in Pending state to <code> </code>Resolve or `Error` state</b> </summary>


<br/>


- `resolve(data)` means Now send the control to `then()` call user's callback function
- `reject(err)` means Now send the control to `catch()` call user's callbackErr function

```js
const fs = require("fs");

function fsReadFilePromisified(filepath, encoding) {
  let p = new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return p;
}

function callback(content) {
  console.log(content);
}

function callbackErr(err) {
  console.log("error while reading");
}

let p = fsReadFilePromisified("a.txt", "utf-8");
p.then(callback).catch(callbackErr);

for (let i = 0; i < 2; i++) {
  console.log(p);
}

setTimeout(() => {
  console.log(p);
}, 500);

```

</details>

<details>
	<summary> <b>Que : Can we do sync operations by using Promisified function?</b> </summary>


<br/>

Ans : Yes, We can but there is no point of it. Like there is no point in callback in sync even though you can always write them.

Callback are in FIFO queue then why below code runs in different order? <br/>
The concept of **Micro Task vs Macro task** in Promise Resolve. <br/>
One task might be prefer over the other. <br/>
So, 2 macro tasks will be FIFO and 2 mico tasks will be FIFO. <br/>
But amongst them there will be a priority of one get picked over the other.

</details>

<!----------- Questions in Promises ----------------------->
<!----------- Promises Class ----------------------->
</details>


<details>
  <summary> 🔻 Assignment : Code the <b>Promise class</b> on yourself </summary>

## Assignment for Promises

- Calling is Promise is easy, defining a Promise is where things get hard.
- Your can code Promise Class by yourself. <br/>
It is not difficult to code if you know Async programming.

```js
class Promise{
     constructor(){
          // something
     }
     then(){
         // something
    }
}
```

```js
class Promise{
     constructor(){
          // something
     }
     then(){
         // something
    }
    catch(){
        // something
    }
}
```

```js
class Promise{
     constructor(fn){
          // something
     }
     then(){
         // something
    }
    catch(){
        // something
    }
}
```

```js
class Promise{
     constructor(fn){
          //this.fn(fun1, fun2)
          this.function(function (){
                // resolve
          }, function (){
                // reject
          }
          )
          
     }
     then(){
         // something
    }
    catch(){
        // something
    }
}
```
Why 1 function inside constrcutor and inside constructor 2 functions like `new Promise(resolve, reject) => {}).then(catch).catch(error)`
```js
// Write our own Promise class
class Promise2{
     constructor(fn){
          //this.fn(fun1, fun2)
          this.function(() => {
                // resolve
                this.successCallback();
          }, () => {
                // reject
                this.errorCallback();
          }
          )
          
     }
     then(s){
         // something
         this.successCallback = s;
         return this;
    }
    catch(e){
        // something
        this.errorCallback = e;
        return this.
    }
}

// To use Promise, we have to define Promisified Function
// Define the Promisified Function
function setTimeoutPromisified(ms){
		return Promise2(resolve => setTimeout(resolve, ms));
}

// Calling Promisified Function
setTimeout(1000).then( () => {
                       console.log("Hi");
                 }
                )
// It will work after 1 sec, It will print Hi with our class Promise2 not Promise class JS provide

// Our Promise class chaining will not work as we have not implemented it
setTimeoutPromisified(1000)
           .then( () => {
               console.log("Hi");
               return setTimeoutPromisified(1000);
           }).then( () => {
               console.log("Hello");
               return setTimeoutPromisified(1000);
           })
```

</details>

<!----------- Assignment for Promises ----------------------->

<details>
	<summary> 🔻 <b> Callback hell </b> </summary>


## Callback hell

One of the reason, Promises are preferred is because Callback have weird sort of thing known as **Callback Hell**

> If you have to do one Async Operation followed by another Async operation followed by another Async operation so on and so forth.
It gets skewed right over here, what commonly known as **Callback Hell**


There is a solution to it :

<br/>

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/058387ce-9396-4d2b-822e-d38b101f268b" />

- callback hell is ***bad and hard to read***.
- Hence Promise make it much cleaner
- By doing something called ***Promise Chaining***

- It still same problem **Right Skewed Promise** known as **Promise hell**

How chaining is implemented?
```js
setTimeoutPromisified(1000).then(function(){
	                console.log("Hi");
                    setTimeoutPromisified(1000).then(function(){
                                      console.log("Hello");
                                      setTimeoutPromisified(1000).then(function(){
                                                    console.log("Welcome");
                                       })
                    })
})
```

Better way to right this is:
```js
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000)
  .then(function () {
    console.log("Hi");
    return setTimeoutPromisified(1000);
  })
  .then(function () {
    console.log("Hello");
    return setTimeoutPromisified(1000);
  })
  .then(function () {
    console.log("Welcome");
    return setTimeoutPromisified(1000);
  });

```


**Q: Write code that**

1. logs `hi` after 1 second
2. logs `hello` 3 seconds after `step 1`
3. logs `hello there` 5 seconds after `step 2`

<details>
	<summary> <b>Solution (has callback hell)</b> </summary>
	
```js
setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
```
</details>


<details>
	<summary> <b>Alt solution (doesn't really have callback hell)</b> </summary>	

```js
function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
```
</details>

**Promisified version**

Now use the `promisified` version we saw in the last slide

```js
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

<details>
	<summary> <b>Solution #1 (has callback hell)</b> </summary>

```js
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});
```
</details>

<details>
	<summary> <b>Solution #2 Alt solution</b> </summary>

```js
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });
```

</details>

</details>

<!----------- Callback Hell ----------------------->

