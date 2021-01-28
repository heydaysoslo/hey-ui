import React from 'react';
import { transitions as transitionType } from '../../../types';
/**
 * Usage:
 *
 * <AnimateInView
 *   className="Card"
 *   activeClassName="Card--is-visible"
 *   onInView={props => console.log(props.inView ? `I'm in view` : `I'm not in view`)}
 *   element="span"
 * >
 *   // Add children
 * </AnimateInView>
 *
 * Other resources
 * 📚Package: https://www.npmjs.com/package/react-intersection-observer
 * 🎥 With react-spring:  https://github.com/thebuilder/react-intersection-observer/blob/HEAD/docs/Recipes.md#trigger-animations
 */
declare type Props = {
    /**
     * The amount of the element to be visible before triggering animation.
     * Number between 0 - 1.
     */
    threshold?: number;
    /**
     * Handler when element get into or out of view (threshold).
     */
    onInView?: (args: {
        inView?: boolean;
        ref?: (node?: Element) => void;
        entry?: IntersectionObserverEntry;
    }) => void;
    /**
     * Trigger animation multiple times.
     * Defaults to true.
     */
    triggerOnce?: boolean;
    /**
     * Name of transition
     */
    transition?: transitionType;
};
declare const _default: import("styled-components").StyledComponent<React.FC<Props>, any, {}, never>;
export default _default;
