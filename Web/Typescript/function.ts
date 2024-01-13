// !we cannot allot type alias to a function, instead we have to create a arrow function, below are the example

function func(n: number): number {
    return n;
}

// !If we want to use type alias, then
type Num = (n: number) => number;

const lol: Num = function func(n) {
    return n;
}

// ?func(10)            --->example

// ----------------------------X--------X-------X------------------------- //

// *make a function with optional parameters
type OptType = (a: number, b: number, c?: number) => number;

const func1: OptType = (a, b, c) => {
    // !since c variable can be undefined, we have to guard it with `typeof()`
    if(typeof(c) === "undefined")
        return a + b;

    // !now c variable can be used, as it will definitely not be a undefined value
    return a + b + c;
}

// ?func1(10, 20, 30)    ---> example

// *make a function with default parameter
type DefType = (a: number, b: number, c?: number) => number;

const func2: DefType = (a, b, c = 20) => {
    return a + b + c;
}

// ?func2(10, 20)       --->example

// *make a function for rest parameter
type RestType = (...num: number[]) => number;

const func3: RestType = (...num) => {
    let sum: number = 0;
    for(let n of num) {
        sum = sum + n;
    }

    return sum;
}

// ?func3(10, 20, 30, 40, 50, 60);  ---> example

