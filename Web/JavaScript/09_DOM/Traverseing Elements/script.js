//? we can select any element in javascript with the help of sibling-son-parent relationship
let ele = document.getElementById('intro');
console.log(ele);

//? to select parent element
let parent = ele.parentElement;
parent.innerHTML = 'hello'

//? We can select first child of an element by .firstElementChild
console.log(document.getElementsByClassName('container'));

let child = document.getElementsByClassName('container')[0].firstElementChild;
console.log(child);

//? similarly last child is selected by .lastElementChild
let lastChild = document.getElementsByClassName('container')[0].lastElementChild;
console.log(lastChild);

//? we can all childrens by .children
console.log(document.getElementsByClassName('container')[0].children);

//? we can select previous sibling by .previousElementSibling
//? we can select next sibling by .nextElementSibling
