import React, { FC } from 'react';
import { TextInput, TextStyle, TextInputProps } from 'react-native';
import colors from '../../theme/colors';
import styles from './styles';

export interface Props extends TextInputProps {
  style?: TextStyle;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
}

const TextField: FC<Props> = ({
  style,
  placeholder,
  value,
  onChangeText,
  ...otherProps
}) => {
  return (
    <TextInput
      testID="text-field"
      style={[styles.base, style]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.dark}
      onChangeText={onChangeText}
      {...otherProps}
    />
  );
};

export default TextField;
