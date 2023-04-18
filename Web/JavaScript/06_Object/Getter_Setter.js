let person = {
    'Name': 'shlok',
    set setName(Name) {
        this.Name = Name.toUpperCase();
    }, 

    get getName() {
        return this.Name.toUpperCase();
    }
}

person.setName = 'prasad';
console.log(person.getName);