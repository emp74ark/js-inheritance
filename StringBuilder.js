import { Builder } from './Builder.js'

console.log('StringBuilder in ES5 style')

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