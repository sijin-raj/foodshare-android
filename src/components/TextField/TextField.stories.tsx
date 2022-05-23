import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import TextField from './TextField';

const Container = (storyFn: any) => (
  <View style={styles.container}>{storyFn()}</View>
);

const TextFieldDemo = () => {
  const [value, setValue] = useState('');
  return (
    <TextField
      placeholder="PlaceHolder"
      value={value}
      onChangeText={setValue}
    />
  );
};

storiesOf('Text field', module)
  .addDecorator(Container)
  .add('default', () => <TextFieldDemo />);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 50,
  },
});
