import {StyleSheet} from 'react-native';

import colors, {colorVariations} from '@core/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 20,
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
  },
  iconContainer: {
    backgroundColor: colorVariations.primary?.[100],
    padding: 12,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 12,
  },
  iconTextPlaceholder: {
    color: colorVariations.primary?.[800],
    fontSize: 28,
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

export const emptyShoppingListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colorVariations.primary?.[950],
    fontSize: 20,
    textAlign: 'center',
  },
});
