//? Methods means creating function which is associated to an object and it has some action
let person = {
    'First Name': 'Shlok',
    'Last Name': 'Prajapati'
}

//? We can create methods by 3 ways

//! Method 1
person['Say Hello'] = function() {
    console.log(`Hello ${person['First Name']} ${person['Last Name']}`);
}
person['Say Hello']();

//? OR
person.sayHello = function() {
    console.log(`Hello ${person['First Name']} ${person['Last Name']}`);
}
person.sayHello();

console.log()   //* For a new line
//! Method 2
function greet() {
    console.log('Hello Ji!');
}
person.sayHello = greet;
person.sayHello();

console.log();  //* For a new line

//! Method 3
//? create the function in the object parameters itself
let book = {
    'Name': 'Harry Potter',
    'sayHello': function() {
        console.log('I am book');   //! Method 3
    },

    Hello() {
        console.log('Hello Ji!')    //! Method 4, newly introduced in ES6 update
    }
} 

book.sayHello();
console.log();      //* For a new line
book.Hello();
