/**
 * 将装饰器设计成工厂函数的好处在于增强了其灵活性和可配置性。具体来说，设计成工厂函数有以下好处：
 *
 * 1、参数化配置： 工厂函数可以接受参数，根据不同的参数生成不同的装饰器。这样可以根据需要配置装饰器的行为，使其具有更大的灵活性和可配置性。
 * 2、动态生成装饰器： 工厂函数可以根据运行时的条件动态生成装饰器，使得装饰器的行为可以根据环境的不同而变化。
 * 3、代码复用： 工厂函数可以将公共逻辑抽象成一个函数，然后在不同的场景下重复使用。这样可以减少重复的代码，提高代码的可维护性和可读性。
 * 4、封装细节： 工厂函数可以将装饰器的实现细节封装起来，暴露给外部的是一个简单的接口。这样可以隐藏装饰器的内部实现，使其更加易用和易理解。
 *
 * 总之，将装饰器设计成工厂函数可以提高其灵活性、可配置性和可复用性，使其更加适用于不同的场景和需求。
 */

const Logger = (loggingString: string) => {
  return (constructor: Function) => {
    console.log(loggingString);
    console.log(constructor);
  };
};

@Logger("LOGGING - PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);

// LOGGING - PERSON
// [Function: Person]
// Creating person object...
// Person { name: 'Max' }
