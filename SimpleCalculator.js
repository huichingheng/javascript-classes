class SimpleCalculator {
  constructor() {
    this.value = 0;
  }

  add(n) {
    this.value = this.value + n;
    return this;
  }

  subtract(n) {
    this.value = this.value - n;
    return this;
  }

  multiply(n) {
    this.value = this.value * n;
    return this;
  }

  divide(n) {
    this.value = this.value / n;
    return this;
  }

}

const calculator = new SimpleCalculator()

console.log(calculator.add(12).multiply(2).divide(2));
// console.log(calculator.add(7).subtract(8).multiply(2).divide(2));


