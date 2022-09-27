/**
 * @fileoverview caption e o atributo summary funcionam como texto alternativo para a tabela, fornecendo mais informações ao usuário.
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/table-resume"),
  RuleTester = require("../../../lib/testers/rule-tester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("table-resume", rule, {
  valid: [
    {
      code: `<table>
      <caption>description</caption>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>`,
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
