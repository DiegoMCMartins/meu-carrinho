import {StyleSheet} from 'react-native';

import colors, {colorVariations} from '@core/styles/colors';

export const styles = StyleSheet.create({
  container: {
    minHeight: 300,
    width: '100%',
    backgroundColor: colorVariations.primary?.[100],
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  headerContainer: {},
  headerTitle: {
    fontSize: 24,
    color: colors.primary,
  },
});
