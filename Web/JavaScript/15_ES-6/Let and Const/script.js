//? If we create a variable with `var`, then it is created as a global variable, so it can be accessed with global function
//! Example can be observed in the chrome devtools
var v = 10
console.log("with var -->", window.v)

//! Example with `let` variable
let x = 10
console.log("with let -->", window.x)

//? Redeclaration is allowed in case of `var`, but not for `let`
// * let z = 20
// * let z = 10
// * console.log(z)      // Error