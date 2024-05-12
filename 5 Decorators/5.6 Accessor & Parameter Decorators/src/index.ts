const LogAccessor = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {
  console.log("Accessor decorator!");
  console.log(target, name, descriptor);
};

const LogMethod = (
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) => {
  console.log("Method decorator!");
  console.log(target, name, descriptor);
};

const LogParameter = (target: any, name: string | Symbol, position: number) => {
  console.log("Parameter decorator!");
  console.log(target, name, position);
};

class Product {
  public title;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @LogMethod
  priceWithTax(@LogParameter tax: number) {
    return this._price * (1 + tax);
  }

  @LogAccessor
  set price(price: number) {
    if (this._price <= 0) {
      throw new Error("Invalid price");
    }
    this._price = price;
  }
}

// Parameter decorator!
// { priceWithTax: [Function (anonymous)] } priceWithTax 0
// Method decorator!
// { priceWithTax: [Function (anonymous)] } priceWithTax {
//   value: [Function (anonymous)],
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// Accessor decorator!
// { priceWithTax: [Function (anonymous)] } price {
//   get: undefined,
//   set: [Function: set],
//   enumerable: false,
//   configurable: true
// }
