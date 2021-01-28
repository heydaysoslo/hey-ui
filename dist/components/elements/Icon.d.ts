import { icons } from '../../styles/themes/defaultTheme';
/**
 *
 * Converts svg files from icons folder into react components with inline svg.
 * To change folder see `gatsby-config.js` and query below
 *
 * Usage:
 * <Icon name="facebook" modifiers="small" />
 * <Icon name="twitter" />
 * <Icon name="instagram" color="orange"/>
 * <Icon name="email" modifiers="large" />
 *
 * @param {string} name // name of the icon file without extension.
 * @param {string} color // overrides colors
 */
declare type Name = 'email' | 'facebook' | 'instagram' | 'linkedin' | 'pinterest' | 'podcast' | 'spotify' | 'twitter' | 'rss';
declare type Modifiers = keyof typeof icons;
declare type Props = {
    name: Name;
    color?: string;
    className?: string;
    modifiers?: Modifiers | Modifiers[];
};
declare const _default: import("styled-components").StyledComponent<({ className, name }: Props) => JSX.Element | null, any, Props, never>;
export default _default;
