import React from 'react';
import {Pressable, PressableProps} from 'react-native';

import Text from '@core/components/Text';

import {
  baseStyles,
  primaryStyles,
  secondaryStyles,
  tertiaryStyles,
} from './styles';

const buttonPresetStyle: Record<ButtonPreset, typeof baseStyles> = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  tertiary: tertiaryStyles,
};

export default function Button({
  text,
  preset = 'primary',
  ...pressableProps
}: ButtonProps) {
  /**
   * Get the style of preset and return the primaryStyle when preset doesn't exist
   */
  const presetStyle = buttonPresetStyle[preset] || primaryStyles;

  return (
    <Pressable
      {...pressableProps}
      style={[baseStyles.container, presetStyle?.container]}>
      <Text variant="Medium" style={[baseStyles.text, presetStyle.text]}>
        {text}
      </Text>
    </Pressable>
  );
}

export type ButtonPreset = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  /**
   * Text to be rendered on butto
   */
  text: string;

  /**
   * Preset of Button
   * @default primary
   */
  preset?: ButtonPreset;
}
