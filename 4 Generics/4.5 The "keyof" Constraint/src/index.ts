const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => `Value: ${obj[key]}`;

// console.log(extractAndConvert({}, "name")); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'never'.

console.log(extractAndConvert({ name: "Max" }, "name")); // Value: Max
