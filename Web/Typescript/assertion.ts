//! Type assertion allows you to set the type of a value and tell the compiler not to infer it.
//! Suppose we have a HTML button, then it can possibly have two values --> null | HTMLElement
//* const btn = document.getElementById('btn')

//! So whenever we want to use any properties, then we have to use `?` everytime, like this ----> btn?onClick
//! Hence we will do type assertion

const btn1 = <HTMLElement> document.getElementById('btn');      //? Method 1
const btn2 = document.getElementById('root') as HTMLElement;    //? Method 2

//! We can clearly specify which type of HTML Element it is
const img = document.getElementById('img') as HTMLImageElement; 
//? Now we can access the image properties easily

const form = document.getElementById('form') as HTMLFormElement;
form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log(`The form has been successfully`)
}

//! For specifying that the value is not null we can add ! at the end
const h1 = document.getElementById('h1')!

//! Suppose we have a class of Person
interface PersonType {
    name: string;
    email: string;
    age: number;
}
 
class Person implements PersonType {
    constructor(public name: string, public email: string, public age: number) {  }

    getName = (): string => {
        return this.name;
    }

    getEmail = (): string => {
        return this.email;
    }
}

const getData = (key: keyof Person) => {
    return person[key];
}

const person = new Person("John", "johnexample@gmail.com", 30);
console.log(getData("name"));
console.log(getData("email"));
console.log(getData("age"));

