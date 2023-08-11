/**
 * @fileoverview Ensure that the accessKey property is not utilized on any element to prevent conflicts with keyboard commands utilized by screen readers.
 * @author 
 */
"use strict";

/**
 * @fileoverview insert a function click a button
 * @author click-button
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/access-key-invalid"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
})

const valid = [{ code: '<div accessKey={undefined} />'}]

const invalid = [{ 
  code: '<div accessKey="h" />' , 
  errors: [{ message: `Ensure that the accessKey property is not utilized on any element to prevent conflicts with keyboard commands utilized by screen readers.` }],
  output: '<div accessKey="h" />'
}]


const ruleTester = new RuleTester();
ruleTester.run("access-key-invalid", rule, {
  valid,
  invalid
});



module.exports = { valid, invalid }
