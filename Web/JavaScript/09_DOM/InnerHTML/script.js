//? we can select all the html stored in an element with .innerHTML property

//? we can change the whole html data stored in that element
let element = document.getElementById('intro');
let content = element.innerHTML;
console.log(content);

element.innerHTML = "<h1>Hello How are you</h1><hr>"
