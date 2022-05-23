import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Card from './Card';

const Container = (storyFn: any) => (
  <View style={styles.container}>{storyFn()}</View>
);

const CardDemo = () => (
  <Fragment>
    <Card
      title="This is title"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sit!"
    />
  </Fragment>
);

storiesOf('Card', module)
  .addDecorator(Container)
  .add('default', () => <CardDemo />);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 8,
    justifyContent: 'space-evenly',
  },
});
