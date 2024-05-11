class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  get items() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.items); // [ 'Manu' ]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(3);
numberStorage.addItem(13);
console.log(numberStorage.items); // [ 3, 13 ]

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "Max" });
objectStorage.addItem({ name: "Manu" });
objectStorage.removeItem({ name: "Max" });
console.log(objectStorage.items); //[ { name: 'Max' } ]
