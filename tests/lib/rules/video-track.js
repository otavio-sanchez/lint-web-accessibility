/**
 * @fileoverview order title
 * @author title-order
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/video-track"),
  RuleTester = require("eslint").RuleTester;

const valid = [
  {
    code: `
      <video controls>
          <source src="video.mp4" type="video/mp4" />
          <track kind="captions" src="legendas.vtt" srclang="pt" label="Português" default />
      </video>
      `,
  },
];

const invalid = [
  {
    code: `
      <video controls>
          <source src="video.mp4" type="video/mp4" />
      </video>
      `,
    errors: [{ message: "Check if the video has track" }],
  },
  {
    code: "<video controls />",
    errors: [{ message: "Check if the video has track" }],
  },
];

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("video-label", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };