"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/lang"),
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
ruleTester.run("lang", rule, {
  valid: [
    { code: '<div />;' },
    { code: '<div foo="bar" />;' },
    { code: '<div lang="foo" />;' },
    { code: '<html lang="en" />' },
    { code: '<html lang="en-US" />' },
  ],
  invalid: [
    { code: '<html lang="foo" />', errors: [{ message: "Make sure the lang attribute is set to a valid value." }] },
    { code: '<html lang="ww-TT" />', errors: [{ message: "Make sure the lang attribute is set to a valid value." }] },
    { code: '<html lang={undefined} />', errors: [{ message: "Make sure the lang attribute is set to a valid value." }] }
  ],
});
