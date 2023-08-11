/**
 * @fileoverview Ensure that &lt;iframe&gt; elements have a title attribute.
 * @author
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/iframe-title"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
});

const valid = [
  { code: '<iframe title="Unique title" />' },
  { code: "<iframe title={foo} />" },
];

const invalid = [
  {
    code: "<iframe />",
    errors: [
      { message: "Ensure that <iframe> elements have a title attribute." },
    ],
  },
  {
    code: "<iframe {...props} />",
    errors: [
      { message: "Ensure that <iframe> elements have a title attribute." },
    ],
  },
  {
    code: "<iframe title={undefined} />",
    errors: [
      { message: "Ensure that <iframe> elements have a title attribute." },
    ],
  },
  {
    code: '<iframe title="" />',
    errors: [
      { message: "Ensure that <iframe> elements have a title attribute." },
    ],
  },
];

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("iframe-title", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };
