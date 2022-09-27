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
        message: 'Insert alt into element img',
        fix: (fixer) => {

          const name = openingElement.name.name;

          const sourceCode = context.getSourceCode();

          const regex = new RegExp(`\\b${name}\\b`, 'gi')

          const replace = `${name} alt="Alt text"`

          const fixedCode = sourceCode.getText(openingElement).replace(regex, replace)

          return fixer.replaceText(openingElement, fixedCode)
        }
      })
    }

    const isForm = (node) => {
      return node.openingElement.name.name === 'form' || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'form')
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
      }
    }
  }
};
