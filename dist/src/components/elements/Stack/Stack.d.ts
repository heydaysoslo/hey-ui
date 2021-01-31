import React from 'react';
import { Props as SpacerProps } from '../Spacer/Spacer';
declare type Props = {
    className?: string;
    /**
     * Space value only between elements.
     *
     * @note To set space at the ends use spaceEnds | spaceEndsStart | spaceEndsEnd
     */
    space?: SpacerProps['size'];
    reverse?: boolean;
    /**
     * Set the direction of the elements.
     * row for horizontal and column for vertical.
     * @note defaults to column (vertical)
     */
    direction?: 'row' | 'column';
    /**
     * Setting to true sets same space as others
     *
     * To set different spacing at the ends pass a spacing value.
     * @note If you want to space ends seperatly use spaceEndsStart | spaceEndsEnd
     */
    spaceEnds?: boolean | SpacerProps['size'];
    /**
     * Sets spacing in the start of the stack
     * @note If you want the same space for end and start use spaceEnds
     */
    spaceEndsStart?: boolean | SpacerProps['size'];
    /**
     * Sets spacing in the end of the stack
     * @note If you want the same space for end and start use spaceEnds
     */
    spaceEndsEnd?: boolean | SpacerProps['size'];
};
declare const _default: import("styled-components").StyledComponent<React.FC<Props>, any, {}, never>;
export default _default;
