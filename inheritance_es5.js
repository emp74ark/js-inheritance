function Builder() {
}

Builder.prototype.log = function(){
  console.log(this.inner)
}

Builder.prototype.get = function(){
  return this.log()
}

function IntBuilder(data) {
  Builder.call(this)
  this.data = data
  this.inner = this.data
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.prototype.plus = function(...n){
  for (let i of n){
    this.inner += i;
  }
  this.log();
  return this;
}

IntBuilder.prototype.minus = function(...n) {
  for (let i of n){
    this.inner -= i;
  }
  this.log();
  return this;
}

IntBuilder.prototype.multiply = function(n) {
  this.inner *= n;
  this.log();
  return this
}

IntBuilder.prototype.divide = function(n) {
  this.inner = this.inner / n;
  this.log();
  return this;
}

IntBuilder.prototype.mod = function(n) {
  this.inner = this.inner % n;
  this.log();
  return this;
}

IntBuilder.random = function(from, to){ // static method
  return Math.floor(Math.random() * (to - from) + from);
}

let intBuilder = new IntBuilder(10)
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
console.log(IntBuilder.random(3,5))

function StringBuilder(data) {
  Builder.call(this);
  this.data = data;
  this.inner = this.data;
}

StringBuilder.prototype = Object.create(Builder.prototype)

StringBuilder.prototype.plus = function(...n) {
  for (let i of n){
    this.inner += i
  }
  this.log();
  return this
}
StringBuilder.prototype.minus = function(n) {
  this.inner = this.inner.slice(0, this.inner.length - n)
  this.log();
  return this;
}
StringBuilder.prototype.multiply = function(n) {
  this.inner = this.inner.repeat(n)
  this.log();
  return this;
}
StringBuilder.prototype.divide = function(n){
  let k = Math.floor(this.inner.length / n);
  this.inner = this.inner.slice(0, k);
  this.log()
  return this;
}
StringBuilder.prototype.remove = function(str){
  this.inner = this.inner.split('').filter((w) => w !== str).join('')
  this.log();
  return this;
}
StringBuilder.prototype.sub = function(from, n) {
  this.inner = this.inner.slice(from, n)
  this.log();
  return this;
}

let strBuilder = new StringBuilder('Hello`')
strBuilder.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(0,1).get()