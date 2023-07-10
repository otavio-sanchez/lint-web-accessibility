/**
 * @fileoverview Ensure that distracting elements are not used.
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */

const getElementType = require('../utils/getElementType');

const DEFAULT_ELEMENTS = [
  'marquee',
  'blink',
];


module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ensure that distracting elements are not used.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    // eslint-disable-next-line eslint-plugin/require-meta-schema
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const elementType = getElementType(context);
    return {
      JSXOpeningElement: (node) => {
        const options = context.options[0] || {};
        const elementOptions = options.elements || DEFAULT_ELEMENTS;
        const type = elementType(node);
        const distractingElement = elementOptions.find((element) => type === element);

        if (distractingElement) {
          context.report({
            node,
            message:`Avoid using <${distractingElement}> elements as they can cause visual accessibility issues and are deprecated.`,
          });
        }
      },
    };
  },
};
