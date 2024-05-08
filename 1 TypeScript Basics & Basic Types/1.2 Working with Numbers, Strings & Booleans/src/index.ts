const add = (n1: number, n2: number, showReslut: boolean, phrase: string) => {
  if (showReslut) {
    console.log(`${phrase}${n1 + n2}`);
  } else {
    return n1 + n2;
  }
};

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase); // Result is: 7.8
