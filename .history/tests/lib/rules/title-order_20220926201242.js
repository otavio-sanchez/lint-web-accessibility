/**
 * @fileoverview order title
 * @author title-order
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/title-order"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("title-order", rule, {
  valid: [
    {
      code: "<div><h1>teste</h1> <div> teste </div> <h2>teste</h2></div>",
    },
    {
      code: "<div><h1>teste</h1> <h3>teste</h3></div>",
    }
  ],

  invalid: [
    {
      code: "<div><h2>teste</h2> <h1>teste</h1></div>",
      errors: [{ message: 'Adjust order title' }],
    }, {
      code:  "<div><h3>teste</h3> <h1>teste</h1> <h2>teste</h2></div>",
      errors: [{ message: 'Adjust order title' }],
    },
  ],
});


