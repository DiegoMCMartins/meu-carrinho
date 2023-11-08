import {StyleSheet} from 'react-native';

import {colorVariations} from '@core/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnContainer: {
    columnGap: 8,
  },
  contentContainerStyle: {
    padding: 20,
    rowGap: 8,
  },
});

export const shoppingListItemStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colorVariations.primary?.[400],
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    aspectRatio: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
  },
  iconContainer: {
    backgroundColor: colorVariations.primary?.[100],
    padding: 8,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 12,
  },
  iconTextPlaceholder: {
    color: colorVariations.primary?.[800],
    fontSize: 24,
  },
  name: {
    color: colorVariations.primary?.[950],
    fontSize: 16,
  },
  date: {
    color: colorVariations.primary?.[500],
    fontSize: 14,
  },
});
