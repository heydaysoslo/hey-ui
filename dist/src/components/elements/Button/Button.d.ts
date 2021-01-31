import React from 'react';
declare type Modifiers = 'small' | 'full';
export declare type Props = {
    children: React.ReactNode | React.ReactText;
    modifiers?: Modifiers | Modifiers[] | undefined;
    disabled?: boolean;
};
declare const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>>;
export default Button;
