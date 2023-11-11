import React from 'react';
import {View} from 'react-native';

import BottomSheet from '@core/components/BottomSheet';
import {styles} from './styles';

/**
 * Component to create and update Shopping List Data
 */
export default function ShoppingListEditBottomSheet() {
  return (
    <BottomSheet isVisible>
      <View style={styles.container} />
    </BottomSheet>
  );
}
