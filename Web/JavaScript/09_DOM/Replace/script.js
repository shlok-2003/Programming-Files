let menu = document.getElementById('intro')

let newElement = document.createElement('li')
newElement.textContent = "I am replaced now"

//? we are now going to replace `list 2` with the new element
let item = menu.firstElementChild.nextElementSibling    //! Select the list 2 -> element

//? We can replace the element by .replaceChild(__new-element__, __old-element__)

menu.replaceChild(newElement, item)
