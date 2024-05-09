class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2"; // error TS2540: Cannot assign to 'id' because it is a read-only property.
    this.employees.push(employee);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInfomation();
// 2
// [ 'Max', 'Manu' ]

accounting.describe(); // Department d1: Accounting
