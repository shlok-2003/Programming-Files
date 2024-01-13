let x = new Date();
console.log(x);

//? It has 7 parameters
//* let y = new Date(__year__, __month__, __day__, __hour__, __minute__, __second__, __millisecond__);
//! month starts from index 0, i.e 0 is January and 11 is December

console.log(x.getFullYear());
console.log(x.getMonth());
console.log(x.getDate());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());

//? We can set new values for the date by .setMonth() or .setFullYear() or .setDate() or .setHours()