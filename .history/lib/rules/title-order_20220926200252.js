/**
 * @fileoverview order title
 * @author title-order
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
      description: "order title",
      category: "title",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const hasTitle = (node) => {
      const child = node.children.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyTitle = child.filter((item) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].filter((title) => title === item.name).length > 0)

      return verifyTitle.length > 0
    }

    const verifyOrder = (node) => {
      const child = node.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyTitle = child.filter((item) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].filter((title) => title === item.name).length > 0)

    
      return verifyTitle.map((item, index) => { 
        if(verifyTitle[index + 1]){
          item.name < verifyTitle[index + 1].name
        }
      }).filter((item) => item).length > 0
    }

    const reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: "order title",
        fix: null
      })
    }

    const rule = (node) => {
      if (hasTitle(node) && verifyOrder(node.children)) {
        reportError(node.openingElement)
      }
    }

    return {
      JSXElement(node) {
        rule(node)
      }
    };
  },
};
