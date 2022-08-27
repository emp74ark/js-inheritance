import { Builder } from './Builder.js'

console.log('IntBuilder in ES6 style')

class IntBuilder extends Builder {
  mod(n) {
    this.data %= n;
    return this;
  }
  static random(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
  }
}

let intBuilder = new IntBuilder(10)
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
console.log(IntBuilder.random(3,5))