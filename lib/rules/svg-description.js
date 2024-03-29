/**
 * @fileoverview Add description and title into svg
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Add description and title into svg",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'whitespace', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: (context) => {
    const reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: "Add description and title into svg",
        fix: null
      })
    }

    const reportErrorDescription = (openingElement) => {
      context.report({
        node: openingElement,
        message: "Add description into svg",
        fix: null
      })
    }

    const reportErrorTitle = (openingElement) => {
      context.report({
        node: openingElement,
        message: "Add title into svg",
        fix: null
      })
    }


    const isSVG = (node) => {
      return node.openingElement.name.name === 'svg' || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'svg')
    }

    const hasTitle = (node) => {
      const child = node.children.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyTitle = child.filter((item) => item.name === 'title')
      return verifyTitle.length > 0
    }

    const hasDescription = (node) => {
      const child = node.children.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyDescription = child.filter((item) => item.name === 'description')
      return verifyDescription.length > 0
    }

    const rule = (node) => {      
      if (isSVG(node) && !hasDescription(node) && hasTitle(node)) {
        reportErrorDescription(node.openingElement)
      }

      if (isSVG(node) && !hasTitle(node) && hasDescription(node)) {
        reportErrorTitle(node.openingElement)
      } 

      if (isSVG(node) && !hasTitle(node) && !hasDescription(node)) {
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
