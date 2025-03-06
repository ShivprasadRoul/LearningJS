console.log(person.greet.call(person)); // undefined (hoisted but not initialized)
var person = {
  name: "John",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

var greetFunc = person.greet.bind(person); // Bind 'person' to 'greetFunc'
greetFunc(); // "Hello, my name is John"
