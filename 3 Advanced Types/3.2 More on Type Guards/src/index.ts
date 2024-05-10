/**
 * 关联“基础类型”
 *
 * typeof
 */
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

/**
 * 关联其他 type 自定义类型
 *
 * in
 */
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const printEmployeeInfomation = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);

  // 使用 in 来确定 object 是否有某个字段。
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }

  if ("startDate" in emp) {
    console.log(`Privileges: ${emp.startDate}`);
  }
};

const employee: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

printEmployeeInfomation(employee);
// Name: Max
// Privileges: create-server
// Privileges: Fri May 10 2024 09:28:26 GMT+0800 (China Standard Time)

printEmployeeInfomation({ name: "Manu", startDate: new Date() });
// Name: Manu
// Privileges: Fri May 10 2024 09:29:26 GMT+0800 (China Standard Time)

/**
 * 关联 class 类型
 *
 * in / instanceof
 */
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ...${amount}`);
  }
}
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const userVehicle = (vehicle: Vehicle) => {
  vehicle.drive();

  // 使用 in 来确定 object 是否有某个字段。
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }

  // 还可以使用 instanceof 来判断 object 是否初始化于某个 class。
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

userVehicle(v1); // Driving...
userVehicle(v2);
// Driving...
// Loading cargo ...1000
// Loading cargo ...1000
