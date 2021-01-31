import { BreakpointKeys } from '../../../../example/src/styles/utilities/breakpointsFactory';
export declare type Props = {
    /**
     * css value determines when to stick from top.
     *
     * @example var(--header-height) | 20px | 50rem
     */
    top?: string;
    /**
     * @note defaults to xs
     */
    from?: BreakpointKeys;
};
declare const Sticky: import("styled-components").StyledComponent<"div", any, Props, never>;
export default Sticky;
