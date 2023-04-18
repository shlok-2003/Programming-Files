//? A callback function is a function passed into another function as an argument, which is then invoked inside the outer 
//? function to complete some kind of routine or action.

function hello() {
    console.log("Hello, the resultant sum is: ")
}

function add(num1, num2, greeting) {
    let result = num1 + num2
    greeting()

    console.log(result)
}

add(10, 20, hello)
//? Another example:
add(30, 50, function() {
    console.log("Hello, the sum of num1 and num2 is: ")
})

//? The above examples are a synchronous callback, as it is executed immediately.


//! Note, however, that callbacks are often used to continue code execution after an asynchronous operation has 
//! completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block 
//! chained onto the end of a promise after that promise fulfills or rejects. This structure is used in many modern web APIs, such 
//! as fetch().