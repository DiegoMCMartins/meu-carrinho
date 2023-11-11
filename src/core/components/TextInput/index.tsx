import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {
  MeuCarrinhoFont,
  MeuCarrinhoOptionalFontVariant,
  MeuCarrinhoRequiredFontVariant,
  resolveFontFamily,
} from '@core/styles/fonts';
import {colorVariations} from '@core/styles/colors';

/**
 * Wrapper do TextInput do React Native
 * Utilizado para lidar melhor com as fontes intaladas no projeto
 */
export default function TextInput({
  font = 'Raleway',
  fontVariant = 'Regular',
  style,
  placeholderTextColor = colorVariations.primary?.[400],
  selectionColor = colorVariations.primary?.[200],
  cursorColor = colorVariations.primary?.[500],
  ...props
}: TextInputProps) {
  const fontFamily = resolveFontFamily(font, fontVariant);

  const customStyle = {
    fontFamily,
  };

  return (
    <RNTextInput
      placeholderTextColor={placeholderTextColor}
      selectionColor={selectionColor}
      cursorColor={cursorColor}
      {...props}
      style={[customStyle, style]}
    />
  );
}

export interface TextInputProps extends RNTextInputProps {
  /**
   * Nome da fonte utilizada no texto
   * @default Raleway
   */
  font?: MeuCarrinhoFont;

  /**
   * Variação da fonte utilizada no text
   * @default Regular
   */
  fontVariant?: MeuCarrinhoRequiredFontVariant | MeuCarrinhoOptionalFontVariant;
}
