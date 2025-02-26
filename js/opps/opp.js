let car={
    make:"toyota",
    model:"corolla",
    year:2020,
    start: function(){
        return `${this.make} ${this.model} car got started in ${this.year}`
    },
}

// console.log(car.start());
function Person(name,age){
    this.name=name,
    this.age=age
}
let john=new Person("Shiv",21)
//console.log(john.name);
function Animal(type){
    this.type=type
}
Animal.prototype.speak=function(){
    return `${this.type}make a sound` //here i am selecting a class"here we choose animal then select prototype with .prototype and add a method speak
}

//custom method in array object 
Array.prototype.Shiv=function(){
    return `custom method of ${this}`
}

let newarr=[1,2,3,4]
//console.log(newarr.Shiv());

//jow class are made in js 

class Vehi {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    start(){
        return `${this.name} and make is ${this.age}`
    }
}

class Car extends Vehi{
    drive(){
        return `${this.name} is driving// a inheritance example `
    }
}

let mycar = new Car("toyota","corvet")
// console.log(mycar.drive());

// let veh1 =Vehi("ford",22)
// console.log(veh1.age); Class constructor Vehi cannot be invoked without 'new'

//encaptulation 
class BankAccount {
    #balance=0;
    deposit(amount){
        this.#balance+=amount
        return this.#balance
    }

    getBalance(){
        return `${this.#balance}`
    }
}

let account=new BankAccount()
// console.log(account.#balance); SyntaxError: Private field '#balance' must be declared in an enclosing class
// console.log(account.getBalance());

//Abstraction 
class CoffeMachine{
    start(){
        //function 
        return "Coffee making"
    }
    brewCoffee(){
        //again all things geting done
        return "Coffee is ready"
    }
    pressbutton(){
        let m1=this.start()
        let m2=this.brewCoffee()
        return `${m1} ${m2}`
    }
}

let mumac=new CoffeMachine()
console.log(mumac.pressbutton());


//Polymorphhism 
class Animal2 {
    speak() {
        console.log("Animal speaking");
        }
}
class Dog extends Animal2 {
    speak() {
        console.log("Woof!");
        }
}
let animal=new Animal2()
let dog=new Dog()
// console.log(animal.speak());
// console.log(dog.speak());

//Static Method 
class BankAccount2 {
    static getBankName() {
        return "Bank of America";
        }
    }
    // let account2=new BankAccount2();
    // console.log(account2.getBankName());
//here you will gwt error as you cant access static member of function outside class 

//getter and setters
class Person2 {
    constructor(name,age) {
        this._name=name;
        this._age=age;
    }
    get name(){
        return this._name
    }
    set name(value){
        if(value.length<3){
            throw new Error("Name should be at least 3 characters long");
        }
        this._name=value
        }
    get age(){
        return this._age
    }
    set age(value){
        if(value<0){
            throw new Error("Age should be a positive number");
        }
    this._age=value
    }
}
let person=new Person2("John",30)
console.log(person.name);
console.log(person.age);

