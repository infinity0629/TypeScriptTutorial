const Logger = (constructor: Function) => {
  console.log("Logging...");
  console.log(constructor);
};

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);

// Logging...
// [Function: Person]
// Creating person object...
// Person { name: 'Max' }
