//? Before Arrow Function
// * hello = function() {
// *     return "Hello World!";
// * }

//? After Arrow Function
// * let hello = (a, b) => {
// *     const sum = a + b
// *     return sum
// * }

//? IF the function has just one line, and that too is returning the value, then
let result = (a, b) => a + b        //! We can write it like this. Here the expression after `=>` shows the returning value 
                                    //! This can also be used for function just having one line

