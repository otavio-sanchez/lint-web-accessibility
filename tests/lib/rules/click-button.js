/**
 * @fileoverview insert a function click a button
 * @author click-button
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/click-button"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
})

const valid = [{ code: '<button onClick={()=> null}> Button  </button>'}]

const invalid = [{ 
  code: '<div onClick={()=> null} />' , 
  errors: [{ message: `insert a function click a button` }],
  output: '<div onClick={()=> null} />'
}]


const ruleTester = new RuleTester();
ruleTester.run("click-button", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };

