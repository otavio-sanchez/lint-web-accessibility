/**
 * @fileoverview Insert alt into the image element
 * @author Otávio Sanchez
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
    type: 'problem',
    docs: {
      description: "Insert alt into the image element",
      category: "image",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: (context) => {
    const  reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: 'Insert alt into element img'
      })
    }
    
    const isImg = (node) => {
      return node.openingElement.name.name === 'img' || (node.openingElement.name.type === 'JSXMemberExpression'
      && node.openingElement.name.property.name === 'img')
    }
    
    const hasAlt = (node) => {
      return node.attributes.filter(child => child.name.name === 'alt').length > 0
    }

    const rule = (node) => {
      if (isImg(node) && !hasAlt(node.openingElement)) {
        reportError(node.openingElement)
      }
    }
    
    
    return {
      JSXElement(node) {
        rule(node)
      },
      HTMLElement(node) {
        rule(node)
      }
    }
  }
};
