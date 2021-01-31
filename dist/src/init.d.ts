import type { DefaultTheme } from 'styled-components';
declare class Theme {
    theme: DefaultTheme | null;
    constructor(theme: DefaultTheme | null);
    getTheme(): DefaultTheme | null;
    setTheme(theme: DefaultTheme): void;
}
declare const _default: Theme;
export default _default;
