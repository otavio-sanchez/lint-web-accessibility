/**
 * @fileoverview Ensure that the accessKey property is not utilized on any element to prevent conflicts with keyboard commands utilized by screen readers.
 * @author 
 */
"use strict";

const { getProp, getPropValue } = require('jsx-ast-utils');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ensure that the accessKey property is not utilized on any element to prevent conflicts with keyboard commands utilized by screen readers.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
  create(context) {
    return {
      JSXOpeningElement: (node) => {
        const accessKey = getProp(node.attributes, 'accesskey');
        const accessKeyValue = getPropValue(accessKey);
  
        if (accessKey && accessKeyValue) {
          context.report({
            node,
            message: "Ensure that the accessKey property is not utilized on any element to prevent conflicts with keyboard commands utilized by screen readers.",
          });
        }
      },
    };
  },
};
