let element = document.getElementById('intro');

element.setAttribute("name", "form1");

//? .setAttribute(__new-attribute-name__, __value__)

console.log(element.getAttribute("name"));      //? We can get the value of the attribute by .getAttribute(__attribute-name__)

//? We can remove attribute by .removeAttribute(__attribute-name__)
element.removeAttribute("name")


//? We can check if the element has an attribute or not by .hasAttribute(__attribute-name__)    true or false
console.log(element.hasAttribute("name"))