import React from 'react';
import { Props } from './Emoji';
declare const _default: {
    title: string;
    component: React.FC<Props>;
    description: string;
    argTypes: {
        text: {
            control: string;
        };
    };
};
export default _default;
export declare const Main: React.VFC<Props & {
    text: string;
}>;
