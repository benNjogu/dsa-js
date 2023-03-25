function MyQueue() {
  let collection = [];

  //printing elements in the queue
  this.print = function () {
    console.log(collection);
  };

  //adding elements in the queue
  this.enqueue = function (element) {
    collection.push(element);
  };

  //removing an element from the queue
  this.dequeue = function () {
    return collection.shift(); //removes the first item of an array and returns it
  };

  //returns the first item
  this.front = function () {
    if (this.isEmpty()) return "No Items!";

    return collection[0];
  };

  //returns the size of the queue
  this.size = function () {
    return collection.length;
  };

  //checks empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let q = new MyQueue();
q.enqueue("ben");
q.enqueue("jeff");
q.enqueue("eve");
q.enqueue("ivy");
q.enqueue("mike");

q.print();
console.log("--------------------------");

q.dequeue();
q.print();
console.log("--------------------------");

console.log(q.front());
console.log("--------------------------");

console.log(q.size());
console.log("--------------------------");

console.log(q.isEmpty());
console.log("--------------------------");
