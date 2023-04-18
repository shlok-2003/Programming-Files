let book = ['Maths', 'Physics', 'Maths'];
process.stdout.write(`Initial array is:`);      //? (process.stdout.write) prints the content without a trailing newline
console.log(book, '\n');

//? To add an element from the back end of array, we use .push(__elementName__) to push element
book.push('Chemistry');
console.log(book, '\n');

//? To insert element from the start of element, we use .unshift(__elementName__)
book.unshift('History');
console.log(book, '\n');

//? To remove element from behind, we use .pop() function
book.pop();
console.log(book, '\n');

//? To remove element from start, we use .shift() function
book.shift();
console.log(book, '\n');

//! Updating the array for new functions
book.push('History');
book.push('Chemistry');
book.push('Computer Graphics');
book.push('DSA');
//? New array will be
console.log(book, '\n');

//? To remove element from between, we can use .splice(__pos__, __size__) function
book.splice(1, 2);
console.log(book, '\n');  //? You can see Physics and Maths is removed

//? To make book empty
book = [];
//? OR
book.length = 0;

//? We can use of .indexOf to get first index of an element, and .LastIndexOf() function

//? We can verify if the container is array or not, by using .isArray(), which returns true of false
console.log(Array.isArray(book), '\n');

//? We can convert a string, we can use .split() function
let newStr = 'hello';
console.log(newStr.split(''), '\n');

let str = 'Hello I am Bolly Singh';
bolly = str.split(' ');
console.log(bolly, '\n');

//? We can convert an array to string by joining all elements of it with the help of .join() function
let stringFromArray = bolly.join('-');  //! We insert the space or any character we need between all of the elements
console.log(stringFromArray, '\n');

//? We can join two arrays by using .concat() function
arr1 = ['Maths', 'English'];
arr2 = ['Physics', 'History'];
arr3 = arr1.concat(arr2);
console.log(arr3, '\n');

//? We can print all elements of array with for loop
for(let i = 0; i < arr3.length; i++)
    process.stdout.write(`${arr3[i]} `);
console.log();

//? We can use for each loop
arr3.forEach(value => {
    process.stdout.write(`${value} `)
})

