class Calculator {
  //constructor
  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }

  //private
  #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`);
  };

  //public
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }
}
module.exports = Calculator;
