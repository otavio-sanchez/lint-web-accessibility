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
  valid: [`<svg height="140" width="500">
  <title> Title </title>
  <description> Description <description>
  <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
 </svg>
`
  ],

  invalid: [
    {
      code: `<svg height="140" width="500">
      <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
     </svg>
    `,
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
