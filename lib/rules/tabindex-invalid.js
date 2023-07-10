/**
 * @fileoverview Ensure that the tabIndex value is not greater than zero.
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const { getLiteralPropValue, propName } = require('jsx-ast-utils');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ensure that the tabIndex value is not greater than zero.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      JSXAttribute: (attribute) => {
        const name = propName(attribute).toUpperCase();

        if (name !== 'TABINDEX') {
          return;
        }

        const value = Number(getLiteralPropValue(attribute));

        if (isNaN(value) || value <= 0) {
          return;
        }

        context.report({
          node: attribute,
          message: "Ensure that the tabIndex value is not greater than zero.",
        });
      },
    };
  },
};
