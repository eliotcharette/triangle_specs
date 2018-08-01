export class Triangle {
  constructor(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

checkType() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
}

checkEqual() {
  if (this.side1 == this.side2 && this.side2 == this.side3) {
    return "this is a equilateral triangle";
  } else {
    return "not a triangle";
  }
}
}
