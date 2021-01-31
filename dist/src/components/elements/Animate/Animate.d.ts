import React from 'react';
import type { transitions as transitionType } from '../../../types';
export declare type Props = {
    /**
     * Name of transition
     */
    type?: transitionType;
    className?: string;
};
declare const Animate: React.FC<Props>;
export default Animate;
