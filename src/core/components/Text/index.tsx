import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

/**
 * Wrapper do Text do React Native
 * Utilizado para lidar melhor com as fontes intaladas no projeto
 * @todo Ajustar para trocar o estilos da fonte Montserrat
 */
export default function Text(props: TextProps) {
  return <RNText {...props} />;
}

export type TextProps = RNTextProps;
