/**
 * 关联 interface 类型
 *
 * in / instanceof
 */
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  // 使用 in 来确定 object 是否有某个字段。
  if ("flyingSpeed" in animal) {
    console.log(`Moving with speed: ${animal.flyingSpeed}`);
  }

  // 不能使用 instanceof 来判断 object 是否遵循于某个 interface。
  // if (animal instanceof Bird) { // // error TS2693: 'Bird' only refers to a type, but is being used as a value here.
  // }

  // 使用给 interface 添加属性来判断。
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed: ${speed}`);
};

moveAnimal({ type: "horse", runningSpeed: 10 }); // Moving with speed: 10
