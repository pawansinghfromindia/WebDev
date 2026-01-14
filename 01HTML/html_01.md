## HTML
<details>
          <summary> Hyper Text Markup Language </summary>

- Defines the **structure** of our website.
- Structure means What should be placed after what and before what?

```
          Top
           |
Left-----Center-----Right
           |
         Bottom    
```
We need to know 2 jargons :
</details>

1. **Tags**
2. **Attributes** 



## Tags

<details>
          <summary> HTML Tags <code>html,head,title,body,div,span,h1,h6,img,button,input,button</code> </summary>

```html 
<html>
<head>
<title>
<body>
<div> / <span>
<h1>,<h2>,...<h6>
<p>
<img>
<a>
<input>
<button>
<center>
<b>
<i>
<u>
```
These are the primitives that HTML gives us to create a website.

***Q   : Will our website looks pretty?*** <br/>
Ans : No, HTML gives us tags to just create website not style them, for styling them we use CSS.


***Q : Where do we write code for creating website?*** <br/>
create an empty folder <br/>
open it in IDE like **VSCode** (It's like notepad where we can write, edit, save files) <br/>
Here, we can add **HTML(.html)**, **CSS(.css)** and **JavaScript(.js)**

Let's create a html file ```index.html```, write code in it.
```html
Hello World
```
Save it and Open it in your **browser** (Chrome, Safari, Edge, Brave, duckduckgo) <br/>
So, here even without writing any html tag. we can start creating website.

Why Tags?

> We need **HTML tags** because It gives us **better structure** .
> - Adding image to our webpage
> - Adding link
> - Adding button
> - Adding Heading
> - Adding titles
> - Adding styling

🏷️ **```<div> </div>``` Tag** :
```html
<div>
     Hello World
</div>
<div>
     Welcome to our website
</div>
```
- Open it in your browser Chrome
- Right Click > Inspect > You can see your code in browser.
- So, theoritically we have created a website like google.com. 

```<div> </div>``` tag is most popular. It means one division of your page. <br/>
If text will be more then it will overflow and move to next line.

🏷️ **```<html> </html>``` Tag** :
```html
<html>
    .......
    .......
    .......
</html>
```
- All of your website codes are put under ```<html> </html>``` tag.
- It is not important at all. You can just ignore it.

> Purpose of tag : Structure your website, like code in a way that you know where are which tags. 

🏷️ **```<html>,<head> and <body>``` Tags** : <br/>
Just imagine writing an essay, where there is a title is given on which we write Introduction, Body and Conclusion.
```html
<html>
     <head>

     </head>
     <body>




     </body>
</html>
```
```<html>,<head>,<body>``` These 3 tags are important high level structural tags. The whole content of our website will be put under these 3 tags.
- ```<html>``` tag : everything will be put under html tag
- ```<head>``` tag : all the metadata information of your website are put under head tag. Like title, logo pic etc.
-  ```<body>``` tag : all the content of our website is put under body tags.

```html
<html>
     <head>
          <title> Google </title>
     </head>
     <body>
           <div>
                <div>
                    Hello World
                </div>
                <div>
                    Welcome here...
                </div>
          </div>
          <div>
                <span>
                    Hello World
                </span>
                <span>
                    Welcome here...
                </span>
          </div>
     </body>
</html>
```
```<div>``` takes whole space of the line. <br/>
```<div>``` takes only as much space as it need within a line. <br/>
We don't necessarily need ```<div>``` and ```<span>``` or any other tags. <br/>
But we still add them for better structuring. <br/>
These are just standard way of writing HTML Code.
  
</details>

<details>
          <summary> Creating a webpage </summary>

```html
<html>
      <head>
          <title> Mywebsite </title>
      </head>
      <body>
           <div>
               <h1> Hi, Welcome </h1>
               <p> We're providing the free courses to learn web
                   developement. All the stacks from basics to advanced
                   level like HTML,CSS,JavaScript,Fullstacks and Devops.
               </p>
           </div>
           <img src="photo.png"> </img>
           <center>
                  <img src="photo.png"> </img>
           </center>
           <a href="https://google.com"> Go to google </a>
           <b>C++</b> course is available.
           <i>Java</i> course is available.
           <u>Python</u> course is available.
           <button> Download </button>
           <input type="text" placeholder="username"> </input>
      </body>
</html>
```
- ```<h1>,<h2>,<h3>,<h4>,<h5>,<h6>``` are heading tags where h1 is biggest size and h6 is the smallest size. So, if we want to style our plain text, so we can use h1 tag. bcuz we can't just have everything same on our website. So, this styling is pure HTML. Later, we will learn How to style them using CSS.
- ```<p>``` : paragraph tag, for writing a really long text then we use paragraph.
- ```<img src=""/>``` : image tag to add image to webpage.
- ```<center>``` : center tag is used to put content in the center.
- ```<a href="google.com" target="_blank">Google</a>``` : anchor tag is used to redirect to the new link. Browsers will understand that open the link which is being provided in href(hyperlink reference), target="_blank" target attribute is used to open in a new tab. google search it!
- ```<b> <i> <u>``` : bold, itallic and underline the text.
- ```<button>``` : button tag is used to add button in webpage which looks ugly later we ill make it functional in JS.
- ```<input>``` : input tag is used to take input user later we will make it functional.

There is no end to this list of the primitives tags that we can learn in HTML.
But the tags we have seen here are enough to make any webpage.
Just google it when you need.

</details>

## Attributes

Attributes are the extra things that we can additionally provide to a tag which help tags to specify structure.

```html
<img src="photo.png">
< a href="https://wwww.google.com">
<button onlick="">
<input id="username" type="text">
```
<details>
          <summary> Attrubutes </summary>

- In some scenario, tags are not enough to do our job.
```html
<!--
This is okay
-->

<p> Hello world, We're here to help the community </p> ✔️
<h1> World Affairs </h1> ✔️
<b> AI </b> ✔️
<title> Computer Science </title> ✔️

<!--
But what about ?
Does image tag is enough to put image on webpage?
Ans : No
-->

<img> photo.png </img>  ❌
```
So, Sometime one thing is not enough, so we need attributes.

For that reason, Anything that is associated with tags needs to define, so we defined attribute inside tag.

> Every Tags can have multiple attributes.
```html
<input id="username" type="text">
```
          
</details>

**HTML**
1. **Tags** define the structure of webpage
2. **Attributes** help tags to specifying the definition.



