/**
 * @fileoverview Insert the li element inside an ol or ul so that the reader correctly identifies the list
 * @author list
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/list"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("list", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "<ul> <li>item</li> </ul>",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
