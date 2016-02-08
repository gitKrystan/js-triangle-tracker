describe ('Triangle', function() {
  it('creates a new triangle with three sides', function() {
    var testTriangle = createTestTriangle();
    expect(testTriangle.sideOne).to.equal(3);
    expect(testTriangle.sideTwo).to.equal(4);
    expect(testTriangle.sideThree).to.equal(5);
  });

  it('knows if it is a valid triangle', function() {
    var testTriangle = createTestTriangle();
    expect(testTriangle.isTriangle()).to.equal(true);
  });
});

var createTestTriangle = function() {
  return new Triangle(3, 4, 5);
}
