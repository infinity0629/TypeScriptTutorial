/**
 * 返回值类型声明
 */
// const add = (n1: number, n2: number): number => n1 + n2;
// const printResult = (num: number): void => console.log(`Result: ${num}`);

/**
 * 返回类型为 undefined
 */
// const printResult = (num: number): undefined => console.log(`Result: ${num}`); // error TS2322: Type 'void' is not assignable to type 'undefined'.

// 需要 return;
// const printResult = (num: number): undefined => {
//   console.log(`Result: ${num}`);
//   return;
// };

// void 返回类型，也需要 return;
// const printResult = (num: number): void => {
//   console.log(`Result: ${num}`);
//   return;
// };

/**
 * 返回值类型推导
 */
const add = (n1: number, n2: number) => n1 + n2;
const printResult = (num: number) => console.log(`Result: ${num}`);

printResult(add(5, 12)); // Result: 17
