interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: Person;

user = {
  name: "Max",
  age: 30,
  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};

user.greet("Hi there - I am"); // Hi there - I am Max
