#!/usr/bin/node
const square = require('./5-square');

class Square extends square {
  constructor(size) {
    // Call the constructor of the Rectangle class using super()
    super(size);
  }
  charPrint(c) {
    if (c) {
      this.print(c, c);
    }
  }
}

module.exports = Square;
