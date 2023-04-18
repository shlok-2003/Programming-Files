//? we can add default parameter in javascript

function foo(param="Hello") {
    console.log(param)
}
foo()

//? If we give some value to function, then default is removed and inserted value is used
foo("Football")

//? But if we want to do this correctly, first we need to add parameter that are defined and by us, then we can add default parameter
//? Else, it will give an error

function boo(one, two, param="Shlok") {
    console.log(one, two, param)
}
boo("Hi!", "This is", )