import React, { useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';

var easings = {
  "default": {
    duration: 1,
    ease: [0.4, 0.0, 0.2, 1]
  }
};
var transitions = {
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
      transition: easings["default"]
    },
    initial: {
      opacity: 0,
      y: 50,
      transition: easings["default"]
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
      transition: easings["default"]
    },
    initial: {
      opacity: 0,
      transition: easings["default"]
    }
  }
};

var Animate = function Animate(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'fadeInUp' : _ref$type;
  return React.createElement(motion.div, Object.assign({
    className: className
  }, transitions[type], {
    exit: transitions[type].exit || transitions[type].initial
  }), children);
};

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

var AnimateInView = function AnimateInView(_ref) {
  var children = _ref.children,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.25 : _ref$threshold,
      onInView = _ref.onInView,
      _ref$triggerOnce = _ref.triggerOnce,
      triggerOnce = _ref$triggerOnce === void 0 ? true : _ref$triggerOnce,
      _ref$transition = _ref.transition,
      transition = _ref$transition === void 0 ? 'fadeInUp' : _ref$transition,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "threshold", "onInView", "triggerOnce", "transition"]);

  var _useInView = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce
  }),
      ref = _useInView[0],
      inView = _useInView[1],
      entry = _useInView[2];

  useEffect(function () {
    if (onInView) {
      onInView({
        inView: inView,
        ref: ref,
        entry: entry
      });
    }
  }, [onInView, inView, ref, entry]);
  return React.createElement(motion.div, Object.assign({
    variants: transitions[transition],
    animate: inView ? 'visible' : 'hidden',
    ref: ref
  }, props), children);
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n      .inner {\n        transition-delay: 0.12s;\n        transition-timing-function: ", ";\n        transform: rotate(45deg);\n        :before {\n          top: 0;\n          transition: top 75ms ease, opacity 75ms ease 0.12s;\n          opacity: 0;\n        }\n        :after {\n          bottom: 0;\n          transition: bottom 75ms ease, transform 75ms ", " 0.12s;\n          transform: rotate(-90deg);\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    // Make sure click-rect is big enough for usability\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n\n    // Lines container\n    .box {\n      position: relative;\n      display: block;\n      width: ", "px;\n      height: ", "px;\n    }\n\n    // Lines\n    .inner,\n    .inner:after,\n    .inner:before {\n      position: absolute;\n      width: 100%;\n      height: ", "px;\n      background-color: ", ";\n    }\n\n    .inner {\n      transition-timing-function: ", ";\n      transition-duration: 75ms;\n      top: 50%;\n      display: block;\n      margin-top: -", "px;\n      :before,\n      :after {\n        display: block;\n        content: '';\n      }\n      :before {\n        transition: top 75ms ease 0.12s, opacity 75ms ease;\n        top: -", "px;\n      }\n      :after {\n        transition: bottom 75ms ease 0.12s, transform 75ms ", ";\n        bottom: -", "px;\n      }\n    }\n\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Burger = function Burger(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: className
  }, React.createElement("span", {
    className: 'box'
  }, React.createElement("span", {
    className: 'inner'
  })));
};

var Burger$1 = styled(Burger)(function (_ref2) {
  var theme = _ref2.theme,
      active = _ref2.active,
      _ref2$thickness = _ref2.thickness,
      thickness = _ref2$thickness === void 0 ? 2 : _ref2$thickness,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 32 : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? 24 : _ref2$height,
      _ref2$easeIn = _ref2.easeIn,
      easeIn = _ref2$easeIn === void 0 ? 'cubic-bezier(.55,.055,.675,.19)' : _ref2$easeIn,
      _ref2$easeOut = _ref2.easeOut,
      easeOut = _ref2$easeOut === void 0 ? 'cubic-bezier(0.215, 0.61, 0.355, 1)' : _ref2$easeOut;
  return css(_templateObject(), width, height, thickness, theme.colors.text, easeIn, thickness / 2, height / 2 - thickness / 2, easeIn, height / 2 - thickness / 2, active && css(_templateObject2(), easeOut, easeOut));
});

var applyModifier = function applyModifier(modifier, css) {
  return function (_ref) {
    var modifiers = _ref.modifiers;
    if (!modifiers) return null;
    return modifiers === modifier || modifiers.includes(modifier) ? css : null;
  };
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n        padding: 0;\n      "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n    appearance: none;\n    background: none;\n    display: inline-block;\n    border: 2px solid transparent;\n    background-color: ", ";\n    color: ", ";\n    font-size: 2rem;\n    padding: 20px;\n    transition: 0.15s ease background-color, color;\n    cursor: pointer;\n    ", ";\n    ", "\n\n    [disabled] {\n      opacity: 0.5;\n      pointer-events: none;\n    }\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n    }\n\n    ", "\n  "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "className"]);

  return React.createElement("button", Object.assign({
    className: className,
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    }
  }, props), children);
};

var Button$1 = styled(Button)(function (_ref2) {
  var t = _ref2.theme;
  return css(_templateObject$1(), t.colors.text, t.colors.background, t.fonts.h1(), t.spacing.section('mt'), t.colors.background, t.colors.text, t.colors.primary, applyModifier('small', css(_templateObject2$1())));
});

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n    max-width: 160rem;\n    margin-left: auto;\n    margin-right: auto;\n    ", "\n    // Remove outer padding from nested containers\n    & & {\n      padding-left: 0;\n      padding-right: 0;\n      max-width: none;\n    }\n  "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: className
  }, children);
};

var Container$1 = styled(Container)(function (_ref2) {
  var theme = _ref2.theme;
  return css(_templateObject$2(), theme.spacing.container('px'));
});

var Emoji = function Emoji(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return React.createElement("span", {
    role: 'img',
    "aria-label": label
  }, children);
};

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n    ", ";\n    ", ";\n  "]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var Spacer = function Spacer(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: className
  });
};

var Spacer$1 = styled(Spacer)(function (_ref2) {
  var theme = _ref2.theme,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'md' : _ref2$size,
      custom = _ref2.custom;
  return css(_templateObject$3(), !custom && theme.spacing[size]('height'), custom && "height: " + custom);
});

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n          flex-direction: ", ";\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n          flex-direction: ", "-reverse;\n        "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    flex-direction: ", ";\n    ", "\n  "]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var Stack = function Stack(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 'md' : _ref$space,
      spaceEnds = _ref.spaceEnds,
      spaceEndsStart = _ref.spaceEndsStart,
      spaceEndsEnd = _ref.spaceEndsEnd,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "space", "spaceEnds", "spaceEndsStart", "spaceEndsEnd"]);

  return React.createElement("div", Object.assign({
    className: className
  }, props), spaceEnds && React.createElement(Spacer$1, {
    size: typeof spaceEnds === 'string' ? spaceEnds : space
  }), spaceEndsStart && React.createElement(Spacer$1, {
    size: typeof spaceEndsStart === 'string' ? spaceEndsStart : space
  }), Array.isArray(children) ? children.map(function (child, i) {
    return React.createElement(Fragment, {
      key: "stack-" + i
    }, child, i !== children.length - 1 && React.createElement(Spacer$1, {
      size: space
    }));
  }) : children, spaceEndsEnd && React.createElement(Spacer$1, {
    size: typeof spaceEndsEnd === 'string' ? spaceEndsEnd : space
  }), spaceEnds && React.createElement(Spacer$1, {
    size: typeof spaceEnds === 'string' ? spaceEnds : space
  }));
};

var Stack$1 = styled(Stack)(function (_ref2) {
  var reverse = _ref2.reverse,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'column' : _ref2$direction;
  return css(_templateObject$4(), direction, reverse ? css(_templateObject2$2(), direction) : css(_templateObject3(), direction));
});

var ID = nanoid(10);

var Stagger = function Stagger(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'fadeInUp' : _ref$type,
      _ref$childrenClassNam = _ref.childrenClassName,
      childrenClassName = _ref$childrenClassNam === void 0 ? '' : _ref$childrenClassNam,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "type", "childrenClassName"]);

  return React.createElement(motion.div, Object.assign({
    className: className,
    variants: transitions.stagger,
    initial: 'initial',
    animate: 'animate',
    exit: 'initial'
  }, props), Array.isArray(children) && children.map(function (child, i) {
    return React.createElement(motion.div, {
      className: childrenClassName,
      key: "stagger-child-" + ID + "-" + i,
      variants: transitions[type]
    }, child);
  }));
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n          top: 0;\n        "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n          top: ", ";\n        "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n    ", " {\n      position: sticky;\n    }\n    ", "\n  "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var Sticky = function Sticky(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: className
  }, children);
};

var Sticky$1 = styled(Sticky)(function (_ref2) {
  var theme = _ref2.theme,
      top = _ref2.top,
      _ref2$from = _ref2.from,
      from = _ref2$from === void 0 ? 'xs' : _ref2$from;
  return css(_templateObject$5(), theme.bp[from], top ? css(_templateObject2$3(), top) : css(_templateObject3$1()));
});

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: ", "px;\n    line-height: 1.1;\n    display: flex;\n\n    .inner {\n      width: ", "px;\n      border-radius: ", "px;\n      margin: 0 ", ";\n    }\n\n    .switch {\n      position: relative;\n      width: ", "px;\n      height: ", "px;\n      border-radius: ", "px;\n\n      &:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        transform: translateX(-50%);\n        height: 100%;\n        width: ", "px;\n        z-index: -1;\n      }\n    }\n  "]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

var Switch = function Switch(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      state = _ref.state,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 150 : _ref$size;
  return React.createElement("button", {
    className: className,
    onClick: onClick,
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    }
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
      x: size - size / 2.2
    } : {
      x: 0
    }
  }, React.createElement(Emoji, {
    label: 'moon emoji'
  }, state ? '🌚' : '🌝'))));
};

var Switch$1 = styled(Switch)(function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 150 : _ref2$size;
  return css(_templateObject$6(), size / 2.2, size, size / 2.2, size / 4, size / 2.2, size / 2.2, size / 2.2, size * 2);
});

export { Animate, AnimateInView, Burger$1 as Burger, Button$1 as Button, Container$1 as Container, Emoji, Spacer$1 as Spacer, Stack$1 as Stack, Stagger, Sticky$1 as Sticky, Switch$1 as Switch };
//# sourceMappingURL=index.ts.modern.js.map
