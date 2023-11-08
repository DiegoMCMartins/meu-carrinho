import React from 'react';
import {View} from 'react-native';

import Text from '@core/components/Text';

import {shoppingListItemStyles} from './styles';
import {getFirstLetter} from '@core/utils';

/**
 * Item component of ShoppingList
 */
export default function ShoppingListItem({
  name = 'Bahamas',
  createdAt,
}: ShoppingListItemProps) {
  return (
    <View style={shoppingListItemStyles.container}>
      <View style={shoppingListItemStyles.iconContainer}>
        <Text style={shoppingListItemStyles.iconTextPlaceholder}>
          {getFirstLetter(name)}
        </Text>
      </View>
      <Text style={shoppingListItemStyles.name}>{name}</Text>
      {createdAt && (
        <Text style={shoppingListItemStyles.date}>{createdAt}</Text>
      )}
    </View>
  );
}

export interface ShoppingListItemData {
  id: number | string;
  name: string;
  createdAt?: string;
}

interface ShoppingListItemProps extends ShoppingListItemData {}
