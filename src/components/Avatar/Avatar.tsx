import React, { FC } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import colors, { palette } from '../../theme/colors';

export interface Props {
  style?: ViewStyle;
  size: number;
  theme?: 'primary' | 'secondary';
  shape?: 'rounded' | 'circular' | 'straight';
  roundness?: number;
  onPress?: () => void;
}

const Avatar: FC<Props> = ({
  style,
  size = 24,
  theme = 'primary',
  shape = 'straight',
  roundness = 0.25,
  onPress,
  children,
}) => {
  const borderRadius =
    shape === 'rounded'
      ? roundness * size
      : shape === 'circular'
      ? 0.5 * size
      : 0;

  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: borderRadius,
      overflow: 'hidden',
      backgroundColor:
        theme === 'primary' ? palette.primary.light : colors.secondary,
    },
    pressed: {
      backgroundColor:
        theme === 'primary' ? palette.primary.dark : palette.secondary.dark,
    },
  });

  return (
    <Pressable
      testID="avatar"
      style={({ pressed }) => [
        styles.container,
        onPress && pressed ? styles.pressed : undefined,
        style,
      ]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Avatar;
