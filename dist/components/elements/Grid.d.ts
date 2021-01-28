import React from 'react';
import { BreakpointKeys } from 'styles/utilities/breakpointsFactory';
import { SpacingSizes } from 'styles/utilities/spacingFactory';
import { FlexBoxAlignItems, FlexBoxJustifyContent } from '../../types';
declare type gapItem = boolean | number | SpacingSizes;
declare type gap = Partial<Record<BreakpointKeys, gapItem>> | gapItem;
declare type Props = {
    className?: string;
    /**
     * Flips the order
     */
    reverse?: Partial<Record<BreakpointKeys, boolean>> | boolean;
    /**
     * Align items
     */
    align?: FlexBoxAlignItems;
    /**
     * Justify items
     */
    justify?: FlexBoxJustifyContent;
    /**
     * Horizontal + Vertical gap on columns.
     *
     * Boolean sets gutter as spacing. If false it removes the gap.
     *
     * Number sets a pixel value.
     *
     * String must match a spacing function value eg. xs
     */
    gap?: gap;
    /**
     * Vertical gap on columns.
     *
     * Boolean sets gutter as spacing. If false it removes the gap.
     *
     * Number sets a pixel value.
     *
     * String must match a spacing function value eg. xs
     */
    gapY?: gap;
    /**
     * Horizontal gap on columns.
     *
     * Boolean sets gutter as spacing. If false it removes the gap.
     *
     * Number sets a pixel value.
     *
     * String must match a spacing function value eg. xs
     */
    gapX?: gap;
};
declare type Columns = Partial<Record<BreakpointKeys, number>>;
declare type GridItemProps = {
    /**
     * Amount of columns to span. Takes a reponsive object with values between 0 and usually 12
     * (the number set in your theme under grid.columns)
     *
     * @example
     * ```jsx
     * <Grid span={{xs: 6, md: 0}} />
     * ```
     *
     * xs defaults to full width
     */
    span: Columns;
    className?: string;
    /**
     * Amount of offset. Takes a reponsive object with values between 0 and usually 12
     * (the number set in your theme under grid.columns)
     *
     * eg:
     * <Grid offset={{md: 6}} />
     *
     * Offset only takes effect from where it begins eg. in case above xs && sm === 0
     */
    offset?: Columns;
};
export declare const GridItem: import("styled-components").StyledComponent<React.FC<GridItemProps>, any, GridItemProps, never>;
declare const _default: import("styled-components").StyledComponent<React.FC<Props>, any, Props, never>;
export default _default;
