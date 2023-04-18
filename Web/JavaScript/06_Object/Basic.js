//? We can create an object by writing
let object = {};

//? For example
let person = {
    'First Name': 'Shlok',
    'Last Name': 'Prajapati'
}

//! The object properties can be without quotation marks if they have no space between it. But these could be create a problem 
//! while calling the property. For example we cannot access person.'First Name' ie by dot method, if they are not 
//! in QUOTATION MARK!!!!.
console.log(person['First Name'], '\n');          //? This is the method to access a property. By array method
console.log(person, '\n');
//? Always try not to give space between property name. Instead use camelCase.

//? If we try to access property not mentioned, we get UNDEFINED
console.log(person.age, '\n');

//? modify the value of object by
person["First Name"] = 'Ravi';

//? Create a new property by
person.age = 19;
console.log(person, '\n');

//? Delete the property by
delete person['age'];
console.log(person, '\n');

//? Check if property exists in an object
console.log('age' in person, '\n');           //! Returns true or false

person['age'] = 25;

//? Iterate over all properties in object
for(let key in person) {
    process.stdout.write(key + ": " + person[key] + "     ");
}
