const has = require('has');
const { elementType } = require('jsx-ast-utils');


const getElementType = (context) => {
  const { settings } = context;
  const componentMap = settings['lint-web-acessibility'] && settings['lint-web-acessibility'].components;
  if (!componentMap) {
    return elementType;
  }
  return (node) => {
    const rawType = elementType(node);
    return has(componentMap, rawType) ? componentMap[rawType] : rawType;
  };
};

module.exports = getElementType;
