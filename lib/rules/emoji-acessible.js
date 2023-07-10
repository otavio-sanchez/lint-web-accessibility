/**
 * @fileoverview Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.
 * @author 
 */
"use strict";

const isHidden = require('../utils/isHidden');
const { getProp, getLiteralPropValue } = require('jsx-ast-utils');
const getElementType = require('../utils/getElementType');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const elementType = getElementType(context);
    return {
      JSXOpeningElement: (node) => {
        const literalChildValue = node.parent.children.find((child) => child.type === 'Literal' || child.type === 'JSXText');

        // eslint-disable-next-line no-useless-escape
        const isEmojiRegex = /((\ud83c[\udde6-\uddff]){2}|([\#\*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g

        if (literalChildValue && isEmojiRegex.test(literalChildValue.value)) {
          const elementIsHidden = isHidden(elementType(node), node.attributes);
          if (elementIsHidden) {
            return; // emoji is decorative
          }

          const rolePropValue = getLiteralPropValue(getProp(node.attributes, 'role'));
          const ariaLabelProp = getProp(node.attributes, 'aria-label');
          const arialLabelledByProp = getProp(node.attributes, 'aria-labelledby');
          const hasLabel = ariaLabelProp !== undefined || arialLabelledByProp !== undefined;
          const isSpan = elementType(node) === 'span';

          if (hasLabel === false || rolePropValue !== 'img' || isSpan === false) {
            context.report({
              node,
              message: "Enforce that emojis are wrapped in <span> tags and provide screen reader accessibility.",
            });
          }
        }
      },
    };
  },
};
