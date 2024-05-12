import { JSDOM } from "jsdom";

const dom = new JSDOM(
  "<!DOCTYPE html><html><body><div id='app'></div></body></html>"
);

const document = dom.window.document;

const WithTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    const hookElement = document.getElementById(hookId);
    const p = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
};

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

console.log(dom.serialize());
// Creating person object...
// <!DOCTYPE html><html><head></head><body><div id="app"><h1>Max</h1></div></body></html>
