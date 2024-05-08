let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

/**
 * 与 any 一样的地方：可以赋值为多总类型
 * 与 any 不一样的地方：使用前需要先类型检查
 */
// userName = userInput; // error TS2322: Type 'unknown' is not assignable to type 'string'.
if (typeof userInput === "string") {
  userName = userInput;
}
