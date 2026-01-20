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

</details>
<!----Single Threaded nature of JavaScript----->

<details>
  <summary> <b>Simple Primitive in JavaScript (Numbers, Strings, Boolean)</b> </summary>

</details>

<details>
  <summary> <b>Complex Primitive in JavaScript (Arrays, Objects)</b> </summary>

</details>

<details>
  <summary> <b>Functions in JavaScript</b> </summary>

</details>


## Advanced 
- Callback Functions, Event loop, Callback Queue, Asynchronous Programming
- Callback Hell and Promises

<details>
  <summary> <b> </b> </summary>

</details>

<details>
  <summary> <b> </b> </summary>

</details>





