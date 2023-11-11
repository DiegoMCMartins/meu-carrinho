import React, {PropsWithChildren} from 'react';
import Modal from 'react-native-modal';

import {styles} from './styles';
import {colorVariations} from '@src/core/styles/colors';

export default function BottomSheet({
  isVisible = false,
  onRequestClose,
  children,
}: BottomSheetProps) {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection="down"
      hasBackdrop
      onBackButtonPress={onRequestClose}
      onBackdropPress={onRequestClose}
      onSwipeComplete={onRequestClose}
      style={styles.container}
      backdropColor={colorVariations.primary?.[900]}
      backdropOpacity={0.6}>
      {children}
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
