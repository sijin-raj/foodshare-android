import React, { FC } from 'react';
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import colors from '../../theme/colors';
import Icon from '../Icon';
import styles from './styles';

export interface Props extends TextInputProps {
  style?: ViewStyle;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  handleSearch?: (value: string) => void;
  handleClear?: () => void;
}

const SearchField: FC<Props> = ({
  style,
  placeholder,
  value,
  onChangeText,
  handleSearch,
  handleClear,
}) => {
  return (
    <View style={[styles.base, style]}>
      <Icon
        testID="search-icon"
        style={styles.icon}
        name="search"
        color={colors.primary}
        size={20}
        onPress={() => handleSearch && handleSearch(value)}
      />
      <TextInput
        testID="text-field"
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.dark}
        onChangeText={onChangeText}
      />
      {value !== '' && (
        <Icon
          testID="clear-icon"
          style={styles.icon}
          name="cancel"
          color={colors.primary}
          size={20}
          onPress={handleClear}
        />
      )}
    </View>
  );
};

export default SearchField;
