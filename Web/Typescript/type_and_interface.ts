// type inference
type AddFunc = (a: number, b: number) => number;

// ?example
const add: AddFunc = (a, b) => {
    return a + b;
}

type Obj = {
    height: number;
    weight: number;
    gender?: boolean | string;
}

// ?example
let obj: Obj = {
    height: 180,
    weight: 80,
    gender: "Male"
}

// !difference between interface and type --> interface is more flexible than type 
// !The major difference is that type aliases cannot be extended or implemented from (nor can they extend/implement other types).

// ?example
interface Person {
    name: string;
    age: number;
}

interface Person2 extends Person {
    phone_number: number;
    calc_size?: (height: number, weight: number) => number; // ?optional property
};

// !Person2 will now have three properties: name, age (as it is been extended from Person), and phone_number.

type Member = {
    name: string;
    age: number;
}

// ? Member cannot be extended here as it is a type. So this is the use of interface
