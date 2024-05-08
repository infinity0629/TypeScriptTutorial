const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};
console.log(person); // { name: 'Maximilian', age: 30, hobbies: [ 'Sports', 'Cooking' ] }

let favoriteActivities: string[];
// favoriteActivities = "Sports"; // error TS2322: Type 'string' is not assignable to type 'string[]'.
// favoriteActivities = ["Sports", 1]; // error TS2322: Type 'number' is not assignable to type 'string'.
favoriteActivities = ["Sports"];
console.log(favoriteActivities); // [ 'Sports' ]

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
// SPORTS
// COOKING
