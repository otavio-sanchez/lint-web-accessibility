/**
 * @fileoverview Check if the video has subtitles
 * @author 
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
      description: "Check if the video has track",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {


    const reportError = (openingElement) => {
      context.report({
        node: openingElement,
        message: "Check if the video has track",
        fix: null
      })
    }

    const isMovie = (node) => {
      return node.openingElement.name.name === 'video' || (node.openingElement.name.type === 'JSXMemberExpression'
        && node.openingElement.name.property.name === 'video')
    }

    const hasTrack = (node) => {
      const child = node.children.filter((item) => item && item.openingElement && item.openingElement.name && item.openingElement.name.name).map((item) => item.openingElement.name)
      const verifyTrack = child.filter((item) => item.name === 'track')
      return verifyTrack.length > 0
    }

    const rule = (node) => {
      if (isMovie(node) && !hasTrack(node)) {
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
