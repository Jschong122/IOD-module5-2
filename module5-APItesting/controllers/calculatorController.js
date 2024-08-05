// const Calculator = require("../libraries/calculator");

// let myCalc = new Calculator();

// myCalc.add(3, 4);

const Logger = require("../libraries/logger");

let myLogger = new Logger();

myLogger.add(3, 2);

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200).json({ result: sum });
};

const subtractNumber = (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);

  let sum = number1 - number2;

  response.status(200);
  response.json({ result: sum });
};
const multiplyNumber = (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);

  let sum = number1 * number2;

  response.status(200);
  response.json({ result: sum });
};
const divideNumber = (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);

  let sum = number1 / number2;

  response.status(200);
  response.json({ result: sum });
};

module.exports = {
  addNumbers,
  subtractNumber,
};
