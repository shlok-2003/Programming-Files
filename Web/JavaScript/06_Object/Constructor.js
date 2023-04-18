//? Creation of a constructor function

function Student(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
}

let student1 = new Student("Shlok", "Prajapati", 19);

console.log(student1, '\n');

//? If we want to add parameter to the Student, we can do
student1.Nationality = "Indian";    //! But this only creates the parameter for the current object

//! If we want to change the Student constructor, then
//* Student.prototype.__parameter__ = value

Student.prototype.Nationality = "Indian";       //? All the object inherit the prototype object. hence we can make changes through it
console.log(student1);