import React from 'react';
declare type Modifiers = 'small' | 'disabled';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    modifiers?: Modifiers | Modifiers[] | undefined;
    onClick?: () => void;
};
declare const _default: import("styled-components").StyledComponent<React.FC<Props>, any, {}, never>;
export default _default;
