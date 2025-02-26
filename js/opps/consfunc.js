function Person(name,age){
    this.name=name;
    this.age=age;
}

function Car(make,model){
    this.make=make;
    this.model=model;
}

let myCar = new Car("Ford", "Aspire")
// console.log(myCar);

let myNewCar =new Car("Tata","Safari")
// console.log(myNewCar);

function Tea(type){
    this.type=type;
    // but what if we need to add function in the class 
    this.describe= function(){
        return `this is a cup of a tea funtion calling ${this.type}`
    }
}

let taj = new Tea("taj tea")
//console.log(taj, `calling function: ${taj.describe()}`);

function Animal(species){
    this.species = species;
}
//now here i am decraling the sound function outside the class
Animal.prototype.sound = function(){
    return `the animal is making a sound ${this.species} is making a sound`
}

let dog=new Animal("dog")
//console.log(dog.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name=name;
}
let tea= new Drink("tea")
let coffee= Drink("coffee")

