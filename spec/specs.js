describe ('Triangle', function() {
  it('creates a new triangle with three sides', function() {
    var testTriangle = createTestTriangle();
    expect(testTriangle.sideOne).to.equal(3);
    expect(testTriangle.sideTwo).to.equal(4);
    expect(testTriangle.sideThree).to.equal(5);
  });

  it('knows if it is a valid triangle', function() {
    var testTriangle = createTestTriangle();
    var notTriangle = createNonTriangle();
    expect(testTriangle.isTriangle()).to.equal(true);
    expect(notTriangle.isTriangle()).to.equal(false);
  });

  it('knows if it is equilateral', function() {
    var equilateralTriangle = createEquilateralTriangle();
    var notEquilateral = createIsoscelesTriangle();
    expect(equilateralTriangle.isEquilateral()).to.equal(true);
    expect(notEquilateral.isEquilateral()).to.equal(false);
  });

  it('knows if it is isosceles', function() {
    var isoscelesTriangle = createIsoscelesTriangle();
    var notIsosceles = createEquilateralTriangle();
    expect(isoscelesTriangle.isIsosceles()).to.equal(true);
    expect(notIsosceles.isIsosceles()).to.equal(false);
  });

  it('knows if it is scalene', function() {
    var scaleneTriangle = createScaleneTriangle();
    var notScalene = createIsoscelesTriangle();
    var notScaleneEquilateral = createEquilateralTriangle();
    expect(scaleneTriangle.isScalene()).to.equal(true);
    expect(notScalene.isScalene()).to.equal(false);
    expect(notScaleneEquilateral.isScalene()).to.equal(false);
  });

  it('tells you what type of triangle it is', function() {
    expect(createNonTriangle().typeOfTriangle()).to.equal('not a triangle');
    expect(createEquilateralTriangle().typeOfTriangle()).to.equal('equilateral');
    expect(createIsoscelesTriangle().typeOfTriangle()).to.equal('isosceles');
    expect(createScaleneTriangle().typeOfTriangle()).to.equal('scalene');
  });
});

var createTestTriangle = function() {
  return new Triangle(3, 4, 5);
};

var createNonTriangle = function() {
  return new Triangle(2, 2, 5);
};

var createEquilateralTriangle = function() {
  return new Triangle(3, 3, 3);
};

var createIsoscelesTriangle = function() {
 return new Triangle(2, 2, 3);
};

var createScaleneTriangle = function() {
  return new Triangle(3, 4, 5);
};
