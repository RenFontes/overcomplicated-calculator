const express = require("express");
const router = express.Router();
const { catchErrors } = require("../handlers/errorHandlers");
const calculatorController = require("../controllers/calculatorController")
const authController = require("../controllers/authController");

// all routes are posts because they have side effects(deduct credit from account)
router.post('/add',
  /*authController.validateIdToken, */
  catchErrors(calculatorController.ValidateNums),
  catchErrors(calculatorController.Addition),
  catchErrors(calculatorController.FinalizeCalculation));

router.post('/subtract',
  /*authController.validateIdToken, */
  catchErrors(calculatorController.ValidateNums),
  catchErrors(calculatorController.Subtraction),
  catchErrors(calculatorController.FinalizeCalculation));

router.post('/multiply',
  /*authController.validateIdToken, */
  catchErrors(calculatorController.ValidateNums),
  catchErrors(calculatorController.Multiplication),
  catchErrors(calculatorController.FinalizeCalculation));

router.post('/divide',
  /*authController.validateIdToken, */
  catchErrors(calculatorController.ValidateNums),
  catchErrors(calculatorController.Division),
  catchErrors(calculatorController.FinalizeCalculation));

router.post('/square-root',
  /*authController.validateIdToken, */
  catchErrors(calculatorController.ValidateNum),
  catchErrors(calculatorController.SquareRoot),
  catchErrors(calculatorController.FinalizeCalculation));

router.post('/free-form',
  /*authController.validateIdToken, */
  catchErrors(calculatorController.ValidateExpression),
  catchErrors(calculatorController.FreeForm),
  catchErrors(calculatorController.FinalizeCalculation));

router.post('/random-string',
  /*authController.validateIdToken, */
  catchErrors(calculatorController.RandomString),
  catchErrors(calculatorController.FinalizeCalculation));

module.exports = router;