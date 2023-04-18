//? If we don't add arguments in the subscript, it will be accepted as all the arguments are stored in `arguments` object.
function add() {
    console.log(arguments);
    if(arguments.length == 0)   
        console.log('No parameters sent');
    else   
    {
        let sum = 0;
        for(let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        
        console.log(sum);
    }
}

add(1);
add(1, 4, 7);
add(2, 7, 9, 10, 11);
add(3, 5, 5, 1, 34, 124);