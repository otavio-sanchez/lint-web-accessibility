/**
 * @fileoverview 'Ensure that onBlur is used instead of onChange on select menus for better accessibility.',
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------



const { getProp } = require('jsx-ast-utils');

const getElementType = require('../utils/getElementType');


/** @type {import('eslint').Rule.RuleModule} */

const applicableTypes = [
  'select',
  'option',
];

module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ensure that onBlur is used instead of onChange on select menus for better accessibility.",
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
        const nodeType = elementType(node);

        if (applicableTypes.indexOf(nodeType) === -1) {
          return;
        }

        const onChange = getProp(node.attributes, 'onChange');
        const hasOnBlur = getProp(node.attributes, 'onBlur') !== undefined;

        if (onChange && !hasOnBlur) {
          context.report({
            node,
            message: "Ensure that onBlur is used instead of onChange on select menus for better accessibility.",
          });
        }
      },
    };
  },
};
