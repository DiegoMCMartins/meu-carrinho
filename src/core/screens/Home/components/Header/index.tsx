import React from 'react';
import {View} from 'react-native';

import Text from '@core/components/Text';

import {styles} from './styles';

/**
 * Componente para renderizar o Header da tela Home
 */
export default function Header() {
  return (
    <View style={styles.container}>
      <Text variant="Medium" style={styles.title}>
        Minhas Listas
      </Text>
    </View>
  );
}
