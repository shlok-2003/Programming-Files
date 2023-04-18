//? we can append a child to an element tag
let element = document.getElementById('intro');

//? we can create html element by document.createElement('__element-tag-name__')

let newElement = document.createElement('h1');
//? Now we will give content to this new tag by .createTextNode(__text__);

let text = document.createTextNode('Hi I am the newly created H1 tag');
//! and we need to append it to the newElement tag
newElement.append(text);

//? Now we have to append it to the parent tag, by using .append(__child-name__);
element.appendChild(newElement);

//? we can give className to the newly created tag
newElement.className="new-class"
//? Similarly, we can give id
newElement.id = 'new-class-main'

//? We can append child to the body by .document.body.appendChild(__child-name__);

//? We can use .textContent = "__text__" to add content


//! Example shown in cases of list
let li = document.createElement('li');
li.textContent = 'list 5'
document.getElementById('list').appendChild(li);

//? To insert an element in between any elements and not at the last (like append function) then we can use 
//? .insertBefore(__new-element__, __pos__);

let list = document.getElementById('list');

let list2 = document.createElement('li');
list2.textContent = "list 6";

let pos = document.getElementById('list').firstElementChild;

list.insertBefore(list2, pos);