/**
 * @fileoverview Insert aria-required in form
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/aria-required"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("aria-required", rule, {
  valid: [
    "<form aria-required='true' />"
  ],

  invalid: [
    {
      code: '<form />',
      errors: [{ message: "Fill me in." }],
    },
  ],
});
