//* Basic creation of classes in Javascript 
//* class Player {
//*     height;
//*     weight;
//* 
//*     constructor(height, weight) {
//*         this.height = height;
//*         this.weight = weight;
//*     }
//* }
//* 
//* const Abhi = new Player(100, 150);

//! Use Basic of Typescript
class Player {
    private height: number;
    private weight: number;
    private power: number;

    constructor(height: number, weight: number, power: number) {
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
}

class Pro extends Player {
    private specialAbility: boolean;

    constructor(height: number, weight: number, power: number, specialAbility: boolean) {
        super(height, weight, power);
        this.specialAbility = specialAbility;
    }

    get Ability() {
        return this.specialAbility;
    }

    set Ability(specialAbility: boolean) {
        this.specialAbility = specialAbility;
    }
}

//! Use of interface in classes ---> to add interface in classes, we need to use `implements` keyword
interface ProductType {
    name : string;
    price : number;
    stocks : number;
    id : string;
    offer ?: boolean;
}

class Product implements ProductType {
    public id : string = String(Math.random() * 1000);

    constructor(public name: string, public price: number, public stocks: number) { }
}


