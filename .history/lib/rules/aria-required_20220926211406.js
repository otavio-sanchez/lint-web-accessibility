/**
 * @fileoverview Insert aria-required in form
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
      description: "Insert aria-required in form",
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
        message: 'Insert aria-requerid into element form',
        fix: null})
    }

    const isForm = (node) => {
      return false
    }

    const hasAria = (node) => {
      return node.attributes.filter(child => child.name.name === 'aria-required').length > 0
    }

    const rule = (node) => {
      if (isForm(node) && !hasAria(node.openingElement)) {
        reportError(node.openingElement)
      }
    }


    return {
      JSXElement(node) {
        rule(node)
      }
    }
  }
};
