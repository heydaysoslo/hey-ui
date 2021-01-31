import React, { useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';

const easings = {
  default: {
    duration: 1,
    ease: [0.4, 0.0, 0.2, 1]
  }
};
const transitions = {
  stagger: {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.15
      }
    }
  },
  fadeInUp: {
    animate: {
      opacity: 1,
      y: 0,
      transition: easings.default
    },
    initial: {
      opacity: 0,
      y: 50,
      transition: easings.default
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 1, 1]
      }
    }
  },
  fadeIn: {
    animate: {
      opacity: 1,
      transition: easings.default
    },
    initial: {
      opacity: 0,
      transition: easings.default
    }
  }
};

const Animate = ({
  className,
  children,
  type: _type = 'fadeInUp'
}) => {
  return React.createElement(motion.div, Object.assign({
    className: className
  }, transitions[_type], {
    exit: transitions[_type].exit || transitions[_type].initial
  }), children);
};

const AnimateInView = ({
  children,
  threshold: _threshold = 0.25,
  onInView,
  triggerOnce: _triggerOnce = true,
  transition: _transition = 'fadeInUp',
  ...props
}) => {
  const [ref, inView, entry] = useInView({
    threshold: _threshold,
    triggerOnce: _triggerOnce
  });
  useEffect(() => {
    if (onInView) {
      onInView({
        inView,
        ref,
        entry
      });
    }
  }, [onInView, inView, ref, entry]);
  return React.createElement(motion.div, Object.assign({
    variants: transitions[_transition],
    animate: inView ? 'visible' : 'hidden',
    ref: ref
  }, props), children);
};

let _ = t => t,
    _t,
    _t2;

const Burger = props => {
  return React.createElement(StyledBurger, Object.assign({}, props), React.createElement("span", {
    className: 'box'
  }, React.createElement("span", {
    className: 'inner'
  })));
};

const StyledBurger = styled.span(({
  theme,
  active,
  thickness: _thickness = 2,
  width: _width = 32,
  height: _height = 24,
  easeIn: _easeIn = 'cubic-bezier(.55,.055,.675,.19)',
  easeOut: _easeOut = 'cubic-bezier(0.215, 0.61, 0.355, 1)'
}) => css(_t || (_t = _`
    // Make sure click-rect is big enough for usability
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${0}px;
    height: ${0}px;

    // Lines container
    .box {
      position: relative;
      display: block;
      width: ${0}px;
      height: ${0}px;
    }

    // Lines
    .inner,
    .inner:after,
    .inner:before {
      position: absolute;
      width: 100%;
      height: ${0}px;
      background-color: ${0};
    }

    .inner {
      transition-timing-function: ${0};
      transition-duration: 75ms;
      top: 50%;
      display: block;
      margin-top: -${0}px;
      :before,
      :after {
        display: block;
        content: '';
      }
      :before {
        transition: top 75ms ease 0.12s, opacity 75ms ease;
        top: -${0}px;
      }
      :after {
        transition: bottom 75ms ease 0.12s, transform 75ms ${0};
        bottom: -${0}px;
      }
    }

    ${0}
  `), _width, _height, _width, _height, _thickness, theme.colors.text, _easeIn, _thickness / 2, _height / 2 - _thickness / 2, _easeIn, _height / 2 - _thickness / 2, active && css(_t2 || (_t2 = _`
      .inner {
        transition-delay: 0.12s;
        transition-timing-function: ${0};
        transform: rotate(45deg);
        :before {
          top: 0;
          transition: top 75ms ease, opacity 75ms ease 0.12s;
          opacity: 0;
        }
        :after {
          bottom: 0;
          transition: bottom 75ms ease, transform 75ms ${0} 0.12s;
          transform: rotate(-90deg);
        }
      }
    `), _easeOut, _easeOut)));

const applyModifier = (modifier, css) => ({
  modifiers
}) => {
  if (!modifiers) return null;
  return modifiers === modifier || modifiers.includes(modifier) ? css : null;
};

let _$1 = t => t,
    _t$1,
    _t2$1,
    _t3;

const Button = ({
  children,
  disabled,
  ...props
}) => {
  return React.createElement(Wrapper, Object.assign({
    disabled: disabled,
    onMouseDown: e => e.preventDefault()
  }, props), children);
};

const Wrapper = styled.button(({
  theme: t,
  modifiers
}) => {
  var _t$radius;

  return css(_t$1 || (_t$1 = _$1`
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
    border-radius: ${0};

    &:hover {
      background-color: ${0};
      color: ${0};
    }

    &[disabled],
    &[aria-disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    ${0}
    ${0}
  `), t.colors.text, t.colors.background, modifiers && !modifiers.includes('small') && t.fonts.body(), ((_t$radius = t.radius) === null || _t$radius === void 0 ? void 0 : _t$radius.normal) || '0px', t.colors.background, t.colors.text, applyModifier('small', css(_t2$1 || (_t2$1 = _$1`
        padding: 0;
        ${0};
      `), t.fonts.small())), applyModifier('full', css(_t3 || (_t3 = _$1`
        width: 100%;
      `))));
});

let _$2 = t => t,
    _t$2;

const Container = ({
  children,
  className
}) => {
  return React.createElement("div", {
    className: className
  }, children);
};

var Container$1 = styled(Container)(({
  theme
}) => css(_t$2 || (_t$2 = _$2`
    max-width: 160rem;
    margin-left: auto;
    margin-right: auto;
    ${0}
    // Remove outer padding from nested containers
    & & {
      padding-left: 0;
      padding-right: 0;
      max-width: none;
    }
  `), theme.spacing.container('px')));

const Emoji = ({
  label,
  children
}) => {
  return React.createElement("span", {
    role: 'img',
    "aria-label": label
  }, children);
};

let _$3 = t => t,
    _t$3,
    _t2$2;
const Spacer = styled.div(({
  theme,
  size: _size = 'md',
  custom
}) => css(_t$3 || (_t$3 = _$3`
    ${0};
    ${0};
  `), !custom && theme.spacing[_size]('size'), custom && css(_t2$2 || (_t2$2 = _$3`
      height: ${0};
      width: ${0};
    `), custom, custom)));

let _$4 = t => t,
    _t$4,
    _t2$3,
    _t3$1;

const Stack = ({
  className,
  children,
  space: _space = 'md',
  spaceEnds,
  spaceEndsStart,
  spaceEndsEnd,
  ...props
}) => {
  return React.createElement("div", Object.assign({
    className: className
  }, props), spaceEnds && React.createElement(Spacer, {
    size: typeof spaceEnds === 'string' ? spaceEnds : _space
  }), spaceEndsStart && React.createElement(Spacer, {
    size: typeof spaceEndsStart === 'string' ? spaceEndsStart : _space
  }), Array.isArray(children) ? children.map((child, i) => React.createElement(Fragment, {
    key: `stack-${i}`
  }, child, i !== children.length - 1 && React.createElement(Spacer, {
    size: _space
  }))) : children, spaceEndsEnd && React.createElement(Spacer, {
    size: typeof spaceEndsEnd === 'string' ? spaceEndsEnd : _space
  }), spaceEnds && React.createElement(Spacer, {
    size: typeof spaceEnds === 'string' ? spaceEnds : _space
  }));
};

var Stack$1 = styled(Stack)(({
  reverse,
  direction: _direction = 'column'
}) => css(_t$4 || (_t$4 = _$4`
    display: flex;
    flex-direction: ${0};
    ${0}
  `), _direction, reverse ? css(_t2$3 || (_t2$3 = _$4`
          flex-direction: ${0}-reverse;
        `), _direction) : css(_t3$1 || (_t3$1 = _$4`
          flex-direction: ${0};
        `), _direction)));

const ID = nanoid(10);

const Stagger = ({
  className,
  children,
  type: _type = 'fadeInUp',
  childrenClassName: _childrenClassName = '',
  ...props
}) => {
  return React.createElement(motion.div, Object.assign({
    className: className,
    variants: transitions.stagger,
    initial: 'initial',
    animate: 'animate',
    exit: 'initial'
  }, props), Array.isArray(children) && children.map((child, i) => {
    return React.createElement(motion.div, {
      className: _childrenClassName,
      key: `stagger-child-${ID}-${i}`,
      variants: transitions[_type]
    }, child);
  }));
};

let _$5 = t => t,
    _t$5,
    _t2$4,
    _t3$2;
const Sticky = styled.div(({
  theme,
  top: _top = '0px',
  from: _from = 'xs'
}) => css(_t$5 || (_t$5 = _$5`
    ${0} {
      position: sticky;
    }
    ${0}
  `), theme.bp[_from], _top ? css(_t2$4 || (_t2$4 = _$5`
          top: ${0};
        `), _top) : css(_t3$2 || (_t3$2 = _$5`
          top: 0;
        `))));

let _$6 = t => t,
    _t$6;

const Switch = ({
  onClick,
  state,
  size: _size = 150
}) => {
  return React.createElement(StyledSwitch, {
    size: _size,
    onClick: onClick,
    onMouseDown: e => e.preventDefault()
  }, React.createElement(motion.div, {
    className: 'inner',
    animate: state ? {
      background: 'darkslategray'
    } : {
      background: 'cornsilk'
    }
  }, React.createElement(motion.div, {
    className: 'switch',
    whileHover: {
      scale: 1.25
    },
    whileTap: {
      scale: 1.1
    },
    animate: state ? {
      x: _size - _size / 2.2
    } : {
      x: 0
    }
  }, React.createElement(Emoji, {
    label: 'moon emoji'
  }, state ? '🌚' : '🌝'))));
};

const StyledSwitch = styled.button(({
  size: _size2 = 150
}) => css(_t$6 || (_t$6 = _$6`
    font-size: ${0}px;
    line-height: 1.1;
    display: flex;

    .inner {
      width: ${0}px;
      border-radius: ${0}px;
      margin: 0 ${0};
    }

    .switch {
      position: relative;
      width: ${0}px;
      height: ${0}px;
      border-radius: ${0}px;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-50%);
        height: 100%;
        width: ${0}px;
        z-index: -1;
      }
    }
  `), _size2 / 2.2, _size2, _size2 / 2.2, _size2 / 4, _size2 / 2.2, _size2 / 2.2, _size2 / 2.2, _size2 * 2));

export { Animate, AnimateInView, Burger, Button, Container$1 as Container, Emoji, Spacer, Stack$1 as Stack, Stagger, Sticky, Switch };
//# sourceMappingURL=index.ts.modern.js.map
