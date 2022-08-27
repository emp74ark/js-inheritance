/* ES5 */
/* to */
/* ES6 */

class Builder {
  constructor(data){
    this.data = data
  }
  _isNumber() {
    return typeof this.data === 'number'
  }
  get() {
    return console.log(this.data)
  }
  plus(...n){
    [...n].forEach((el)=>{
      this.data += el
    })
    return this
  }
  minus(...n){
    this.data = this._isNumber()
      ? this.data - [...n].reduce((a, b) => a + b)
      : this.data.slice(0, this.data.length - n);
    return this;
  }
  multiply(n){
    this.data = this._isNumber() 
      ? this.data * n 
      : this.data.repeat(n);
    return this;
  }
  divide(n){
    this.data = this._isNumber()
      ? this.data /= n
      : this.data.slice(0, Math.floor(this.data.length / n));
    return this;
  }
}

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

function StringBuilder(data) {
  this.data = data;
}

StringBuilder.prototype = Object.create(Builder.prototype)
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.remove = function(str){
  this.data = this.data.split('').filter((w) => w !== str).join('');
  return this;
}
StringBuilder.prototype.sub = function(from, n) {
  this.data = this.data.slice(from, n);
  return this;
}

let strBuilder = new StringBuilder('Hello')
strBuilder.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(0,1).get()