//? These are the anonymous function

let varname = function () {
    console.log('I am anonymous function');
}

varname();  //? We need to call the function to execute

//? These are the immediately invoked function
(function () {
    console.log('I am immediately invoked function')
})();   //! We do not need to call the function. It immediately calls it. It can be used to optimized the program. These are the 
        //! function which need to be executed only once
        //! These are used to remove conflicts of two variables having same name and are residing in different .js files. 
        //! What we do is we pack one of the two variables in immediately invoked function and these converts it into local storage