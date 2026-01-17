## HTML
<details>
  <summary> <b> HTML - 01 </b> </summary>
HTML stands for hyper text markup language. It is the foundation of building `unstyled` websites.

#### Step 1 - Creating a simple HTML file locally

1. Create a folder on your machine called `website`
2. Add a `index.html` file inside it
3. Write the following code in it -

```html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
```
Now open this in your browser

#### Step 2 - Tags

1. div, span
2. head
3. body
4. h1, h2, h3, h4, h5, h6
5. b, i, u
6. a
7. img
8. input
9. button
10. br

**Media**

- `video`, `audio`, `iframe`

#### Step 3 - Building a basic HTML page

```html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
<body>
	<div>
		<span>Visual Studio Code</span>
		<a href="/">Docs</span> 
		<a href="/">Updates</span> 
		<a href="/">Blog</span> 
		<a href="/">API</span> 
		<a href="/">Extensions</span> 
		<a href="/">FAQs</span>
		<a href="/">Learn</span>
		
		<input type="text" placeholder="Search Docs">
		<button>Download</button>
	</div>
	<br/>

	<div>
		<a href="/">Version 1.82</a> is now available! Read about the new features and fixes from July.
	</div>

	<br/>
</body>
```
</details>


## CSS

<details>
  <summary> <b> CSS - 01 </b> </summary>

CSS stands for Cascading Style Sheets. It is used to style our applications

You can add CSS to your HTML app by using - 

1. The  `style` attribute (inline styles)
2. In an external css file
3. In the head tag of the HTML file.

#### Approach #1 - Inline styles

Try updating the `body` tag in the last style as follows -
```html
<body style="background-color: black;">
... rest of the code
</body>
```

#### Approach #2 - External styles

1. Add a new file called index.css
2. Add the following code in it

```css
body {
    background-color: black;
}
```
- Update index.html
```css
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
	<link rel="stylesheet" href="index.css">
</html>
<body>
... rest of the code
</body>
```

### Common style attributes

- `color`: Sets the text color.
- `background-color`: Sets the background color.
- `font-size`: Sets the size of the text.
    - `font-weight` : How bold should the font/text be
- `margin`: Sets the outer space around an element.
- `padding`: Sets the inner space within an element.
- `border`: Sets the border around an element.
- `width, height`
- `box-shadow`

#### Classes and ids

In CSS, classes and IDs are used as selectors to apply styles to HTML elements. <br/>
They help in targeting specific elements for styling and can be used to enhance the modularity and reusability of CSS code.

</details>

## Flexbox

<details>
  <summary> Flexbox - 01 </summary>

Flexbox is a CSS layout model designed to help with the arrangement of items within a container.

Update the website to the following -

```html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
<body>
	<div style="display: flex;">
		<div>Visual Studio Code</div>
		<a href="/">Docs</span> 
		<a href="/">Updates</span> 
		<a href="/">Blog</span> 
		<a href="/">API</span> 
		<a href="/">Extensions</span> 
		<a href="/">FAQs</span>
		<a href="/">Learn</span>
	</div>
	<div>
		<input type="text" placeholder="Search Docs">
		<button>Download</button>
	</div>
	<br/>

	<div>
		<a href="/">Version 1.82</a> is now available! Read about the new features and fixes from July.
	</div>

	<br/>
</body>
```

Notice that the elements are positioned right next to each other even though `Visual Studio code` is inside a `div`

#### Justify content

Try experimenting with the `justify-centent`  property.  
It tells how to space the elements across the main axis (`x` axis if `flex-direction` is row, `y` axis if `flex-direction` is column)

<img width="301" height="488" alt="image" src="https://github.com/user-attachments/assets/1961ff54-a3a2-4558-8acd-5ba1dd4d019b" />

#### Align items

Try experimenting with the `align-items`  property.  
It tells how to space the elements across the main axis (`y` axis if `flex-direction` is row, `x` axis if `flex-direction` is column)

<details>
  <summary> 
    Assignment - How to center the second `hello` vertically <br/>
    <img width="300" height="50" alt="image" src="https://github.com/user-attachments/assets/8b66f38d-6336-465d-9aa8-322011e3cb14" />
  </summary>
  <details>
    <summary> Solution </summary>

```html
    <html>
    	<title>
    		Visual Studio Code - Code Editor
    	</title>
        <style>
        </style>
    </html>
    <body>
    	<div style="display: flex; ">
            <div style="font-size: 30">hi there</div>
            <div style="font-size: 20;">hello</div>
        </div>
    
    	<br/>
    </body>
```
    
  </details>
</details>

#### Example 1

VSCode topbar

https://code.visualstudio.com/

<img width="350" height="57" alt="image" src="https://github.com/user-attachments/assets/4dd7f5b1-9ac1-4dad-934d-f5d63a21d206" />

```html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
</html>
<body>
	<div style="display: flex; justify-content: space-between; margin: 20 300;">
        <div style="display: flex;">
            <div>Visual Studio Code</div>
            <a href="/">Docs</span> 
            <a href="/">Updates</span> 
            <a href="/">Blog</span> 
            <a href="/">API</span> 
            <a href="/">Extensions</span> 
            <a href="/">FAQs</span>
            <a href="/">Learn</span>
        </div>
	    <div style="display: flex;">
            <input type="text" placeholder="Search Docs">
            <button>Download</button>
	    </div>
    </div>

	<br/>
</body>
```
#### Example 2

https://elevenlabs.io/contact-sales

<img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/c4146ad4-1db7-451a-9123-b358b27867ac" />


```html
<html>

    <body style="margin: 0; padding: 0;">
        <header>
    
        </header>
        <section>
              <div style="border-width: thick; height: 100vh; border-style: solid; display: flex; height: 100vw;">
                  <div style="background: #1C1C1C; flex: 1; color: white;"> 
                      Contact our sales team
                  </div>
                  <div style="background: white; flex: 1;">
                      Contact sales form
                  </div>
              </div>
        </section>
        <footer>
    
        </footer>
    </body>
</html>
```

#### Example 3

https://harkirat.classx.co.in/

<img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/a444a794-0bc1-4195-97b3-4d03d1256ca3" />

</details>

## How to make pretty websites

<details>
  <summary> Fonts, Contents, Colors, animations, Linear & Radial Gradient, Hover Effect </summary>
<details>
  <summary> <b>Fonts</b> </summary>

- **Add a `<link>` in `<head>`** pointing to the font:
```html
      <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
```
[https://fonts.google.com/](https://fonts.google.com/)

- Apply it in CSS:
```css
    body {
    	font-family:'Roboto', sans-serif;
    }
```
This loads the font from Google and uses it in your page.

<aside> 
  💡 Question — should you use the google link to get the fonts, or should u download it locally and import it locally from your own project?
</aside>
<br/>
Popular fonts

```css
      Manrope
      DM Sans
      Geist
      Inter
      Poppins
      Onest
      Cal sans
      Work sans
      Google sans
      Playfair Display
```

[https://fontjoy.com/](https://fontjoy.com/)[https://www.fontshare.com/](https://www.fontshare.com/)[https://uncut.wtf/](https://uncut.wtf/)

</details>

<details>
  <summary> <b>Contents of the page</b> </summary>

What all you’re writing on the page.

</details>

<details>
  <summary> <b>Micro animations/interactions</b> </summary>

ref - motion.dev

</details>

<details>
  <summary> <b>Colors</b> </summary>

[https://uicolors.app](https://uicolors.app/)

[https://huemint.com](https://huemint.com/)

[https://www.realtimecolors.com](https://www.realtimecolors.com/)

</details>

<details>
  <summary> <b> Linear Gradient </b> </summary>

```css
    background: linear-gradient(direction, color1, color2, ...);
```

```css
    /* Top to bottom (default) */
    background: linear-gradient(red, blue);
    
    /* Left to right */
    background: linear-gradient(to right, red, blue);
    
    /* Diagonal */
    background: linear-gradient(to bottom right, red, blue);
    
    /* Using angles */
    background: linear-gradient(45deg, red, blue);
```
</details>

<details>
  <summary> <b> Radial Gradient </b> </summary>

```html
    background: radial-gradient(circle, color1, color2, ...);
    background: radial-gradient(circle, red, blue, green)
    background: radial-gradient(red, blue, green)
```
</details>

<details>
  <summary> <b>Hover effects</b> </summary>

```html
<html>
	<title>
		Visual Studio Code - Code Editor
	</title>
    <style>
        button {
            background-color: white;
            color: black;
            padding: 20;
            cursor: pointer;
            transition: box-shadow 0.3s ease;
            border-radius: 10px;
        }

        button:hover {
            box-shadow: 0 0 2px 2px white ; /* outer border */
        }
    </style>
</html>
<body style="background-color: black;">
	<div>
        <button class="button">Download for macos</button>
    </div>

	<br/>
</body>
```

[https://code.visualstudio.com/](https://code.visualstudio.com/)

<img width="350" height="80" alt="image" src="https://github.com/user-attachments/assets/21c3cd19-9e40-4106-8c32-d3d03f742e5c" />

</details>

</details>

## Assignment 1 - Age old question — How to center a div

<details>
  <summary> See Details of Assignment </summary>

<img width="350" height="250" alt="image" src="https://github.com/user-attachments/assets/c454cabd-f519-41fa-b57a-8282e7c967cc" />

</details>

<details>
  <summary> Solution </summary>

```html
<html>
    <head>
        <title>Elevenlabs | Signup</title>
        <link href="./index.css" rel="stylesheet">
        <style>
            body {
                font-family: "Roboto", sans-serif;
                font-weight: 800;
                background: black;
                color: white;
                padding: 0;
                margin: 0;
            }
        </style>
    </head>
    <body>
        <div style="min-height: 100vh; display: flex; flex-direction: column;">
            <div>
                header
            </div>
            <div style="flex: 1; background-color: red; display: flex; justify-content: center; align-items: center; height: 100%; background-color: green;">
                <span style="border: 1px solid black; padding: 20;">
                    Create an account
                    <div style="height: 1px; background-color: black; margin-top: 10;">

                    </div>
                    <input type="text" style="border: 1px solid gray; padding: 10; margin: 10; border-radius: 10px;" />
                </span>
            </div>
            <div>
                footer
            </div>
        </div>
    </body>
</html>

```
</details>


## Assignment 2

Elevenlabs contact-sales form <br/>
[https://elevenlabs.io/contact-sales](https://elevenlabs.io/contact-sales)

<details>
  <summary> See Details of Assignment </summary>

<img width="350" height="200" alt="image" src="https://github.com/user-attachments/assets/4e5cf432-a3c1-43ef-86f4-94954d78a6b2" />

</details>

<details>
  <summary> Solution </summary>

</details>

## Assignment 3

https://harkirat.classx.co.in/

<details>
  <summary> See Details of Assignment </summary>

<img width="350" height="200" alt="image" src="https://github.com/user-attachments/assets/57a7f129-fb63-4cc7-b237-a150c42e453b" />

</details>

<details>
  <summary> Solution </summary>

</details>

## Stretch assignment (Advanced)

[Winterfell | Smart Contract Generator](https://www.winterfell.dev/)

<details>
  <summary> See Details of Assignment </summary>

<img width="868" height="432" alt="image" src="https://github.com/user-attachments/assets/169602b8-3e2a-4fba-9852-f3def9b960a6" />

</details>

<details>
  <summary> Solution </summary>

</details>

<details>
	<summary> A student created this below websites </summary>

https://www.ssgserv.com/about

https://www.linkrush.co.uk/

https://wppool-theta.vercel.app/

https://www.sandrosecashmeregallery.com/

https://batch-system-assignment-eta.vercel.app/

[https://www.lifeinsujud.com/](https://www.lifeinsujud.in/)

He made all of these without using ai and then asking for refferal for a frontend dev

</details>

