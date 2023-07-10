"use strict";

const rule = require("../../../lib/rules/autofocus-invalid"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
})

const ruleTester = new RuleTester();
ruleTester.run("autofocus-invalid", rule, {
  valid: [
  ],
  invalid: [
  ],
});
