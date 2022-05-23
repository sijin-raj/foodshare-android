export const palette = {
  primary: {
    lightest: '#e6f8fb',
    lighter: '#E4FBEE',
    light: '#A9F5C8',
    base: '#1E8449',
    dark: '#008394',
    darker: '#004b55',
  },
  secondary: {
    lighter: '#f8fafc',
    light: '#f2f7f9',
    base: '#edf3f7',
    dark: '#a6aaad',
    darker: '#5f6163',
  },
  danger: {
    lighter: '#ffbca7',
    light: '#ff8964',
    base: '#ff5722',
    dark: '#b33d18',
    darker: '#66230e',
  },
  cheer: {
    lighter: '#a9d1b1',
    light: '#68af77',
    base: '#278c3d',
    dark: '#1b622b',
    darker: '#103818',
  },
  white: {
    base: '#ffffff',
  },
  black: {
    base: '#000000',
  },
};

export default {
  primary: palette.primary.base,
  secondary: palette.secondary.base,
  danger: palette.danger.base,
  cheer: palette.cheer.base,
  light: palette.secondary.light,
  dark: palette.secondary.dark,
  white: palette.white.base,
  black: palette.black.base,
};
