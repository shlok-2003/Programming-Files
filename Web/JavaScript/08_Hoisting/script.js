// * "use strict"            //? This will be explained at the end of the page.

//? This is used to debugging. This means 

hello();

//? When we call a function, that is not created by user or the javascript, then it gives error that 
//? "__function-name__ is not defined"

//? Now lets create the hello function

//? As javascript is interpreter language, it reads the code line-by-line, so it should have given an error, but it doesn't. This is
//? This is due to the concept of Hoisting in JavaScript
//? what is does that JavaScript first reads all the lines, and wherever it finds an declaration, it brings it to the top of the 
//? program and then it execute all the code  

function hello() {
    console.log('hello')    //! This will execute due to hoisting, but it will not run in other languages
}

//? Hoisting in variables. 
//? If you have declared the variable, but you have not assigned a value to it, then javascript itself assigns it with undefined.

//* Example
var v
console.log(v)
v = 10          //! Declaration is done after printing, so it will print undefined

//! This happens only for var, and not for let and const. All of them would be bought to the top of the program, but only x

// *  let x;
// *  console.log(x)                // This will give error
// *  x = 10

//? if we write 
z = 100
                //? This will not give any error, as javascript will declare it by itself. This can lead to many bug
                //? We will prohibit the javaScript by doing this, just by writing "use strict"

