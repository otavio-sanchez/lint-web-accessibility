/**
 * @fileoverview caption e o atributo summary funcionam como texto alternativo para a tabela, fornecendo mais informações ao usuário.
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/table-resume"),
  RuleTester = require("eslint").RuleTester;

const valid = [
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
  },
];

const invalid = [
  {
    code: `<table>
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
    errors: [
      {
        message: "Insert the caption element inside an table",
        type: "JSXOpeningElement",
      },
    ],
  },
];
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("table-resume", rule, {
  valid,
  invalid,
});

module.exports = { valid, invalid };