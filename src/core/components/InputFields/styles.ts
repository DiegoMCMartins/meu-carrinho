import {StyleSheet} from 'react-native';

import colors, { colorVariations } from '@core/styles/colors';

export const styles = StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 14,
    color: colors.primary,
  },
  textInput: {
    fontSize: 16,
    color: colorVariations.primary?.[950],
    margin: 0,
    padding: 0,
    marginTop: 4,
  },
});
