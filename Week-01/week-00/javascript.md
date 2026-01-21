# JavaScript Foundation

**Basics**
- Why language?
- Interpreted Languages vs Compiled Languages
- Why JavaScript? better than Other languages in some use-cases.
- Strictly type vs Dynamically type
- Single Threaded nature of JavaScript
- Simple Primitive in JavaScript (Numbers, Strings, Boolean)
- Complex Primitive in JavaScript (Arrays, Objects)
- Functions in JavaScript
- Problem Solving

**Advanced**
- Callback Functions, Event loop, Callback Queue, Asynchronous Programming
- Callback Hell and Promises

<details>
  <summary> <b>What is Computer?</b> </summary>

How it works?

|          | Computer |          |
|----------|----------|----------|
| Mouse    | RAM      | CPU      |
| Keyboard | SSD/HDD  | Processor|
| Monitor  |          | GPU      |

| Applications (App) |
|--------------------|
| VLC                |
| WhatsApp           |
| Zoom               |
| Chrome             |

These applications, we installed locally on our machine(computer).

Any app installed on our machine resides in (SSD/HDD).

| SSD | Solid State Drive | Flash Memory | New Technology | Uses : Silicon's Physical and Chemical properties | eff++, speed++, volume++|
|-----|-------------------|--------------|----------------|---------------------------------------------------|-------------------------|
| HDD | Hard Disk Drive   | Magnetic Disk| Old Technology | Uses : Aluminium, Copper, Steel, Silver, Gold,Platinum| eff--,speed--|

Our computer specs Like 1TB Hard Disk or 500GB of SSD and Photos/Videos on our machine(computer) is stored on HDD/SDD.

When we start our application (running apps), It runs in **RAM**. <br/>
Whatever current application running that will reside in RAM, rest applications reside in SDD/HDD.

In static state, normally App resides in **SSD/HDD**(Hard Disk) | Hardware.<br/>
As we open it or double click -> Running State. <br/>
This is the time, it will go to RAM. (RAM is a hardware) <br/>

**Que : What is RAM or HDD/SDD?** 
- It is hardware (Wire, Circuits)
> At the lowest level, our machine only understands 0s 1s (Binary) 2 things 0 means off and 1 means on.

Any final program, we run on our machine. Be it a game PubG, Chrome browser, videoplayer that looks very fancy.

- In the end what's running in the RAM 01011100101 bunch of numbers (combination of 0 and 1).

**Why is so?**
- Bcuz RAM only understand 0s 1s.
- RAM is hardware which knows 0 and 1 like on and off.
- These can be only 2 state -> On and Off.
- Those states can be represented by 0 and 1.

**Que : What exactly goes into RAM?**
- So, whenever we execute anything our machine(computer). It goes into RAM.
- What goes into RAM is 0s 1s only, Not any source code, c++ or java or python program.

**Que : Does that mean Application Developers write code in 0s 1s (100101010) in Binary while writing the code of application?**
- Answer is **NO**. They write code in C/C++/Java/Python/JavaScript etc.
- e.g. : VLC -> in C-Language (Open source software, you can see the code of it)

**Que : then How does the code written in C/C++/Java/Python/JS converted to 0s 1s 10101010101 Binary?**
- Answer is something called **Compiler**

C/C++/Java/Python/JS all of them are **high level language** in which developer write code like ```hello.c```, ```hello.cpp```, 
```hello.java```, ```hello.py```, ```hello.js``` etc.

All of languages have **Compiler** which converts the high-level code into 0s 1s(Binary) which goes into RAM and our machine understand
and execute(run) it.

That's why we need programming languages. <br/>
Bcuz Developers are very dumb and they can't write code in binary or 0s 1s or Low-level code. <br/>
It is very hard to code in 0s 1s (Binary). <br/>
It is easy to write in high-level language.
- for loop, while loop
- if else
- logical statements

Thankfully, We have Compiler that underhood convert high-level code(logic, if else, loop) into 0s 1s(Binary).

As of now, we know Why languages?
- C/C++/Java/Python/JavaScript

**Que : Why not one language for programming instead we have so many languages?**
- Bcuz Developers have various optimization and some usecases can only be build in certain languages only.

- e.g. : Browser code can only in HTML/CSS/JS
- Most of program can be in any languages.
- These are some advantages to some languages which is why everyone created their own and they have competition among each other.

In the end every programming language is just converting High Level Code into 0s 1s (Binary).

Why language? Now we have learned.
1. Languages are used to write applications.
2. Developers write High-level code in these languages.
3. Every language has a **Compiler** which converts the developer code(High-Level Code) into 0s 1s (Binary Code/Low-Level Code)

**Apps** ----(.cpp/.java/.py/.js)---> **Compiler**  ------(010101011001001)-----> **RAM(SSD/HDD)**

> Compiler is also a software which is very closed to Hardware written in Low-level language.

This is the basics of why we need High-Level Programming languages. because developers can't write code in 0s 1s (Binary).

</details>

<details>
  <summary> <b>Interpreted Languages vs Compiled Languages</b> </summary>

<center> <b>Compiler</b> </center>

**What is Compiler?** <br/>
Compiler converts high-level developer friendly code into 0s 1s (Binary i.e. low level code)
- Developers write code in something like plain english which is provided by new programming language.
  - Variables, if else, for, while loop, logical terms
  - Solving Problem using DSA
- Most of the languages (Not all) has a compiler to convert the high level code to binary code.

**Step 1. Write Code ```hello.cpp``` or ```java.js```**
```cpp
#include<iostream>
using namespace std;

int main(){
  cout << "Hello World";
  return 0;
}
```
This is a c++ program which developer write.<br/>
What it suppose to do? <br/>
It is suppose to print Hello World on the console screen. <br/>
similarly we have app like Music player which play song, GTA/PubG start/play game.

**Step 2. Compile the code with the help of compiler of that language.**
```
g++ hello.cpp -o temp
```
Here, g++ is a c++ compiler, ```hello.cpp``` is our c++ code ``-o``` command to compile and temp is the file name in which we get the compile code which is 0s 1s(binary). <br/>
When we open the temp file or we can say run this file ```./temp``` It will print Hello World on the console screen. <br/>
temp file is your binary code, you can simply double click on it. It will open up and display Hello World on the console screen. <br/>
Basically we can say we have coded a program something like similar to MusicPlayer/GTA/WhatsApp. <br/>
So, if you want to share this, you can share it with your friends, just share this .temp file no need to share your source code and your friend doesn't even need the compiler on his machine to run it. He will simply open it and it will do the job. <br/>
In the PubG, there are complex logics, in our case we have just a simple logic to print. that's the difference.

So, This is how C++ source code ```.cpp``` is compile and run. There are 3 steps :
1. Write the source code ```hello.cpp```
2. Compile the source code ``` g++ file_name -o hello``` 
3. Run/Open the compiled file ```hello```

> -o is a command to convert into 0s 1s (Binary Code) known as Object Code

But **JavaSCript** or even **Python** is different than C/C++/Java/RUST/GOLang. <br/>
That's what we're talking about here ***Compiled vs Interpreted*** languages.

C++ is a compiled language, what does it means? <br/>
It means, C++ first convert the high-level code into a binary code and then you can run or distribute your file.

JavaSCript is not like that. <br/>
JavaScript is an interpreted language. What does it means? <br/>

**Step 1. Write JavaSCript Code** ```hello.js```
```hello.js
console.log("Hello World");
```
**Step 2. Run the code**
```
node hello.js
```
node is a command to run JavaSript code. <br/>
It will print the Hello World on the console Screen.
- Here we don't do specific compiling step. Only 2 steps, write the code and execute it.

 **Does that means the JavaScript code will go as it is in RAM?**
 - No, It still converting the ```hello.js``` code into 0s 1s binary code. But it is going line by line.
 - It is not worried about a high level compilation at once. unlike C++/Java where everything at once compiled.
 - It is going line by line.
 - If there are 10 lines of code, It will not complile whole 10 lines at once.
 - It will go one line at a time once.

| Compiled Language | Interpreted Language |
|-------------------|----------------------|
| First need to compile whole code at once then only need to run | usually go line by line, 1st line converted and run and 2nd line converted then run and so on |
| Usually don't compile if there is an error in the code | Can run partially if there is error comes later |
| e.g. : C/C++/Java/GOLang/RUST | e.g. : JavaScript/Python |
| If we have error in our C/C++/Java code, we won't be able to create the object code temp file | If we have 5 lines of code and there is an error at line 3, then line 1, line 2 will be executed and at line 3, it will throw an error that's why is partially run the program |

#### Let's write some code in javascript

To run javascript on your local machine download & install VS Code and Install Node to run javascript.

To run online on the fly, signup on [repl.it](https://replit.com/)
Why? : bcuz It let us compile(interpret) Javascipt code without having it locally install on your machine.

- Create Repl > Create Node.js > It will create a knod of playground where we can play with js code.

Let's try to run ```hello.js``` program.

Create a new folder and open it in VS Code locally.
```main.js
console.log("Hello World");
```
Make sure you install Node locally.
Now open the folder in which you created the main.js on terminal
```
node main.js
```
It will print the Hello World on your console.

```main.js
console.log("Hello World"); --❌
console.log(a);             --✅
```
```
node main.js
```
So, here code will partially run and print the Hello World and then throw error. basically the code will run until it find the line where an error occurs.  <br/>
While compare it with C/C++/Java where code is not even compile during compilation it throws error and it will not create an object file to run. So, there is no chance to even partially run it.

In the case of JavaScript/Python, It will partially run because JavaScript is an interpreted language.

**Summary of what we learned**
- JavaScript/Python is an interpreted Language.
- In Interpreted language, the code is executed line by line and it can partially run until it encounter an error.
- C/C++/Java/Go/RUST is a compiled language.
- In Compiled Language, the whole code is compiled at once, if there is an error in code anywhere it will throw error and it will even not create a file to run. 

</details>
<!-------Compiled vs Interpreted Language---------------->

<details>
  <summary> <b>Why JavaScript? better than Other languages in some use-cases.</b> </summary>

Reason why JavaScript is so popular is bcuz **Browsers can only understand HTML/CSS/JavaScript**(not technically true).

Thanks to NodeJS, JavaScript can also be used for **Backend Developement**.

There are ways to make C++/Java run in browser but for most of the website (99.99% of total), JavaScript is the primary language. You definately need JavaScript. <br/>
You can still run C++ somehow but still JavaScript is must needed.

This is the Standard created by the industry for few years ago. These 3 languages HTML, CSS and Javascript. Browsers will interpret and render websites/webpages in certain ways based on HTML,CSS and JavaScript.

| ***Browsers*** | Google Chrome | MS Edge | Brave | Torrent | Apple Safari | Duckduckgo |Russia Yandex  | China Baidu | UC Browser | Opera Mini | Samsung Internet | 
|------|----|-----|----|-----|----|------|------|------|-----|------|---------|

If we ever want to change this, and don't want JavaScript as primary language for browsers. <br/>
Then all of the existing websites will go away. <br/>
Create a new browsers that understand new language like someone want to create browser that understand RUST or Golang. <br/>

Means Creating new standards that any website that needs to be render on this browser must be written in RUST/Golang. and that will never happen.

So, **HTML, CSS and JavaScript is the standard language for all browsers and will always remain standard till eternity to create websites. That's why JavaScript is popular.**

**Thanks to NodeJS, JavaScript can be used for Backend Development also.**

This is the reason, JavaScript is better than other language. (most popular is the right word) <br/>
No, not actually, other languages are better when it comes to speed, concurrency and other stuffs. <br/>
But JavaScript is needed bcuz websites can't run without it. So, We have to have Javascript in our stack.

</details>
<!-------Compiled vs Interpreted Language---------------->
<details>
  <summary> <b>Strictly type vs Dynamically type</b> </summary>

**C++/Java/GoLang/RUST**
```cpp
#include<iostream>
using namespace std;

int main(){

  int number = 5; //Varialble Declaration of int
  number = "Hello"; // assigning string ❌
  cout << number << endl;

  return 0;
}
```
 
**JavaScript/Python**
```js
let number = 5; //varibale declaration & init holds a num
number = "hello"; //same variable now holds string value
console.log(number); // No error ✅
```

|  Strictly type | Dynamically(loosly) type |
|----------------|--------------------------|
| C++/Java/GoLang/RUST | JavaScript/Python|
| Benefits : More strict code | Benefits : Can move fast |
| Strictly type super useful in big code base | Allows to change types of variables, this is not great bcuz your project getting runtime error. In big project it is good to have strictly type that's why **TypeScript** came in to picture. |

**TypeScript** : sort of new language, basically optimization on top of JavaSCript.
- TypeScript came into picture and makes JavaSCript more stricly typed.

</details>
<!--------Strictly typed vs Dynamically typed-------->

<details>
  <summary> Basics : <code>Program, Process, Thread </code> </summary>

**Program vs Process**
- A **program** is a file which we as a developer write. like hello.exe, chrome.exe). 
- When we run/execute our program, a running instance of a program is called **Process**. Here utilization of RAM and CPU is happens by process.

**Components of a Process**
- Code (Text): The actual instructions to run.
- Data: Global and static variables.
- Stack: Stores local variables and function calls.
- Process Control Block (PCB): OS data structure storing process info (ID, state, registers, etc.)

**Process States** : New, Ready, Running, Waiting, Terminated


**1. What is a Thread?**
   - A thread is the smallest unit of execution within a process.
  
   - Threads are "lightweight processes" because they share resources (like memory and code) with
     other threads in the same process.
  
   - Each thread has its own:
     - Program Counter (tells what instruction to run next)
     - Stack (stores local variables and function calls)
     - Registers (holds temporary data)

**2. Why Use Threads?**
   - allow a program to do multiple things at once, improving performance and responsiveness.

e.g. Imagine a word processor like Notepad:
- One thread handles typing (user input)
- Another checks spelling in the background
- A third saves the file automatically 
- If one thread gets blocked (like waiting to save), others keep running — so the app stays responsive. 

**3. Benefits of Threading**
   - Faster Context Switching
   - Resource Sharing
   - Better CPU Utilization
   - Improved Responsiveness

**4. Types of Threads**
   - User-Level Threads: Managed by user programs (fast, but OS doesn’t help).
   - Kernel-Level Threads: Managed by the OS (slower, but more powerful and can run on multiple CPUs). 

**5. Thread vs Process**

|  Process                   | Thread                           |
|--------------------- ------|----------------------------------|
| Separate memory space      | Shares memory with other threads |
| Context Switching : Slower | Context Switching : Faster       |
| High - heavyweight lifting | Low - lightweight lifting        |

  
</details>

<details>
  <summary> <b>Single Threaded nature of JavaScript</b> </summary>

Before understanding Single Threading, let's understand what is Threading?

Hardware Overviews :
Model Number : Mackbook Pro
Model Identifier : Macbook Pro 18, 2
Chip : Apple M1 Max
Total Num of Cores : 10 (8 Performances and 2 efficiency)
Memory : 32 GB
System : xxxxyyyyzzzzz

There are 2 popular sort of paradigm when it comes to Programming Languages :
1. Single Threaded Languages : Most famous one JavaScript (notorious for being single threaded)
2. Multi-Threaded Langugages : C++/Java/Rust

But **what does Threaded means?**
Whenever we buy a new machine(Laptop/PC), we always look for specifications like RAM,SSD/HDD,Core/GPU etc etc. <br/>
One of specs -> ```Num of Cores : 10```

What does means by My Macbook has total number of core = 10 core? <br/>
- It basically means 1 single core can run a certain code in a single time.

- If we have a .js file that .js file will run on core 1 only. <br/>
- A single core can't run two things at the same time in case of .js file.
- So, JavaScript can only use one of these at a time. Since It is a **single-threaded**.
- This is why, JavaScript is considered to be bad language for scalable systems.
- There is a way to make it use all cores of your machine.

The more number of cores we have, the more number of process we can start. <br/>
e.g. : We can run Browsers, Recording, Zoom, Music, VSCode all of them at a same time can run on our machine(laptop).

Que : If we have only 10 Cores on our machine, will we able to run only 10 process at a time? 
- Answer is no, we can run multiple processes.
- Something you have heard of **Context Switching**, which basically means Not every process running on our machine needs CPU at all time.
- So, these CPU Cores might run more than 10 applications on our machine bcuz It can context switch between the processes.

It can't run 2 things at a single time. It is one place, it can run some code at a single time.

If we run 2 NodeJS files processes on our machine at the same time. The single one (core) won't be able to execute them both together. 
- It might context switch between them.
- It might run process 1 little bit.
- Then run process 2 little bit.
- Then again process 1 little bit.
- Then again process 2 little bit.
- and this will goes on so on.

It can't run them parallely. <br/>
For that one might be running on Core 1 and other running on another Core 2.

> **Single threaded nature of JavaScript. Means JavaScript is always restricted to a single core.**

If you have 10 lines of code in JavaScript, they always run one after another. You can never split your programme into 2 different Cores so that decrease the time of processing by half.

Other languages Java/GoLang/C++, let us to do split load across Cores some how and that way your process become optimal.

**JavaScript**
- If we have a 20 Core machine on AWS that we rented for 500$ and We're running a NodeJS process there. It is just using one core. 
- It will give you same performance as if you're renting one small core machine.
- So, It might make sense to rent one core machine instead of 20 core machine on AWS. bcuz you're not really using the benefits of those 20 cores.
- If you're using multiple process than it is fine to rent 20 core machine.

We can parallelize the JavaScript somehow using something called [**Cluster Module**](https://nodejs.org/api/cluster.html) 

More practically, JavaScript runs line by line and only one line runs at a time.
```main.js
console.log("Hi there");
console.log(a)
```
This uses only single core of your machine.

**Does this means in C++, 2 lines of code run at the same time?**
- No, if you write sequential code.
- But C++/Java/Rust let us write code to create threads and in Golang -> Subroutine. which basically means you're splitting your program into 2 thread to use the power of machine with multi-cores.

</details>
<!----Single Threaded nature of JavaScript----->

<details>
  <summary> How to write code in JS ? </summary>

What are the construct we need to know to write code in JS?

**Variables**
- 1st thing/construct is **Variable**. It is across languages.
```js
let number = 5;
```
```cpp
int number = 5;
```
Variable, the name itself says Its value can change throughout the program.
- In C++/Java/GoLang/Rust, Variable type can't be change but its value can change.
- In JavaScript/Python, variable type as well as its value can change.

There are 3 ways to define a variable in JavaScript :
1. **Let** : original way to define variable
2. **Var** : Later came into picture
3. **Const** : Later came into picture

Let -> if a variable declare through the keyword Let its value can change
Const -> Constant means you can define the variable value once only and can't change throughout the score. If you try to change it, it throws error.

- In any good program, you will never see Var now. Var is archived due to few downside reason.

```js
var a = 1;
console.log(a); //✅
```
```js
var a = 1;
a = 2;
console.log(a); //✅
```
```js
let a = 1;
a = 2;
console.log(a); //✅
```
```js
const a = 1;
a = 2;
console.log(a); //❌
```
```const``` Introduced to some safety in program.

> Whenever you want to define a variable whose values is changing use ```let```.
> Whenever value is not changing use ```const```.

**Common Data Types** : ```string, number, boolean``` There are many more.
```js
let first_name = "Rohit";
let age = 18;
let isMarried = false;

console.log("This person name is "+ first_name + " and his age is "+age);
// or
console.log("The person name is");
console.log(first_name);
console.log(" and his age is ");
console.log(age);
```

IF ELSE -> un certain part of code based on condition
```js
let first_name = "Rohit";
let age = 18;
let isMarried = false;

if(isMarried==true){
   console.log(first_name + " is married.");
}
else{
      console.log(first_name + " is not married.");
}
```

Suppose you have to print sum of 1 to 1000
```js
let sum = 0;
console.log(sum+1);
console.log(sum+2);
console.log(sum+3);
console.log(sum+4);
console.log("......");
console.log(sum+1000);

//or

sum = 1+2+3+4+5+6+7+8+9+10+......+1000
console.log(sum);
```
For this reason, most programming languages have concept of loop, Iterate over certain code again and again. <br/>
Loop : ```for``` <br/>
If you run some logic again and again multiple time loops is the best way to do.
```js
let sum = 0;
for(let i=1; i<1000; i=i+1){
    sum = sum + i;
}
console.log(sum);
```
Just 3 lines of code is needed for 100 lines of code.

</details>

<details>
  <summary> <b>Simple Primitive in JavaScript (Numbers, Strings, Boolean)</b> </summary>

- Variables : ```let, var, const```
- Datatypes : ```String, Number, Boolean```
- Control Flow : ```if else```
- Loop : ```for```

Let's write some code :

1. Write a program to greet a given their first name and last name.
```js
let first_name = "Rohit";
let last_name = "Sharma";
console.log("Hi " + first_name + " " + last_name);
```

2. Write a program to greets a person based on their gender.(if else)
```js
let first_name = "Rohit";
let last_name = "Sharma";
let gender = "Female";
if (gender == "Male") {
  console.log("Hi " + first_name + " " + last_name);
}
else {
  console.log("Hello " + first_name + " " + last_name);
}
```

3. Write a program that prints number 0 to 1000. (for loop)  
```js
for (let i = 1; i <= 1000; i++) {
  const num = i;
  console.log(num);
}
```

</details>

<details>
  <summary> <b>Complex Primitive in JavaScript (Arrays, Objects)</b> </summary>

- Arrays
- Objects

Let's write code :

1. Write a program that prints all the even numbers in an array.

2. Write a program to print the biggest number in an array.

3. Write a program that prints all the male people's first name given a complete object.

4. Write a program that reverse all the elements of an array.


**Array** -> usually in real world Database of millions of users.
- Facebook uses : Name, Age, Gender
```js
let person1 = "Rohit";
let person2 = "Mohit";
let person3 = "Ram";

const personArray = ["Rohit", "Mohit", "Ram"];

const ages = [20, 21, 23];

for(let i=0; i<ages.length; i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}
```

**Objects**  -> Complex Object <br/>
Syntax of Object :
```js
const person1 = "Rohit";
const gender1 = "Male";

const person2 = "Shreya";
const gender2 = "Female";

const personArray = ["Rohit","Shreya"];
const genderArray = ["Male","Female"];

const numOfUsers = personArray.length;
for(let i=0; i<personArray.length; i++){
    if(genderArray[i] == "Male"){
         console.log(personArray[i]);
    }
}

// optimization on top to make code slightly cleaner objects
// So, rather than maintaining 3 different arrays,
// what if combine value in JS something called Object

const user1 = {
    first_name : "Rohit",
    gender : "Male",
    age : 21
}
//multiple values, different datatypes unlike array multiple values, same datatypes

console.log(user1["first_name"]);
console.log(user1["gender"]);
console.log(user1.age);
```

Objects are the way to aggregate data together similar to an array but difference is arrays can only hold similar datatypes but objects can hold hetrogenous datatypes of data.

Note :
> ```user1["first_name"]``` or ```user1.first_name``` both are same ✅
> ```user1[first_name]``` ❌

Array of Numbers
Array of Strings
Array of Objects
```js
const allUsers = [
   { first_name : "Rohit", gender : "Male"},
   { first_name : "Mohit", gender : "Male"},
   { first_name : "Shreya", gender : "Female"}
]
```
Why this is better than the first approach? <br/>
- bcuz Now we have a single variable allUsers instead of user1:first_name, gender, user2:first_name, gender and the logic remain same.
```js
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "Male"){
         console.log(allUsers[i]["First_name"] + " " + allUsers[i]["gender"]);
    }
    else{
         console.log(allUsers[i]["First_name"] + " " + allUsers[i]["gender"]);
    }
}
```
Objects can become more nested (metadata) : Means objects can hold an array or even another object inside it.
```js
const allUsers = [
   {
     first_name : "Rohit",
     gender : "Male",
     metadata : {
          age : 21,
          address : "xyz"
     }
   },
   {
     first_name : "Shreya",
     gender : "Female",
     metadata : {
          age : 23,
          address : "abc"
     }
   }
]
```
As we can see initially Object was very simple like [1,2,3] -> array then [{}] -> Array of Objects then [{[{}]}] -> Array of objects inside object to extract the value => arr[i]["gender"]

</details>

<details>
  <summary> <b>Functions in JavaScript</b> </summary>

Functions let us do following :
1. Abstract out the logic in our problem.
2. Takes arguments as an input
3. Returns a value as an output
4. You can think of a function as an independent program that is suppose to do something given an input.
5. Functions can take another functions as input -> This is bit confusing something known as **Call Backs**

Syntax of function :
```js
//define function : function keyword, function_name, parameter
// function body
function findSum(a, b){
    //do things with input and return output
   return a + b;
}

const value = findSum(2,5); // here we're passing argument in the function.
console.log(value);
```
So, basically function is a something like blackbox which takes some input and gives you output.
```js
function chatGPT(prompt){
     //Heavy Machine Learning
     return output;
}
```
Function provide us Reusable code that can be called as many times as we need.

Miscellenous : Run this code locally and see whether it is using a sinle core 100% or not ? and whyt?
```js
let sum = 0;
for(let i=0; i<1000000000; i++){
    sum = sum + i;
}
console.log(sum);
```
- The thread is running is free?
- One of the core of machine should go and use 100% ideally. Bcuz JS is a single threaded language.
- But None of them go 100%  why?
- There is not 100% right answer : **Context Switching** Bcuz here we didn't write the code to run/use multi-thread. The instruction itself is dependent on the previous step like sum=0,1,2,3.
- Programming is weird and dumb, So you will get encountered with weird or dump issuees.
- Most probably Node will take 100% core.

```js
function sum(num1, num2){
  let result = num1 + num2;
  result result;
}
function displayResult(data){
  console.log(`Result of the sum is ${data}`);
}
function displayResultPassive(data){
  console.log(`Sum of result is ${data}`);
}
//You're allowed to call one function after this(either any of them)
//How will you displayResult of sum

const ans = sum(1,2);
displayResult(ans);
```

```js
function sum(num1, num2){
  let result = num1 + num2;
   displayResult(result);
}
function displayResult(data){
  console.log(`Result of the sum is ${data}`);
}
const ans = sum(1,2);
//now different format
```

```js
function sum(num1, num2, funToCall){
  let result = num1 + num2;
  funToCall(result); //parameter -> argument=displayResult
}
function displayResult(data){
  console.log(`Result of the sum is ${data}`);
}

const ans = sum(1,2,displayResult);
//passing function as argument in another function
```
```js
function calculateArithmetic(a, b, type){
  if(type == "sum"){
    return a + b;
  }
  else if(type == "minus"){
    return a - b;
  }
}

const value = calculateArithmetic(1,2,"sum");
console.log(value) //3

//But what if the logic of sum and minus is written in another function
```
```js
function sum(a, b){
   return a + b;
}
function minus(a, b){
   return a - b;
}
function calculateArithmetic(a, b, type){
  if(type == "sum"){
    return sum(a,b);
  }
  else if(type == "minus"){
    return minus(a-b);
  }
}

const value = calculateArithmetic(1,2,"sum");
console.log(value)

// Now you don't evebn allow to even call function like sum(),minus()
// inside calculateArithmetic()
// What you can do now?
// Now third variable rather than then type it will be function itself.
```

```js
function sum(a, b){
   return a + b;
}
function minus(a, b){
   return a - b;
}
function calculateArithmetic(a, b, func){
  const ans = func(a,b);
  return ans;
}

const value = calculteArithmetic(1,2,sum);
console.log(value)
const value2 = calculteArithmetic(1,2,minus);
console.log(value2)
// at top high level we can call passing a function inside another function.
```

```js
function greetAlien(){
  console.log("Hello Alien");
}
function greet(){
  console.log("Hello World");
}

//setTimeOut
setTimeOut(greet, 3*1000);
// 1st arg = greet function
// 2nd arg = millisecond
// It is suppose to call a function after a duration
/*
function setTimeOut(a,b){
  //written by other smart people
  //sleep(duration);
}
*/
setInterval(greetAlien, 2*1000);
/*
function setInterval(a, time){
   a();
}
*/
```
  
Let us write some  code :
1. Write a function that finds the sum of 2 numbers.
```js
function addTwoNum(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addTwoNum`(2, 4);
console.log("result: ", result); //6
console.log(typeof result1); //number
```

2. Write another function that display this result in a pretty format.
```js
function addTwoNum(num1, num2) {
   return `${num1} + ${num2} = {num1 + num2}`;
}
addTwoNum(14, 16);
```

3. Write another function that takes this sum and print it in passive tense.



</details>


## Advanced 
- Callback Functions, Event loop, Callback Queue, Asynchronous Programming
- Callback Hell and Promises

<details>
  <summary> <b> Synchoronous function vs Asynchronous function </b> </summary>

Synchoronous function
- All the code we have written until now are synchronous.
- All the code running line by line (hence Synchronous code)

Asynchronous function
- Asynchoronous function in programming are those functions that allow a program to start a potentially lon-running operation and continue executing other tasks without waiting for that operation to complete.
- This is particularly important in environments like Web browser or NodeJS where waiting for an operation to finish (like fetching data from a server or reading a large file) could make the application unresponsive.


</details>

<details>
  <summary> <b> Assignments </b> </summary>

1. Create a counter in JS (count down from 30 to 0)

2. Calculate the time it takes between a setTimeOut call and inner function actually running.

3. Create a terminal clock (HH:MM:SS) 


</details>

<details>
  <summary> <b> How to install NodeJS and run JavaScript locally. </b> </summary>


</details>

## JavaScript - One more step

<details>
  <summary> <b> String Function JavaScript </b> </summary>

String functions given by Javascript is like out of the box. <br/>
These helper method is available to do String manipulation.

```js
//length 
const str = "Hello World";
console.log(str.length);

//indexOf
const str = "Hello World";
console.log(indexOf(str, "World"));
console.log(indexOf("Hello World World", "World"));

//lastIndexOf
const str = "Hello World World";
console.log(lastIndexOf(str, "World"));

//slice(start,end)
const str = "Hello World";
str.slice(0,5); // start from 0 upto 5 Hello_ 6 characters

//substr(start,end)
const str = "Hello World";
subStr(0,5); // start from 0 upto 5 Hello 5 characters
//Note : subStr() is now depriciated by JS, we use slice()
```

```js
function cutIt(str, startIndex, endIndex){
  let newStr = "";
  for(let i=0; i<str.length; i++){
      if(i>=startIndex && i<endIndex){
          newStr = newStr + str[i];
      }
  }
  retrun newStr;
}

const value = "Hello World";
let ans = value.slice(2,5);
console.log(ans);

//same thing we can do with out function

const value1 = "Hello World";
let ans1 = value.cutIt(2,5);
console.log(ans1);
```
```js
//replace() = Replace the word from a given string
const str = "Hello World";
console.log(str.replace(str,"world","JavaScript"));
// if target string is not found in the source It will return the original source string

//split() = split the string based on the delimiter provided to it
const value = "Hi My name is Rohit";
const words = value.split(" "); //delimiter is space here, it can be anything like , ", \n etc
console.log(words); // return array of words

//trime() = remove the leading & trailing spaces from the string
const value = "   Mohan Ram  ";
console.log(value.trim());

//toUpperCase()
const value = "abc";
console.log(value.toUpperCase());

//toLowercase()
const value = "abc";
console.log(value.toUpperCase());
```

</details>

<details>
  <summary> <b> Numbers Functions in JavaScript </b> </summary>

There are global functions provided by javascript for Numbers in javascript

```js
//parseInt() = Parsing a number into Interger - convert the string to Num if convertable
parseInt("42"); // 42
ParseInt("42px"); //42
ParseInt("3.13"); //3
ParseInt("x2ab"); //NaN
//It converts if initial value of string is convertable to a num


//parseFloat("42");  // 42.00
//parseFloat("42pxa");  //42.00
//parseFloat("3.14"); //3.14
```

</details>

<details>
  <summary> <b> Arrays Function in JavaScript </b> </summary>

```js
arr = [1,2,3];
arr.push(4); //[1,2,3,4]
arr.pop(); //[1,2,3]
arr.shift(); //[2,3]
arr.unshift(5); //[5,2,3]
```
```js
let arr1 = [1,2,3];
let arr2 = [4,5,6];

//concat two arrays
for(let i=0; i<arr2.length; i++){
  arr1.push(arr[2]);
}

// or

let final_arr = arr1.concat(arr2); // [1,2,3,4,5,6]

//Iterate over an array

for(let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}

//forEach : similar to for loop only difference is it expects function as an argument
// Callback : Given once function, going to call another function

function logThing(str){
  console.log(str);
}
const arr = [1,2,3];
arr.forEach(logThing);
//each element of array through forEach call the function logThing

```
```js
function log1(){
    console.log("Hello World 1");
}
function log2(){
    console.log("Hello World 2");
}
function logWhatsPresent(fun){
    fun();
}

logWhatPresent(log2);
```

Map, Filter, Find, Sort are important, required and building block of CallBacks <br/>
We will see them later.

</details>

<details>
  <summary> <b> Objects Function in JavaScript </b> </summary>

Level 2 - Class, JSON, Math, Object

Classes
- describes sort of put bunch of certain property together like Classification.
- present in many languages High level aggregation for that.

```js
const dog = {
  name : "doggy",
  legCount : 4,
  speak : "Bhow bhow"
}

const cat = {
  name : "Bhuri",
  legCount : 4,
  speak : "Meow meow"
}

console.log(`animal ${dog["name"]} and it ${dog["speak"]}`);
console.log(`animal ${cat["name"]} and it ${cat["speak"]}`);
```
Here, We can see Reapeated logic.
```js
function printStr(animal){
  console.log(`animal ${animal["name"]} and ${animal["speak"]}`);
}

const dog = {
  name : "doggy",
  legCount : 4,
  speak : "Bhow bhow"
}

const cat = {
  name : "Bhuri",
  legCount : 4,
  speak : "Meow meow"
}

printStr(dog);
printStr(cat);
```
What if in future, there are more features added to this animal like their ownerName and also to feed something to cat or dog. <br/>
Why not combined this together and give them structured of every animal is what classes do.

In Computer Science Class and Objects are 2 buzz words to know. <br/>
- Gives structure of something that is responsible at multiple places.
- Animal -> name,legsCount,ownerName, speak();

So, instead of creating dog separately and cat separately. We can create Animal Class.
```js
Class Animal {
   //constructor
   Animal(name, legCount, speak){
      this.name = name;
      this.legCount = legCount;
      this.speak = speak;
   }
}

let dog = Animal("dog", 4, "Bhow bhow");
//This creates an object of a class
let dog = Animal("cat", 4, "Meow meow");
```

What is the benefit of using class?
- Class is a blueprint.
- e.g. : building blueprint, from this real building can be created in Delhi, Chandigarh, Mumbai
- As we know there are few basic things that are common in every animal
- Class : Same kind of people/person/animal/things etc)
```js
Class Animal {
   //constructor
   Animal(name, legCount, speak){
      this.name = name;
      this.legCount = legCount;
      this.speak = speak;
   }
   speak(){
       console.log(`Hi there, I'm ${this.speak()}`)
   }
}
```
This is cool, bcuz we have created everything in blueprint, rather than creating separately.

Few important terms :
- Class
- Object
- Attributes / Data Members
- Functions / Member Functions / Method
- Static Function : These functions are not associated with object of the class, this is associated with class itself. So, only class can call static function not object of the class.
```js
Class Animal {
   //constructor
   Animal(name, legCount, speak){
      this.name = name;
      this.legCount = legCount;
      this.speak = speak;
   }
   function speak(){
       console.log(`Hi there, I'm ${this.speak()}`);
   }
   static function myType(){
        console.log("Class Animal");
   }
}

Animal.myType();

```

</details>

<details>
  <summary> <b>Date Class</b> in JavaScript </summary>

```Date``` is a global class that JavaScript provides us. Means, It is present for us to use it out the box.
- It is not like primitives.
- It is a class made for users to use it.

Usecases of ```Date```
- Creating something like COunter
- To calculate how much time a function to run it.

```js
const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
// 
const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getYear() + 1900);
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

```
```js
console.log(currentDate.setFullYear(2028));
console.log(currentDate.setMonth(2));
```

> **1970** is checkpoint, for the date calculation.
> It is what something we known as epoch timestamp num of milliseconds staring from 1970.

```js
const currentDate = new Date();
console.log(`Time in milliseconds since 1970 ${currentDate.getTime()}`);
```

Suppose we have a function calculateSum()
```js
function calculateSum(){
   let sum = 0;
   for(let i =0; i<10000; i++){
       sum = sum + i;
   }
   return sum;
}

calculateSum();
```
If we have a question : How much time the function take to execute?
- 1 sec or 2 sec or 3 sec
```js
function calculateSum() {
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum = sum + i;
  }
  return sum;
}

//Before function call
const beforeDate = new Date();
const beforeTimeInMS = beforeDate.getTime();
console.log(beforeTimeInMS);

calculateSum();

//After function call
const afterDate = new Date();
const afterTimeInMS = afterDate.getTime();
console.log(afterTimeInMS);

//Difference of after - before = time taken by function;
console.log(
  `Time taken by calculateSum Function is ${afterTimeInMS - beforeTimeInMS} ms`,
);

```

</details>

<details>
  <summary> <b>Assignment</b> </summary>

1. Write a function that calculate the time in millisecond it takes for the JS Code to calculate sum from 1 to n. Given n as input.
- sum from 1 to 100
- sum from 1 to 100000
- sum from 1 to 100000000
Hint : Use Date Class in JS <br/>
There is to understand how times goes up as computation goes up.

2. Print the current time on screen like counter or stopwatch.
```js
function currentTimePrint() {
  const currentDate = new Date();
  console.log(currentDate.getTime());
}
for (let i = 1; i < 10; i++) {
  setInterval(currentTimePrint, 1000);
}
```
</details

<details>
  <summary> JSON = JavaScript Object Notation </summary>

```js
const user = {
    name : "Rohit",
    gender : "Male",
    age : 21
}
console.log(user["name"]);
```
This will printed on your console screen. <br/>
But If we want to send this data to somewhere to your friend or to another process Java ? <br/>
What we do?
- We will convert this data into string and then send the string.
```js
const user = "{ name : "Rohit", gender : "Male", age : 21}"
```
It looks like an object but this is not, This is a string actually. <br/>
Now we can send it to the friend or another process in Java. <br/>
Now another side(receiving side) may be figure it out or not what is this actually.

But here, we're not restricting any Javascript object type when we are sending our data. <br/>
This is one good way to convert an object to string and vice-versa to pasrse a string like this into an object.

Why do we need to convert object to string?
- bcuz we wanted to send this to different processes.
- You might want to know the shape of data like name, gender, age etc But we can't send JavaScript object. bcuz other side don't understand what is this.

For this reason a lot of time we need to interchange between JS Object and JS String and for this we need **JSON Class** which gives us 2 high level functions :
- ```JSON.parse()```
- ```JSON.stringify()```

```js
const user = '{"name" : "Rohit", "age":24, "gender" : "Male"}';

const user1 = JSON.parse(user);
console.log(user1["gender"]);
```
```js
const user = {
  name: "Rohit",
  age: 24,
  gender: "Male",
};

const userString = JSON.stringify(user);
console.log(userString);
```

Note : Particularly useful when you get some data from a server a lot of time in the string format but actually It is a valid JSON that we can convert into JavaScript object which is why parse() is used and opposite of it stringify() to send out data for different process, we stringify our object before sending. 

</details>

<details>
  <summary> Math Class of JavaScript </summary>

```js
console.log(Math.random()); //between 0 to 1
console.log(Math.floor(2.3)); //2
console.log(Math.ceil(2.3)); //3
console.log(Math.ceil(2.9)); //3
console.log(Math.round(2.3)); //2
console.log(Math.round(2.5)); //3
console.log(Math.max(2, 3, 4)); //4
console.log(Math.min(2, 3, 4)); //2
console.log(Math.pow(2, 3)); //8
```


</details>

<details>
  <summary>Object Class of JavaScript </summary>

```js
function objectMethod(obj) {
  console.log("Original object : ", obj);
  let keys = Object.keys(obj);
  console.log(keys);
  let values = Object.values(obj);
  console.log(values);
  let entries = Object.entries(obj);
  console.log(entries);
  let hasProp = obj.hasOwnProperty("key1");
  console.log(hasProp);
  let hasProp1 = obj.hasOwnProperty("id");
  console.log(hasProp1);
  let newObj = Object.assign({}, obj, { key4: "value4" });
  console.log(newObj);
}

const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
objectMethod(sampleObject);
```
```js
let obj = {
  name: "Rohit",
};

console.log(obj.hasOwnProperty("name")); //true
console.log(obj.hasOwnProperty("age")); //false

let newObj = Object.assign({}, obj, { gender: "Male" });
console.log(newObj);
```

</details>

### Loop, function and Callback in JavaScript

<details>
  <summary> Loop </summary>

Loop ?
- can we survive without loop?

Calculate the sum from 0 to 100.
```js
let sum = 1+2+3+4+5+6+7+8+9+10
console.log(sum);
/*
Flows in this code
- Very verbos too much text

When you know you're doing the same job repeatedly using the same logiv
again and again here value is changing logic is same +
*/

let ans = 0;
for(let i=1; i<100; i++){
    ans = ans + i;
}
console.log(ans);
```
Visualize the loop [latentflip](http://latentflip.com/loupe/)
</details>











