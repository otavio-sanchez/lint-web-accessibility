/**
 * @fileoverview Add description and title into svg
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/tabindex-invalid"),
  RuleTester = require("eslint").RuleTester;

const valid = [
  { code: '<div tabIndex="-1" />' },
  { code: '<div tabIndex="0" />' },
  { code: '<div tabIndex="-2" />' },
  { code: '<div tabIndex="-2.5" />' },
  { code: "<div tabIndex={-3.5} />" },
  { code: "<div tabIndex={-4} />" },
];

const invalid = [
  {
    code: '<div tabIndex={"1"} />',
    errors: [
      { message: "Ensure that the tabIndex value is not greater than zero." },
    ],
  },
  {
    code: "<div tabIndex={1} />",
    errors: [
      { message: "Ensure that the tabIndex value is not greater than zero." },
    ],
  },
  {
    code: "<div tabIndex={`1`} />",
    errors: [
      { message: "Ensure that the tabIndex value is not greater than zero." },
    ],
  },
  {
    code: "<div tabIndex={1.589} />",
    errors: [
      { message: "Ensure that the tabIndex value is not greater than zero." },
    ],
  },
  {
    code: '<div tabIndex="1" />',
    errors: [
      { message: "Ensure that the tabIndex value is not greater than zero." },
    ],
  },
];

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("tabindex-invalid", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };