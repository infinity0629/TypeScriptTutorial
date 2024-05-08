const add = (n1: number, n2: number) => n1 + n2;

const printResult = (num: number) => console.log(`Result: ${num}`);

/**
 * Function 类型
 */
let combineValues1: Function;

combineValues1 = add;
console.log(combineValues1(8, 8)); // 16

// combineValues1 = 5; // error TS2322: Type 'number' is not assignable to type 'Function'.

combineValues1 = printResult;
console.log(combineValues1(8, 8));
// Result: 8
// undefined

/**
 * 自定义类型（推荐使用）
 */
let combineValues2: (a: number, b: number) => number;

combineValues2 = add;
console.log(combineValues2(8, 8)); // 16

// combineValues2 = printResult; // error TS2322: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
