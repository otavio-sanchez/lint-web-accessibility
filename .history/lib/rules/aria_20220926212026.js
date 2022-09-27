/**
 * @fileoverview Add aria-required into form
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Add aria-required into form",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: (context) => {
    const reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: 'Insert aria-required into element form',
        fix: null
      })
    }

    const isForm = (node) => {
      return node.openingElement.name.name === 'form' || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'form')
    }

    const hasAriaRequired = (node) => {
      return node.attributes.filter(child => child.name.name === 'aria').length > 0
    }

    const rule = (node) => {
      if (false) {
        reportError(node.openingElement)
      }
    }


    return {
      JSXElement(node) {
        rule(node)
      }
    }
  },
};
