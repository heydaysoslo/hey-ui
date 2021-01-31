import React from 'react';
import { BreakpointKeys } from '../../../../example/src/styles/utilities/breakpointsFactory';
declare type Sticky = {
    className?: string;
    /**
     * css value determines when to stick from top.
     *
     * @example var(--header-height) | 20px | 50rem
     */
    top: string;
    /**
     * @note defaults to xs
     */
    from?: BreakpointKeys;
};
declare const Sticky: React.FC<Sticky>;
declare const _default: import("styled-components").StyledComponent<React.FC<Sticky>, any, {}, never>;
export default _default;
