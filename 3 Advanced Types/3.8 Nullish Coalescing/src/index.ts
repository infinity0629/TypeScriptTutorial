/**
 * || 空字符串不返回 true
 * ?? 空字符串返回 true
 */

// const userInput = "";
// const userInput = undefined;
const userInput = null;
const storeData = userInput || "DEFAULT";
console.log(storeData); // DEFAULT

// const userInputAnother = undefined;
const userInputAnother = null;
const storeDataAnother = userInputAnother ?? "DEFAULT";
console.log(storeDataAnother); // DEFAULT
