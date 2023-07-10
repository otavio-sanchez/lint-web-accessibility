/**
 * @fileoverview Make sure the lang attribute is set to a valid value.
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const { propName, getLiteralPropValue } = require('jsx-ast-utils')
const tags = require('language-tags')
const getElementType = require('../utils/getElementType');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Make sure the lang attribute is set to a valid value.",
      recommended: false,
      url: null,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    const elementType = getElementType(context);
    return {
      JSXAttribute: (node) => {
        const name = propName(node);
        if (name && name.toUpperCase() !== 'LANG') {
          return;
        }

        const { parent } = node;
        const type = elementType(parent);
        if (type && type !== 'html') {
          return;
        }

        const value = getLiteralPropValue(node);

        if (value === null) {
          return;
        }
        if (value === undefined) {
          context.report({
            node,
            message: "Make sure the lang attribute is set to a valid value.",
          });

          return;
        }

        if (tags.check(value)) {
          return;
        }

        context.report({
          node,
          message: "Make sure the lang attribute is set to a valid value.",
        });
      },
    };
  },
};
