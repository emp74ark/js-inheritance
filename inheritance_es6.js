class Builder {
  constructor(data){
    this.data = data;
  }
  log() {
    console.log(this.inner)
  }
  get() {
    this.log()
  }
} 

class IntBuilder extends Builder {
  inner = this.data;
  plus(...n) {
    for (let i of n){
      this.inner += i;
    }
    this.log();
    return this;
  }
  minus(...n) {
    for (let i of n){
      this.inner -= i;
    }
    this.log();
    return this;
  }
  multiply(n) {
    this.inner *= n;
    this.log();
    return this
  }
  divide(n) {
    this.inner = this.inner / n;
    this.log();
    return this;
  }
  mod(n) {
    this.inner = this.inner % n;
    this.log();
    return this;
  }
  static random(from, to){
    return Math.floor(Math.random() * (to - from) + from);
  }
}

let intBuilder = new IntBuilder(10)
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
console.log(IntBuilder.random(3,5))

class StringBuilder extends Builder {
  inner = this.data;
  plus(...n) {
    for (let i of n){
      this.inner += i
    }
    this.log();
    return this
  }
  minus(n) {
    this.inner = this.inner.slice(0, this.inner.length - n)
    this.log();
    return this;
  }
  multiply(n) {
    this.inner = this.inner.repeat(n)
    this.log();
    return this;
  }
  divide(n){
    let k = Math.floor(this.inner.length / n);
    this.inner = this.inner.slice(0, k);
    this.log()
    return this;
  }
  remove(str){
    this.inner = this.inner.split('').filter((w) => w !== str).join('')
    this.log();
    return this;
  }
  sub(from, n) {
    this.inner = this.inner.slice(from, n)
    this.log();
    return this;
  }
}

let strBuilder = new StringBuilder('Hello`')
strBuilder.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(0,1).get()