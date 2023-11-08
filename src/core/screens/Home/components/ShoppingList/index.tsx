import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';

import EnhancedFlatList from '@core/components/EnhancedFlatList';

import ShoppingListItem, {ShoppingListItemData} from './ShoppingListItem';
import {styles} from './styles';

/**
 * @todo Adjust grid, adding hidden components to organize the last row
 */
export default function ShoppingList({shoppingList = []}: ShoppingListProps) {
  const renderShoppingListItem = ({
    item,
  }: ListRenderItemInfo<ShoppingListItemData>) => {
    return <ShoppingListItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <EnhancedFlatList
        data={shoppingList}
        renderItem={renderShoppingListItem}
        keyExtractor={item => `${item.id}`}
        numColumns={2}
        columnWrapperStyle={styles.columnContainer}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

export interface ShoppingListProps {
  /**
   * Shopping List
   * @default []
   */
  shoppingList: ShoppingListItemData[];
}
