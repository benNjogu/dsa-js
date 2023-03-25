function PriorityQueue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    let value = collection.shift();
    return value[0];
  };

  this.front = function () {
    if (this.isEmpty()) {
      return "No Items!";
    }

    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let q = new PriorityQueue();
q.enqueue(["jane", 0]);
q.enqueue(["ben", 2]);
q.enqueue(["alice", 1]);
q.enqueue(["joe", 4]);
q.enqueue(["len", 3]);
q.enqueue(["liz", 1]);

q.print();
console.log("----------------");

q.dequeue();
q.print();
console.log("----------------");

console.log(q.front());
console.log("----------------");

console.log(q.size());
console.log("----------------");

console.log(q.isEmpty());
console.log("----------------");
