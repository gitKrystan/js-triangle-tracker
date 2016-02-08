function Triangle(sideOne, sideTwo, sideThree) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;
}

Triangle.prototype.sortedSides = function() {
  return [this.sideOne, this.sideTwo, this.sideThree].sort();
};

Triangle.prototype.isTriangle = function() {
  return this.sortedSides()[0] + this.sortedSides()[1] > this.sortedSides()[2];
};

Triangle.prototype.isEquilateral = function() {
  return this.sortedSides()[0] === this.sortedSides()[2];
};

Triangle.prototype.isIsosceles = function() {
  return (this.sortedSides()[0] === this.sortedSides()[1] ||
    this.sortedSides()[1] === this.sortedSides()[2]) &&
    !this.isEquilateral();
};

Triangle.prototype.isScalene = function () {
  return this.sortedSides()[0] !== this.sortedSides()[1] &&
    this.sortedSides()[1] !== this.sortedSides()[2];
};

Triangle.prototype.typeOfTriangle = function () {
  if (!this.isTriangle()) {
    return 'not a triangle';
  } else if (this.isEquilateral()) {
    return 'equilateral';
  } else if (this.isIsosceles()) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

$(function() {

});
