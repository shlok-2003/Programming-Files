//? Math.round()    gives 0 - 1 numbers which are in float
//? We can get higher numbers by multiplying it with desired number

let x = Math.random();
console.log(x);

let y = Math.random() * 10; 
console.log(y);

//? We always can bring it to floor value
let z = Math.floor(Math.random() * 100);
console.log(z);

//? To display random number from [lower, upper] numbers, we have a formula
let lower = 10 //! Enter value
let upper = 40 //! Enter value
let number = Math.floor(Math.random() * (upper - lower)) + lower;

console.log(number);