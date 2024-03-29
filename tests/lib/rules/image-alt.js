/**
 * @fileoverview Insert alt into the image element
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/image-alt"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
});

const valid = [
  {
    code: '<img src="example.jpg" alt="Description image" />',
  },
  {
    code: '<img src="example.jpg" alt="Description image" title="Title image" />',
  },
  {
    code: '<img alt="Description image" />',
  },
];

const invalid = [
  {
    code: '<img src="example.jpg" />',
    errors: [{ message: "Insert alt into element img" }],
    output: '<img alt="Alt text" src="example.jpg" />',
  },
  {
    code: "<img />",
    errors: [{ message: "Insert alt into element img" }],
    output: '<img alt="Alt text" />',
  },
];

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("image-alt", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };