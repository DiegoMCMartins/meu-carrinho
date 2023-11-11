import React from 'react';

import FullContainer from '@core/components/FullContainer';
import colors from '@core/styles/colors';

import Header from './components/Header';
import ShoppingList from './components/ShoppingList';
import {ShoppingListItemData} from './components/ShoppingList/ShoppingListItem';
import ShoppingListEditBottomSheet from './components/ShoppingListEditBottomSheet';

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
  {
    id: 10,
    name: 'Fontes',
    createdAt: '07/11/2023',
  },
  {
    id: 11,
    name: 'Fontes',
    createdAt: '07/11/2023',
  },
];

/**
 * Componente de UI da Home
 */
export default function Home() {
  return (
    <FullContainer backgroundColor={colors.white}>
      <Header />
      <ShoppingList shoppingList={DUMMY_SHOPPING_LIST} />
      <ShoppingListEditBottomSheet isVisible />
    </FullContainer>
  );
}
