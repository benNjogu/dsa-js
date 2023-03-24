//creates a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  //add a value on to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //remove and return the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //returns the number of items in the stack
  this.size = function () {
    return this.count;
  };

  //returns the item at the top of a stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(7);
stack.push(11);

console.log("size " + stack.size());
console.log("peek " + stack.peek());
console.log("--------------");

stack.push(8);

console.log("size " + stack.size());
console.log("peek " + stack.peek());
console.log("--------------");

stack.pop();

console.log("size " + stack.size());
console.log("peek " + stack.peek());
console.log("--------------");

/**
 * @output
size 4
peek 11       
--------------
size 5        
peek 8        
--------------
size 4        
peek 11       
--------------
 */
