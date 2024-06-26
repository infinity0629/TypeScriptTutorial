class Department {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
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
