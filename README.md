# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](images/127.0.0.1_5500_index.html%20(9).png)
![](images/127.0.0.1_5500_index.html%20(8).png)
![](images/127.0.0.1_5500_index.html%20(7).png)
![](images/127.0.0.1_5500_index.html%20(10).png)


### Links

- Solution URL: [Add solution URL here](https://github.com/abenezer-lab-code/interactive-rating-component.git)
- Live Site URL: [Add live site URL here](https://abenezer-lab-code.github.io/interactive-rating-component/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- css responsive
- CSS media queries
### What I learned
In this project i learn how to make responsive design, making acssessible and updating dom using javascript.

 code snippets:

```css
.form,.tnks-container{
max-width: calc(100vw - 60px);
width: 40rem;
min-width: 24rem;

padding: 2rem;
background-color: var(--dark-gray);
border-radius: 19px;
margin:0 5px;
}
```
```js
const value = document.querySelector("input[type='radio']:checked")?.value;
```

*
### Continued development
"In the future, I will practice using working forms."

### AI Collaboration
 
I use AI to help me fix typos and make good naming suggestions for variables.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

