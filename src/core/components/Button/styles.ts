import {StyleSheet} from 'react-native';

import colors from '@core/styles/colors';

export const baseStyles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
  },
});

export const primaryStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
  },
});

export const secondaryStyles = StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  text: {
    color: colors.primary,
  },
});

export const tertiaryStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
  },
  text: {
    color: colors.primary,
  },
});
