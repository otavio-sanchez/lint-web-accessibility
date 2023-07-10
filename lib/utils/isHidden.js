const { getProp, getPropValue, getLiteralPropValue } = require('jsx-ast-utils');

const isHidden = (type, attributes) => {
  const hidden = type.toUpperCase() === 'INPUT'
    ? getLiteralPropValue(getProp(attributes, 'type'))
    : null;

  const ariaHidden = getPropValue(getProp(attributes, 'aria-hidden'));

  // eslint-disable-next-line no-mixed-operators
  return (hidden && hidden.toUpperCase() === 'HIDDEN' || ariaHidden === true);
};

module.exports = isHidden