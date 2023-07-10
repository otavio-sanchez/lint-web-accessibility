/**
 * @fileoverview Ensure that the autoFocus property is not utilized.
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { propName } = require('jsx-ast-utils');
const getElementType = require('../utils/getElementType');
const { dom } = require('aria-query');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ensure that the autoFocus property is not utilized.",
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
      JSXAttribute: (attribute) => {
        const options = context.options[0] || {};
        const ignoreNonDOM = !!options.ignoreNonDOM;

        if (ignoreNonDOM) {
          const type = elementType(attribute.parent);
          if (!dom.get(type)) {
            return;
          }
        }

        if (propName(attribute) === 'autoFocus') {
          context.report({
            node: attribute,
            message: "Ensure that the autoFocus property is not utilized.",
          });
        }
      },
    };
  },
};
