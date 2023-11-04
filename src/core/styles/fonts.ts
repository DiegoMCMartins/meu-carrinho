/**
 * Nome das fontes utilizadas no projeto
 * Novas fontes intaladas devem ser referenciadas aqui
 */
export type MeuCarrinhoFont = 'Raleway';

/**
 * Variações obrigatorias das fontes
 * Novas variações obrigatorias devem ser adicionadas aqui
 */
export type MeuCarrinhoRequiredFontVariant = 'Regular';

/**
 * Variações opcionais das fontes
 * Novas variações opcionais devem ser adicionadas aqui
 */
export type MeuCarrinhoOptionalFontVariant =
  | 'Thin'
  | 'Light'
  | 'Medium'
  | 'SemiBold'
  | 'Bold';

/**
 * Interface para mapear o font family de cada variação da fonte
 */
export type MeuCarrinhoFontFamily = Partial<
  Record<MeuCarrinhoOptionalFontVariant, string>
> &
  Record<MeuCarrinhoRequiredFontVariant, string>;

/**
 * Configuração do font family das variações do Raleway
 * Realizar o mesmo procedimento para outras fontes
 */
const ralewayFont: MeuCarrinhoFontFamily = {
  Regular: 'Raleway-Regular',
  Thin: 'Raleway-Thin',
  Light: 'Raleway-Light',
  Bold: 'Raleway-Bold',
  Medium: 'Raleway-Medium',
  SemiBold: 'Raleway-SemiBold',
};

/**
 * Objeto das fontes com as variações
 */
const fonts: Record<MeuCarrinhoFont, MeuCarrinhoFontFamily> = {
  Raleway: ralewayFont,
};

/**
 * Função para resolver a font family da Fonte + Variação
 * @param font Fonte selecionada. Ex: Raleway
 * @param variant Variação da fonte. Ex: Regular
 * @returns {string} Font Family da fonte + variacao
 */
export const resolveFontFamily = (
  font: MeuCarrinhoFont,
  variant: MeuCarrinhoRequiredFontVariant | MeuCarrinhoOptionalFontVariant,
) => {
  const possibleFont = fonts[font];

  /**
   * Caso não exista um fonte com esse nome, retorna como padrão o Raleway Regular
   * @todo Adicionar logger para informar que a fonte não existe
   */
  if (!possibleFont) {
    return fonts.Raleway.Regular;
  }

  /**
   * Caso não exista a variação da fonte, retorna como padrão o Regular da fonte
   * @todo Adicionar logger para informar que a variação da fonte não existe
   */
  if (!variant || !possibleFont[variant]) {
    return possibleFont.Regular;
  }

  /**
   * Caso não seja tratado a fonte, retonar como padrão o Raleway Regular
   */
  return possibleFont[variant];
};

export default fonts;
