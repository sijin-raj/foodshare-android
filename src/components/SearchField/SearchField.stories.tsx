import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import SearchField from './SearchField';

const Container = (storyFn: any) => (
  <View style={styles.container}>{storyFn()}</View>
);

const SearchFieldDemo = () => {
  const [value, setValue] = useState('');
  return (
    <SearchField
      placeholder="PlaceHolder"
      value={value}
      onChangeText={setValue}
      handleClear={() => setValue('')}
      handleSearch={() => setValue('Search function invoked')}
    />
  );
};

storiesOf('Search field', module)
  .addDecorator(Container)
  .add('default', () => <SearchFieldDemo />);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 50,
  },
});
