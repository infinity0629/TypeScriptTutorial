// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }
// console.log(Role.ADMIN, Role.READ_ONLY); // 0 1

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }
// console.log(Role.ADMIN, Role.READ_ONLY); // 5 6

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
}
console.log(Role.ADMIN, Role.READ_ONLY, Role.AUTHOR); // ADMIN 100 101

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
