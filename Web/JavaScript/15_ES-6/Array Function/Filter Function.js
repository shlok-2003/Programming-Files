//? The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given 
//? array that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
//? Expected output: Array ["exuberant", "destruction", "present"]

//? It can be used to filter objects
let team = [
    {
        name: "Shlok",
        position: "Developer",
    },
    {
        name: "Rohit",
        position: "IOT",
    },
    {
        name: "Ayush",
        position: "Gareeb",
    },
    {
        name: "Prasad",
        position: "Dallaal",
    },
    {
        name: "Vivek",
        position: "Nalla",
    }, 
    {
        name: "Prabhat",
        position: "Developer"
    }   
]

let developer = team.filter((person) => person.position == "Developer")
console.log(developer)