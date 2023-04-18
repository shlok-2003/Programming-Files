//? we can see all the css that is applied to that particular element with the help of getComputedStyle(__element-name__)

let element = document.getElementById('intro')

let css = getComputedStyle(element)     //? It gives the current css styling
console.log(css)

//! To view a particular style, we can do `__variable-in-which-styling-is-stored__`.style-name 
console.log(css.color)      