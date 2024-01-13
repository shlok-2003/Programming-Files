//! Generics is like template in C++ or Java.
//! Generics is used to create reusable components. 

//? Problem with the below code
const func = (a: any): any => {
    return a;
}

//* Now if we call the function and we try to access any property of the return value, we will not get any intellisense.
//* This is because we have used any type in the return type of the function.
//* So, we will not get any intellisense. To solve this problem we can use generics.

const returnGeneric = <T>(a: T): T => {
    return a;
}

console.log(returnGeneric<string>("Hello"))

//* Now if we call the function and we try to access any property of the return value, we will get intellisense.
//* Array is a generic type. It is a generic type because it can store any type of data.

//! Generics Complex Example

type Person = {
    name: string;
    age: number;    
}

const users: Array<Person> = [
    {
        "name": "Shlok",
        "age": 20
    },
    {
        "name": "John Doe",
        "age": 25
    },
    {
        "name": "Sameer",
        "age": 30
    },
    {
        "name": "Sarang",
        "age": 35
    },
    {
        "name": "Rahul",
        "age": 40
    }
];

const filterByPeople = <T, Key extends keyof T>(users: Array<T>, property: Key, value: T[Key]) => {
    return users.filter(user => user[property] === value);
}

console.log(filterByPeople(users, "age", 20))