let hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 4;
  }

  print = () => {
    console.log(this.storage);
  };

  add = (key, value) => {
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };

  remove = (key) => {
    let index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };

  lookup = (key) => {
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };
}

console.log(hash("Ben", 10));
console.log("-----------------");
let ht = new HashTable();
ht.add("Ben", "person");
ht.add("buk", "dog");
ht.add("snow", "goose");
ht.add("kabu", "school");
console.log(ht.lookup("buk"));
console.log("-----------------");
ht.print();
