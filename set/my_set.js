function MySet() {
  //an array to hold the set
  let collection = [];

  //check for presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  //return all the values in the set
  this.values = function () {
    return collection;
  };

  //add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }

    return false;
  };

  //remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }

    return false;
  };

  //return the size of the collection
  this.size = function () {
    return collection.length;
  };

  //return the union of two sets
  this.union = function (otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  //return the intersection of two sets
  this.intersection = function (otherSet) {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  };

  //return the difference of two sets as a new set
  this.difference = function (otherSet) {
    let differenceSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  };

  //test if a set is a subset of onother set
  this.subset = function (otherSet) {
    let firstSet = this.values();

    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

let setA = new MySet();
let setB = new MySet();

setA.add("a");
setB.add("c");
setB.add("b");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log("-----------------");
console.log(setB.has("f"));
console.log("-----------------");
console.log(setB.values());
console.log("-----------------");
console.log(setA.add("g"));
console.log("-----------------");
console.log(setA.size());
console.log("-----------------");
console.log(setB.remove("b"));
console.log(setB.values());
console.log("-----------------");
console.log(setA.values());
console.log(setB.values());
const union = setA.union(setB);
console.log(union.values());
console.log("-----------------");
console.log(setA.values());
console.log(setB.values());
const inter = setA.intersection(setB);
console.log(inter.values());
console.log("-----------------");
console.log(setA.values());
console.log(setB.values());
const diff = setB.difference(setA);
console.log(diff.values());
