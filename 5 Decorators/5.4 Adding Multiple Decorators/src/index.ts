import { JSDOM } from "jsdom";

const dom = new JSDOM(
  "<!DOCTYPE html><html><body><div id='app'></div></body></html>"
);

const document = dom.window.document;

const Logger = (loggingString: string) => {
  console.log("LOGGER FACTORY");

  return (constructor: Function) => {
    console.log(loggingString);
    console.log(constructor);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  console.log("TEMPLATE FACTORY");

  return (constructor: any) => {
    console.log("Rendering template");
    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
};

/**
 * 装饰器工厂函数执行顺序：
 * 1、装载调用：按“正序”执行
 * 2、工厂函数调用：按“逆序”执行
 */

@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

// LOGGER FACTORY
// TEMPLATE FACTORY
// Rendering template
// Creating person object...
// LOGGING
// [Function: Person]

const FirstDecorator = () => {
  console.log("FirstDecorator factory called");
  return (target: any) => {
    console.log("FirstDecorator applied to", target);
  };
};

const SecondDecorator = () => {
  console.log("SecondDecorator factory called");
  return (target: any) => {
    console.log("SecondDecorator applied to", target);
  };
};

@FirstDecorator()
@SecondDecorator()
class MyClass {}
