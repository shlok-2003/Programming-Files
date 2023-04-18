let element = document.getElementById('intro');

//? We can styling classes to the element 
element.classList += "text-blue background-red"

//? Another way to add is .classList.add(__class-name__)
element.classList.add("underline")  

//? To add multiple classes
element.classList.add("font-size-large", "font-uppercase")



//? To remove a class we can do .classList.remove(__class-name__)
//? To replace a class we can do .classList.replace("old-class", "new-class")
//? To verify if an element has some class we can do .contains("__class-name__")


//? Now there is .toggle(__class-name__) which is used to toggle a class. Meaning, if the class is present, then remove it. And if
//? the class is not present then add it. It is used to make a sticky navbar.