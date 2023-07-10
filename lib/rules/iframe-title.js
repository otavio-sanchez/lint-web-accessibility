/**
 * @fileoverview Ensure that <iframe> elements have a title attribute.
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const { getPropValue, getProp } = require('jsx-ast-utils');
const getElementType = require('../utils/getElementType');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ensure that <iframe> elements have a title attribute.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const elementType = getElementType(context);
    return {
      JSXOpeningElement: (node) => {
        const type = elementType(node);

        if (type && type !== 'iframe') {
          return;
        }

        const title = getPropValue(getProp(node.attributes, 'title'));

        if (title && typeof title === 'string') {
          return;
        }

        context.report({
          node,
          message: "Ensure that <iframe> elements have a title attribute.",
        });
      },
    };
  },
};
