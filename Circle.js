class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  
}

const C1 = new Circle(1);
const C2 = new Circle(2);
const C3 = new Circle(3);

console.log(
  "C1 area: " + C1.area().toFixed(1),
  "| perimeter: " + C1.perimeter().toFixed(1)
);
console.log(
  "C2 area: " + C2.area().toFixed(1),
  "| perimeter: " + C2.perimeter().toFixed(1)
);
console.log(
  "C3 area: " + C3.area().toFixed(1),
  "| perimeter: " + C3.perimeter().toFixed(1)
);
