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

export { Builder }