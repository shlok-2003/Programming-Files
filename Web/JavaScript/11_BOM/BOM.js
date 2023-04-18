//? All the global JavaScript Object, function, and variable with the var keyword automatically become members of the window keyword. Global variables are the property 
//? of window object. Global function are methods of the window object. 

var x = 10;
console.log(window.x);

// * But not: 
// * let y = 20
// * console.log(window.y)

//? Inner Height and Inner Width
//? It only includes only the area of the webpage
console.log(window.innerHeight, window,innerWidth);

//? Outer Height and Outer Width
//? It includes the whole browser, including the tab-bar, console, scroll-bar, etc
console.log(window.outerHeight, window.outerWidth)

//? To open a new tab, we can use window.open(__url__, __name__, __features__)

//! __url__ refers to the url you want to redirect after opening the new tab. name is used to manipulate the new tab such as changing the url on clicking on event, etc. 
//! At such places, name is used. __feature__ refers to giving height or width to the new tab. More you can get on website.

//? Similarly there is window.close();