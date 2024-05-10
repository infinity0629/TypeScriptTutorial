const mergeGenerics = <T, U>(objA: T, objB: U) => ({ ...objA, ...objB });

const mergeGenericsObject1 = mergeGenerics({ name: "Max" }, { age: 30 });
console.log(mergeGenericsObject1); // { name: 'Max', age: 30 }
console.log(mergeGenericsObject1.name); // Max

const mergeGenericsObject2 = mergeGenerics({ name: "Max" }, 30);
console.log(mergeGenericsObject2); // { name: 'Max' }

/**
 * 添加约束
 */
const mergeGenericsConstraints = <T extends object, U extends object>(
  objA: T,
  objB: U
) => ({ ...objA, ...objB });

// const mergeGenericsObject3 = mergeGenericsConstraints({ name: "Max" }, 30); // error TS2345: Argument of type 'number' is not assignable to parameter of type 'object'.
