function func1() {
    alert("Method-1")
}

function func2() {
    alert("Method-2")
}

let method1 = document.getElementById('type-1')
method1.addEventListener('click', func1)
method1.addEventListener('click', func2)

//? To remove a event listener, we use .removeEventListener('__appropriate-event-listener__, __function-name__)
//? event-listener to be removed must not be anonymous function or is being called in attributes.

method1.removeEventListener('click', func1)

