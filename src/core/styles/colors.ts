/**
 * Color pallete generate from UiColors
 * @see https://uicolors.app/create
 */

/**
 * Color variations
 * Tailwind colors used for reference
 * @see https://tailwindcss.com/docs/customizing-colors
 */
export type ColorVariationType =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

/**
 * Object of color variations
 */
export type ColorVariation = Partial<Record<ColorVariationType, string>>;

/**
 * Colors used on project
 */
const colors = {
  primary: '#3E46C1',
  white: '#FFF',
  black: '#000',
  transparent: 'transparent',
};

export type Color = Exclude<keyof typeof colors, 'variations'>;

/**
 * Color variations
 */
export const colorVariations: Partial<Record<Color, ColorVariation>> = {
  primary: {
    50: '#eff5fe',
    100: '#e2ecfd',
    200: '#cadbfb',
    300: '#aac2f7',
    400: '#889ff1',
    500: '#6b7fe9',
    600: '#4f5adc',
    700: '#3e46c1',
    800: '#373f9c',
    900: '#333b7c',
    950: '#1e2248',
  },
};

export default colors;
