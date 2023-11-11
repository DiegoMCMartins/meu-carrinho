import React, {PropsWithChildren} from 'react';
import {Modal, View} from 'react-native';

import {styles} from './styles';

export default function BottomSheet({
  isVisible = false,
  onRequestClose,
  children,
}: BottomSheetProps) {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}

export interface BottomSheetProps extends PropsWithChildren {
  /**
   * Conditional to controle the modal's visibility
   * @default false
   */
  isVisible?: boolean;

  /**
   * Function to execute when modal close
   */
  onRequestClose?: () => void;
}
