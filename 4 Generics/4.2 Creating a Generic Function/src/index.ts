const merge = (objA: object, objB: object) => ({ ...objA, ...objB });
const mergeGenerics = <T, U>(objA: T, objB: U) => ({ ...objA, ...objB });

const mergeObject = merge({ name: "Max" }, { age: 30 });
console.log(mergeObject); // { name: 'Max', age: 30 }
// console.log(mergeObject.name); // error TS2339: Property 'name' does not exist on type '{}'.

const mergeGenericsObject = mergeGenerics({ name: "Max" }, { age: 30 });
console.log(mergeGenericsObject); // { name: 'Max', age: 30 }
console.log(mergeGenericsObject.name); // Max
