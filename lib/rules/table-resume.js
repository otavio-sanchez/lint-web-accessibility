/**
 * @fileoverview caption e o atributo summary funcionam como texto alternativo para a tabela, fornecendo mais informações ao usuário.
 * @author Otávio Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "caption e o atributo summary funcionam como texto alternativo para a tabela, fornecendo mais informações ao usuário.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable:  'whitespace', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create: (context) => {
    const reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: "Insert the caption element inside an table",
        fix: null
      })
    }

    const isTable = (node) => {
      return node.openingElement.name.name === 'table' || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'table')
    }

    const hasCaption = (node) => {
      const child = node.children.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyCaption = child.filter((item) => item.name === 'caption')
      return  verifyCaption.length > 0
    }

    const rule = (node) => {
      if (isTable(node) && !hasCaption(node)) {
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
