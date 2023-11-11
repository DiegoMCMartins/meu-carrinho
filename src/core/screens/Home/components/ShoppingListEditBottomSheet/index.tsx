import React from 'react';
import {View} from 'react-native';

import BottomSheet from '@core/components/BottomSheet';
import Text from '@core/components/Text';
import TextInputField from '@core/components/InputFields/TextInputField';
import Button from '@core/components/Button';

import {styles} from './styles';

/**
 * Component to create and update Shopping List Data
 */
export default function ShoppingListEditBottomSheet({
  isEditing = false,
  isVisible = false,
}: ShoppingListEditBottomSheetProps) {
  const title = isEditing ? 'Editar Lista' : 'Nova Lista';

  return (
    <BottomSheet isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text variant="SemiBold" style={styles.headerTitle}>
            {title}
          </Text>
        </View>
        <TextInputField label="Nome" placeholder="Nome da lista" />
        <Button text="Salvar" />
      </View>
    </BottomSheet>
  );
}

export interface ShoppingListEditBottomSheetProps {
  /**
   * Conditional to check if the modal is for editting the data
   * @default false
   */
  isEditing?: boolean;

  /**
   * Conditional to open and close the modal
   * @default false
   */
  isVisible?: boolean;
}
