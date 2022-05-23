import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Text from './Text';
import { Color } from './styles';

const Container = (storyFn: any) => (
  <View style={styles.container}>{storyFn()}</View>
);

const TextDemo = ({ color }: { color: Color }) => (
  <Fragment>
    <Text color={color} size="body-10">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="body-14">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="body-16">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="body-22">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="body-20">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="button-22">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="head-20">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="head-24">
      Lorem ipsum dolor sit.
    </Text>
    <Text color={color} size="head-30">
      Lorem ipsum dolor sit.
    </Text>
  </Fragment>
);

storiesOf('Typography', module)
  .addDecorator(Container)
  .add('primary', () => <TextDemo color="primary" />)
  .add('secondary', () => <TextDemo color="secondary" />)
  .add('light', () => <TextDemo color="light" />)
  .add('dark', () => <TextDemo color="dark" />)
  .add('white', () => <TextDemo color="white" />)
  .add('black', () => <TextDemo color="black" />);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flexGrow: 1,
    padding: 8,
    justifyContent: 'space-evenly',
  },
});
