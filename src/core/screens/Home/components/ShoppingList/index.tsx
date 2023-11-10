import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';

import ShoppingListItem, {ShoppingListItemData} from './ShoppingListItem';
import {styles} from './styles';

import GridFlatList from '@src/core/components/GridFlatList';
import EmptyShoppingList from './EmptyShoppingList';

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
      <GridFlatList
        data={shoppingList}
        renderItem={renderShoppingListItem}
        keyExtractor={item => `${item.id}`}
        numColumns={2}
        gap={8}
        contentContainerStyle={styles.contentContainerStyle}
        EmptyElement={<EmptyShoppingList />}
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
