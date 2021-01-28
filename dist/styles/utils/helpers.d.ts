import { FlattenSimpleInterpolation, DefaultTheme } from 'styled-components';
declare type applyModifier = (modifier: string, css: FlattenSimpleInterpolation) => (args: {
    theme: DefaultTheme;
    modifiers?: string[] | string | null | undefined;
}) => FlattenSimpleInterpolation | null;
export declare const applyModifier: applyModifier;
export {};
