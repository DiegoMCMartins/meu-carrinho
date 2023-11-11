import React from 'react';
import {View} from 'react-native';

import TextInput, {TextInputProps} from '@core/components/TextInput';
import Text from '@core/components/Text';

import {styles} from './styles';

export default function TextInputField({
  label = '',
  placeholder = '',
  ...textInputProps
}: TextInputFieldProps) {
  return (
    <View style={styles.container}>
      <Text variant="SemiBold" style={styles.label}>
        {label}
      </Text>
      <TextInput
        {...textInputProps}
        style={styles.textInput}
        placeholder={placeholder}
        fontVariant="Medium"
      />
    </View>
  );
}

export interface TextInputFieldProps
  extends Omit<TextInputProps, 'style' | 'font' | 'fontVariant'> {
  /**
   * Label of text input
   * Will not be rendered when label isn't setted
   * @default ""
   */
  label?: string;

  /**
   * Placeholder of the input
   */
  placeholder?: string;
}
