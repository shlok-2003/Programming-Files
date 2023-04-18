//? We will be learning this keyword. It is used to access parameters of same object
let book = {
    'Name': 'Harry Potter',
    'sayHello': function() {
        console.log(`I am the book with name ${this.Name}.`)
    }
} 

book.sayHello();

//? We will be learning new keyword. It is used to create a new Object
let x = new Object();