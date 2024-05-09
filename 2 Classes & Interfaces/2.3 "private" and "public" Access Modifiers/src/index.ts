class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna"; // error TS2341: Property 'employees' is private and only accessible within class 'Department'.

accounting.printEmployeeInfomation();
