import React from 'react';
import { transitions } from '../../../utilities/animation';
declare type Props = {
    /**
     * Name of transition
     */
    type?: keyof typeof transitions;
    className?: string;
};
declare const Animate: React.FC<Props>;
export default Animate;
