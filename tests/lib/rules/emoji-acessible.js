"use strict";

const rule = require("../../../lib/rules/emoji-acessible"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
});

const valid = [
  { code: '<span role="img" aria-label="Smile">😋</span>' },
  { code: '<span role="img" aria-label="Smile">&#9731;</span>' },
  { code: '<span aria-hidden="true">😋</span>' },
  { code: "<span aria-hidden>😋</span>" },
  { code: '<div aria-hidden="true">😋</div>' },
  { code: '<input type="hidden">😋</input>' },
];

const invalid = [
  {
    code: "<span>foo😋bar</span>",
    errors: [
      {
        message:
          "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
      },
    ],
  },
  {
    code: "<span>😋</span>",
    errors: [
      {
        message:
          "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
      },
    ],
  },
  {
    code: "<span>foo 😋 bar</span>",
    errors: [
      {
        message:
          "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
      },
    ],
  },
  {
    code: '<i role="img" aria-labelledby="id">😋</i>',
    errors: [
      {
        message:
          "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
      },
    ],
  },
  {
    code: "<Foo>😋</Foo>",
    errors: [
      {
        message:
          "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
      },
    ],
  },
  {
    code: '<span aria-hidden="false">😋</span>',
    errors: [
      {
        message:
          "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
      },
    ],
  },
];

const ruleTester = new RuleTester();
ruleTester.run("emoji-acessible", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };
