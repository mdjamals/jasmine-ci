describe("main.js", function () {
  describe("calculate()", function () {
    it("validate expression when first number is invalid", function () {
      spyOn(window, "updateResult").and.stub();
      calculate("a+3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("validate expression when second number is invalid", function () {
      spyOn(window, "updateResult"); //.and.stub() is default, can be omitted
      calculate("3+a");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("validate expression when operatoin in invalid", function () {
      spyOn(window, "updateResult");
      calculate("3_4");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it("calls add", function () {
      const spy = spyOn(Calculator.prototype, "add");
      calculate("3+4");
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledWith(4);
    });
    it("calls subtract", function () {
      const spy = spyOn(Calculator.prototype, "subtract");
      calculate("5-4");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(4);
    });
    it("calls multiply", function () {
      const spy = spyOn(Calculator.prototype, "multiply");
      calculate("5*4");
      expect(spy).toHaveBeenCalled();
      expect(spy).not.toHaveBeenCalledWith(5);
      expect(spy).toHaveBeenCalledWith(4);
    });
    it("calls divide", function () {
      const spy = spyOn(Calculator.prototype, "divide");
      calculate("10/5");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(5);
    });
    it("calls updateResult", function () {
      spyOn(window, "updateResult");
      spyOn(Calculator.prototype, "multiply").and.callThrough(); // use callThrough to call the actual function
      calculate("5 * 5");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(25);
    });
  });

  describe("updateResult()", function () {
    beforeAll(function () {
      const element = document.createElement("div");
      element.setAttribute("id", "result");
      document.body.appendChild(element);
      this.element = element;
    });
    afterAll(function () {
      document.body.removeChild(this.element);
    });

    it("adds result to DOM element", function () {
      updateResult("5");
      expect(this.element.innerText).toBe("5");
    });
  });

  describe("showVersion()", function () {
    it("calls calculator.version", function () {
      spyOn(document, "getElementById").and.returnValue({
        innerText: null,
      });

      const spy = spyOnProperty(Calculator.prototype, "version", "get");

      showVersion();

      expect(spy).toHaveBeenCalled();
    });
  });
});
