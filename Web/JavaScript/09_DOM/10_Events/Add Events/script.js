//? Events are responsible to make the website responsive on clicking buttons. We can make the website carry some task on clicking 
//? some buttons.

//? There is three ways to do so.

let method1 = document.getElementById('type-1')
//? Method 1: add event directly to the attribute of the element along with the function in its value.
function func() {
    alert("Method-1")
}

//? we add event listener by .addEventListener("__type-of-event-listener__", __function-name__)

//? Method-2
let method2 = document.getElementById('type-2')
method2.addEventListener('click', func2)
function func2() {
    alert("Method-2")
}

//? Method-3
let method3 = document.getElementById('type-3')
method3.addEventListener('click', function() {
    alert("Method-3")
})

//! Checkout all the events at https://www.w3schools.com/jsref/dom_obj_event.asp
//! Checkout all the mouse-events at https://www.w3schools.com/jsref/obj_mouseevent.asp
