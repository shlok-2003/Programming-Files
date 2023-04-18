//? While creating a function, the number of function is constant. But what is you want a function that can have multiple parameter.
//? For example, function `sum` can have 2, 3, 4, 5, ... and so on, number of parameter. Due to this, we cannot create a correct 
//? function. Hence we can use

function sum(...args) {
    //! args is an array
    let result = 0

    // * for(let num of args)
    // * {
    // *     result += num
    // * }

    for(let i = 0; i < args.length; i++)
    {
        result += args[i]
    }
    return result
}

var ans = sum(2, 4, 5, 6, 7, 1)
console.log(ans)