## CSS

Cascading Style Sheet, It is used to style our website.

We can add CSS to our HTML Website by using
1. Style Attribute [Inline Styling]
2. Style Tag
3. In an external CSS file [External Styling]

<details>
  <summary> <b> Style Attribute </b> </summary>

| STEP 1. | Approach#1 - Inline Styles |
|---------|----------------------------|

So, We have created a webapge using HTML. <br/>
Now, Let's style that webpage using CSS.

```css
<body style="background-color: black;">
   
</body>
```
Here, We are introduced with a CSS property background-color, this way is known as **Inline Styling** using style attribute.

Background-color of webpage.
- Every color is represented in **RGB** Values
- Red, Blue, Green makes all the combination of colors using these 3 values from lighter shade to darker shade. [10th Standard School]
- There are different ways of representing colors like :
  - Green, Black, Purple
  - RGB(0,200,255) values ranges [0-255]
  - #9ba38b, this is nothing but **hex values**
    - Hexadecimal Number [0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]
    - Here 9b represent one color hex value -> 9 takes 8 bit and b takes 8 bits = 16 bits
    - 16 * 16 = 256 -> 0 to 255 which is why it ranges between [0-255]
    - If something we have between 0-255, we can represent them in 2 characters -> 1 char takes 3 bits, So 2 char = 2*8 = 16
 - RGB(0,0,0)       -> White
 - RGB(255,0,0)     -> Red
 - RGB(0,255,0)     -> Green
 - RGB(0,0,255)     -> Blue
 - RGB(255,255,255) -> Black

```css
   <body style="background-color: #0e0e0e;">
        <div style="color: white;">
        </div>
   </body>
```
Again this is very beginner way while we start learning we use it.
There are another better approach to style in HTML.

</details>

<details>
  <summary> <b> Style Tag </b> </summary>

| STEP 2. | Approach#2 - Style Tag in the same HTML file |
|---------|----------------------------------------------|

We can add a ```<style> </style``` tag in our same HTML file. 

```html
<html>
      <head>
           <title> VS Code</title>
           <style>
                 body{
                      background-color : black;
                 }
                 div{
                      color : white;
                 }
           </style>
      </head>
      <body>
             <div>

             </div>
             <div>

            </div>
    
      </body>
</html>

```
- Having all the styles at one place inside ```<style> </style>``` tag is better than having in each line i.e. Inline styling.

- If we want to do styling styling on any tag we can put that inside ```<style>``` tag then all the tags get styled.
 There will be no difference between inline styling where we use style="" attribute and the style tag styling.
- Again If we want to target a specific div or span or h1 or p then we have to learn the concept of Id and Classs where we will assign
  each div an id to target it specifically for styling and if we have to target multiple div for same styling the assign all the div
  same class.
- This styling makes our code **Reusable** like if want to style are 2 divs in same style then
  we don't have to write the code at multiple places.  

Again this is better than the approach 1 - inline style but still we have better ways to style.
This is also 2011-12 ways to writing CSS.

</details>

<details>
  <summary> <b> External CSS File </b> </summary>

| STEP 3. | Approach#3 - Create an external CSS File |
|---------|------------------------------------------|

This is the last and best way to style your HTML bcuz this is modular may be your website Structure is written by HTML experts and
CSS code is writen by C Styling experts.

If you're writting CSS in css file.

- Create an external file ```index.css```

```css
body{
    background-color: black;
    font-size: 200;
}
div{
   color: white;
}
```

- Now we have to import this CSS file ```index.css``` to our HTML file ```index.html```

```html
<html>
      <head>
          <title> VS Code </title>
          <link href="index.css" rel="stylesheet">
      </head>
      <body>
            <div>
                <span> Visual Studio Code </span>
                <span> <a href=""> Docs </a> </span>
                <span> <a href=""> Contact Us </a> </span>
                <span> <a href=""> Support </a> </span>
                <input type="text" placeholder="Search"/>
                <button> Download </button>
            </div>
            <div>

            </div>
      </body>
</html>
```

</details>

## Common Styling Attributes
- ```background-color``` : sets background color
- ```color``` : sets text color
- ```font-size``` : sets size of the text
- ```margin``` : sets the outer breathing spaces around an element
- ```padding``` : sets the inner breathing spaces withing an element
- ```border``` : sets the border around an element
- ```border-radius``` : sets the border-radius around an element

<details>
  <summary> <b> CSS Styling attributes </b> </summary>

We have HTML code of our webpage, in which all the elements are there. But our website looks ugly.
So, We have 2 parts to make our website :
1. **Styling Everything** which is very easy to do like below
   - Make Text bold,itallic, underline, big, small
   - Change the background-color, text color
   - border, border shadow box
   - Hover Effect etc etc
2. **Structuring the webpage** which is difficult bit. like Topbar, Banner, Left image div, Right div.
   - All the elements which comes to left
   - All the elements which will be on the right
   - Equal padding and margin spaces like break
   - Center
   - bottom
   - This is the most confusing in CSS for the first time. To achieve this we use something called **Flexbox**. But let's first do it
     in easier old ways.

Now, We know that How to add the style? and also few property to style our webpage.

What do we want? <br/>
We want to style Topbar needs to be like this specific format.

```html
<div style="color: white; padding-left 100px padding-right: 100px">
       <span style="font-size: 18; font-weight: 500; color: white;"
</div>

<!---  Parent div and Child div ------>
<div style="color: white; margin-top: 100px; margin-bottom: 100px;">
       <div>

       </div>
       <div>

       </div>          
</div>
```

The very subtle difference between Padding and Margin is that Padding adds internal spaces in and around a div while margin add external
spaces around an div. If you want to check the difference use the background-color inside the div and then apply the padding and margin.

```
               Top 
                |
                |
left <-------- div ---------> right 
                |
                |
              Bottom 

padding-left: 10px; margin-left: 10px;
padding-right: 10px; margin-right: 10px;
padding-top: 10px; margin-top: 10px;
padding-bottom: 10px; margin-bottom: 10px;
```

Alignment of an Image and text. <br/>
Generally Image is not vertically allign correctly with Text. <br/>
So, we use margin and padding property or width and height attribute(It makes our page less reponsive since It's mot dynamic).

```css
   <img src="logo.svg" width="300"; height="100"/>

   <img src="logo.svg" style="padding-right: 10px; marging-top: 20px;"/>
```

If we want to update all the span to clickable, hoverover etc property then in that case we have to style each of the span with the same
Styling properties. It voilated the DRY = Don't Repeat Yourself. So, Here comes the Concept of **Id and Classes**.

**Classes and Id** 
- This is useful when you want to write ***Resuable Logic*** means reuse the styles.
- In CSS, **Classes and Ids** are used as **Selectors** to apply styles to HTML elements.
- They help in targetting specific element for styling and can be used to enhance the modularity and resuability of CSS code.

```index.html```
```index.html
<html>
     <head>
          <title> VS Code </title>
          <link href="index.css" rel="stylesheet">
     </head>
     <body>
          <div>
              <img src="logo.svg"/>
              <span class="toplink"> Doc </span>
              <span class="toplink"> Update </span>
              <span class="toplink"> Contact Us </span>
              <span class="toplink"> Support </span>
          </div>
          <div>

          </div>
 
     </body>

</html>
```
We don't need to write style="" again and again for each span. Here, We're repeating our logic over and again. <br/>
if we have more things in future then we have to make changes every place we used this style="". 

To avoid that we assign all the spans a class for them and write all the styles logic in one single class. 

```index.css```
```index.css
 body{
   background-color: black;
}
.toplink{
      color: Grey;
      cursor: pointer;
      padding-left: 5px;
}
#topbar{
     color: Purple;
}
#topbanner{
     color: Green;
}
```

> ```< button style="cursor: pointer;"> Submit </button>``` -> makes your cursor to pointer when you hover over it.

Now Let's see How can we move things left and right to the page like positioning of the content on our webpage.

**Positioning the content**
- The difficult bit in styling is where we write logic for ***Structuring things***
  like putting something on left/right/top/bottom/center.

2 things is very important in styling after we're done with our HTML layout : <br/>
1. How to Structure things?
2. Page Responsiveness

How can we do that? <br/>
Answer is using something called **Flexbox**.
- What is flexbox?

</details>

## Flexbox

Flexbox is a CSS layout model designed to help with the arrangement of items within a container.

<details>
  <summary> <b> Flexbox </b> </summary>

Flexbox let us structure children of a section(div).

First put a div which is a parent div, inside that put the child divs.
- If we use span, it is inline already.
- But if we want our div to be inline. Can we do that?
   - Yes, using flex property.
```html
   <div style="display: flex;">
        <div>
             <img src="logo.svg"/>
        </div>
        <div>
            <a href="/"> Doc </a>
        </div>
            <a href="/"> Contact us </a>
        <div>
            <a href="/"> Support </a>
        </div>
   </div>
```  
```html
<div style="display: flex; justify-content: flex-start"></div>
<div style="display: flex; justify-content: flex-end"> </div>
<div style="display: flex; justify-content: center"> </div>
<div style="display: flex; justify-content: space-between"> </div>
<div style="display: flex; justify-content: space-around"> </div>
<div style="display: flex; justify-content: space-evenly"> </div>
``` 


Suppose banner should be in the middle of the screen.
```html
  <div style="display: flex; justify-content: center">
         <div style="border-radius: 2px solid red;">
              <img src="Hello.png" />
         </div>
  </div>
```

Padding, Margin and Flex are ***relative things***

Whenever we have multiple complex things to keep right next to each other, top-down to each other. We use **Flexbox** on the parent div
and all the child divs be arrange accordingly.

```html
   <div style="display: flex;">
 
        <div style="display: flex; justify-content: flex-start">
             <img src="logo.svg"/>
        </div>

        <div style="display: flex; justify-content: flex-end">
              <div>
                  <a href="/"> Doc </a>
               </div>
                  <a href="/"> Contact us </a>
               <div>
                  <a href="/"> Support </a>
               </div>
        </div>
   </div>
```  

**Default value of ```style="display: flex;"``` is ```style=""display: flex; justify-content: flex-start""```

There are many other ways to do same thing. Flexbox is not the only way to structure elements. Yes, Flexbox is most popular one.
Others are like something called Grid.

- If you want to section your whole page using semantic tags instead og just div, you can do that as well. Like we have tags like
  - ```<nav> </nav>``` for navigation bar
  - ```<section> </section>```
  - ```<header> </header>```
  - ```<footer> </footer>```

First learn to writing raw css, once you're comfortable with raw css then we can copy any style from any webpage.
At the end most of use will be using CSS Libraries like Tailwind/Shadcn etc etc.

> Confusion vs Doubt
> - Anything specific not understood?
>   - Good/Clear Doubt -> 10% students -> This can be solve by your teacher
> - Recap (whole thing)
>   - Vague/unclear doubt -> 90% student -> This can be only solve by yourself.

> Teacher or a good instructor -> accepts the fact, it might be possible there are students who know the things which are
going to taught in the class.
> - As a teacher, you might forget something, but few students might remember, so you can say : "Things might you know what'm forgetting."
> - Take a pause, if required Don't hurry.
</details>
