//! View it in the web console

//? Get element by id
let heading = document.getElementById('main-heading');
console.log(heading);

//? We can select element by the class. It will select all the elements that have the desired class into an array
let classItem = document.getElementsByClassName('list-items');
console.log(classItem);

//? We can select element by the tag name. It will select all the elements that have the same tag name
let tag = document.getElementsByTagName('div');
console.log(tag);

//? If we want to select just the first element of any classes or list of tags, we can use query-selector
let first = document.querySelector('.list-items');
console.log(`${first} -> ${first.innerText}`);

//? We can select all the element also by querySelectorAll
let all = document.querySelectorAll('.list-items');
console.log(all);
