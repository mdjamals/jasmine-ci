describe("calculator.js", function () {
  let calculator;
  let calculator2;
  beforeEach(function () {
    //Anything inside this block executes b4 each spec (it) inside this describe
    calculator = new Calculator();
    calculator2 = new Calculator();
  });
  it("should add numbers to total", function () {
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
  });

  it("should subtract numbers to total", function () {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);
    expect(calculator.total).toBe(25);
  });

  it("should multiply numbers to total", function () {
    const calculator = new Calculator();
    calculator.total = 5;
    calculator.multiply(6);
    expect(calculator.total).toBe(30);
  });

  it("should divide numbers to total", function () {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.divide(2);
    expect(calculator.total).toBe(15);
  });

  //use .toEqual matcher to test objects
  it("has constructor", function () {
    const calculator = new Calculator();
    const calculator2 = new Calculator();

    expect(calculator).toEqual(calculator2);
  });

  //included extra matchers (jasmine-matchers.js)
  it("returns total", function () {
    const calculator = new Calculator();
    calculator.total = 50;

    expect(calculator.total).toBeNumber();
  });
});
