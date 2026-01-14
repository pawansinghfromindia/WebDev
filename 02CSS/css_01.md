# CSS - Cascading Style Sheets

<details>
  <summary><b>Cascading Style Sheets</b> </summary>

> CSS let us to add **styles** to our webpage.
  - ```colors```
  - ```font-size, font-family, font-weight```
  - ```background-color```
  - ```border```
  - ```bold, itallic, underline```
  - ```padding, margin```
  - ```width, height```


> CSS is used for positioning **things** on the webpage.
  - ```<div>, <span>, <text>``` by applying CSS on it.

All of these styling is done inside browsers and the only way to style inside browser is using **CSS**.
Means, making your webpage(created in HTML) from ugly to pretty through CSS.

</details>

<details>
  <summary><b> How to add styles? : <code> style attribute </code> </b> </summary>

```html
<h1 style="color: red; background-color"> Hello World </h1>
```
> How to remember all of this? 🥹
> - As you need just Google it, once you start using it, It will become muscle memory. 😊

**Common Styling attributes**:
- ```color```
- ```background```
- ```border```
- ```border-radius```
- ```box-shadow```
- ```padding/margin```

We can debug any website using Chrome Browser Developer tool to debug our CSS styling. <br/>
Open your website in chrome > Right Click > Elements | Styles <br/>
Do your debugging and testing of your styling.

Difference between **Padding** and **Margin** is very subtle.
- The breathing space created by **Padding** is towards **inside** div/span.
- The breathing space created by **Margin** is towards **outside** div/span.

> Usually as a developer we don't worry about these attributes values and specifications. We get a **figma file** from design team. But It is good to know.
  
</details>

<details>
  <summary> <b> How to position?</b> </summary>

```<div> </div>``` always takes up all the space available horizontally full line.

```<span> </span>``` only takes up as much it needed.

Can we make ```<div> </div>``` to take only spaces it needs?

**Padding vs margin**
```html
<div style="padding-left:100px; padding-right:100px; background-color:purple;">
       <span>
            Zerodha
       </span>
       <span>
            Signup
       </span>
</div>

<div style="margin-left:100px; margin-right:100px; background-color:green;">
       <span>
            Zerodha
       </span>
       <span>
            Signup
       </span>
</div>
```

How to make an element move from left to right on the screen window? <br/>
1. Dumb way : using **Float property** [older way], depriciated in Browser still works.
```html
<div style="margin-left:100px; padding-right:50px;">
       <img src="logo.svg" width="200"/>
       <span style="float:right;">
            Signup
       </span>
</div>
```

2. Right way : using **Flexbox**
> Positioning elements on the internet should be done by something called **Flexbox**.

```<div style="display: flex;">``` on the parent makes all the div siblings reside in the same line.

```<div style="display: flex; justify-content:">```
- ```<div style="display: flex; justify-content: flex-start">``` 
- ```<div style="display: flex; justify-content: flex-end">``` 
- ```<div style="display: flex; justify-content: center">``` 
- ```<div style="display: flex; justify-content: space-between">``` 
- ```<div style="display: flex; justify-content: space-around">``` 
- ```<div style="display: flex; justify-content: space-evenly">``` 


</details>







