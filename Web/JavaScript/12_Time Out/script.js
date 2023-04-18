//? setTimeout(__function-name__, __time-in-millisecond__) is used for make some events or element occur, after some x interval of 
//? time.

let timeoutId = setTimeout(print_it_timeout, 8000)

function print_it_timeout() {
    console.log('Hello')
}

//? setInterval is used to run some operations again and again after that time interval

let intervalId = setInterval(print_it_interval, 2000)

function print_it_interval() {
    console.log('How you doin!!')
}

//? To clear the timeout
// *    if("__condition__")
// *        clearInterval(timeoutId)