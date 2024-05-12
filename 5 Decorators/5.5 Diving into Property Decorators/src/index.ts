const Log = (target: any, propertyName: string | Symbol) => {
  console.log("Property decorator!");
  console.log(target, propertyName);
};

class Product {
  @Log
  public title;

  @Log
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  priceWithTax(tax: number) {
    return this._price * (1 + tax);
  }

  set price(price: number) {
    if (this._price <= 0) {
      throw new Error("Invalid price");
    }
    this._price = price;
  }
}

// Property decorator!
// { priceWithTax: [Function (anonymous)] } title
// Property decorator!
// { priceWithTax: [Function (anonymous)] } _price
