import { DefaultTheme } from 'styled-components';
declare type Modifiers = 'large' | 'small';
declare type PModifiers = {
    theme: DefaultTheme;
    modifiers?: Modifiers | Modifiers[] | null | undefined;
};
export declare const P: import("styled-components").StyledComponent<"p", any, PModifiers, never>;
export declare const H1: import("styled-components").StyledComponent<"h1", any, {}, never>;
export declare const H2: import("styled-components").StyledComponent<"h2", any, {}, never>;
export declare const H3: import("styled-components").StyledComponent<"h3", any, {}, never>;
export declare const OL: import("styled-components").StyledComponent<"ol", any, {}, never>;
export declare const OLItem: import("styled-components").StyledComponent<"li", any, {}, never>;
export declare const UL: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const ULItem: import("styled-components").StyledComponent<"li", any, {}, never>;
export {};
