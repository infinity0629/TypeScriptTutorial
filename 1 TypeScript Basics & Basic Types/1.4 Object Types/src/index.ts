// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };

const person = {
  name: "Maximilian",
  age: 30,
};

console.log(person); // { name: 'Maximilian', age: 30 }

// console.log(person.nickname); // error TS2339: Property 'nickname' does not exist on type '{ name: string; age: number; }'.
// console.log(person["nickname"]); // error TS7053: Element implicitly has an 'any' type because expression of type '"nickname"' can't be used to index type '{ name: string; age: number; }'.
