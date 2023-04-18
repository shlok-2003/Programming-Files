//? To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? 
//? No, you only take out the items you would like to use on your sandwich.

//? Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the 
//? items contained in these. Destructuring makes it easy to extract only what is needed.

//! Here is the old way of assigning array items to a variable:
// * const vehicles = ['mustang', 'f-150', 'expedition'];

// * const car = vehicles[0];
// * const truck = vehicles[1];
// * const suv = vehicles[2];

//! Here is the new way of assigning array items to a variable:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
console.log(car, truck, suv)

//! If we add some extra variable in the 2rd line, then it will be assigned `undefined` value unless you give default value to it