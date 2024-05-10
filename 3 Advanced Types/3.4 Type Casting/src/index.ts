import { JSDOM } from "jsdom";

const dom = new JSDOM(`
<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="user-input">
  </body>
</html>
`);

const document = dom.window.document;

// const userInputElement = document.getElementById("user-input");

// error TS18047: 'userInputElement' is possibly 'null'.
// error TS2339: Property 'value' does not exist on type 'HTMLElement'.
// userInputElement.value = "Hi there!";

/**
 * 使用 ! 确保 userInputElement 不为 null
 * 使用 as 转换类型为
 */
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!";
