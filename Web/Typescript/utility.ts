//* Required<Type>
//* Partial<Type>
//* Readonly<Type>
//* Record<Type, Keys>
//* Pick<Type, Keys>
//* Omit<Type, Keys>
//* Exclude<Type, ExcludedUnion>
//* Extract<Type, Union>
//* NotNullable<Type>
//* Parameters<Type>
//* ConstructorParameters<Type>
//* ReturnType<Type>
//* InstanceType<Type>

//! Partial Type ----> Used to implement partial update
type Course = {
    name: string;
    duration: number;
    educator: string;
}

const createCourse1: Partial<Course> = {
    name: "TypeScript",
}

//! Required Type ----> Used to implement required update
const createCourse2: Required<Course> = {
    name: "TypeScript",
    duration: 10,
    educator: "John Doe"
}

//! Readonly Type ----> Used to implement readonly update
const createCourse3: Readonly<Course> = {
    name: "Javascript",
    duration: 15,
    educator: "Dopamine"
}

//? createCourse3.name = "React" ---> // Error

//! Record Type ----> Used to implement object with key value pair
type User = Record<"name" | "email", string>

//! Pick Type ----> Used to implement object to pick key value pair
type User1 = {
    name: string;
    email: string;
    password: string;
    age: number;
    address: string;
}

const user: Pick<User1, "name" | "email"> = {
    name: "John Doe",
    email: "johndoe@gmail.com"
}

//! Omit Type ----> Used to implement object to omit key value pair
const user1: Omit<User1, "password" | "age"> = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    address: "USA"
}