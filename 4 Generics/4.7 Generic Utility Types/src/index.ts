interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

/**
 * Partial<T> 是 TypeScript 中的一个内置类型工具，它用于将类型 T 中的所有属性转换为可选属性。
 * 换句话说，Partial<T> 将一个类型的所有属性从必需属性变为可选属性，使得在定义对象时可以只指定部分属性而不必指定全部属性。
 */
const createCourseGoal = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
};

/**
 * 
Readonly<T> 是 TypeScript 中的一个内置类型工具，它用于将类型 T 中的所有属性转换为只读属性。
换句话说，Readonly<T> 将一个类型的所有属性从可写属性变为只读属性，使得在使用对象时无法修改其属性的值。
 */
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); // error TS2339: Property 'push' does not exist on type 'readonly string[]'.
// names.pop(); // error TS2339: Property 'pop' does not exist on type 'readonly string[]'.
console.log(names); // [ 'Max', 'Anna' ]
