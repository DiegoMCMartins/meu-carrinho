import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

import {
  MeuCarrinhoFont,
  MeuCarrinhoOptionalFontVariant,
  MeuCarrinhoRequiredFontVariant,
  resolveFontFamily,
} from '@core/styles/fonts';

/**
 * Wrapper do Text do React Native
 * Utilizado para lidar melhor com as fontes intaladas no projeto
 */
export default function Text({
  font = 'Raleway',
  variant = 'Regular',
  ...props
}: TextProps) {
  const fontFamily = resolveFontFamily(font, variant);

  const customStyle = {
    fontFamily,
  };

  return <RNText {...props} style={[customStyle, props.style]} />;
}

export interface TextProps extends RNTextProps {
  /**
   * Nome da fonte utilizada no texto
   * @default Raleway
   */
  font?: MeuCarrinhoFont;

  /**
   * Variação da fonte utilizada no text
   * @default Regular
   */
  variant?: MeuCarrinhoRequiredFontVariant | MeuCarrinhoOptionalFontVariant;
}
