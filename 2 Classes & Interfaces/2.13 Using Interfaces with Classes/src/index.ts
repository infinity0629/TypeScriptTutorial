interface Greetable {
  name: string;

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
