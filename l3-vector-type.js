class Vec {
  // create and initiale an object within the class
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }

  plus(vector) {
    this.y += vector.y;
    this.x += vector.x;
    return this;
  }

  minus(vector) {
    this.y -= vector.y;
    this.x -= vector.x;
    return this;
  }

  // The getter/setter syntax exists for properties that must be calculated based on other properties, like the area property from a circle of a given radius:
  get length() {
    //The Math.hypot() function returns the square root of the sum of squares of its arguments
    return Math.hypot(this.y, this.x);
  }
}

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5
