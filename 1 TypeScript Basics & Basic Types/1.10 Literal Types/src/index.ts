const combine = (
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) => {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
};

const combineAges = combine(30, 26, "as-number");
console.log(combineAges); // 56

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges); // 3026

const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames); // MaxAnna
