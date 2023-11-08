import React from 'react';

import FullContainer from '@core/components/FullContainer';
import colors from '@core/styles/colors';

import Header from './components/Header';

/**
 * Componente de UI da Home
 */
export default function Home() {
  return (
    <FullContainer backgroundColor={colors.white}>
      <Header />
    </FullContainer>
  );
}
