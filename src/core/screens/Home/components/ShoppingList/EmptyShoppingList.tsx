import React from 'react';
import {View} from 'react-native';

import {emptyShoppingListStyles} from './styles';
import Text from '@src/core/components/Text';

/**
 * Component to be rendered when Shopping List is empty
 */
export default function EmptyShoppingList() {
  return (
    <View style={emptyShoppingListStyles.container}>
      <Text variant="Medium" style={emptyShoppingListStyles.text}>
        Parece que você não possui nenhuma lista
      </Text>
    </View>
  );
}
