const express = require("express");
const {
  addNumbers,
  subtractNumber,
} = require("../controllers/calculatorController");

const router = express.Router();

// new route for adding two numbers
router.get("/add", (req, res) => {
  addNumbers(req, res);
});

router.get("/subtraction", (request, response) => {
  subtractNumber(request, response);
});

router.get("/divide", (request, response) => {
  let number1 = parseInt(request.query.num1);
  let number2 = parseInt(request.query.num2);

  let sum = number1 / number2;

  // setting the response object to status 200 (successful request) and the response will have a object that we can pull out

  response.status(200);
  response.json({ result: sum });
});
module.exports = router;
