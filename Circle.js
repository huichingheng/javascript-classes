class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius ** 2).toFixed(1);
  }

  perimeter() {
    return (2 * Math.PI * this.radius).toFixed(1);
  }
}

const Circle1 = new Circle(1);
const Circle2 = new Circle(2);
const Circle3 = new Circle(3);

console.log(Math.fround(2));

console.log("Circle1 area is: ", Circle1.area(1));
console.log("Circle2 area is: ", Circle2.area(2));
console.log("Circle3 area is: ", Circle3.area(3));

console.log("Perimeter1 area is: ", Circle1.perimeter(1));
console.log("Perimeter2 area is: ", Circle2.perimeter(2));
console.log("Perimeter3 area is: ", Circle3.perimeter(3));
