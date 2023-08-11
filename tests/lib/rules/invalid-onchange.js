/**
 * @fileoverview &#39;Ensure that onBlur is used instead of onChange on select menus for better accessibility.&#39;,
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/invalid-onchange"),
RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
})

const valid = [
  {
    code: `<input onChange={() => null} />`,
  },
];

const invalid = [
  {
    code: `<select onChange={() => null} />`,
    errors: [{ message: "Ensure that onBlur is used instead of onChange on select menus for better accessibility." }],
  }
];

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("invalid-onchange", rule, {
  valid,
  invalid,
});


module.exports = { valid, invalid };