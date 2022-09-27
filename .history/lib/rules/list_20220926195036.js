/**
 * @fileoverview Insert the li element inside an ol or ul so that the reader correctly identifies the list
 * @author list
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
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Insert the li element inside an ol or ul so that the reader correctly identifies the list",
      category: "list",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: (context) => {
    const reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: "Insert the li element inside an ol or ul so that the reader correctly identifies the list",
        fix: null
      })
    }

    const isUlOl = (node) => {
      return node.openingElement.name.name === 'ul' || node.openingElement.name.name === 'ol' || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'ul') || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'ol')
    }

    const hasLi = (node) => {
      const child = node.children.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyOlLi = child.filter((item) => item.name === 'li')
      return  child.length === verifyOlLi.length
    }

    const rule = (node) => {
      if (isUlOl(node) && !hasLi(node.child)) {
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
