/**
 * @fileoverview Insert role in the element, identifying its semantic value
 * @author Otavio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */

module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Insert role in the element, identifying its semantic value",
      category: "Semantic",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: (context) => {

    const elements = ['header', 'section', 'footer']

    const  reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: 'Insert role in the element, identifying its semantic value'
      })
    }
    
    const verifyElement = (node) => {
      return elements.filter((item) =>  item === node.openingElement.name.name).length > 0
    }
    
    const hasRole = (node) => {
      return node.attributes.filter(child => child.name.name === 'role').length > 0
    }

    const rule = (node) => {
      if (verifyElement(node) && !hasRole(node.openingElement)) {
        reportError(node.openingElement)
      }
    }
    
    return {
      JSXElement(node) {
        return rule(node)
      },
      HTMLElement(node) {
        return rule(node)
      }
    }
  },
};
