let menu = document.getElementById('intro')

//? We can clone a element by .cloneNode(__boolean-value__)

let CloneElement = menu.cloneNode(true) 
document.body.appendChild(CloneElement)

//! of the boolean value is true, then it clones the childElements along with parentElement of `menu` also. Otherwise only the 
//! parent Element is cloned

let ClonedParent = menu.cloneNode(false)
document.body.appendChild(ClonedParent)
console.log(ClonedParent)