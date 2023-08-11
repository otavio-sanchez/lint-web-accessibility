"use strict";

const rule = require("../../../lib/rules/distracting-elements"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
});

const valid = [
  { code: "<div blink />" },
  { code: "<div marquee />" },
  { code: "<div />;" },
  { code: "<Marquee />" },
  { code: "<Blink />" },
];

const invalid = [
  {
    code: "<marquee lang={undefined} />",
    errors: [
      {
        message: `Avoid using <marquee> elements as they can cause visual accessibility issues and are deprecated.`,
      },
    ],
  },
  {
    code: "<blink />",
    errors: [
      {
        message: `Avoid using <blink> elements as they can cause visual accessibility issues and are deprecated.`,
      },
    ],
  },
];

const ruleTester = new RuleTester();
ruleTester.run("distracting-elements", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };
