import React from 'react';

import FullContainer from '@core/components/FullContainer';
import colors from '@core/styles/colors';

import Header from './components/Header';
import ShoppingList from './components/ShoppingList';

/**
 * Componente de UI da Home
 */
export default function Home() {
  return (
    <FullContainer backgroundColor={colors.white}>
      <Header />
      <ShoppingList />
    </FullContainer>
  );
}
