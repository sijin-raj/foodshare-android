import { Platform, StyleSheet, TextStyle } from 'react-native';
import colors, { palette } from '../../theme/colors';

export type Color =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'dark'
  | 'white'
  | 'black';

export type Size =
  | 'button-8'
  | 'button-10'
  | 'button-22'
  | 'body-10'
  | 'body-12'
  | 'body-14'
  | 'body-16'
  | 'body-20'
  | 'body-22'
  | 'head-20'
  | 'head-24'
  | 'head-30';

export default StyleSheet.create({
  base: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
    includeFontPadding: false,
  },
});

export const sizeTheme: Record<Size, TextStyle> = StyleSheet.create({
  'body-10': {
    fontSize: 10,
    lineHeight: 13,
  },
  'body-14': {
    fontSize: 14,
    lineHeight: 18,
  },
  'body-12': {
    fontSize: 12,
    lineHeight: 16,
  },
  'body-16': {
    fontSize: 16,
    lineHeight: 20,
  },
  'body-20': {
    fontSize: 20,
    lineHeight: 24,
  },
  'body-22': {
    fontSize: 22,
    lineHeight: 24,
  },
  'button-8': {
    fontSize: 8,
    lineHeight: 10,
  },
  'button-10': {
    fontSize: 10,
    lineHeight: 10,
  },
  'button-22': {
    fontSize: 22,
    lineHeight: 28,
  },
  'head-20': {
    fontSize: 20,
    lineHeight: 25,
  },
  'head-24': {
    fontSize: 24,
    lineHeight: 30,
  },
  'head-30': {
    fontSize: 30,
    lineHeight: 38,
  },
});

export const colorTheme: Record<Color, TextStyle> = StyleSheet.create({
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: palette.primary.dark,
  },
  light: {
    color: colors.light,
  },
  dark: {
    color: colors.dark,
  },
  white: {
    color: colors.white,
  },
  black: {
    color: colors.black,
  },
});
