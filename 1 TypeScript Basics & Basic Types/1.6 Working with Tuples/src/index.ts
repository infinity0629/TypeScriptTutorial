/**
 * 使用 tuple 时，如果不主动声明类型，在类型推导下会默认推导为数组。
 */
const person1 = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], // 类型推导为 (string | number)[] 类型
};

person1.role.push("admin");
person1.role[1] = 10;
console.log(person1);
// {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: [ 'Sports', 'Cooking' ],
//   role: [ 2, 10, 'admin' ]
// }

person1.role = [0, "admin", "user"];
console.log(person1);
// {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: [ 'Sports', 'Cooking' ],
//   role: [ 0, 'admin', 'user' ]
// }

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple 类型声明
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person2.role.push("admin");
// person2.role[1] = 10; // error TS2322: Type 'number' is not assignable to type 'string'.
person2.role[0] = 10;
console.log(person2);
// {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: [ 'Sports', 'Cooking' ],
//   role: [ 10, 'author', 'admin' ]
// }

// person2.role = [0, 1, 2]; // error TS2322: Type 'number' is not assignable to type 'string'.
// person2.role = [0, "admin", "user"]; // error TS2322: Type '[number, string, string]' is not assignable to type '[number, string]'.
person2.role = [0, "admin"];
console.log(person2);
// {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: [ 'Sports', 'Cooking' ],
//   role: [ 0, 'admin' ]
// }

/**
 * 直接使用 tuple 类型可以直接修改，但是违背了设计初衷（tuple 类型是无法修改的）。
 *
 * 可以使用 readonly 关键字来实现无法改变。
 */
const person3: {
  name: string;
  age: number;
  hobbies: string[];
  readonly role: readonly [number, string]; // tuple 类型声明
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person3.role.push("admin"); // error TS2339: Property 'push' does not exist on type 'readonly [number, string]'.
// person3.role[0] = 10; // error TS2540: Cannot assign to '0' because it is a read-only property.
// person3.role = [0, "admin"]; // error TS2540: Cannot assign to 'role' because it is a read-only property.
console.log(person3);
// {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: [ 'Sports', 'Cooking' ],
//   role: [ 0, 'admin' ]
// }

const tuple: readonly [number, boolean] = [3, true];
// tuple.push("hi"); // error TS2339: Property 'push' does not exist on type 'readonly [number, boolean]'.
// tuple = [4, false]; // error TS2588: Cannot assign to 'tuple' because it is a constant.
console.log(tuple); // [ 3, true ]
