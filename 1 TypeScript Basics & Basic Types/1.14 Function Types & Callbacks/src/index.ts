const add = (n1: number, n2: number) => n1 + n2;

const printResult = (num: number) => console.log(`Result: ${num}`);

const addAndHandle = (
  n1: number,
  n2: number,
  callback: (num: number) => void
) => callback(n1 + n2);

addAndHandle(8, 8, printResult); // Result: 16

addAndHandle(3, 5, (number) => console.log(number)); // 8

/**
 * 函数做参数时：callback 返回值是 void ，内部返回什么类型都可以。(但是不建议这么做)
 *
 * 函数声明定义时则不行。
 */
addAndHandle(8, 10, (number) => {
  console.log(number);
  return true;
}); // 18

const func = (): void => {
  console.log("func call");
  // return true; // error TS2322: Type 'boolean' is not assignable to type 'void'.
};
