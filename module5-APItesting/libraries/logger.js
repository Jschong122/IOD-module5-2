class Logger {
  // constructor
  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }
  // private
  #log = (result) => {
    console.log(`[Caller id :${this.id} Result: ${result}`);
  };

  //public

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }
}
module.exports = Logger;
