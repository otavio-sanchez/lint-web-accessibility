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

const valid = [
  {
    code: `<svg height="140" width="500">
<title> Title </title>
<description> Description </description>
<ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
</svg>
`,
  }
];

const invalid = [
  {
    code: `<svg height="140" width="500">
    <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
   </svg>
  `,
    errors: [{ message: "Add description and title into svg" }],
  },
  {
    code: `<svg height="140" width="500">
    <title>title</title>
    <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
   </svg>
  `,
    errors: [{ message: "Add description into svg" }],
  },
  {
    code: `<svg height="140" width="500">
    <description>description</description>
    <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
   </svg>
  `,
    errors: [{ message: "Add title into svg" }],
  },
]

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("svg-description", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };