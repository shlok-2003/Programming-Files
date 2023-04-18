//? Global variables are those which are initialized outside of function
//? Local variable are initialized inside a function

let car = 'Porsche';     //! Global Variable

function func() {
    let sportsCar = 'Pagani';   //! Local variable. These are created inside an array and flushed inside the array
    console.log(sportsCar);
    console.log(car);
}

func();