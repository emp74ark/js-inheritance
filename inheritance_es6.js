class Builder {
  get() {
    return console.log(this.data)
  }
} 

class IntBuilder extends Builder {
  constructor(data){
    super(),
    this.data = data
  }
  plus(...n) {
    this.data += [...n].reduce((a, b) => a + b);
    return this;
  }
  minus(...n) {
    this.data -= [...n].reduce((a, b) => a + b);
    return this;
  }
  multiply(n) {
    this.data *= n;
    return this;
  }
  divide(n) {
    this.data /= n;
    return this;
  }
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

class StringBuilder extends Builder {
  constructor(data){
    super(),
    this.data = data
  }
  plus(...n) {
    this.data += [...n];
    return this;
  }
  minus(n) {
    this.data = this.data.slice(0, this.data.length - n);
    return this;
  }
  multiply(n) {
    this.data = this.data.repeat(n);
    return this;
  }
  divide(n) {
    this.data = this.data.slice(0, Math.floor(this.data.length / n));
    return this;
  }
  remove(str) {
    this.data = this.data.split('').filter((w) => w !== str).join('');
    return this;
  }
  sub(from, n) {
    this.data = this.data.slice(from, n);
    return this;
  }
}

let strBuilder = new StringBuilder('Hello')
strBuilder.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(0,1).get();