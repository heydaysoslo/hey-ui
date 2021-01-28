import React__default, { createElement } from 'react';
import styled, { css } from 'styled-components';

const applyModifier = (modifier, css) => ({
  modifiers
}) => {
  if (!modifiers) return null;
  return modifiers === modifier || modifiers.includes(modifier) ? css : null;
};

let _ = t => t,
    _t,
    _t2,
    _t3;

const Button = ({
  children,
  className,
  ...props
}) => {
  return React__default.createElement("button", Object.assign({
    className: className,
    onMouseDown: e => e.preventDefault()
  }, props), children);
};

var Button$1 = styled(Button)(({
  theme: t
}) => css(_t || (_t = _`
    appearance: none;
    background: none;
    display: inline-block;
    border: 2px solid transparent;
    background-color: ${0};
    color: ${0};
    font-size: 2rem;
    padding: 20px;
    transition: 0.15s ease background-color, color;
    cursor: pointer;
    ${0};
    ${0}

    &:hover {
      background-color: white;
      color: black;
      border-color: black;
    }

    ${0} {
      background: orange;
    }
    ${0} {
      background: red;
    }
    ${0} {
      background: purple;
    }
    ${0} {
      background: ${0};
    }

    ${0}

    ${0}
  `), t.colors.text, t.colors.background, t.fonts.h1(), t.spacing.section('mt'), t.bp.sm, t.bp.md, t.bp.lg, t.bp.xl, t.color.darken('red', 0.25), applyModifier('small', css(_t2 || (_t2 = _`
        padding: 0;
      `))), applyModifier('active', css(_t3 || (_t3 = _`
        /* background: orange; */
      `)))));

let _$1 = t => t,
    _t$1;
const Wrapper = styled.div(({
  theme
}) => css(_t$1 || (_t$1 = _$1`
    ${0};
    background: ${0};
  `), theme.spacing.md('my'), theme.colors.background));
const ExampleComponent = ({
  text
}) => {
  return createElement(Wrapper, null, "Example Component hello: ", text);
};

export { Button$1 as Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
