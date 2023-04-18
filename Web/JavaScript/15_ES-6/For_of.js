//? The JavaScript for of statement loops through the values of an iterable object.
//? It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

//! Syntax
// * for (variable of iterable) {
// *     code block to be executed
// * }

//! It is similar to the C++ iterator loop ---> for(__variable-type__ num : arr)

let num = [2, 5, 6, 7, 1, 22, 33, 8, 10]
for(element of num)
    process.stdout.write(`${element} `)