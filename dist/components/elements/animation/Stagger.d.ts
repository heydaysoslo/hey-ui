import React from 'react';
import { transitions as transitionsType } from '../../../types';
declare type Props = {
    /**
     * Name of transition
     */
    type?: transitionsType;
    className?: string;
    childrenClassName?: string;
};
declare const Stagger: React.FC<Props>;
export default Stagger;
