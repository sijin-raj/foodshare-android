import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors, { palette } from '../../theme/colors';
import spacing from '../../theme/spacing';

export type Sizes = 'small' | 'medium' | 'big' | 'squareIcon' | 'inlineIcon';
export type Themes = 'primary' | 'secondary' | 'grey' | 'tertiary';

export default StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  icon: {
    padding: spacing.mini2,
  },
  inlineIcon: {
    flexDirection: 'row',
  },
});

export const themeStyle: Record<Themes, ViewStyle> = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.white,
  },
  tertiary: {
    backgroundColor: colors.secondary,
  },
  grey: {
    backgroundColor: colors.light,
  },
});

export const pressedStyle: Record<Themes, ViewStyle> = StyleSheet.create({
  primary: {
    backgroundColor: palette.primary.dark,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  tertiary: {
    backgroundColor: colors.dark,
  },
  grey: {
    backgroundColor: colors.dark,
  },
});

export const sizeStyle: Record<Sizes, ViewStyle> = StyleSheet.create({
  small: {
    padding: spacing.small1,
  },
  medium: {
    padding: spacing.small3,
  },
  big: {
    padding: spacing.medium1,
  },
  squareIcon: {
    padding: spacing.small1,
    width: 75,
    height: 70,
  },
  inlineIcon: {
    padding: spacing.small4,
  },
});

export const iconColor: Record<Themes, TextStyle> = StyleSheet.create({
  primary: {
    color: colors.white,
  },
  secondary: {
    color: palette.primary.dark,
  },
  tertiary: {
    color: colors.primary,
  },
  grey: {
    color: colors.primary,
  },
});
