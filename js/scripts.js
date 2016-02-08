function Triangle(sideOne, sideTwo, sideThree) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;
}

Triangle.prototype.sortedSides = function() {
  return [this.sideOne, this.sideTwo, this.sideThree].sort();
}

Triangle.prototype.isTriangle = function() {
  return this.sortedSides()[0] + this.sortedSides()[1] > this.sortedSides()[2];
}
