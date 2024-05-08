/**
 * 抛异常的函数返回 never 类型
 */
const generateError = (message: string, code: number) => {
  throw { message, code };
};
const result = generateError("An error occurred!", 500); // { message: 'An error occurred!', code: 500 }
console.log(result); // result 没有输出

/**
 * 死循环的函数返回 never 类型
 */
const runloop = () => {
  while (true) {}
};
