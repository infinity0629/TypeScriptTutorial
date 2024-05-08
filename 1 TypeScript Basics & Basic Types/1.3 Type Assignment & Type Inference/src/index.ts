const add = (n1: number, n2: number, showReslut: boolean, phrase: string) => {
  if (showReslut) {
    console.log(`${phrase}${n1 + n2}`);
  } else {
    return n1 + n2;
  }
};

/**
 * 只有在 let 关键字下，才会类型推导为 number 类型。(let number1: number)
 *
 * const 关键字，会推导为 literal（字面量）类型。（const number2: 2.8）
 */

// let number1: number = 5;

let number1 = 5;
// number1 = "5"; // error TS2322: Type 'string' is not assignable to type 'number'.

const number2 = 2.8;

const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase); // Result is: 7.8
