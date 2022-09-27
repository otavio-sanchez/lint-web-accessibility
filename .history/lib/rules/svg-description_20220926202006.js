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
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Add description and title into svg",
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
        message: "Add description and title into svg",
        fix: null
      })
    }

    const isSVG = (node) => {
      return node.openingElement.name.name === 'svg' || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'svg')
    }

    const hasTitleDescription = (node) => {
      const child = node.children.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyTitle = child.filter((item) => item.name === 'title')
      const verifyDescription = child.filter((item) => item.name === 'description')
      return verifyTitle && verifyDescription
    }

    const rule = (node) => {
      if (isUlOl(node) && !hasLi(node)) {
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
