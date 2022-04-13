/**
 * @fileoverview Insert role in the element, identifying its semantic value
 * @author Otavio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/role-semantic"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
})
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("role-semantic", rule, {
  valid: [
    {
      code: "<header role=\"header\">example</header>",
    },
    {
      code: "<header role=\"header\" />",
    }
  ],

  invalid: [
    {
      code:  "<header>example</header>",
      errors: [{ message: "Insert role in the element, identifying its semantic value" }],
    },
  ],
});
