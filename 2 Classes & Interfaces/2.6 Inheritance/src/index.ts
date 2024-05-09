class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

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

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.printEmployeeInfomation();
// 2
// [ 'Max', 'Manu' ]
it.describe(); // Department d1: IT
console.log(it);
// ITDepartment {
//   id: 'd1',
//   name: 'IT',
//   employees: [ 'Max', 'Manu' ],
//   admins: [ 'Max' ]
// }

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");
accounting.printReports(); // [ 'Something went wrong...' ]
