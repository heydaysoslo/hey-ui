import React from 'react';
import { transitions as transitionsType } from 'types';
declare type Props = {
    /**
     * Name of transition
     */
    type?: transitionsType;
    className?: string;
};
declare const Animate: React.FC<Props>;
export default Animate;
