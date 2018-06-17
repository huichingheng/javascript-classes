class Rectangle {
  constructor(breadth, length) {
    this.breadth = breadth;
    this.length = length;
  }

  area() {
    return this.length * this.breadth;
  }

  perimeter() {
    return 2 * this.length + 2 * this.breadth;
  }

}

const R1 = new Rectangle(2, 4);
const R2 = new Rectangle(5, 10);

console.log("R1 area: " + R1.area(), "| perimeter: " + R1.perimeter());
console.log("R2 area: " + R2.area(), "| perimeter: " + R2.perimeter());


