let add: (a: number, b: number) => number;
add = (n1: number, n2: number) => n1 + n2;
console.log(add(3, 10)); // 13

interface AddFn {
  (a: number, b: number): number;
}
let addFn: AddFn;
addFn = (n1: number, n2: number) => n1 + n2;
console.log(addFn(8, 10)); // 18
