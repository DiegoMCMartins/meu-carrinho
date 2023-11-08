import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';

import EnhancedFlatList from '@core/components/EnhancedFlatList';

import ShoppingListItem, {ShoppingListItemData} from './ShoppingListItem';
import {styles} from './styles';

const DUMMY_SHOPPING_LIST: ShoppingListItemData[] = [
  {
    id: 1,
    name: 'Bahamas',
    createdAt: '07/11/2023',
  },
  {
    id: 2,
    name: 'Morais',
  },
  {
    id: 3,
    name: 'BH',
    createdAt: '07/11/2023',
  },
  {
    id: 4,
    name: 'Fontes',
    createdAt: '07/11/2023',
  },
  {
    id: 5,
    name: 'Bahamas',
    createdAt: '07/11/2023',
  },
  {
    id: 6,
    name: 'Morais',
  },
  {
    id: 7,
    name: 'BH',
    createdAt: '07/11/2023',
  },
  {
    id: 8,
    name: 'Fontes',
    createdAt: '07/11/2023',
  },
  {
    id: 9,
    name: 'Fontes',
    createdAt: '07/11/2023',
  },
];

/**
 * @todo Adjust grid, adding hidden components to organize the last row
 */
export default function ShoppingList() {
  const renderShoppingListItem = ({
    item,
  }: ListRenderItemInfo<ShoppingListItemData>) => {
    return <ShoppingListItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <EnhancedFlatList
        data={DUMMY_SHOPPING_LIST}
        renderItem={renderShoppingListItem}
        keyExtractor={item => `${item.id}`}
        numColumns={2}
        columnWrapperStyle={styles.columnContainer}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}
