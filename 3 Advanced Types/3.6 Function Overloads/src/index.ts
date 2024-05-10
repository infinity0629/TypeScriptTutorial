type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

/**
 * 方法重载只能使用在“方定义上”，不能使用在箭头函数，或者变量声明匿名函数上。
 *
 * 方法重载，可以简化调用后的逻辑判断。
 */

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Schwarz");
result.split(" ");
