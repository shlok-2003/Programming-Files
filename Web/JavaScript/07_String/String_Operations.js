//? For getting the length of string -> use .length function
let str = 'Bolly Singh';
console.log(`${str} has ${str.length} characters\n`);

//? For concatenating two strings, we use '+' operator or 'concat' function
let arr1 = 'Bablu';
let arr2 = 'Singh';
console.log(`Merging of ${arr1} and ${arr2} will give ${arr1 + " " + arr2}`);
console.log(`Another way is ${arr1.concat(" ", arr2)}\n`)

//? To escape a character, we can use backslash '\' which can escape characters. Like you cannot print '\' in string 
//? as it is used in tabs and newline "\t and \n". So we can add '\\', which means it will ignore the first slash but not the second
//? one. 

//? To get the substring of a string we can use .substr(pos, length) function.
let newStr = 'Hi, lets understand the inbuilt functions of strings of Javascript';
console.log(newStr.substr(4, 16));      //! This function is removed from Javascript, but it will still run for some computer

//? or we can use .substring(pos1, pos2) function
console.log(newStr.substring(4, 19) + '\n ');

//? To find the first index of any string or character
console.log(newStr.indexOf('the'));

//? To find the last index of any string or character
console.log(newStr.indexOf('of', 43));          //? Last index Method 1
console.log(newStr.lastIndexOf('of'), '\n');          //? Last index Method 2
//! If the value returned is -1, then the desired string is not present

//? To remove the whitespace from start and end side of string, we can use .trim() function
let str2 = '         hello     ';
console.log(`${str2.trim()}\n`);
//? We can also use .trimStart() and .trimEnd() depending on requirement

//? To convert to uppercase, we can use .toUpperCase() and for lowercase we can use .toLowerCase()
console.log(str.toLowerCase());
console.log(str.toUpperCase(), '\n');

//? We can use .replace() function to replace a character of word
let Bolly = str.replace('Bolly', 'Bablu');
console.log(Bolly, '\n');

//? To find a character or word, we can use .includes() function
console.log(newStr.includes('Javascript'));
