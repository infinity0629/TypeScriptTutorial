interface Lengthy {
  length: number;
}

// 返回的是 tuple
const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
};

console.log(countAndDescribe("Hi there!")); // [ 'Hi there!', 'Got 9 elements.' ]
console.log(countAndDescribe(["Sports", "Cooking"])); // [ [ 'Sports', 'Cooking' ], 'Got 2 elements.' ]
