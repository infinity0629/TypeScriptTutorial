class Department {
  protected employees: string[] = [];

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
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  override addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(report: string) {
    if (!report) {
      throw new Error("Please pass in a valid report!");
    }
    this.addReport(report);
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
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInfomation();
// 1
// [ 'Manu' ]
console.log(accounting.mostRecentReport); // Something went wrong...
accounting.mostRecentReport = "Year End Report";
accounting.printReports(); // [ 'Something went wrong...', 'Year End Report' ]
