import React, { FC } from 'react';
import {
  TextStyle,
  Text as TextBase,
  StyleSheet,
  TextProps,
} from 'react-native';
import styles, { Color, colorTheme, Size, sizeTheme } from './styles';

export interface Props extends TextProps {
  style?: TextStyle;
  size?: Size;
  color?: Color;
  align?: TextStyle['textAlign'];
  level?: TextStyle['fontWeight'];
  onPress?: () => void;
}

const Text: FC<Props> = ({
  children,
  style,
  size = 'body-16',
  color = 'primary',
  align,
  level = '400',
  onPress,
  ...otherProps
}) => {
  const flatStyle = StyleSheet.flatten([
    styles.base,
    colorTheme[color],
    sizeTheme[size],
    { textAlign: align, fontWeight: level },
    style,
  ]);

  return (
    <TextBase testID="Text" style={flatStyle} onPress={onPress} {...otherProps}>
      {children}
    </TextBase>
  );
};

export default Text;
