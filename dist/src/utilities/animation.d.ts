export declare const easings: {
    default: {
        duration: number;
        ease: number[];
    };
};
declare type transitions = 'stagger' | 'fadeInUp' | 'fadeIn';
export declare const transitions: {
    [key in transitions]: {
        initial: any;
        animate: any;
        exit?: any;
    };
};
export {};
