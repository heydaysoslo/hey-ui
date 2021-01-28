import React__default, { createElement } from 'react';
import styled, { css } from 'styled-components';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var applyModifier = function applyModifier(modifier, css) {
  return function (_ref) {
    var modifiers = _ref.modifiers;
    if (!modifiers) return null;
    return modifiers === modifier || modifiers.includes(modifier) ? css : null;
  };
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n        /* background: orange; */\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n        padding: 0;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    appearance: none;\n    background: none;\n    display: inline-block;\n    border: 2px solid transparent;\n    background-color: ", ";\n    color: ", ";\n    font-size: 2rem;\n    padding: 20px;\n    transition: 0.15s ease background-color, color;\n    cursor: pointer;\n    ", ";\n    ", "\n\n    &:hover {\n      background-color: white;\n      color: black;\n      border-color: black;\n    }\n\n    ", " {\n      background: orange;\n    }\n    ", " {\n      background: red;\n    }\n    ", " {\n      background: purple;\n    }\n    ", " {\n      background: ", ";\n    }\n\n    ", "\n\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React__default.createElement("button", Object.assign({
    className: className,
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    }
  }, props), children);
};

var Button$1 = styled(Button)(function (_ref2) {
  var t = _ref2.theme;
  return css(_templateObject(), t.colors.text, t.colors.background, t.fonts.h1(), t.spacing.section('mt'), t.bp.sm, t.bp.md, t.bp.lg, t.bp.xl, t.color.darken('red', 0.25), applyModifier('small', css(_templateObject2())), applyModifier('active', css(_templateObject3())));
});

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n    ", ";\n    background: ", ";\n  "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.div(function (_ref) {
  var theme = _ref.theme;
  return css(_templateObject$1(), theme.spacing.md('my'), theme.colors.background);
});
var ExampleComponent = function ExampleComponent(_ref2) {
  var text = _ref2.text;
  return createElement(Wrapper, null, "Example Component hello: ", text);
};

export { Button$1 as Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
