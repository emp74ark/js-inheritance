function Builder(data) {
  this.data = data;
}

Builder.prototype.get = function(){
  return console.log(this.data)
}

Builder.prototype._isNumber = function(){
  return typeof this.data === 'number'
}

Builder.prototype.plus = function(...n){
  [...n].forEach((el)=>{
    this.data += el
  })
  return this
}

Builder.prototype.minus = function(...n){
  this.data = this._isNumber()
      ? this.data - [...n].reduce((a, b) => a + b)
      : this.data.slice(0, this.data.length - n);
    return this;
}

Builder.prototype.multiply = function(n){
  this.data = this._isNumber() 
      ? this.data * n 
      : this.data.repeat(n);
    return this;
}

Builder.prototype.divide = function(n){
  this.data = this._isNumber()
      ? this.data /= n
      : this.data.slice(0, Math.floor(this.data.length / n));
    return this;
}

function IntBuilder(data) {
  Builder.call(this, data)
}

IntBuilder.prototype = Object.create(Builder.prototype);

IntBuilder.prototype.mod = function(n) {
  this.data %= n;
  return this;
}

IntBuilder.random = function(from, to){ // static method
  return Math.floor(Math.random() * (to - from) + from);
}

let intBuilder = new IntBuilder(10)
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
console.log(IntBuilder.random(3,5))

function StringBuilder(data) {
  Builder.call(this, data);
}

StringBuilder.prototype = Object.create(Builder.prototype)

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