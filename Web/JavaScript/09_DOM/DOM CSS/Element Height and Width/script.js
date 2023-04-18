let element = document.getElementById('intro');


//? There are two types of height and width in JavaScript: Offset and Client

//! Offset height and width includes border, margin and padding height
//! Client height and width does not includes border and margin height but includes padding height

let offset_Height = element.offsetHeight
let offset_Width = element.offsetWidth

console.log(`${offset_Height} ${offset_Width}`)

let client_Height = element.clientHeight
let client_Width = element.clientWidth

console.log(`${client_Height} ${client_Width}`)
