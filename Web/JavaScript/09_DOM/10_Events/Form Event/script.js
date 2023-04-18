let element = document.getElementById('text-box');

//? We we click an input box, then we are able to write inside that box, else we can do nothing in that textbox. These are the 
//? scenarios for focus -> when input-box is clicked, and blur -> when we click anywhere else in the page

element.addEventListener('focus', function() {              //? When user clicks on the input box
    element.style.background = "red";
    element.setAttribute('placeholder', 'I am selected')
})

element.addEventListener('blur', function() {               //? When user clicks anywhere else in the screen
    element.style.background = "yellow"
    element.setAttribute('placeholder', 'I am not selected')
})

//? To get the changes done in the input box, we can use change event
element.addEventListener('change', function() {
    console.log("change event ---->", this.value)                     //? this will detect change whenever the value of input-box is changed
                                                //? If value if kept same, even after pressing on the box, then event does not occurs
})

//? If we want to detect any changes in the input box, in real time, then we use input event. It shows all the changes that we do
//? in the input box

element.addEventListener('input', function() {
    console.log("input event ---->", this.value)
})

//! This works on input tag, select tag, textArea tag, ....