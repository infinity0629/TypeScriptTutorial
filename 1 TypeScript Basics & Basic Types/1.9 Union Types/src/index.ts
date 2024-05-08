const combine = (input1: number | string, input2: number | string) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

const combineAges = combine(30, 26);
console.log(combineAges); // 56

const combineNames = combine("Max", "Anna");
console.log(combineNames); // MaxAnna
