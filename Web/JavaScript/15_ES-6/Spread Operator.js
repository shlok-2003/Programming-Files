//? The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another 
//? array or object.

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6, ...arr1]
let arr3 = [...arr1, 4, 5, 6]
let arr4 = [4, 5, ...arr1, 6]

console.log("At Rear End: ", arr2)
console.log("At Front: ", arr3)
console.log("In Between the elements: ", arr4, '\n')

//? We can combine two array together also, with the help of spread operator
let num = [...arr1, ...arr2]
console.log("The resultant array is: ", num)

//? We can use the spread operator with objects too:

// * const myVehicle = {
// *     brand: 'Ford',
// *     model: 'Mustang',
// *     color: 'red'
// * }

// * const updateMyVehicle = {
// *     type: 'car',
// *     year: 2021, 
// *     color: 'yellow'
// * }

// * const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
// * console.log(myUpdatedVehicle)