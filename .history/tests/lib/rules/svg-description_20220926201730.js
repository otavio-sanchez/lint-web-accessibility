/**
 * @fileoverview Add description and title into svg
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/svg-description"),
RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("svg-description", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "<svg><title>title</title><description>description</description>...",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
