"use strict";

const rule = require("../../../lib/rules/autofocus-invalid"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
});

const valid = [{ code: "<div autofocus />" }, { code: "<Foo autofocus />" }];

const invalid = [
  {
    code: "<div autoFocus />",
    errors: [
      {
        message: `Ensure that the autoFocus property is not utilized.`,
      },
    ],
    output: "<div autoFocus />",
  },
];

const ruleTester = new RuleTester();
ruleTester.run("autofocus-invalid", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };
