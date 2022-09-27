/**
 * @fileoverview Add aria-required into form
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/aria"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("aria", rule, {
  valid: [
    {
      code: "<form><input /></form>",
    },
  ],

  invalid: [
    {
      code: "<form><input /></form>",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
