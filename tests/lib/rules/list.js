/**
 * @fileoverview Insert the li element inside an ol or ul so that the reader correctly identifies the list
 * @author list
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/list"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("list", rule, {
  valid: [
    {
      code: "<ul><li>test</li></ul>",
    }, {
      code: "<ol><li>test</li></ol>",
    }, {
      code: "<ol className='test'><li>test</li> <li>test</li> <li>test</li></ol>",
    }, {
      code: "<ul><li className='test'>test</li><li>test</li></ul>",
    }
  ],

  invalid: [
    {
      code: "<ul><div>test</div></ul>",
      errors: [{ message: "Insert the li element inside an ol or ul so that the reader correctly identifies the list", type: "Me too" }],
    },
    {
      code: "<ul><section>test</section></ul>",
      errors: [{ message: "Insert the li element inside an ol or ul so that the reader correctly identifies the list", type: "Me too" }],
    }
  ],
});
