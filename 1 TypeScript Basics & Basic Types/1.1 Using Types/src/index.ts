// error TS7006: Parameter 'n1' implicitly has an 'any' type.
// error TS7006: Parameter 'n2' implicitly has an 'any' type.
// const add = (n1, n2) => {
//   return n1 + n2;
// };

const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result); // 7.8

// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(add("5", 2.8));
