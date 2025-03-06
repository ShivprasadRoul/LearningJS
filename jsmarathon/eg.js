let love; // You have a crush but haven't confessed
console.log(love); // undefined (love exists only in your mind)

let confession = null; // You confessed, but they friendzoned you
console.log(confession); // null (love is officially dead)

let a = 10;
let b = a; // Copying the value
b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

let obj1 = { name: "Alice" };
console.log(obj1);

let obj2 = obj1; // Both refer to the same object
obj2.name = "Bob";

console.log(obj1.name); // "Bob" (changed!)
console.log(obj2.name); // "Bob"

if(true){
    var x=10
}
console.log(x);


var globalVar = "I am global"; 

function testScope() {
    var localVar = "I am local"; // Function-scoped
    console.log(globalVar); // Accessible inside function
    console.log(localVar); // Accessible inside function
}

testScope();
console.log(globalVar); // Accessible outside function
//console.log(localVar); // Error: localVar is not defined (limited to function)

if (true) {
    let blockScoped = "I am block-scoped";
}
//console.log(blockScoped); // ❌ Error: blockScoped is not defined

let person1 = {
    personsName: "ravi",
    greet: function () {
        console.log(`Hello, ${personsName}`);
    }
};

person1.greet();  