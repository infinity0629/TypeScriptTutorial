interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user: Greetable;

user = new Person("Max");

user.greet("Hi there - I am"); // Hi there - I am Max

// user.name = "Sam"; // error TS2540: Cannot assign to 'name' because it is a read-only property.
