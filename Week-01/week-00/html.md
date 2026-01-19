# Web Dev + Devops

> Avoid the spikes, bcuz It's easy to get spikes for 99.99% but It's challenging & really hard to go slow and consistent.

> Build muscle memory, It comes from practice, Practice means Working on actual things.

Installation of an IDE
- VSCode : VS Code Installation Document for HTML, CSS and JS
- Sublime Text
- Jet Brains IDEs

## HTML

- It is the **foundation** of building **unstyled** websites.
  - Foundatiion = Building block
  - Unstyled = Ugly

> A **Website** is a collection of **Webpages**.
 
| STEP 1.  | Creating a simple HTML file locally. |
|----------|--------------------------------------|

1. Create a folder on your local machine called Website.
2. Add a ```index.html``` file inside the folder website.
3. Write the HTML code for making your website.
```html
     <html>
          <head>
                <title> Visual Code Studio : Code Editor </title>
          </head>
          <body>

          </body>
     </html>
```

| STEP 2.  | HTML Tags                 |
|----------|---------------------------|

Suppose, We're trying to create VS Code landing Home page of website.
- To create this, we need to write HTML code.
- To write HTML, we need to learn at least some common tags in HTML 

| **HTML Tags** |
|---------------|
| ```<div>, <span>``` |
| ```<head>``` |
| ```<body>``` |
| ```<h1>....<h6>``` |
| ```<b>, <i>, <u>``` |
| ```<a>``` |
| ```<img>``` |
| ```<button>``` |
| ```<br>``` |
| ```<input>``` |

**```<div>```**
- Structure your webpage better.
- Create various sections
  - Topbar
  - Banner
  - Text, Button, Heading
  - body main content
  - footer
- Each of them can be structure as separate div so that we have different section on our page. 

**```<span>```**
- span is similar to div, the difference is div takes complete horizontal width of that line while span takes as much space as it need.
- So, spans is inline, while divs are not.  

**```<h1> <h2> <h3> <h4> <h4> <h5> <h6>```**
- If we want to change the size of the text according to content time to time purely with HTML we use Heading tags.
- The easier and best way to do this job is using CSS later we will see this but here we will do this HTML way by using heading tag.
- heading tags from heading 1 to heading 6
- The difference between them is just of size, h1 is the biggest and h6 is smallest one.
- The text will become bold and big in size which differetiate it from other text.
- Again if we want small size but text to be bold or Itallic or underline we use ```<b> <i> <u>``` tags

**```<b>, <i>, <u>```**
- bold, itallic and underline, these are just basic tags which is used to style text in purely HTML.
- Again the best way to style text is using CSS.

Again there are dumb way of styling your website which was used in 2008-09. <br/>
Now there are better and smart ways of doing the same thing using CSS. 

**```<a>```**
- Anchor tag is used for linking a different webpage via link.
```html
   <a  href="www.google.com"> Go to google </a>
```
- If you want to open the link in new tab instead of same, we have another attribute named Target.
```html
   <a  href="www.google.com" target="_blank"> Go to google </a>
```

**```<img>```**
- Image tag, let us render an image on our webpage.
```html
   <!----photo from local folder----->
   <img src="./photo.png" />

   <!----photo from link----->
   <img src="https://code.vs.com/asset/home/photo.png" />

   <!-----we can adjust the size of image using width and height attribute of img tag---->
   <img src="./photo.png" width="300" height="200" />
```
- image tag is self closing, It doesn't need closing tag.
```html
<img> Photo.png </image>
```
- Suppose, we have text and an image, can we put them in separate line? If yes, how can we do that?
  - Using ```<div>``` is outline takes all spaces full width horizontally and ```<span>``` is inline takes only space that it ineeds.

```html
   <div>
     <img src="./hello.png" width="200" height="100" />
   </div>
   <div>
      The image tag is used to add an image to render on website.
   </div>
``` 

**```<input>```**
- Input tag is used to take input in input box where we can input our data or search for something
- like input username, password or search something.
```html
   <input type="text" placeholder="username" />
   <input type="password" placeholder="password" />
   <input type="text" placeholder="search" />
```
- Here, we're just creating the functionality wise same but It looks ugly. Eventually gradually we will learn it to style in CSS.
- It is also a self-closing tag. 

**```<br/>```**
- break tag, put spaces between two elements by a line.
- It is also self closing tag bcuz nothing has to put in it.

**```<button>```**
- button tag is used to put button on the webpage
```html
   <button> Login </button>
   <button> Download </button>
```

**Note**
- Each tag has its own relevance.
- ```<html> </html>``` tag : Define that we're writing the HTML code.
- ```<title> </title>``` tag : appears a title, top left of your screen window.
- ```<head> </head>``` tag : Metadata (Data about data i.e. metadata information)
  - Things that can't appear on the main page of your website, It is the metadata about your website like Title, logo, styling, url etc.
- ```<body> </body>``` tag : holds the content inside the Main page of your webpage 


Any website, we visit or open, we can see the HTML code of it. <br/>
It means, can we see frontend code of any website? sort of yes. <br/>
How ? <br/>
- Open Website > Right Click > Inspect > Elements > Styles
- This is how we can inspect any website and copy their styling.

Is this Security Vulnerability? <br/>
No, If you see any website render on your browser, Browser does need to receive that HTML code otherwise it won't appear on the screen.


| STEP 3.  | Building a basic HTML Page |
|----------|----------------------------|

```html
<html>
      <head>
            <title> Visual Studio Code </title>
      </head>
      <body>
              <!---topbar------>
              <div>
                 <span> Visual Studio Code </span>
                 <span> <a href="/"> Docs </span>
                 <input type="text" placeholder="Search doc">
                 <button> Download </button>
             </div>
             <!----Banner------>
             <div>
                 <a href="" > Version 18.2 </a> is now available
                 <br/>
                  Read more about the new features.
             </div>
      </body>
</html>
```
It's ugly right now.<br/>
Let's make it more styled.
- We can add a lot of styling through purely HTML tags
- ```<center> </center>``` center everything inside it
- ```<h1> <h2> <h6>``` heading, make text bold and big size.
Through HTML, we can do very basic styling in HTML.

To actually style our webpage application, we need CSS.





