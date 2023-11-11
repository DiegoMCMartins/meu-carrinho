import React from 'react';
import {View} from 'react-native';

import TextInput from '@core/components/TextInput';
import Text from '@core/components/Text';

import {styles} from './styles';

export default function TextInputField({
  label = '',
  placeholder = '',
}: TextInputFieldProps) {
  return (
    <View style={styles.container}>
      <Text variant="SemiBold" style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        fontVariant="Medium"
      />
    </View>
  );
}

export interface TextInputFieldProps {
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
