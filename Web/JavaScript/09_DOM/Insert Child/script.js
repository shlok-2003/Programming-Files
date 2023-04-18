//? we can insert a child to an element tag
let element = document.getElementById('intro');

//! We are going to use .insertAdjacentHTML(__position__, __new-element__)

//? It has: 1) beforebegin  2) afterbegin   3) beforeend    4) afterend

// *                        -----> beforebegin 
// *      <ul id="intro">   -----> selected-element
// *                        -----> afterbegin        
// *            <li>list 1</li>
// *            <li>list 2</li>
// *            <li>list 3</li>
// *            <li>list 4</li>
// *                        -----> beforeend
// *        </ul>
// *                        -----> afterend

let n1 = document.createElement('li')
let n2 = document.createElement('li')
let n3 = document.createElement('li')
let n4 = document.createElement('li')

n1.textContent = "beforebegin"
n2.textContent = "afterbegin"
n3.textContent = "beforeend"
n4.textContent = "afterend"

element.insertAdjacentElement("beforebegin", n1)
element.insertAdjacentElement("afterbegin", n2)
element.insertAdjacentElement("beforeend", n3)
element.insertAdjacentElement("afterend", n4)